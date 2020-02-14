import { all, takeLatest } from 'redux-saga/effects';

import { RankingTypes } from './Ranking/types';
import { UserDetailsType } from './UserDetails/types';
import { NewEventType } from './NewEvent/types';

import { load as RankingLoad } from './Ranking/sagas';
import { load as UserDetailsLoad } from './UserDetails/sagas';
import { send as NewEventSend } from './NewEvent/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RankingTypes.LOAD_REQUEST, RankingLoad),
    takeLatest(UserDetailsType.LOAD_REQUEST, UserDetailsLoad),
    takeLatest(NewEventType.SEND_REQUEST, NewEventSend),
  ]);
}
