import App from '../imports/ui/application.js';

Meteor.startup(function() {
  if (Meteor.isClient) {
    App.start();
  }
});
