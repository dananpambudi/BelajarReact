import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Count from '../Count/Count';
import Login from '../login/Login';
import Form from '../ControlledformProject/Form';
import Timer from '../Timer/Timer';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/count" component={Count} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/timer" component={Timer} />
    </Switch>
  );
}
