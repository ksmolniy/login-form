import { createAction, createReducer } from 'redux-act';
import { getToken, deleteCookie, setCookie } from '../../utils/cookie';

const loadingStart = () => ({ loading: true, failed: false, success: false });
const loadingFailed = (message = true) => ({ loading: false, failed: message, success: false });
const loadingSuccess = () => ({ loading: false, failed: false, success: true });
const loadingClear = () => ({ loading: false, failed: false, success: false });

const initialValue = {
  isLogIn: !!getToken('token'),
  signIn: loadingClear(),
  logIn: loadingClear(),
}

export const registrationStart = createAction('registration started');
export const registrationFailed = createAction('registration failed');
export const registrationSuccess = createAction('registration success');
export const registrationClear = createAction('registration clear');

export const loginStart = createAction('login started');
export const loginFailed = createAction('login failed');
export const loginSuccess = createAction('login success');
export const loginClear = createAction('login clear');

export const logOut = createAction('logout');
export const logIn = createAction('login');

export const checkToken = createAction('check token');

const reducer = createReducer({
  [registrationStart]: (state) => ({
    ...state,
    signIn: loadingStart(),
  }),
  [registrationFailed]: (state, payload) => ({
    ...state,
    signIn: loadingFailed(payload),
  }),
  [registrationSuccess]: (state) => ({
    ...state,
    signIn: loadingSuccess(),
  }),
  [registrationClear]: (state) => ({
    ...state,
    signIn: loadingClear(),
  }),
  [loginStart]: (state) => ({
    ...state,
    logIn: loadingStart(),
  }),
  [loginFailed]: (state, payload) => ({
    ...state,
    logIn: loadingFailed(payload),
  }),
  [loginSuccess]: (state) => ({
    ...state,
    logIn: loadingSuccess(),
  }),
  [loginClear]: (state) => ({
    ...state,
    logIn: loadingClear(),
  }),
  [logOut]: (state) => {
    deleteCookie('token');
    return {
      ...state,
      isLogIn: false,
    };
  },
  [logIn]: (state, payload) => {
    setCookie('token', payload);

    return {
      ...state,
      isLogIn: true,
    }
  }
}, initialValue);


export default reducer;
