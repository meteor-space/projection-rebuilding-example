import Contact from './value-objects/contact';

export default Space.messaging.define(Space.domain.Event,  {

  BankAccountOpened: {
    owner: Contact,
    balance: Money
  }
});
