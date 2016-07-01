import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import bankers from './reducers/bankers';
import accounts from './reducers/accounts';
import transactions from './reducers/transactions';

const logger = createLogger({
  collapsed: true
});

export default store = createStore(
  combineReducers(
    {
      bankers,
      accounts,
      transactions
    }
  ),
  compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
