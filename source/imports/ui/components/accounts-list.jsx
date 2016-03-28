import React from 'react';

export default AccountsList = ({accounts}) => (
  <div>
    <div><h1>Bank Accounts</h1></div>
    <ul>
      {accounts.map(({_id, balance}) => (
        <li key={_id}>{_id}: {balance.amount} {balance.currency.code}</li>
      ))}
    </ul>
  </div>
);