import React, { Component, PropTypes } from 'react';
import RebuildButton from '../components/rebuild-button';
import { rebuildAccountsProjection } from '../actions/projection-rebuilding';

class RebuildAccountsButton extends Component {

  render() {
    return (
      <RebuildButton onRebuild={rebuildAccountsProjection}/>
    );
  }
}

export default RebuildAccountsButton;
