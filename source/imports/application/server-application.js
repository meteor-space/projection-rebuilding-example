import * as Collections from '../infrastructure/collections';
import AccountPublications from './publications/account-publications';
import BankAccountRouter from '../infrastructure/bank-account-router';
import TransactionsProjection from './projections/transactions-projection';
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
    TransactionsProjection,
    BankingApi
  ],

  onInitialize() {
    this.injector.map('BankAccountTransactions').to(Collections.BankAccountTransactions);
    this.injector.map('BankAccounts').to(Collections.BankAccounts);
  },

  onReset() {
    this.injector.get('BankAccountTransactions').remove({});
    this.injector.get('BankAccounts').remove({});
  }

});

export default new ServerApp();
