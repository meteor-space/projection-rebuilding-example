import { OpenBankAccount, CreditBankAccount, DebitBankAccount } from '../../domain/commands';

const BankingApi = Space.messaging.Api.extend('BankingApi', {

  dependencies: {
    injector: 'Injector',
    log: 'log'
  },

  methods() {
    return [{
      OpenBankAccount: this._openBankAccount,
      CreditBankAccount: this._creditBankAccount,
      DebitBankAccount: this._debitBankAccount,
      'rebuildAccountsProjection': this._rebuildAccountsProjection,
      'rebuildTransactionsProjection': this._rebuildTransactionsProjection
    }];
  },

  _openBankAccount(context, command) {
    if (context.isSimulation) {
      // latency compensation
    } else {
      this.commandBus.send(command);
    }
  },

  _creditBankAccount(context, command) {
    if (context.isSimulation) {
      // latency compensation
    } else {
      this.commandBus.send(command);
    }
  },

  _debitBankAccount(context, command) {
    if (context.isSimulation) {
      // latency compensation
    } else {
      this.commandBus.send(command);
    }
  },

  _rebuildAccountsProjection(context) {
    if (!context.isSimulation) {
      Space.log.info(`BankAccountProjection projection rebuilding started.`);
      this.injector.get('Space.eventSourcing.ProjectionRebuilder').rebuild([ 'BankAccountProjection' ]);
    }

  },

  _rebuildTransactionsProjection(context) {
    if (!context.isSimulation) {
      Space.log.info(`TransactionsProjection projection rebuilding started.`);
      this.injector.get('Space.eventSourcing.ProjectionRebuilder').rebuild([ 'TransactionsProjection' ]);
    }

  }

});

export default BankingApi;
