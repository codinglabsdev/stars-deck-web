import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  Paper,
  UserInfo,
  Header,
  AlignCenter,
  Timeline,
  GoBackButton,
  NewButton,
} from '~/components';
import ApplicationState from '~/store/ducks/ApplicationState';

import { Container } from './styles';

import * as UserDetailsActions from '~/store/ducks/UserDetails/actions';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {}

const UserDetails: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const [
    userDetails,
    signedIn,
    username,
  ] = useSelector((state: ApplicationState) => [
    state.userDetails,
    state.userSignIn.signedIn,
    state.userSignIn.username,
  ]);

  useEffect(() => {
    dispatch(UserDetailsActions.loadRequest(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Container>
      <Header middleSize/>
      <Paper>
        <div className="buttons mobile">
          <GoBackButton path="/" />
          {signedIn && match.params.id === username && (
            <NewButton path={`/user/${match.params.id}/new`}>
              <span>Add Event</span>
            </NewButton>
          )}
        </div>
        <AlignCenter>
          <UserInfo user={userDetails.data} loading={userDetails.loading} />
          {!userDetails.loading && userDetails.data && (
            <Timeline data={userDetails.data.events} />
          )}
        </AlignCenter>
      </Paper>
    </Container>
  );
};

export default UserDetails;
