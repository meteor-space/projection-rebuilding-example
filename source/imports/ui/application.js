import * as Collections from '../infrastructure/collections';
import BankingApi from '../../imports/application/apis/banking-api';
import autorun from 'meteor/space:tracker-mobx-autorun';
import accounts from './reactions/accounts';
import transactions from './reactions/transactions';

const ClientApp = Space.Application.extend('BankApplication', {

  requiredModules: [
    'Space.messaging'
  ],

  singletons: [
    BankingApi
  ],

  onInitialize() {
    this.injector.map('BankAccountTransactions').to(Collections.BankAccountTransactions);
    this.injector.map('BankAccounts').to(Collections.BankAccounts);
  },

  onStart() {
    // Start reactions
    autorun(accounts).start();
    autorun(transactions).start();
  }

});

export default new ClientApp();
