import { Reducer } from 'redux';
import { UserDetailsState, UserDetailsType } from './types';

const INITIAL_STATE: UserDetailsState = {
  data: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<UserDetailsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserDetailsType.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserDetailsType.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case UserDetailsType.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: undefined };
    default:
      return state;
  }
};

export default reducer;
