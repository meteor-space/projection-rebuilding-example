import store from '../store';
import { action } from 'mobx';

export const addBanker = () => {
  return action('addBanker', () => {
    store.bankersCount++;
  });
};

export const removeBanker = action('removeBanker', () => {
  return action('addBanker', () => {
    store.bankersCount > 0 && store.bankersCount--;
  });
});
