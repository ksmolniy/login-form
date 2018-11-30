// @flow
import { createAction, createReducer } from 'redux-act';

export type User = {
  +isLogedin: boolean,
  +loading: boolean,
  +isFailed: boolean,
};

const initialState: User = {
  isLogedin: false,
  loading: false,
  isFailed: false,
};

export default createReducer<User>({

}, initialState)
