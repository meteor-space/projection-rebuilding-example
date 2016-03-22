import Contact from '../../value-objects/contact';
import { OpenBankAccount } from '../../domain-commands/commands';
import BankAccountOpened from '../../domain-events/events';
import _ from 'lodash';

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

    const event = new BankAccountOpened(_.extend(this._eventPropsFromCommand(command), {
      balance: new Money(0)
    }));
    this.record(event);
  },

  // ============= EVENT HANDLERS ============

  _onBankAccountOpened(event) {
    this._assignFields(event);
  }
  
});

BankAccount.registerSnapshotType('BankAccountSnapshot');

export default BankAccount;