import { assign } from 'lodash';
import { observable } from 'mobx';

export const accounts = observable({
  accountsList: []
});

export default (state, {data, type}) => {
  switch (type) {

    case 'ACCOUNTS_INFORMATION_CHANGED':
      return assign(accounts, { accountsList: data });

    default:
      return accounts;

  }
};
