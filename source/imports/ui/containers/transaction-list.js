import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import TransactionList from '../components/transaction-list';
import store from '../store';

export default observer(React.createClass({

  render() {
    const transactions = store.allTransactions;
    return (
      <TransactionList transactions={transactions} />
    );
  }

}));
