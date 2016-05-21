import React from 'react';
import { connect } from 'react-redux'
import Counter from '../components/counter.jsx';
import { addBanker, removeBanker } from '../actions';

const state = (state) => {
  return {
    count: state.bankersCount
  };
};

const actions = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(addBanker());
    },
    onDecrement: () => {
      dispatch(removeBanker());
    }
  };
};

export default connect(state, actions)(Counter);
