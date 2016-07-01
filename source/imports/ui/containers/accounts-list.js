import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import AccountsList from '../components/accounts-list.jsx';

export default observer(React.createClass({

  render() {
    const state = store.getState();
    const accounts = state.accounts.accountsList;
    return (
      <AccountsList accounts={accounts} />
    );
  }

}));
