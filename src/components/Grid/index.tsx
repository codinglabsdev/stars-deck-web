import React from 'react';

import { Container } from './styles';

interface Props {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  fullWidth?: boolean;
  width?: string;
}

const Grid: React.FC<Props> = ({
  children,
  direction,
  justifyContent,
  alignItems,
  fullWidth,
  width,
}) => (
  <Container
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    fullWidth={fullWidth}
    width={width}
  >
    {children}
  </Container>
);

export default Grid;
