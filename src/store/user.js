import { createAction, createReducer } from 'redux-act';


const initialState = {
  isLogIn: false,
  loading: false,
  isFailed: false,
};


export const registrationStart = createAction('registration started');
export const registrationFailed = createAction('registration failed');
export const registrationSuccess = createAction('registration success');

export default createReducer({
  [registrationStart.toString()]: (state) => ({ ...initialState, loading: true }),
  [registrationFailed.toString()]: (state) => ({ ...state, loading: false, isLogIn: true, }),
  [registrationSuccess.toString()]: (state) => ({ ...state, loading: false, isFailed: true, }),
}, initialState)
