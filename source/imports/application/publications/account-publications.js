export default Space.messaging.Publication.extend('AccountPublications', {

  dependencies: {
    accountTransactions: 'BankAccountTransactions',
    accounts: 'BankAccounts'
  },

  publications() {
    return [{
      'account_transactions': () => {
        return this.accountTransactions.find();
      },
      'accounts': () => {
        return this.accounts.find();
      }
    }];
  }

});

