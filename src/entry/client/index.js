import App from '../../imports/ui/application.js'

Meteor.startup(() => {
  const app = new App();
  app.start();
});
