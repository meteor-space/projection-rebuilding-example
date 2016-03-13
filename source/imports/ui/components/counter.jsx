import React, { PropTypes } from 'react';

const Counter = ({count, onIncrement, onDecrement}) => (
  <div className="counter">
    <div className="count">{count}</div>
    <button className="increment" onClick={onIncrement}>+</button>
    <button className="decrement" onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;