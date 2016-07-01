import React, { Component, PropTypes } from 'react';
import RebuildButton from '../components/rebuild-button';
import { rebuildTransactionsProjection } from '../actions/projection-rebuilding';

class RebuildTransactionsButton extends Component {

  render() {
    return (
      <RebuildButton onRebuild={rebuildTransactionsProjection}/>
    );
  }
}

export default RebuildTransactionsButton;
