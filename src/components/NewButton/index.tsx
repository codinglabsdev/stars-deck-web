import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import history from '~/services/history';

import { Container } from './styles';

interface Props {
  path: string;
}

const NewButton: React.FC<Props> = ({ path, children }) => {
  const goBack = (pathname: string) => history.push(pathname);
  return (
    <Container onClick={() => goBack(path)}>
      {children}
      <IoIosAdd size={28} />
    </Container>
  );
};

export default NewButton;
