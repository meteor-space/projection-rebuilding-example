import events from '../../domain/events';

const { BankAccountOpened, BankAccountCredited, BankAccountDebited } = events;

const BankAccountProjection = Space.eventSourcing.Projection.extend('BankAccountProjection', {

  collections: {
    accounts: 'BankAccounts'
  },

  eventSubscriptions() {
    return [{
      [BankAccountOpened]: this._onBankAccountOpened,
      [BankAccountCredited]: this._onBankAccountCredited,
      [BankAccountDebited]: this._onBankAccountDebited
    }];
  },

  _onBankAccountOpened(event) {
    this.accounts.insert({
      _id: event.sourceId.toString(),
      creationDate: event.timestamp.toISOString(),
      ownerName: event.owner.name,
      ownerEmail: event.owner.email.toString(),
      balance: event.initialBalance.amount
    });
  },

  _onBankAccountCredited(event) {
    this.accounts.update(event.sourceId.toString(), {
      $inc: {
        'balance': event.amount.amount
      }
    });
  },

  _onBankAccountDebited(event) {
    this.accounts.update(event.sourceId.toString(), {
      $inc: {
        'balance': -event.amount.amount
      }
    });
  }

});

export default BankAccountProjection;
