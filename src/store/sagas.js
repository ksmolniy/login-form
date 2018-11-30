// @flow
import { takeEvery, call, put } from 'redux-saga/effects';
import { registrationRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed } from './user';
import { type Action } from './store';

const registrationSaga = function* (action: Action) {
  try {
    const data = yield call(registrationRequest, action.payload);
    yield put({ type: registrationSuccess.toString() });
  } catch (e) {
    yield put({ type: registrationFailed.toString() });
  }
}

const watchRegistrationAsync = function* (getState): any {
  yield takeEvery(registrationStart.toString(), registrationSaga, getState);
}


const root = function* (): any {
  yield [
    registrationSaga,
  ];
};

export default root;
