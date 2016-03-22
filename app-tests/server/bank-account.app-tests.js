import BankAccount from '/source/imports/domain/bank-account';
import commands from '/source/imports/domain/commands';
import events from '/source/imports/domain/events';
import Contact from '/source/imports/domain/value-objects/contact';
import NIN from '/source/imports/domain/value-objects/nin';
import ServerApp from '/source/imports/application/server-application.js';

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

      Space.Application.test(BankAccount, ServerApp)
        .given()
        .when(
          new commands.OpenBankAccount({
            targetId: this.bankAccountId,
            owner: this.newBankData.owner
          })
        )
        .expect([
          new events.BankAccountOpened({
            sourceId: this.bankAccountId,
            owner: this.newBankData.owner,
            balance: new Money(0)
          })
        ]);
    });
  });

});

