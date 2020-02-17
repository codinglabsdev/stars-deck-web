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
    return yield put(loadSuccess(response.data));
  } catch (error) {
    if (error.response?.data) {
      yield put(loadFailure());
      return yield put(
        NotificationActions.notifyFromError(error.response.data)
      );
    }
    if (error.response.status === 404) {
      yield put(loadFailure());
      return yield put(
        NotificationActions.addNotification({
          type: 'error',
          message: 'User not found',
        })
      );
    }
    yield put(loadFailure());
    return yield put(
      NotificationActions.addNotification({
        type: 'error',
        message: 'Network error',
      })
    );
  }
}
