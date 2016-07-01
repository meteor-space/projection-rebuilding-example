import * as Collections from '../infrastructure/collections';
import BankingApi from '../../imports/application/apis/banking-api';
import reaction from './lib/reaction';
import accounts from './reactions/accounts';

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
    reaction(accounts).start();
  }

});

export default new ClientApp();
