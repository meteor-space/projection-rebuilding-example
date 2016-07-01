import ClientApp from '../application';
import commands from '../../domain/commands';
import Chance from 'chance';

export const generateRandomTransaction = () => {

  return dispatch => {

    const state = store.getState();
    const accountsList = state.accounts.accountsList;
    const randomAccountId = accountsList[Math.floor(Math.random() * accountsList.length)]._id;

    const chance = new Chance();
    const randomAmount = new Money(chance.floating({min: 1, max: 100}), new Currency('EUR'));

    if (Math.random() >= 0.5) {
      ClientApp.send(new commands.CreditBankAccount({
        targetId: new Guid(randomAccountId),
        amount: randomAmount
      }));
    } else {
      ClientApp.send(new commands.DebitBankAccount({
        targetId: new Guid(randomAccountId),
        amount: randomAmount
      }));
    }

  };

};
