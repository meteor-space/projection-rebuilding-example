import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import TransactionList from '../components/transaction-list';

export default observer(React.createClass({

  render() {
    const state = store.getState();
    const transactions = state.transactions.transactionList;
    return (
      <TransactionList transactions={transactions} />
    );
  }

}));
