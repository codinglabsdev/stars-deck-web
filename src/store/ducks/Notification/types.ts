/**
 * Action types
 */

export enum NotificationType {
  ADD_NOTIFICATION = '@notification/ADD_NOTIFICATION',
  REQUEST_ERROR = '@notification/REQUEST_ERROR',
}

/**
 * Data types
 */

export interface NotificationData {
  type: 'error' | 'warn' | 'success';
  message: string;
}

export interface Error {
  field?: string;
  message: string;
}

export type RequestErrorData = Error | Error[];


/**
 * State type
 */

export interface NotificationState {}
