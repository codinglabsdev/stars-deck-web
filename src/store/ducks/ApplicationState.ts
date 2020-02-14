import { RankingState } from './Ranking/types';
import { UserDetailsState } from './UserDetails/types';

export default interface ApplicationState {
  ranking: RankingState;
  userDetails: UserDetailsState;
}
