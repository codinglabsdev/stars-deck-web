import { combineReducers } from 'redux';

import ranking from './Ranking';
import userDetails from './UserDetails';
import newEvent from './NewEvent';

export default combineReducers({
  ranking,
  userDetails,
  newEvent,
});
