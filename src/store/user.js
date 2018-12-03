import { createAction, createReducer } from 'redux-act';
import { getCookie } from '../utils/cookie';


const initialState = {
  isLogIn: !!getCookie('token'),
  loading: false,
  isFailed: false,
};


export const registrationStart = createAction('registration started');
export const registrationFailed = createAction('registration failed');
export const registrationSuccess = createAction('registration success');

export default createReducer({
  [registrationStart]: (state) => ({ ...initialState, loading: true }),
  [registrationFailed]: (state) => ({ ...state, loading: false, isLogIn: true, }),
  [registrationSuccess]: (state) => ({ ...state, loading: false, isFailed: true, }),
}, initialState)
