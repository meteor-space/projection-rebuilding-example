import store from '../store';
import * as Collections from '../../infrastructure/collections';
import { Meteor } from 'meteor/meteor';

export default () => {

  const state = store.getState();
  const dispatch = store.dispatch;

  // ALL BANK ACCOUNTS
  Meteor.subscribe('accounts');
  const accounts = Collections.BankAccounts.find({}, {sort: {creationDate: 1}}).fetch();
  dispatch({
    type: 'ACCOUNTS_INFORMATION_CHANGED',
    data: accounts
  });

};
