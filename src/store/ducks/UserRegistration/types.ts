/**
 * Action types
 */

export enum UserRegistrationType {
  SEND_REQUEST = '@userRegistration/SEND_REQUEST',
  SEND_SUCCESS = '@userRegistration/SEND_SUCCESS',
  SEND_FAILURE = '@userRegistration/SEND_FAILURE',
}

/**
 * Data types
 */

export interface UserRegistrationData {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

/**
 * State type
 */

export interface UserRegistrationState {
  readonly sending: boolean;
  readonly error: boolean;
}
