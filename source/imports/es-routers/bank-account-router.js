import BankAccount from '../domain/bank-accounts/bank-account';
import OpenAccountCommand from '../domain-commands/open-account-command';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: OpenAccountCommand,

  routeCommands: [
  ]

});

export default BankAccountRouter;