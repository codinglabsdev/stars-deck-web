import React from 'react';

import { Container } from './styles';

interface Props {
  variant?: 'text' | 'outlined';
  type?: 'button' | 'submit';
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  variant,
  type,
  onClick,
  secondary,
}) => (
  <Container
    type={type}
    variant={variant}
    onClick={onClick}
    secondary={secondary}
  >
    {children}
  </Container>
);

export default Button;
