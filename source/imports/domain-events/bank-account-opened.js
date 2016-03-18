import Contact from '../value-objects/contact';

const events = Space.messaging.define(Space.domain.Event,  {

  BankAccountOpened: {
    owner: Contact,
    balance: Money
  }
});

export default BankAccountOpened = events.BankAccountOpened;