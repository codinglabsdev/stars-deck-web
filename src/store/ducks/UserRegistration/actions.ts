import { action } from 'typesafe-actions';
import { UserRegistrationType, UserRegistrationData } from './types';

export const sendRequest = (data: UserRegistrationData) =>
  action(UserRegistrationType.SEND_REQUEST, data);

export const sendSuccess = () => action(UserRegistrationType.SEND_SUCCESS);

export const sendFailure = () => action(UserRegistrationType.SEND_FAILURE);

export const registrationError = (data: UserRegistrationData) =>{
  return action(UserRegistrationType.REGISTRATION_ERROR, data);
}
