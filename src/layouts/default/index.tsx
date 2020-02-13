import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

interface Props {
  children: ReactElement;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
