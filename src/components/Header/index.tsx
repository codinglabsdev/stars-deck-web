import React from 'react';

import { Container } from './styles';

interface Props {
  slim?: boolean;
}

const Header: React.FC<Props> = ({ children, slim }) => (
  <Container slim={slim}>{children}</Container>
);

export default Header;
