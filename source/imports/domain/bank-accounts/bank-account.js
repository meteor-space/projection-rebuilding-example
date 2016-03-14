import Contact from '../../value-objects/contact';

const BankAccount = Space.eventSourcing.Aggregate.extend('BankAccount', {
  
  fields: {
    balance: Money,
    owner: Contact
  }
  
});

export default BankAccount;