/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultLayout from '~/layouts/default';
import ApplicationState from '~/store/ducks/ApplicationState';

interface Props {
  component: React.FC<any>;
  path: string;
  exact?: boolean | undefined;
  isPrivate: boolean | undefined;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  exact,
  path,
}) => {
  const signedIn = useSelector(
    (state: ApplicationState) => state.userSignIn.signedIn
  );

  const signed = signedIn;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default RouteWrapper;
