import { takeEvery, call, put } from 'redux-saga/effects';
import { registrationRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed } from './user';

const registrationSaga = function* (action) {
  try {
    const data = yield call(registrationRequest, action.payload);
    yield put(registrationSuccess());
  } catch (e) {
    yield put(registrationFailed());
  }
}

const watchRegistrationAsync = function* () {
  yield takeEvery(registrationStart, registrationSaga);
}


const root = function* () {
  yield watchRegistrationAsync();
};

export default root;
