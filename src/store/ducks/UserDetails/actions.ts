import { action } from 'typesafe-actions';
import { UserDetailsType, UserDetailsData } from './types';

export const loadRequest = (data: string) =>
  action(UserDetailsType.LOAD_REQUEST, data);

export const loadSuccess = (data: UserDetailsData[]) =>
  action(UserDetailsType.LOAD_SUCCESS, { data });

export const loadFailure = () => action(UserDetailsType.LOAD_FAILURE);
