import BankAccount from '../domain/bank-account';
import commands from '../domain/commands';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: commands.OpenBankAccount,

  routeCommands: [
    commands.CloseBankAccount
  ]

});

export default BankAccountRouter;
