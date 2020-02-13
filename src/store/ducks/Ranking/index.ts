import { Reducer } from "redux";
import { RankingState, RankingTypes } from "./types";

const INITIAL_STATE: RankingState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<RankingState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RankingTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RankingTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case RankingTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
