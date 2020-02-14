/**
 * Action types
 */

export enum UserSignInType {
  SEND_REQUEST = '@userSignIn/SEND_REQUEST',
  CHECK_AUTH = '@userSignIn/CHECK_AUTH',
  SEND_SUCCESS = '@userSignIn/SEND_SUCCESS',
  SEND_FAILURE = '@userSignIn/SEND_FAILURE',
}

/**
 * Data types
 */

export interface UserSignInData {
  username: string;
  password: string;
}

/**
 * State type
 */

export interface UserSignInState {
  readonly sending: boolean;
  readonly error: boolean;
  readonly signedIn: boolean;
  readonly username: string | null;
}
