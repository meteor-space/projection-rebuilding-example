export default BankAccountOverdrawn = Space.Error.extend('BankAccountOverdrawn', {
  Constructor(accountId) {
    Space.Error.call(this, `Bank account with id: '${accountId}' is overdrawn`);
  }
});