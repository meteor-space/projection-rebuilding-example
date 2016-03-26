const BankAccountProjection = Space.eventSourcing.Projection.extend('BankAccountProjection', {

  collections: {
    transactions: 'AccountTransactions'
  },

  eventSubscriptions() {
    return [{
      'BankAccountOpened': this._onBankAccountOpened,
      'BankAccountCredited': this._onBankAccountCredited,
      'BankAccountDebited': this._onBankAccountDebited
    }];
  },

  _onBankAccountOpened(event) {
    this.transactions.insert({
      _id: event.sourceId.toString(),
      owner: event.owner.toData(),
      balance: event.initialBalance.toData()
    });
  },

  _onBankAccountCredited(event) {
    this.transactions.update(event.sourceId.toString(), {
      $inc: {
        'balance.amount': event.amount.amount
      }
    });
  },

  _onBankAccountDebited(event) {
    this.transactions.update(event.sourceId.toString(), {
      $inc: {
        'balance.amount': - event.amount.amount
      }
    });
  }

});

export default BankAccountProjection;