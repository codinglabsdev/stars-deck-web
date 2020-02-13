import React from 'react';

import { Container } from './styles';
import SearchBar from '../SearchBar';
import Button from '../Button';

const TopBar = () => (
  <Container>
    <SearchBar />
    <div className="buttons">
      <Button variant="text">Register</Button>
      <Button>Sign In</Button>
    </div>
  </Container>
);

export default TopBar;
