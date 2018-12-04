import { delay } from 'redux-saga';
import { takeEvery, call, put, all } from 'redux-saga/effects';
import { registrationRequest, logInRequest, checkTokenRequest } from '../api/auth'
import { registrationStart, registrationSuccess, registrationFailed, registrationClear, logOut } from './auth';
import { loginStart, loginSuccess, loginFailed, loginClear, logIn, checkToken } from './auth';

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
    yield put(logIn(data.jwt));
  } catch (e) {
    yield put(loginFailed());
    yield delay(1000);
  }
  yield put(loginClear());
}

const checkTokenSaga = function* () {
  try {
    const data = yield call(checkTokenRequest);
    if (!data.success) {
      yield put(logOut());
    }
  } catch (e) {
    yield put(logOut());
  }
}

const watchRegistrationAsync = function* () {
  yield takeEvery(registrationStart, registrationSaga);
}

const watchLoginAsync = function* () {
  yield takeEvery(loginStart, loginSaga);
}

const watchCheckTokenAsync = function* () {
  yield takeEvery(checkToken, checkTokenSaga);
}

const root = function* () {
  yield all([
    watchRegistrationAsync(),
    watchLoginAsync(),
    watchCheckTokenAsync(),
  ]);
};

export default root;
