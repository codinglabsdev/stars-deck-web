import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { loadSuccess, loadFailure } from './actions';
import { UserDetailsType } from './types';

export function* load({
  payload,
}: {
  type: typeof UserDetailsType.LOAD_REQUEST;
  payload: string;
}) {
  try {
    const response = yield call(api.get, `users/${payload}`);
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
