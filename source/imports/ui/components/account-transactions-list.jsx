import React from 'react';

export default AccountTransactionsList = ({transactions}) => (
  <div>
    <div><h1>Transactions</h1></div>
    <ul>
      {transactions.map(({_id, amount, transactionType}) => (
        <li key={_id}>{_id}: {transactionType} {amount.amount} {amount.currency.code}</li>
      ))}
    </ul>
  </div>
);