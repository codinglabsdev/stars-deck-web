import { combineReducers } from 'redux';

import ranking from './Ranking';
import userDetails from './UserDetails';

export default combineReducers({
  ranking,
  userDetails,
});
