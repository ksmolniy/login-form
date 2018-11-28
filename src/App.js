import React, { Component, StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './auth/Login/Login';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import * as routes from './constants/routes';
import Signin from './auth/Signin/Signin';

const App = () => {
  return (
    <StrictMode>
      <Grommet theme={grommet} className="app">
        <BrowserRouter>
          <Switch>
            <Route path={routes.LOGIN} component={Login} />
            <Route path={routes.SIGNIN} component={Signin} />
            <Redirect to={routes.LOGIN} />
          </Switch>
        </BrowserRouter>
      </Grommet>
    </StrictMode>
  );
};

export default App;
