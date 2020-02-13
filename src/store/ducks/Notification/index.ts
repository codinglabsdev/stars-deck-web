import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { toast } from 'react-toastify';
import { InitalStateInterface, addNotificationInterface } from './types';

const { Types, Creators } = createActions({
  // Ducks
  addNotification: ['data'],
});

export const NotificationTypes = Types;
export default Creators;

export const INITIAL_STATE: ImmutableObject<InitalStateInterface> = Immutable(
  {}
);

export const addNotification: addNotificationInterface = (state, { data }) => {
  const { type, content } = data;
  const id = toast[type](content);
  return state.merge({ [id]: type, content });
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NOTIFICATION]: addNotification,
});
