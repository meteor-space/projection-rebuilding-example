import Contact from '../value-objects/contact';

const OpenBankAccount = Space.messaging.define(Space.domain.Command,  {

  OpenBankAccount: {
    owner: Contact
  }
})[0];


export default OpenBankAccount;