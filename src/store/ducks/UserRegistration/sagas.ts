import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import * as NotificationActions from '~/store/ducks/Notification/actions';

import { sendSuccess, sendFailure } from './actions';
import { UserRegistrationType, UserRegistrationData } from './types';

export function* send({
  payload,
}: {
  type: typeof UserRegistrationType.SEND_REQUEST;
  payload: UserRegistrationData;
}) {
  try {
    yield call(api.post, 'users', payload);
    yield put(sendSuccess());
  } catch (error) {
    if (error.response?.data) {
      yield put(NotificationActions.notifyFromError(error.response.data));
    } else {
      yield put(
        NotificationActions.addNotification({
          type: 'error',
          message: 'Network error',
        })
      );
    }
    yield put(sendFailure());
  }
}
