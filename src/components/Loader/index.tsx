import React from 'react';

import { Container } from './styles';

interface Props {
  fullScreen?: boolean;
  background?: string;
}

const Loader: React.FC<Props> = ({ fullScreen, background }) => (
  <Container fullScreen={fullScreen} background={background}>
    <img src="/loader.svg" alt="Loading" />
  </Container>
);

export default Loader;
