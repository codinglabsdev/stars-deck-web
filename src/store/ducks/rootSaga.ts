import { all, takeLatest } from 'redux-saga/effects';

import { RankingTypes } from './Ranking/types';
import { UserDetailsType } from './UserDetails/types';
import { NewEventType } from './NewEvent/types';
import { UserRegistrationType } from './UserRegistration/types';
import { UserSignInType } from './UserSignIn/types';

import { load as RankingLoad } from './Ranking/sagas';
import { load as UserDetailsLoad } from './UserDetails/sagas';
import { send as NewEventSend } from './NewEvent/sagas';
import { send as UserRegistrationSend } from './UserRegistration/sagas';
import { send as UserSignInSend } from './UserSignIn/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RankingTypes.LOAD_REQUEST, RankingLoad),
    takeLatest(UserDetailsType.LOAD_REQUEST, UserDetailsLoad),
    takeLatest(NewEventType.SEND_REQUEST, NewEventSend),
    takeLatest(UserRegistrationType.SEND_REQUEST, UserRegistrationSend),
    takeLatest(UserSignInType.SEND_REQUEST, UserSignInSend),
  ]);
}
