import { call, put } from 'redux-saga/effects';

import api, { addToken } from '~/services/api';

import { sendSuccess, sendFailure } from './actions';
import { UserSignInType, UserSignInData } from './types';
import * as NotificationActions from '~/store/ducks/Notification/actions';

export function* send({
  payload,
}: {
  type: typeof UserSignInType.SEND_REQUEST;
  payload: UserSignInData;
}) {
  try {
    const {
      data: { token, username },
    } = yield call(api.post, 'sessions', payload);
    localStorage.setItem('@stars-deck-token', token);
    localStorage.setItem('@stars-deck-username', username);
    addToken(token);
    return yield put(sendSuccess(username));
  } catch (error) {
    if (error.response?.data)
      return yield put(
        NotificationActions.notifyFromError(error.response.data)
      );
    if (error.response?.status === 401) {
      yield put(
        NotificationActions.addNotification({
          type: 'error',
          message: 'Usuário ou senha inválidos',
        })
      );
    }
    yield put(
      NotificationActions.addNotification({
        type: 'error',
        message: 'Network error',
      })
    );
    yield put(sendFailure());
  }
}
