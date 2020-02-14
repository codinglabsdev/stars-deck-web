import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

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
    yield put(sendFailure());
  }
}
