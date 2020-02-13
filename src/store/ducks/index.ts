import { combineReducers } from 'redux';

import { reducer as auth } from './Auth';
import { reducer as notifications } from './Notification';

export default () => combineReducers({ auth, notifications });
