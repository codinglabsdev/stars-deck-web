import React from 'react';

import { Container, Trophy } from './styles';

interface Props {
  position: number;
  podium?: boolean;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ children, position, podium, onClick }) => (
  <Container position={position} podium={podium} onClick={onClick}>
    {position === 1 && <Trophy />}
    {children}
  </Container>
);

export default Card;
