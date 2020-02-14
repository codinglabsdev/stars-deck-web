import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import history from '~/services/history';

import { Container } from './styles';

interface Props {
  path: string;
  background?: boolean;
}

const NewButton: React.FC<Props> = ({ path, children, background }) => {
  const goBack = (pathname: string) => history.push(pathname);
  return (
    <Container onClick={() => goBack(path)} background={background}>
      {children}
      <IoIosAdd size={28} />
    </Container>
  );
};

export default NewButton;
