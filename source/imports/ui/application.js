import * as Collections from '../infrastructure/collections';
import BankingApi from '../../imports/application/apis/banking-api';

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
  }

});

export default new ClientApp();
