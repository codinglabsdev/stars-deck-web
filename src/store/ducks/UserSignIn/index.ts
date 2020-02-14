import { Reducer } from 'redux';
import { UserSignInState, UserSignInType } from './types';

const INITIAL_STATE: UserSignInState = {
  error: false,
  sending: false,
  signedIn: false,
};

const reducer: Reducer<UserSignInState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserSignInType.SEND_REQUEST:
      return { ...state, sending: true };
    case UserSignInType.SEND_SUCCESS:
      return {
        ...state,
        sending: false,
        error: false,
        signedIn: true,
      };
    case UserSignInType.SEND_FAILURE:
      return { ...state, sending: false, error: true, signedIn: false };
    default:
      return state;
  }
};

export default reducer;
