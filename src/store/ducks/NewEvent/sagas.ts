import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { sendSuccess, sendFailure } from './actions';
import { NewEventType, NewEvent } from './types';

export function* send({
  payload,
}: {
  type: typeof NewEventType.SEND_REQUEST;
  payload: NewEvent;
}) {
  try {
    yield call(api.post, 'events', payload);
    yield put(sendSuccess());
  } catch (error) {
    yield put(sendFailure());
  }
}
