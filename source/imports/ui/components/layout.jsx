import React from 'react';
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import BankersCounter from '../containers/bankers-counter.jsx';
import AccountsList from '../containers/accounts-list';
import TransactionList from '../containers/transaction-list';
import RandomTransaction from '../containers/random-transaction';

const Layout = () => (
  <div>

    <AppBar title="Space Banking" showMenuIconButton={false}/>

      <Row>
        <Col xs={6}>
          <BankersCounter />
          <AccountsList />
        </Col>
        <Col xs={6}>
          <RandomTransaction/>
          <TransactionList />
        </Col>
      </Row>

  </div>
);

export default Layout;
