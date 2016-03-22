import Contact from './value-objects/contact';

export default Space.messaging.define(Space.domain.Command, {

  OpenBankAccount: {
    owner: Contact
  },

  CloseBankAccount: {
  }

});
