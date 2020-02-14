import { combineReducers } from 'redux';

import ranking from './Ranking';
import userDetails from './UserDetails';
import newEvent from './NewEvent';
import userRegistration from './UserRegistration';
import userSignIn from './UserSignIn';

export default combineReducers({
  ranking,
  userDetails,
  newEvent,
  userSignIn,
  userRegistration,
});
