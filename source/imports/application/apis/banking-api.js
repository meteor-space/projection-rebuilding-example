const BankingApi = Space.messaging.Api.extend('BankingApi', {

  methods() {
    return [{
      'OpenBankAccount': this._openBankAccount,
      'CreditBankAccount': this._creditBankAccount,
      'DebitBankAccount': this._debitBankAccount
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
  }

});

export default BankingApi;
