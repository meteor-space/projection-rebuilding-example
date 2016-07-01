import { assign } from 'lodash';
import { observable } from 'mobx';

export const transactions = observable({
  transactionList: []
});

export default (state, {data, type}) => {
  switch (type) {

    default:
      return transactions;

  }
};
