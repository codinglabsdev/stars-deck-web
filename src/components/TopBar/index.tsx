import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import SearchBar from '../SearchBar';
import Button from '../Button';

import history from '~/services/history';
import ApplicationState from '~/store/ducks/ApplicationState';
import UserCard from '../UserCard';

const TopBar = () => {
  const signedIn = useSelector(
    (state: ApplicationState) => state.userSignIn.signedIn
  );
  return (
    <Container>
      <SearchBar />
      {!signedIn ? (
        <>
          <div className="buttons">
            <Button variant="text" onClick={() => history.push('/register')}>
              Register
            </Button>
            <Button onClick={() => history.push('/login')}>Sign In</Button>
          </div>
          <div className="mobile">
            <Button variant="text" onClick={() => history.push('/login')}>
              Sign In
            </Button>
          </div>
        </>
      ) : (
        <UserCard />
      )}
    </Container>
  );
};

export default TopBar;
