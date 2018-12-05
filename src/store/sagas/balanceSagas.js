import { takeEvery, call, put } from 'redux-saga/effects';
import { gettingBalanceStart, gettingBalanceFailed, gettingBalanceSuccess } from '../reducers/balance';
import { getBalanceRequest } from '../../api/balance';

const gettingBalance = function*() {
  try {
    const data = yield call(getBalanceRequest);
    yield put(gettingBalanceSuccess(data));
  } catch (e) {
    yield put(gettingBalanceFailed());
  }
}

export const gettingBalanceWatcher = function*() {
  yield takeEvery(gettingBalanceStart, gettingBalance);
}
