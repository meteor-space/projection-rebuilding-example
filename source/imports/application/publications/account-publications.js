export default Space.messaging.Publication.extend('AccountPublications', {

  dependencies: {
    accountTransactions: 'BankAccountTransactions'
  },

  publications() {
    return [{
      'account_transactions': () => {
        return this.accountTransactions.find();
      }
    }];
  }

});

