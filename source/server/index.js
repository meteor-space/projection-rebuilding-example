import ServerApp from '../imports/application/server-application.js';

Meteor.startup(function() {

  if (Meteor.isServer) {
    ServerApp.start();
  }
});
