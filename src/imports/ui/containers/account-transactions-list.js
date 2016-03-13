import {composeWithTracker} from 'react-komposer';
import AccountTransactions from '../containers/account-transactions-list';

function composer(props, onData) {
  const handle = Meteor.subscribe('account_transactions');
  if(handle.ready()) {
    const transactions = AccountTransactions.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {transactions});
  };
};

export default composeWithTracker(composer)(AccountTransactions);