import { Reducer } from 'redux';
import { NewEventState, NewEventType } from './types';

const INITIAL_STATE: NewEventState = {
  error: false,
  sending: false,
};

const reducer: Reducer<NewEventState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewEventType.SEND_REQUEST:
      return { ...state, sending: true };
    case NewEventType.SEND_SUCCESS:
      return {
        ...state,
        sending: false,
        error: false,
      };
    case NewEventType.SEND_FAILURE:
      return { ...state, sending: false, error: true };
    default:
      return state;
  }
};

export default reducer;
