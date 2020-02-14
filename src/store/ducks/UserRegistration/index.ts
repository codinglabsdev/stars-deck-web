import { Reducer } from 'redux';
import { UserRegistrationState, UserRegistrationType } from './types';

const INITIAL_STATE: UserRegistrationState = {
  error: false,
  sending: false,
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
      };
    case UserRegistrationType.SEND_FAILURE:
      return { ...state, sending: false, error: true };
    default:
      return state;
  }
};

export default reducer;
