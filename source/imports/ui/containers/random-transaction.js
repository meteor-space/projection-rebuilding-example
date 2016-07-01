import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import CountdownTimer from '../components/countdown-timer';
import { generateRandomTransaction } from '../actions/transactions';

class RandomTransaction extends Component {

  render() {
    const state = store.getState();
    const numberOfSimulations = state.bankers.bankersCount;
    return (
      <div>
        {Array(numberOfSimulations).fill(1).map((el, i) =>
          <CountdownTimer key={i + 1} onCountdownDone={generateRandomTransaction} secondsRemaining={Math.floor(Math.random() * 10) + 1}/>
        )}
      </div>
    );
  }
}

export default observer(RandomTransaction);
