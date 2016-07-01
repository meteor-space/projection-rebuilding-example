import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import Avatar from 'material-ui/Avatar';
import { cyan500, white } from 'material-ui/styles/colors';

class NumberOfSimulationsAvatar extends Component {

  render() {
    const state = store.getState();
    const numberOfSimulations = state.bankers.bankersCount;
    return (
      <Avatar backgroundColor={cyan500} color={white} style={{marginRight: '16px'}}>{numberOfSimulations}</Avatar>
    );
  }
}

export default observer(NumberOfSimulationsAvatar);
