import React, { PropTypes } from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import f from 'd3-format';
import moment from 'moment';

const TransactionList = ({transactions}) => (

  <Card>
    <CardHeader title="Transactions"
                subtitle="Projections of all transactions sorted by date"
    />

    <CardMedia>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Account Owner</TableHeaderColumn>
            <TableHeaderColumn>Transaction Type</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Balance</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
                   {transactions.map(({_id, accountOwner, transactionType, amount, timestamp}) => (
                     <TableRow key={_id}>
                       <TableRowColumn>{accountOwner}</TableRowColumn>
                       <TableRowColumn>{transactionType}</TableRowColumn>
                       <TableRowColumn>{f.format(',.2f')(amount)}</TableRowColumn>
                       <TableRowColumn>TBD</TableRowColumn>
                       <TableRowColumn>{moment(timestamp).format('MM/DD/YYYY, h:mm A')}</TableRowColumn>
                     </TableRow>
                   ))}
        </TableBody>
      </Table>
    </CardMedia>
  </Card>

);

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransactionList;
