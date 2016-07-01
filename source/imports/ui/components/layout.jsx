import React from 'react';
import {Grid, Row, Col} from 'meteor/jimmiebtlr:react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import AccountsList from '../containers/accounts-list';
import TransactionList from '../containers/transaction-list';
import Simulations from '../components/simulations';

const Layout = () => (
  <div>

    <AppBar title="Space Banking" showMenuIconButton={false} style={{marginBottom: '20px'}}/>

      <Row>
        <Col xs={6}>
          <Simulations />
          <AccountsList />
        </Col>
        <Col xs={6}>
          <TransactionList />
        </Col>
      </Row>

  </div>
);

export default Layout;
