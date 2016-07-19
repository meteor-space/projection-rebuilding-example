import BankAccount from '../../domain/event-sourceables/bank-account';
import commands from '../../domain/commands';

const { OpenBankAccount, CreditBankAccount, DebitBankAccount } = commands;

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: OpenBankAccount,

  routeCommands: [
    CreditBankAccount,
    DebitBankAccount
  ]

});

export default BankAccountRouter;
