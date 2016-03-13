import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../../imports/ui/components/layout.jsx';
import AccountTransactionsList from '../../imports/ui/containers/account-transactions-list';

FlowRouter.wait();

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (<AccountTransactionsList />)
  });
  }
});