import React, { Component, PropTypes } from 'react';
import AddButton from '../components/add-button';
import { addBanker } from '../actions/bankers';

class AddSimulation extends Component {

  render() {
    return (
      <AddButton onAdd={addBanker}/>
    );
  }
}

export default AddSimulation;
