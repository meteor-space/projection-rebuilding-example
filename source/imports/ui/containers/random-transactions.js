import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import CountdownTimer from '../components/countdown-timer';
import { generateRandomTransaction } from '../actions/transactions';
import store from '../store';

class RandomTransaction extends Component {

  render() {
    const numberOfSimulations = store.bankersCount;
    return (
      <div style={{margin: '20px'}}>
        {Array(numberOfSimulations).fill(1).map((el, i) =>
        <div key={i + 1} style={{paddingBottom: '20px'}}>
          <CountdownTimer onCountdownDone={generateRandomTransaction} secondsRemaining={Math.floor(Math.random() * 10) + 1}/>
        </div>
        )}
      </div>
    );
  }
}

export default observer(RandomTransaction);
