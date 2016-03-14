import Contact from '../value-objects/contact';

const BankAccountOpened = Space.domain.Event.extend('BankAccountOpened', {
  owner: Contact,
  balance: Money
});

export default BankAccountOpened;