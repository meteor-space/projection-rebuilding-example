import { composeWithTracker } from 'react-komposer';
import AccountsList from '../components/accounts-list.jsx';
import * as Collections from '../../infrastructure/collections';

function composer(props, onData) {
  const handle = Meteor.subscribe('accounts');
  if (handle.ready()) {
    const accounts = Collections.BankAccounts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {accounts});
  }
}

export default composeWithTracker(composer)(AccountsList);
