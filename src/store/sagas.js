import { takeEvery, call, put } from 'redux-saga/effects';
import { registrationRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed } from './user';

const registrationSaga = function* (action) {
  try {
    const data = yield call(registrationRequest, action.payload);
    yield put({ type: registrationSuccess.toString() });
  } catch (e) {
    yield put({ type: registrationFailed.toString() });
  }
}

const watchRegistrationAsync = function* (getState) {
  yield takeEvery(registrationStart.toString(), registrationSaga, getState);
}


const root = function* () {
  yield [
    registrationSaga,
  ];
};

export default root;
