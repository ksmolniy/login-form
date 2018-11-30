// @flow
import { createStore, combineReducers, type Dispatch } from 'redux';
import userReducer, { type User } from './user';
import balanceReducer, { type Balance } from './balance';
import tasksReducer, { type Tasks } from './tasks';

type State = {
  +user: User,
  +balance: Balance,
  +tasks: Tasks,
}

type Action = {
  type: string,
  payload: any,
};

export type Dispatcher = Dispatch<Action>;

const reducers = {
  user: userReducer,
  balance: balanceReducer,
  tasks: tasksReducer,
};

type Recuders = typeof reducers;

const store = createStore<State, Action, Dispatcher>(combineReducers<Recuders, Action>(reducers));

export default store;

