import React from 'react';
import {mount} from 'react-mounter';
import { Provider } from 'react-redux';
import Layout from '/source/imports/ui/components/layout.jsx';
import store from '/source/imports/ui/store';

const App = (store) => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

FlowRouter.route("/", {
  action() {
    mount(App, store);
  }
});