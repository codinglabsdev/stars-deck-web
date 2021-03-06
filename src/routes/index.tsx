import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '~/components/Route';

import { Home, UserDetails, NewEvent, Register, Login } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/user/:id/details"
        component={UserDetails}
        isPrivate={false}
      />
      <Route path="/user/:user/new" component={NewEvent} isPrivate />
      <Route path="/register" component={Register} isPrivate={false} />
      <Route path="/login" component={Login} isPrivate={false} />
      <Route path="/" exact component={Home} isPrivate={false} />
    </Switch>
  );
}
