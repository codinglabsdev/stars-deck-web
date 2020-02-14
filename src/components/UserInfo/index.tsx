import React from 'react';

import { Container, Trophy } from './styles';
import { UserDetailsData } from '~/store/ducks/UserDetails/types';
import Loader from '../Loader';
import ProfilePicture from '../ProfilePicture';

interface Props {
  user: UserDetailsData | undefined;
  loading: boolean;
}

const UserInfo: React.FC<Props> = ({ user, loading }) => {
  return !loading && user ? (
    <Container position={user!.position}>
      {user.position === 1 && <Trophy />}
      <ProfilePicture src={user.avatar} size={150} />
      <a href={user.url}>
        <h2 className="name">{user.name}</h2>
      </a>
      <h2 className="points">{user.points} pts</h2>
      <span>{user.bio}</span>
    </Container>
  ) : (
    <Loader />
  );
};

export default UserInfo;
