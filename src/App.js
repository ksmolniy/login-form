import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import store from './store/store';
import GuardedRouter from './utils/GuardedRouter/GuardedRouter';

const App = () => {
  return (
    <Provider store={store}>
      <StrictMode>
        <Grommet theme={grommet} className="app">
          <GuardedRouter />
        </Grommet>
      </StrictMode>
    </ Provider>
  );
};

export default App;
