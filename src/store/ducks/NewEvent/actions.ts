import { action } from 'typesafe-actions';
import { NewEventType, NewEvent } from './types';

export const sendRequest = (data: NewEvent) =>
  action(NewEventType.SEND_REQUEST, data);

export const sendSuccess = () => action(NewEventType.SEND_SUCCESS);

export const sendFailure = () => action(NewEventType.SEND_FAILURE);
