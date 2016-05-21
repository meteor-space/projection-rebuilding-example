const TransactionsProjection = Space.eventSourcing.Projection.extend('TransactionsProjection', {

  collections: {
    transactions: 'BankAccountTransactions'
  },

  eventSubscriptions() {
    return [{
      'BankAccountCredited': this._onBankAccountCredited,
      'BankAccountDebited': this._onBankAccountDebited
    }];
  },

  _onBankAccountCredited(event) {
    this.transactions.insert({
      bankAccountId: event.sourceId.toString(),
      transactionType: 'deposit',
      amount: event.amount.toData()
    });
  },

  _onBankAccountDebited(event) {
    this.transactions.insert({
      bankAccountId: event.sourceId.toString(),
      transactionType: 'withdrawal',
      amount: event.amount.toData()
    });
  }

});

export default TransactionsProjection;
