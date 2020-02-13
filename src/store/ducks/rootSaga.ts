import { all, takeLatest } from "redux-saga/effects";

import { RankingTypes } from "./Ranking/types";

import { load as RankingLoad } from "./Ranking/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(RankingTypes.LOAD_REQUEST, RankingLoad)]);
}
