import React, { Component, PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class CountdownTimer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: props.secondsRemaining,
      initialSeconds: props.secondsRemaining
    };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      this.props.onCountdownDone();
      const randomNumberOfSeconds = Math.floor(Math.random() * 10) + 1;
      this.setState({secondsRemaining: randomNumberOfSeconds});
      this.setState({initialSeconds: randomNumberOfSeconds});
      this.interval = setInterval(this.tick, 1000);
    }
  }

  componentDidMount() {
    this.setState({secondsRemaining: this.props.secondsRemaining});
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
      <div>Time until next transaction: {this.state.secondsRemaining}</div>
        <LinearProgress mode="determinate" value={(this.state.secondsRemaining / this.state.initialSeconds) * 100 } />
      </div>
    );
  }
}

CountdownTimer.propTypes = {
  onCountdownDone: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number.isRequired
};

export default CountdownTimer;
