import { RankingState } from './Ranking/types';
import { UserDetailsState } from './UserDetails/types';
import { NewEventState } from './NewEvent/types';

export default interface ApplicationState {
  ranking: RankingState;
  userDetails: UserDetailsState;
  newEvent: NewEventState
}
