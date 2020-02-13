import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { InitalStateInterface, signInInterface } from './types';



const { Types, Creators } = createActions({
  // Ducks
  signIn: ['auth'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<InitalStateInterface> = Immutable({
  auth: false,
});

export const signIn: signInInterface = (state, { auth }) => {
  return state.merge({ auth });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN]: signIn,
});

