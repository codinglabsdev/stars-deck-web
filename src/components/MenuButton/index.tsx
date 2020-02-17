import React from 'react';

import { Container } from './styles';

interface Props {
  open: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<Props> = ({ open, onClick }) => (
  <Container open={open} onClick={onClick}>
    <div className="bar" />
    <div className="bar" />
    <div className="bar" />
  </Container>
);

export default MenuButton;
