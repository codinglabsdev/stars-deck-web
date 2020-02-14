import React from 'react';

import { Container } from './styles';

interface Props {
  fullWidth?: boolean;
}

const AlignCenter: React.FC<Props> = ({ children, fullWidth }) => (
  <Container fullWidth={fullWidth}>{children}</Container>
);

export default AlignCenter;
