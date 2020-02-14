import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import ApplicationState from '~/store/ducks/ApplicationState';
import * as UserDetailsActions from '~/store/ducks/UserDetails/actions';
import NewButton from '../NewButton';
import ProfilePicture from '../ProfilePicture';

const UserCard = () => {
  const dispatch = useDispatch();
  const [userData, username] = useSelector((state: ApplicationState) => [
    state.userDetails,
    state.userSignIn.username,
  ]);
  useEffect(() => {
    dispatch(UserDetailsActions.loadRequest(username!));
  }, [dispatch, username]);

  return (
    <Container>
      {!userData.loading && userData.data && (
        <>
          <ProfilePicture src={userData.data!.avatar} size={38} />
          <div className="info">
            <span>{userData.data.name}</span>
            <span className="points">
              #{userData.data.position} | {userData.data.points} pts
            </span>
          </div>
          <NewButton path={`/user/${username}/new`} background />
        </>
      )}
    </Container>
  );
};

export default UserCard;
