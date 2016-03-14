import BankAccount from '../domain/bank-accounts/bank-account';
import OpenBankAccount from '../domain-commands/open-bank-account';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: OpenBankAccount,

  routeCommands: [
  ]

});

export default BankAccountRouter;