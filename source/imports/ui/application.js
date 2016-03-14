const ClientApp = Space.Application.extend('BankApplication', {
  requiredModules: [
    'Space.messaging'
  ]
});

export default new ClientApp();