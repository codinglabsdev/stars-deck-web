import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as UserSignInActions from '~/store/ducks/UserSignIn/actions';

import Routes from '~/routes';
import history from '~/services/history';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserSignInActions.checkAuth());
  }, [dispatch]);

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
