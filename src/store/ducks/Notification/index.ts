import { Reducer } from 'redux';
import { NotificationState, NotificationType } from './types';

const INITIAL_STATE: NotificationState = {};

const reducer: Reducer<NotificationState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotificationType.ADD_NOTIFICATION:
      return state;
    case NotificationType.REQUEST_ERROR:
      return state;
    default:
      return state;
  }
};

export default reducer;
