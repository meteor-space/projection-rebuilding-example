import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import bankers from './reducers/bankers';
import accounts from './reducers/accounts';

const logger = createLogger({
  collapsed: true
});

export default store = createStore(
  combineReducers(
    {
      bankers,
      accounts
    }
  ),
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
