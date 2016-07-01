import React, { Component, PropTypes } from 'react';
import AddButton from '../components/add-button';
import { addBankAccount } from '../actions/bank-accounts';

class AddBankingAccount extends Component {

  render() {
    return (
      <AddButton onAdd={addBankAccount}/>
    );
  }
}

export default AddBankingAccount;
