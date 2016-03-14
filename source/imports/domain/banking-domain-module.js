import BankAccountRouter from '../es-routers/bank-account-router';

const BankingDomain = Space.Module.define('BankingDomain', {

  requiredModules: [
    'Space.eventSourcing'
  ],

  singletons: [
    BankAccountRouter
  ]

});

export default BankingDomain;