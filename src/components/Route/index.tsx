/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultLayout from '~/layouts/default';
import ApplicationState from '~/store/ducks/ApplicationState';

import { Login } from '~/pages';

interface Props {
  component: React.FC<any>;
  path: string;
  exact?: boolean | undefined;
  isPrivate?: boolean | undefined;
  publicOnly?: boolean | undefined;
  redirect?: string | undefined;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  exact,
  path,
  publicOnly,
  redirect,
}) => {
  const signedIn = useSelector(
    (state: ApplicationState) => state.userSignIn.signedIn
  );

  const signed = signedIn;

  if (!signed && isPrivate) {
    return <Route path="/" component={Login} />;
  }

  if (signed && publicOnly) {
    return <Redirect to={redirect || '/'} />;
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
