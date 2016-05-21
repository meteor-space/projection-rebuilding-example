const BankingApi = Space.messaging.Api.extend('BankingApi', {

  methods() {
    return [{
      'OpenBankAccount': this._openBankAccount
    }];
  },

  _openBankAccount(context, command) {
    if (context.isSimulation) {
      // latency compensation
    } else {
      this.commandBus.send(command);
    }
  }

});

export default BankingApi;
