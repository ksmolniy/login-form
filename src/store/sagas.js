import { delay } from 'redux-saga';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { registrationRequest, logInRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed, registrationClear } from './auth';
import { loginStart, loginSuccess, loginFailed, loginClear, logIn } from './auth';
import { setCookie } from '../utils/cookie';

const registrationSaga = function* ({ payload }) {
  try {
    const data = yield call(registrationRequest, payload);
    yield put(registrationSuccess());
    yield put(loginStart({ email: payload.email, password: payload.password }));
  } catch (e) {
    yield put(registrationFailed());
    yield delay(1000);
  }
  yield put(registrationClear());
}

const loginSaga = function* ({ payload }) {
  try {
    const data = yield call(logInRequest, payload);
    yield put(loginSuccess());
    setCookie('token', data.jwt);
    yield put(logIn());
  } catch (e) {
    yield put(loginFailed());
    yield delay(1000);
  }
  yield put(loginClear());
}

const watchRegistrationAsync = function* () {
  yield takeEvery(registrationStart, registrationSaga);
}

const watchLoginAsync = function* () {
  yield takeEvery(loginStart, loginSaga);
}


const root = function* () {
  yield all([
    watchRegistrationAsync(),
    watchLoginAsync(),
  ]);
};

export default root;
