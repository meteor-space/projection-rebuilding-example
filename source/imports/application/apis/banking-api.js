import * as Collections from '../../infrastructure/collections';
import commands from '../../domain/commands';

const { OpenBankAccount, CreditBankAccount, DebitBankAccount } = commands;

const BankingApi = Space.messaging.Api.extend('BankingApi', {

  dependencies: {
    injector: 'Injector',
    log: 'log'
  },

  methods() {
    return [{
      [OpenBankAccount]: this._openBankAccount,
      [CreditBankAccount]: this._creditBankAccount,
      [DebitBankAccount]: this._debitBankAccount,
      'rebuildAccountsProjection': this._rebuildAccountsProjection,
      'rebuildTransactionsProjection': this._rebuildTransactionsProjection,
      'getNumberOfAccounts': this._getNumberOfAccounts
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
      context.unblock();
      this.log.info(`BankAccountProjection projection rebuilding started.`);
      this.log.info(this.injector.get('Space.eventSourcing.ProjectionRebuilder').rebuild([ 'BankAccountProjection' ]));
    }
  },

  _rebuildTransactionsProjection(context) {
    if (!context.isSimulation) {
      context.unblock();
      this.log.info(`TransactionsProjection projection rebuilding started.`);
      this.log.info(this.injector.get('Space.eventSourcing.ProjectionRebuilder').rebuild([ 'TransactionsProjection' ]));
    }
  },

  _getNumberOfAccounts(context) {
    if (!context.isSimulation) {
      return Collections.BankAccounts.find({}).count();
    }
  }

});

export default BankingApi;
