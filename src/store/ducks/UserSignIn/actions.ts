import { action } from 'typesafe-actions';
import { UserSignInType, UserSignInData } from './types';

export const sendRequest = (data: UserSignInData) =>
  action(UserSignInType.SEND_REQUEST, data);

export const sendSuccess = (data: string) =>
  action(UserSignInType.SEND_SUCCESS, data);

export const sendFailure = () => action(UserSignInType.SEND_FAILURE);

export const checkAuth = () => action(UserSignInType.CHECK_AUTH);

export const terminateSession = () => action(UserSignInType.SIGN_OUT);
