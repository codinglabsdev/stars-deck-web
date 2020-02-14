import { action } from 'typesafe-actions';
import { UserSignInType, UserSignInData } from './types';

export const sendRequest = (data: UserSignInData) =>
  action(UserSignInType.SEND_REQUEST, data);

export const sendSuccess = () => action(UserSignInType.SEND_SUCCESS);

export const sendFailure = () => action(UserSignInType.SEND_FAILURE);
