// @flow
import { createReducer, createAction } from 'redux-act';

export type Balance = {
  +isLoading: boolean,
  +count: number,
};

const initialState: Balance = {
  isLoading: false,
  count: 0,
};

export default createReducer<Balance>({
  
}, initialState)
