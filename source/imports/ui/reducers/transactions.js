import { assign } from 'lodash';
import { observable } from 'mobx';

export const transactions = observable({
  transactionList: []
});

export default (state, {data, type}) => {
  switch (type) {

    case 'TRANSACTIONS_INFORMATION_CHANGED':
      return assign(transactions, { transactionList: data });

    default:
      return transactions;

  }
};
