import ClientApp from '../application';
import commands from '../../domain/commands';
import Contact from '../../domain/value-objects/contact';
import NIN from '../../domain/value-objects/nin';
import Chance from 'chance';

export const addBankAccount = () => {

  return dispatch => {

    const chance = new Chance();

    const command = new commands.OpenBankAccount({
      targetId: new Guid(),
      owner: new Contact({
        name: chance.name(),
        email: new EmailAddress(chance.email()),
        nin: new NIN({
          nin: chance.ssn(),
          countryCode: chance.country()
        })
      }),
      initialBalance: new Money(chance.floating({min: 0, max: 100000}) ),
      overdraft: new Money(chance.floating({min: 10000, max: 10000}) ),
      currency: new Currency('EUR')
    });

    ClientApp.send(command);

  };

};
