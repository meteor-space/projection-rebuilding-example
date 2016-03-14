import Contact from '../value-objects/contact';

const OpenBankAccount = Space.domain.Command.extend('OpenBankAccount', {
  owner: Contact
});

export default OpenBankAccount;