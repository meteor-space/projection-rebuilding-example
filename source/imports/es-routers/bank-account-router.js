import BankAccount from '../domain/bank-accounts/bank-account';
import { OpenBankAccount, CloseBankAccount } from '../domain-commands/commands';

const BankAccountRouter = Space.eventSourcing.Router.extend('BankAccountRouter', {

  eventSourceable: BankAccount,
  initializingMessage: OpenBankAccount,

  routeCommands: [
    this.CloseBankAccount
  ]

});

export default BankAccountRouter;