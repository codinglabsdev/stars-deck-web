import { ImmutableObject } from 'seamless-immutable';

export type InitalStateInterface = {};

export interface addNotificationInterface {
  (
    state: ImmutableObject<InitalStateInterface>,
    action: {
      type: 'ADD_NOTIFICATION';
      data: { type: 'error' | 'warn' | 'success'; content: string };
    }
  ): ImmutableObject<InitalStateInterface>;
}
