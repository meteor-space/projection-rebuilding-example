import React from 'react';
import {mount} from 'react-mounter';
import Layout from '/source/imports/ui/components/layout.jsx';
import AccountTransactionsList from '/source/imports/ui/containers/account-transactions-list';
import App from '/source/imports/ui/application.js'

FlowRouter.route("/", {
  action() {
    mount(Layout, { content: <AccountTransactionsList /> });
  }
});

App.start();