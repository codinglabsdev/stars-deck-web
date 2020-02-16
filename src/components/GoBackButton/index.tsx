import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import history from '~/services/history';

import { Container } from './styles';

interface Props {
  path: string;
}

const GoBackButton: React.FC<Props> = ({ path }) => {
  const goBack = (pathname: string) => history.push(pathname);
  return (
    <Container onClick={() => goBack(path)}>
      <IoIosArrowRoundBack size={28} />
      <span>Go Back</span>
    </Container>
  );
};

export default GoBackButton;
