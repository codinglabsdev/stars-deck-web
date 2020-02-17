import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import ApplicationState from '~/store/ducks/ApplicationState';
import * as UserDetailsActions from '~/store/ducks/UserDetails/actions';
import * as UserSignInActions from '~/store/ducks/UserSignIn/actions';
import MenuButton from '../MenuButton';
import ProfilePicture from '../ProfilePicture';
import UserMenu from '../UserMenu';
import { signOut } from '~/services/api';

const UserCard = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const [userData, username, error] = useSelector((state: ApplicationState) => [
    state.userDetails,
    state.userSignIn.username,
    state.userDetails.error,
  ]);

  useEffect(() => {
    dispatch(UserDetailsActions.loadRequest(username!));
  }, [dispatch, username]);

  useEffect(() => {
    if (!userData.loading && error) {
      signOut();
      dispatch(UserSignInActions.checkAuth());
    }
  }, [userData.loading, dispatch, error]);

  return (
    <Container>
      {!userData.loading && userData.data && (
        <>
          <div className="data">
            <div className="profile">
              <ProfilePicture src={userData.data!.avatar} size={38} />
              <div className="info">
                <span>{userData.data.name}</span>
                <span className="points">
                  #{userData.data.position} | {userData.data.points} pts
                </span>
              </div>
            </div>
            <MenuButton open={openMenu} onClick={() => setOpenMenu(p => !p)} />
          </div>
          <UserMenu open={openMenu} />
        </>
      )}
    </Container>
  );
};

export default UserCard;
