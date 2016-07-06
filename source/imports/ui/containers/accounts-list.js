import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import AccountsList from '../components/accounts-list.jsx';
import { addBankAccount } from '../actions/bank-accounts';

export default observer(React.createClass({

  componentWillMount() {
    Meteor.call('getNumberOfAccounts', (err, res) => {
      if (err) {
        console.log(err);
      } else {
        if (res === 0) {
          store.dispatch(addBankAccount());
        }
      }
    });
  },

  render() {
    const state = store.getState();
    const accounts = state.accounts.accountsList;
    return (
      <AccountsList accounts={accounts} />
    );
  }

}));
