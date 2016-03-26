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
    this.injector.map('AccountTransactions').to(Collections.AccountTransactions);
  }

});

export default new ClientApp();
