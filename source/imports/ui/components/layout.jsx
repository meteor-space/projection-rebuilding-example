import React from 'react';
import BankersCounter from '/source/imports/ui/containers/bankers-counter.jsx';
import AccountTransactionsList from '/source/imports/ui/containers/account-transactions-list';
import AccountsList from '/source/imports/ui/containers/accounts-list';

export default Layout = () => (
  <div>
    <h1>Space Bank</h1>
    <hr />
    <header>
        <BankersCounter />
    </header>
    <div className="main">
      <AccountTransactionsList />
    </div>
    <div className="main">
      <AccountsList />
    </div>
  </div>
);