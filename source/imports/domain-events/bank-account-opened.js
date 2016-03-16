import Contact from '../value-objects/contact';

const BankAccountOpened = Space.messaging.define(Space.domain.Event,  {

  BankAccountOpened: {
    owner: Contact,
    balance: Money
  }
})[0];


export default BankAccountOpened;