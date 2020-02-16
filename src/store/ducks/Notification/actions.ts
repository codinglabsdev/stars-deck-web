import { action } from 'typesafe-actions';
import { NotificationType, NotificationData } from './types';

export const addNotification = (data: NotificationData) =>
  action(NotificationType.ADD_NOTIFICATION, data);

export const notifyFromError = (data: NotificationData) =>
  action(NotificationType.REQUEST_ERROR, data);
