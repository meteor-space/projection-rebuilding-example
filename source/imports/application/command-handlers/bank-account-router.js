import BankAccount from '../../domain/event-sourceables/bank-account';
import commands from '../../domain/commands';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: commands.OpenBankAccount,

  routeCommands: [
    commands.CreditBankAccount,
    commands.DebitBankAccount
  ]

});

export default BankAccountRouter;
