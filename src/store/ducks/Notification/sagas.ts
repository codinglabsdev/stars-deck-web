import { call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { NotificationType, NotificationData, RequestErrorData } from './types';

const addNotification = ({ type, message }: NotificationData): string | number => {
  return toast[type](message);
};

export function* notify({
  payload,
}: {
  type: typeof NotificationType.ADD_NOTIFICATION;
  payload: NotificationData;
}) {
  yield call(addNotification, { type: payload.type, message: payload.message });
}

export function* notifyFromError({
  payload,
}: {
  type: typeof NotificationType.REQUEST_ERROR;
  payload: RequestErrorData;
}) {
  if (Array.isArray(payload)) {
    for (let i = 0; i < payload.length; i += 1) {
      const { message } = payload[i];
      yield call(addNotification, { type: 'error', message });
    }
  } else {
    yield call(addNotification, { type: 'error', message: payload.message });
  }
}
