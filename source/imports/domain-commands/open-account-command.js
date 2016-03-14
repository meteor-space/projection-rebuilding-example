import Contact from '../value-objects/contact';

const OpenAccountCommand = Space.domain.Command.extend('OpenAccountCommand', {
  owner: Contact
});

export default OpenAccountCommand;