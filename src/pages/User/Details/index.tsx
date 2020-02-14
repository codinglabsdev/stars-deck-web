import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { History } from 'history';
import { Paper, UserInfo, Header, AlignCenter, Timeline } from '~/components';
import ApplicationState from '~/store/ducks/ApplicationState';

import { Container, Button } from './styles';

import * as UserDetailsActions from '~/store/ducks/UserDetails/actions';

interface MatchProps {
  id: string;
}

interface Props extends RouteComponentProps<MatchProps> {
  history: History;
}

const UserDetails: React.FC<Props> = ({ match, history }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector(
    (state: ApplicationState) => state.userDetails
  );

  useEffect(() => {
    dispatch(UserDetailsActions.loadRequest(match.params.id));
  }, []);

  const goBack = () => history.push('/');

  return (
    <Container>
      <Header />
      <Paper>
        <Button onClick={goBack}>
          <IoIosArrowRoundBack size={28} />
          Go Back
        </Button>
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
