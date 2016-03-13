import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../../imports/ui/components/layout.jsx';
import AccountTransactionsList from '../../imports/ui/components/account-transactions-list.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (<AccountTransactionsList />)
  });
  }
});