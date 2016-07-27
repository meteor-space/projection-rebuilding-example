import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default () => {

  // ALL TRANSACTIONS
  Meteor.subscribe('transactions');
  action('updateTransactionsFromAutorun', (transactions) => {
    store.allTransactions = transactions;
  })(Collections.BankAccountTransactions.find({}, {sort: {timestamp: -1}}).fetch());

};
