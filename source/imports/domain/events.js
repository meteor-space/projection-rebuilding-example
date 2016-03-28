import Contact from './value-objects/contact';

export default Space.messaging.define(Space.domain.Event,  {

  BankAccountOpened: {
    owner: Contact,
    initialBalance: Money,
    overdraft: Money,
    currency: Currency
  },

  BankAccountCredited: {
    amount: Money
  },

  BankAccountDebited: {
    amount: Money
  }

});
