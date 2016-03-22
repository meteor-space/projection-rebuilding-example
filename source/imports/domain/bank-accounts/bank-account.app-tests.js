import BankingDomain from '../banking-domain-module';
import BankAccount from './bank-account';
import {OpenBankAccount} from '../../domain-commands/commands';
import BankAccountOpened from '../../domain-events/events';
import Contact from '../../value-objects/contact';
import NIN from '../../value-objects/nin';

// describe('BankAccount', () => {
//   beforeEach(() => {
//
//     this.bankAccountId = new Guid();
//
//     this.newBankData = {
//       owner: new Contact({
//         name: 'Name Surname',
//         email: new EmailAddress('user@server.com'),
//         nin: new NIN({
//           nin: '11111',
//           countryCode: 'HR'
//         })
//       })
//     };
//
//     this.OpenBankAccount = OpenBankAccount;
//   });
//
//   describe('opening a bank account', () => {
//     it('publishes bank account opened event', () => {
//       BankingDomain.test(BankAccount)
//         .given()
//         .when(
//           new OpenBankAccount({
//             targetId: new Guid(),
//             owner: new Contact({
//               name: 'Name Surname',
//               email: new EmailAddress('user@server.com'),
//               nin: new NIN({
//                 nin: '11111',
//                 countryCode: 'HR'
//               })
//             })
//           })
//         )
//         .expect([
//           new BankAccountOpened({
//             sourceId: Guid,
//             owner: Contact,
//             balance: Money
//           })
//         ]);
//     })
//   });
// });


describe('BankAccount', function () {

  beforeEach(function () {

    this.bankAccountId = new Guid();

    this.newBankData = {
      owner: new Contact({
        name: 'Name Surname',
        email: new EmailAddress('user@server.com'),
        nin: new NIN({
          nin: '11111',
          countryCode: 'HR'
        })
      })
    };

  });

  describe('opening a bank account', function () {

    it('publishes bank account opened event', function () {

      BankingDomain.test(BankAccount)
        .given()
        .when(
          new OpenBankAccount({
            targetId: this.bankAccountId,
            owner: this.newBankData.owner
          })
        )
        .expect([
          new BankAccountOpened({
            sourceId: this.bankAccountId,
            owner: this.newBankData.owner,
            balance: new Money(0)
          })
        ]);
    });
  });

});

