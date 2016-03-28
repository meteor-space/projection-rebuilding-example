import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import bankers from './reducers/bankers';

const logger = createLogger();

export default store = createStore(
  bankers,
  applyMiddleware(thunk, logger)
);
