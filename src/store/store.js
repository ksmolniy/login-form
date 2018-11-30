// @flow
import { createStore, combineReducers, applyMiddleware, type Dispatch } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer, { type User } from './user';
import balanceReducer, { type Balance } from './balance';
import tasksReducer, { type Tasks } from './tasks';
import rootSaga from './sagas';

export type State = {
  +user: User,
  +balance: Balance,
  +tasks: Tasks,
}

export type Action = {
  type: string,
  payload: any,
};

export type Dispatcher = Dispatch<Action>;

const reducers = {
  user: userReducer,
  balance: balanceReducer,
  tasks: tasksReducer,
};

type Reducers = typeof reducers;

const sagaMiddleware = createSagaMiddleware();

const store = createStore<State, Action, Dispatcher>(
  combineReducers<Reducers, Action>(reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;

