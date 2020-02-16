import React from 'react';

import { Container } from './styles';

interface Props {
  variant?: 'text' | 'outlined' | 'icon';
  type?: 'button' | 'submit';
  secondary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  variant,
  type,
  onClick,
  secondary,
  className,
}) => (
  <Container
    type={type}
    variant={variant}
    onClick={onClick}
    secondary={secondary}
    className={className}
  >
    {children}
  </Container>
);

export default Button;
