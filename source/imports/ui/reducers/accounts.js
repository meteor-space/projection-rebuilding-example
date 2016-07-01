import { assign } from 'lodash';
import { observable } from 'mobx';

export const accounts = observable({
  accountsList: []
});

export default (state, {data, type}) => {
  switch (type) {

    default:
      return accounts;

  }
};
