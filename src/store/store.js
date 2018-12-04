import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth';
import balanceReducer from './balance';
import tasksReducer from './tasks';
import rootSaga from './sagas';

const reducers = {
  auth: authReducer,
  balance: balanceReducer,
  tasks: tasksReducer,
};


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;

