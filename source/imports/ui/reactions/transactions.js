import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';

export default () => {

  const state = store.getState();

  // ALL TRANSACTIONS
  Meteor.subscribe('transactions');
  state.transactions.transactionList = Collections.BankAccountTransactions.find({}, {sort: {timestamp: -1}}).fetch();

};
