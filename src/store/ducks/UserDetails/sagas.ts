import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import * as NotificationActions from '~/store/ducks/Notification/actions';

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
    yield put(loadFailure());
  }
}
