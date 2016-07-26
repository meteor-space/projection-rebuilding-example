import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default () => {

  // ALL BANK ACCOUNTS
  Meteor.subscribe('accounts');
  action('updateAccountsFromAutorun', (accounts) => {
    store.allAccounts = accounts;
  })(Collections.BankAccounts.find({}, {sort: {creationDate: 1}}).fetch());

};
