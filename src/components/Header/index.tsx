import React from 'react';

import { Container } from './styles';
import Button from '../Button';

const Header = () => (
  <Container>
    <div>
      <h1>Stars Deck</h1>
      <span>Progress & Community Engagement tracker</span>
    </div>
    <Button>See Ranking</Button>
  </Container>
);

export default Header;
