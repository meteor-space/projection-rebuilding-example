import { AccountTransactions } from '../infrastructure/collections.js';
import AccountPublications from './publications/account-publications.js';
import BankingDomain from '../domain/banking-domain-module';

const ServerApp = Space.Application.extend('BankApplication', {

  configuration: {
    appId: 'BankingApp'
  },

  requiredModules: [
    'Space.messaging',
    BankingDomain
  ],

  singletons: [
    AccountPublications
  ],

  onInitialize() {
    this.injector.map('AccountTransactions').to(AccountTransactions);
  },

  onReset() {
    this.injector.get('AccountTransactions').remove({});
  }

});

export default new ServerApp();