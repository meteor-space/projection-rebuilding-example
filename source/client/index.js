import App from '../imports/ui/application.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(function() {
  if (Meteor.isClient) {
    injectTapEventPlugin();
    App.start();
  }
});
