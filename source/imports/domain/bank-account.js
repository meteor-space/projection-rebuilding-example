import Contact from './value-objects/contact';
import events from './events';

const BankAccount = Space.eventSourcing.Aggregate.extend('BankAccount', {

  fields: {
    balance: Money,
    owner: Contact
  },

  commandMap() {
    return {
      'OpenBankAccount': this._openBankAccount,
      'CreditBankAccount': this._creditBankAccount
    };
  },

  eventMap() {
    return {
      'BankAccountOpened': this._onBankAccountOpened,
      'BankAccountCredited': this._onBankAccountCredited
    };
  },

  // ============= COMMAND HANDLERS =============

  _openBankAccount(command) {
    this.record(new events.BankAccountOpened({
      ...this._eventPropsFromCommand(command)
    }));
  },

  _creditBankAccount(command) {
    this.record(new events.BankAccountCredited({
      ...this._eventPropsFromCommand(command)
    }));
  },

  // ============= EVENT HANDLERS ============

  _onBankAccountOpened(event) {
    this._assignFields(event);
    this.balance = event.initialBalance;
  },

  _onBankAccountCredited(event) {
    this.balance = new Money(this.balance + event.amount);
  }

});

BankAccount.registerSnapshotType('BankAccountSnapshot');

export default BankAccount;
