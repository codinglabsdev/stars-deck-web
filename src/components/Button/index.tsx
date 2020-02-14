import React from 'react';

import { Container } from './styles';

interface Props {
  variant?: 'text' | 'outlined';
  type?: 'button' | 'submit';
}

const Button: React.FC<Props> = ({ children, variant, type }) => (
  <Container type={type} variant={variant}>
    {children}
  </Container>
);

export default Button;
