import { AccountTransactions } from '../infrastructure/collections.js';
import AccountPublications from './publications/account-publications.js';

export default Space.Application.extend('BankApplication', {

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