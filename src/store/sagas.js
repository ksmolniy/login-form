import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { registrationRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed, registrationClear } from './auth';

const registrationSaga = function* (action) {
  try {
    const data = yield call(registrationRequest, action.payload);
    yield put(registrationSuccess());
  } catch (e) {
    yield put(registrationFailed());
  }
  yield delay(1000);
  yield put(registrationClear());
}

const watchRegistrationAsync = function* () {
  yield takeEvery(registrationStart, registrationSaga);
}


const root = function* () {
  yield watchRegistrationAsync();
};

export default root;
