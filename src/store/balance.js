import { createReducer, createAction } from 'redux-act';

const initialState = {
  isLoading: false,
  count: 0,
};

export default createReducer({
}, initialState)
