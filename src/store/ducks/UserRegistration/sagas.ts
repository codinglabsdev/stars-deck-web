/* eslint-disable no-param-reassign */
import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import * as NotificationActions from '~/store/ducks/Notification/actions';

import { sendSuccess, sendFailure, registrationError } from './actions';
import { UserRegistrationType, UserRegistrationData } from './types';
import { Error } from '../Notification/types';

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
      const errorData = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data];

      const res = errorData.reduce((obj: UserRegistrationData, data: Error) => {
        const { field } = data;
        if (field) {
          obj = { ...obj, [field]: true };
        }
        return obj;
      }, {});

      yield put(registrationError(res));
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
