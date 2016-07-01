import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';

export default () => {

  const state = store.getState();

  // REGISTRATION REQUESTS
  Meteor.subscribe('accounts');
  state.accounts.accountsList = Collections.BankAccounts.find({}, {sort: {creationDate: 1}}).fetch();

};
