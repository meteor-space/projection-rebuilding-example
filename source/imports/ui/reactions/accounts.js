import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';
import { action } from 'mobx';

export default action('accountsAutorun', () => {

  // ALL BANK ACCOUNTS
  Meteor.subscribe('accounts');
  store.allAccounts = Collections.BankAccounts.find({}, {sort: {creationDate: 1}}).fetch();

});
