import BankAccount from '../domain/bank-accounts/bank-account';
import OpenBankAccount from '../domain-commands/open-account-command';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: OpenBankAccount,

  routeCommands: [
  ]

});

export default BankAccountRouter;