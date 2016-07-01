export default Space.messaging.Publication.extend('AccountPublications', {

  dependencies: {
    transactions: 'BankAccountTransactions',
    accounts: 'BankAccounts'
  },

  publications() {
    return [{
      'transactions': () => {
        return this.transactions.find();
      },
      'accounts': () => {
        return this.accounts.find();
      }
    }];
  }

});

