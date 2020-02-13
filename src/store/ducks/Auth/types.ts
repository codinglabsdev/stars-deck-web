import { ImmutableObject } from 'seamless-immutable';

export interface InitalStateInterface {
  auth: boolean
}

export interface signInInterface {
  (state: ImmutableObject<InitalStateInterface>, action: { type: 'SIGN_IN', auth: boolean }): ImmutableObject<InitalStateInterface>
}