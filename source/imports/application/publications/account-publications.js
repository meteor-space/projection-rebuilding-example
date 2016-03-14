export default Space.messaging.Publication.extend('AccountPublications', {

  dependencies: {
    accountTransactions: 'AccountTransactions'
  },

  publications() {
    return [{
      'account_transactions': () => {
        return this.accountTransactions.find();
      }
    }];
  }

});

