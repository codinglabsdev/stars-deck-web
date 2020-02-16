import React from 'react';

import { Container } from './styles';

interface Props {
  fowardRef?: any;
}

const Paper: React.FC<Props> = ({ children, fowardRef }) => (
  <Container ref={fowardRef}>{children}</Container>
);

export default Paper;
