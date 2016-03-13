import App from '../../imports/application/server-application.js'

Meteor.startup(() => {
  const app = new App();
  app.start();
});
