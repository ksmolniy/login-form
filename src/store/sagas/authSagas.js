import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { registrationRequest, logInRequest, checkTokenRequest } from '../../api/auth'
import { registrationStart, registrationSuccess, registrationFailed, registrationClear, logOut } from '../reducers/auth';
import { loginStart, loginSuccess, loginFailed, loginClear, logIn, checkToken } from '../reducers/auth';

const registrationSaga = function* ({ payload }) {
  try {
    const data = yield call(registrationRequest, payload);
    yield put(registrationSuccess());
    yield put(loginStart({ email: payload.email, password: payload.password }));
  } catch (e) {
    yield put(registrationFailed());
    yield delay(2000);
  }
  yield put(registrationClear());
}

const loginMessages = {
  'Authentication failed. Wrong password.': 'Неправильный пароль',
  'Authentication failed. User not found.': 'Пользователь с данной почтой не найден',
  undefined: 'Неопознанная ошибка',
}

const loginSaga = function* ({ payload }) {
  try {
    const data = yield call(logInRequest, payload);
    yield put(loginSuccess());
    yield put(logIn(data.jwt));
  } catch (e) {
    yield put(loginFailed(loginMessages[e.message] || e.message));
    yield delay(2000);
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

export const watchRegistrationAsync = function* () {
  yield takeEvery(registrationStart, registrationSaga);
}

export const watchLoginAsync = function* () {
  yield takeEvery(loginStart, loginSaga);
}

export const watchCheckTokenAsync = function* () {
  yield takeEvery(checkToken, checkTokenSaga);
}