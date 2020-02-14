import { all, takeLatest } from 'redux-saga/effects';

import { RankingTypes } from './Ranking/types';
import { UserDetailsType } from './UserDetails/types';

import { load as RankingLoad } from './Ranking/sagas';
import { load as UserDetailsLoad } from './UserDetails/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RankingTypes.LOAD_REQUEST, RankingLoad),
    takeLatest(UserDetailsType.LOAD_REQUEST, UserDetailsLoad),
  ]);
}
