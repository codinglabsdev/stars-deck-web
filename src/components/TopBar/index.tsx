import React from 'react';
import { Container } from './styles';
import SearchBar from '../SearchBar';
import Button from '../Button';

import history from '~/services/history';

const TopBar = () => {
  return (
    <Container>
      <SearchBar />
      <div className="buttons">
        <Button variant="text" onClick={() => history.push('/register')}>
          Register
        </Button>
        <Button onClick={() => history.push('/login')}>Sign In</Button>
      </div>
    </Container>
  );
};

export default TopBar;
