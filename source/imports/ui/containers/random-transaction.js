import React, { Component, PropTypes } from 'react';
import CountdownTimer from '../components/countdown-timer';
import { generateRandomTransaction } from '../actions/transactions';

class RandomTransaction extends Component {

  render() {
    return (
      <CountdownTimer onCountdownDone={generateRandomTransaction} secondsRemaining={5}/>
    );
  }
}

export default RandomTransaction;
