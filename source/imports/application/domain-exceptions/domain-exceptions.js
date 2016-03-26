export default DomainException = Space.domain.Exception;

export default BankAccountOverdrawn = Space.Error.extend('BankAccountOverdrawn', {
  Constructor(accountId) {
    Space.Error.call(this, `Bank account with id: '${accountId}' is overdrawn`);
  }
});

export default DebitingBankAccountIsNotPossibleWithWrongCurrency = Space.Error.extend('DebitingBankAccountIsNotPossibleWithWrongCurrency', {
  Constructor(accountId, currency) {
    Space.Error.call(this, `Bank account with id: '${accountId}' can not be debited with currency: ${currency}`);
  }
});

export default CreditingBankAccountIsNotPossibleWithWrongCurrency = Space.Error.extend('CreditingBankAccountIsNotPossibleWithWrongCurrency', {
  Constructor(accountId, currency) {
    Space.Error.call(this, `Bank account with id: '${accountId}' can not be credited with currency: ${currency}`);
  }
});