import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import * as NotificationActions from '~/store/ducks/Notification/actions';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'ranking');
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
