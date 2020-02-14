import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '~/components/Route';

import { Home, UserDetails, NewEvent } from '~/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate={false} />
      <Route
        path="/user/:id/details"
        component={UserDetails}
        isPrivate={false}
      />
      <Route path="/user/:user/new" component={NewEvent} isPrivate={false} />
    </Switch>
  );
}
