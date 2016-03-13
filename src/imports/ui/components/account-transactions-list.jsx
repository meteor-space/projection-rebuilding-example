import React from 'react';

export const AccountTransactionsList = ({transactions}) => (
  <div>
    <ul>
      {transactions.map(({_id, amount}) => (
        <li key={_id}>{_id}: {amount}</li>
      ))}
    </ul>
  </div>
);
