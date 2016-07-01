import { assign } from 'lodash';
import { observable } from 'mobx';

export const bankers = observable({
  bankersCount: 0
});

export default (state, {data, type}) => {
  switch (type) {

    case 'ADD_BANKER':
      return assign(bankers, { bankersCount: state.bankersCount + 1 });

    case 'REMOVE_BANKER':
      if (state.bankersCount > 0) {
        return assign(bankers, { bankersCount: state.bankersCount - 1 });
      }
      break;

    default:
      return bankers;
  }

};
