import { Reducer } from 'redux';
import { UserRegistrationState, UserRegistrationType } from './types';

const INITIAL_STATE: UserRegistrationState = {
  error: false,
  sending: false,
  success: false,
  fields: {
    username: false,
    email: false,
    password: false,
    password_confirmation: false,
  },
};

const reducer: Reducer<UserRegistrationState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case UserRegistrationType.SEND_REQUEST:
      return { ...state, sending: true };
    case UserRegistrationType.SEND_SUCCESS:
      return {
        ...state,
        sending: false,
        error: false,
        success: true,
      };
    case UserRegistrationType.SEND_FAILURE:
      return { ...state, sending: false, error: true, success: false };
    case UserRegistrationType.REGISTRATION_ERROR:
      return {
        ...state,
        sending: false,
        error: true,
        success: false,
        fields: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
