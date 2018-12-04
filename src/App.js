import React, { StrictMode } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import store from './store/store';
import RouterGuard from './utils/RouterGuard/RouterGuard';

const App = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <Grommet theme={grommet} className="app">
          <BrowserRouter>
            <Switch>
              <RouterGuard />
            </Switch>
          </BrowserRouter>
        </Grommet>
      </StrictMode>
    </ Provider>
  );
};

export default App;
