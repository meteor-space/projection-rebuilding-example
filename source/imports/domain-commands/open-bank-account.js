import Contact from '../value-objects/contact';

const commands = Space.messaging.define(Space.domain.Command,  {

  OpenBankAccount: {
    owner: Contact
  }
});

export default commands.OpenBankAccount;