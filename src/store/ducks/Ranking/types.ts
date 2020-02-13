/**
 * Action types
 */

export enum RankingTypes {
  LOAD_REQUEST = "@ranking/LOAD_REQUEST",
  LOAD_SUCCESS = "@ranking/LOAD_SUCCESS",
  LOAD_FAILURE = "@ranking/LOAD_FAILURE"
}

/**
 * Data types
 */

export interface RankingData {
  id: number;
  position: number;
  username: string;
  name: string;
  avatar: string;
  points: number;
}

/**
 * State type
 */

export interface RankingState {
  readonly data: RankingData[];
  readonly loading: boolean;
  readonly error: boolean;
}
