/**
 * Action types
 */

export enum UserRegistrationType {
  SEND_REQUEST = '@userRegistration/SEND_REQUEST',
  SEND_SUCCESS = '@userRegistration/SEND_SUCCESS',
  SEND_FAILURE = '@userRegistration/SEND_FAILURE',
  REGISTRATION_ERROR = '@userRegistration/REGISTRATION_ERROR',
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

export interface UserRegistrationErrors {
  username: boolean;
  email: boolean;
  password: boolean;
  password_confirmation: boolean;
}

/**
 * State type
 */

export interface UserRegistrationState {
  readonly sending: boolean;
  readonly success: boolean;
  readonly error: boolean;
  readonly fields: UserRegistrationErrors;
}
