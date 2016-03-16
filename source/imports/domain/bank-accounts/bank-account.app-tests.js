import BankingDomain from '../banking-domain-module';
import BankAccount from './bank-account';
import OpenBankAccount from '../../domain-commands/open-bank-account';
import BankAccountOpened from '../../domain-events/bank-account-opened';
import Contact from '../../value-objects/contact';
import NIN from '../../value-objects/nin';

describe('BankAccount', function() {

  beforeEach(function() {

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

  describe('opening a bank account', function() {

    it('publishes bank account opened event', function() {
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

