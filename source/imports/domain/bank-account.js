import Contact from './value-objects/contact';
import events from './events';

const BankAccount = Space.eventSourcing.Aggregate.extend('BankAccount', {

  fields: {
    balance: Money,
    owner: Contact
  },

  commandMap() {
    return {
      'OpenBankAccount': this._openBankAccount
    };
  },

  eventMap() {
    return {
      'BankAccountOpened': this._onBankAccountOpened
    };
  },

  // ============= COMMAND HANDLERS =============

  _openBankAccount(command) {
    this.record(new events.BankAccountOpened({
      ...this._eventPropsFromCommand(command),
      balance: new Money(0)
    }));
  },

  // ============= EVENT HANDLERS ============

  _onBankAccountOpened(event) {
    this._assignFields(event);
  }

});

BankAccount.registerSnapshotType('BankAccountSnapshot');

export default BankAccount;
