// @flow
import { createAction, createReducer } from 'redux-act';

export type User = {
  +isLogIn: boolean,
  +loading: boolean,
  +isFailed: boolean,
};

const initialState: User = {
  isLogIn: false,
  loading: false,
  isFailed: false,
};

export type RegistrationData = {|
  name: string,
  email: string,
  password: string,
|};

export type LoginData = {|
  name: string,
  password: string,
|};

export const registrationStart = createAction<[RegistrationData], Function, Function>('registration started');
export const registrationFailed = createAction<[], Function, Function>('registration failed');
export const registrationSuccess = createAction<[], Function, Function>('registration success');

export default createReducer<User>({
  [registrationStart.toString()]: (state) => ({ ...initialState, loading: true }),
  [registrationFailed.toString()]: (state) => ({ ...state, loading: false, isLogIn: true, }),
  [registrationSuccess.toString()]: (state) => ({ ...state, loading: false, isFailed: true, }),
}, initialState)
