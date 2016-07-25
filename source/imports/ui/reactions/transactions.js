import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default action('transactionsAutorun', () => {

  // ALL TRANSACTIONS
  Meteor.subscribe('transactions');
  store.allTransactions = Collections.BankAccountTransactions.find({}, {sort: {timestamp: -1}}).fetch();

});
