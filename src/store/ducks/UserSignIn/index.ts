import { Reducer } from 'redux';
import { UserSignInState, UserSignInType } from './types';

const INITIAL_STATE: UserSignInState = {
  error: false,
  sending: false,
  signedIn: false,
  username: '',
};

const savedToken = localStorage.getItem('@stars-deck-token');
const savedUsername = localStorage.getItem('@stars-deck-username');

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
        username: action.payload,
      };
    case UserSignInType.SEND_FAILURE:
      return { ...state, sending: false, error: true, signedIn: false };
    case UserSignInType.CHECK_AUTH:
      return {
        ...state,
        sending: false,
        error: false,
        signedIn: !!savedToken,
        username: savedUsername,
      };
    default:
      return state;
  }
};

export default reducer;
