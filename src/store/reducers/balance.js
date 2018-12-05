import { createReducer, createAction } from 'redux-act';

const initialState = {
  loading: false,
  balance: 0,
  comment_price: 0.1,
  like_price: 0.1,
  repost_price: 0.1,
};

export const gettingBalanceStart = createAction('getting balance start');
export const gettingBalanceSuccess = createAction('getting balance success');
export const gettingBalanceFailed = createAction('getting balance failed');

export default createReducer({
  [gettingBalanceStart]: (state) => ({ ...state, loading: true }),
  [gettingBalanceSuccess]: (state, data ) => ({ loading: false, ...data }),
  [gettingBalanceFailed]: (state) => ({ ...state, loading: false }),
}, initialState)
