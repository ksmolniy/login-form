import { all } from 'redux-saga/effects';
import { watchRegistrationAsync, watchLoginAsync, watchCheckTokenAsync } from './authSagas';
import { gettingBalanceWatcher } from './balanceSagas';

const root = function* () {
  yield all([
    watchRegistrationAsync(),
    watchLoginAsync(),
    watchCheckTokenAsync(),
    gettingBalanceWatcher(),
  ]);
};

export default root;
