import {composeWithTracker} from 'react-komposer';
import AccountTransactionsList from '../components/account-transactions-list.jsx';
import { AccountTransactions } from '/source/imports/infrastructure/collections.js';

function composer(props, onData) {
  const handle = Meteor.subscribe('account_transactions');
  if(handle.ready()) {
    const transactions = AccountTransactions.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {transactions});
  }
}

export default composeWithTracker(composer)(AccountTransactionsList);