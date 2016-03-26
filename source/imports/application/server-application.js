import * as Collections from '../infrastructure/collections.js';
import AccountPublications from './publications/account-publications.js';
import BankAccountRouter from '../infrastructure/bank-account-router';
import BankAccountProjection from './projections/bank-account-projection';
import BankingApi from '../../imports/application/apis/banking-api';

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
    BankAccountRouter,
    BankAccountProjection,
    BankingApi
  ],

  onInitialize() {
    this.injector.map('AccountTransactions').to(Collections.AccountTransactions);
  },

  onReset() {
    this.injector.get('AccountTransactions').remove({});
  }

});

export default new ServerApp();
