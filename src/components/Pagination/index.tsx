import React from 'react';

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { Container, Button } from './styles';

interface Props {
  current: number;
}

const Pagination: React.FC<Props> = ({ current }) => (
  <Container>
    <Button direction="-50%">
      <IoIosArrowRoundBack size={28} />
      Previous Page
    </Button>
    <Button round>{current - 1}</Button>
    {current}
    <Button round>{current + 1}</Button>
    <Button direction="50%">
      Next Page
      <IoIosArrowRoundForward size={28} />
    </Button>
  </Container>
);

export default Pagination;
