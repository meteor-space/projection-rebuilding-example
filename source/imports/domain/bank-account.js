import Contact from './value-objects/contact';
import events from './events';
import BankAccountOverdrawn from '../application/domain-exceptions/domain-exceptions';

const BankAccount = Space.eventSourcing.Aggregate.extend('BankAccount', {

  fields: {
    balance: Money,
    owner: Contact,
    overdraft: Money,
    currency: Currency
  },

  commandMap() {
    return {
      'OpenBankAccount': this._openBankAccount,
      'CreditBankAccount': this._creditBankAccount,
      'DebitBankAccount': this._debitBankAccount
    };
  },

  eventMap() {
    return {
      'BankAccountOpened': this._onBankAccountOpened,
      'BankAccountCredited': this._onBankAccountCredited,
      'BankAccountDebited': this._onBankAccountDebited
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

  _debitBankAccount(command) {

    if ((this.balance.amount - command.amount.amount) <= (-this.overdraft.amount)) {
      throw new BankAccountOverdrawn(this.getId().toString());
    }

    this.record(new events.BankAccountDebited({
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
  },

  _onBankAccountDebited(event) {
    this.balance = new Money(this.balance - event.amount);
  }

});

BankAccount.registerSnapshotType('BankAccountSnapshot');

export default BankAccount;
