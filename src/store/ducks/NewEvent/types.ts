/**
 * Action types
 */

export enum NewEventType {
  SEND_REQUEST = '@newEvent/SEND_REQUEST',
  SEND_SUCCESS = '@newEvent/SEND_SUCCESS',
  SEND_FAILURE = '@newEvent/SEND_FAILURE',
}

/**
 * Data types
 */

export interface NewEvent {
  user: string;
  type: 'participation' | 'dojo' | 'presentation' | 'pr';
  title: string;
  date: Date;
  description: string;
  location: string;
  url?: string;
}

/**
 * State type
 */

export interface NewEventState {
  readonly sending: boolean;
  readonly error: boolean;
}
