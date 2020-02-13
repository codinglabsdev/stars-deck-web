import { action } from "typesafe-actions";
import { RankingTypes, RankingData } from "./types";

export const loadRequest = () => action(RankingTypes.LOAD_REQUEST);

export const loadSuccess = (data: RankingData[]) =>
  action(RankingTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RankingTypes.LOAD_FAILURE);
