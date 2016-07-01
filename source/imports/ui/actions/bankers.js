import store from '../store';

export const addBanker = () => {
  return dispatch => {
    store.dispatch({
      type: 'ADD_BANKER'
    });
  };
};

export const removeBanker = () => {
  return dispatch => {
    store.dispatch({
      type: 'REMOVE_BANKER'
    });
  };
};
