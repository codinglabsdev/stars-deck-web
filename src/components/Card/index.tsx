import React from 'react';

import { Container, Trophy } from './styles';

interface Props {
  position: number;
  podium?: boolean;
}

const Card: React.FC<Props> = ({ children, position, podium }) => (
  <Container position={position} podium={podium}>
    {position === 1 && <Trophy />}
    {children}
  </Container>
);

export default Card;
