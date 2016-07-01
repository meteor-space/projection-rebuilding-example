import * as Collections from '../../infrastructure/collections';

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
      timestamp: event.timestamp.toISOString(),
      transactionType: 'deposit',
      amount: event.amount.amount,
      accountOwner: this._getAccountOwner(event.sourceId.toString())
    });
  },

  _onBankAccountDebited(event) {
    this.transactions.insert({
      bankAccountId: event.sourceId.toString(),
      timestamp: event.timestamp.toISOString(),
      transactionType: 'withdrawal',
      amount: event.amount.amount,
      accountOwner: this._getAccountOwner(event.sourceId.toString())
    });
  },

  _getAccountOwner(accountId) {
    return Collections.BankAccounts.findOne(accountId).ownerName;
  }

});

export default TransactionsProjection;
