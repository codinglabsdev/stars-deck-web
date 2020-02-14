import { call, put } from 'redux-saga/effects';

import api, { addToken } from '~/services/api';

import { sendSuccess, sendFailure } from './actions';
import { UserSignInType, UserSignInData } from './types';

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
    yield put(sendSuccess(username));
  } catch (error) {
    yield put(sendFailure());
  }
}
