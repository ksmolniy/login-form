import { createReducer, createAction } from 'redux-act';

const initialState = {
  loading: false,
  count: 0,
};

export const gettingBalanceStart = createAction('getting balance start');
export const gettingBalanceSuccess = createAction('getting balance success');
export const gettingBalanceFailed = createAction('getting balance failed');

export default createReducer({
  [gettingBalanceStart]: (state) => ({ ...state, loading: true }),
  [gettingBalanceSuccess]: (state, count) => ({ loading: false, count }),
  [gettingBalanceFailed]: (state) => ({ ...state, loading: false }),
}, initialState)
