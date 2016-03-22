import { AccountTransactions } from '../infrastructure/collections.js';
import AccountPublications from './publications/account-publications.js';
import BankAccountRouter from '../infrastructure/bank-account-router';

const ServerApp = Space.Application.extend('BankApplication', {

  configuration: {
    appId: 'BankingApp'
  },

  requiredModules: [
    'Space.messaging',
    'Space.eventSourcing'
  ],

  singletons: [
    AccountPublications,
    BankAccountRouter
  ],

  onInitialize() {
    this.injector.map('AccountTransactions').to(AccountTransactions);
  },

  onReset() {
    this.injector.get('AccountTransactions').remove({});
  }

});

export default new ServerApp();
