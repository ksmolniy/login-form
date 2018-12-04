import React, { StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/auth/Login/Login';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import store from './store/store';
import * as routes from './constants/routes';
import Signin from './components/auth/Signin/Signin';
import MainComponent from './components/user/Main/Main';
import RouterGuard from './utils/RouterGuard/RouterGuard';

const Auth = [
  <Route path={routes.LOGIN} component={Login} />,
  <Route path={routes.SIGNIN} component={Signin} />,
  <Redirect to={routes.LOGIN} />,
];

const Main = [
  <Route path={routes.TASKS} component={MainComponent} />,
  <Redirect to={routes.TASKS} />,
];

const App = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <Grommet theme={grommet} className="app">
          <BrowserRouter>
            <Switch>
              <RouterGuard Auth={Auth} Main={Main} />
            </Switch>
          </BrowserRouter>
        </Grommet>
      </StrictMode>
    </ Provider>
  );
};

export default App;
