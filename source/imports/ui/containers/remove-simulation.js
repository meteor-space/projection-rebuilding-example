import React, { Component, PropTypes } from 'react';
import RemoveButton from '../components/remove-button';
import { removeBanker } from '../actions/bankers';

class RemoveSimulation extends Component {

  render() {
    return (
      <RemoveButton onRemove={removeBanker}/>
    );
  }
}

export default RemoveSimulation;
