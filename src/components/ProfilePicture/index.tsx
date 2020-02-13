import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

interface Props {
  src: string;
  size?: number;
}

const ProfilePicture: React.FC<Props> = ({ src, size }) => (
  <Container src={src} size={size} />
);

ProfilePicture.propTypes = {
  src: PropTypes.string.isRequired
};

export default ProfilePicture;
