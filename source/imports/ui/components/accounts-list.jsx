import React from 'react';
import AddBankingAccount from '../containers/add-banking-account';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import f from 'd3-format';

export default AccountsList = ({accounts}) => (

  <Card>
    <CardHeader title="Bank Accounts" subtitle="Press + button to add random bank accounts">
      <div style={{float: 'right'}}><AddBankingAccount/></div>
    </CardHeader>

    <CardMedia>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Owner</TableHeaderColumn>
            <TableHeaderColumn>Balance</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
                   {accounts.map(({_id, ownerName, balance}) => (
                     <TableRow key={_id}>
                       <TableRowColumn>{ownerName}</TableRowColumn>
                       <TableRowColumn>{f.format(',.2f')(balance)}</TableRowColumn>
                     </TableRow>
                   ))}
        </TableBody>
      </Table>
    </CardMedia>
  </Card>

);
