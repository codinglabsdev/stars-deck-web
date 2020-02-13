import React from 'react';

import { Container } from './styles';

interface Props {
  variant?: 'text' | 'outlined';
}

const Button: React.FC<Props> = ({ children, variant }) => (
  <Container variant={variant}>{children}</Container>
);

export default Button;
