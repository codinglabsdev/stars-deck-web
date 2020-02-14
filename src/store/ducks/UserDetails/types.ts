/**
 * Action types
 */

export enum UserDetailsType {
  LOAD_REQUEST = '@userDetails/LOAD_REQUEST',
  LOAD_SUCCESS = '@userDetails/LOAD_SUCCESS',
  LOAD_FAILURE = '@userDetails/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface UserEvent {
  id: string;
  type: 'participation' | 'dojo' | 'presentation' | 'pr';
  title: string;
  date: Date;
  description: string;
  location: string;
  url: string;
  points: number;
}

export interface UserDetailsData {
  id: number;
  position: number;
  username: string;
  name: string;
  avatar: string;
  points: number;
  bio: string;
  url: string;
  events: UserEvent[];
}

/**
 * State type
 */

export interface UserDetailsState {
  readonly data: UserDetailsData | undefined;
  readonly loading: boolean;
  readonly error: boolean;
}
