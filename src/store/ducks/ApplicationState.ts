import { RankingState } from './Ranking/types';
import { UserDetailsState } from './UserDetails/types';
import { NewEventState } from './NewEvent/types';
import { UserRegistrationState } from './UserRegistration/types';

export default interface ApplicationState {
  ranking: RankingState;
  userDetails: UserDetailsState;
  newEvent: NewEventState;
  userRegistration: UserRegistrationState;
}
