import { AccountTransactions } from '../infrastructure/collections.js';
import AccountPublications from './publications/account-publications.js';

const ServerApp = Space.Application.extend('BankApplication', {

  requiredModules: [
    'Space.messaging'
  ],

  singletons: [
    'AccountPublications'
  ],

  onInitialize() {
    this.injector.map('AccountTransactions').to(AccountTransactions)
  },

  onReset() {
    this.injector.get('AccountTransactions').remove({});
  }

});

export default new ServerApp();