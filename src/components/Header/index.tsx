import React from 'react';

import { Container } from './styles';

interface Props {
  slim?: boolean;
  middleSize?: boolean;
}

const Header: React.FC<Props> = ({ children, slim, middleSize }) => (
  <Container slim={slim} middleSize={middleSize}>
    {children}
  </Container>
);

export default Header;
