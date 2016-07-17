import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';

export default () => {

  const state = store.getState();
  const dispatch = store.dispatch;

  // ALL TRANSACTIONS
  Meteor.subscribe('transactions');
  const transactions = Collections.BankAccountTransactions.find({}, {sort: {timestamp: -1}}).fetch();
  dispatch({
    type: 'TRANSACTIONS_INFORMATION_CHANGED',
    data: transactions
  });

};
