import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '~/services/history';
import { Container } from './styles';

import * as UserActions from '~/store/ducks/UserSignIn/actions';
import ApplicationState from '~/store/ducks/ApplicationState';

interface Props {
  open: boolean;
}

const UserMenu: React.FC<Props> = ({ open }) => {
  const dispatch = useDispatch();
  const username = useSelector(
    (state: ApplicationState) => state.userSignIn.username
  );

  const signOut = () => {
    dispatch(UserActions.terminateSession());
  };
  return (
    <Container open={open}>
      <ul className="menu">
        <li>
          <button
            type="button"
            onClick={() => {
              history.push(`/user/${username}/new`);
            }}
          >
            New Event
          </button>
        </li>
        <li>
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        </li>
      </ul>
    </Container>
  );
};

export default UserMenu;
