const BankAccountProjection = Space.eventSourcing.Projection.extend('BankAccountProjection', {

  collections: {
    accounts: 'BankAccounts'
  },

  eventSubscriptions() {
    return [{
      'BankAccountOpened': this._onBankAccountOpened,
      'BankAccountCredited': this._onBankAccountCredited,
      'BankAccountDebited': this._onBankAccountDebited
    }];
  },

  _onBankAccountOpened(event) {
    this.accounts.insert({
      _id: event.sourceId.toString(),
      owner: event.owner.toData(),
      balance: event.initialBalance.toData()
    });
  },

  _onBankAccountCredited(event) {
    this.accounts.update(event.sourceId.toString(), {
      $inc: {
        'balance.amount': event.amount.amount
      }
    });
  },

  _onBankAccountDebited(event) {
    this.accounts.update(event.sourceId.toString(), {
      $inc: {
        'balance.amount': -event.amount.amount
      }
    });
  }

});

export default BankAccountProjection;
