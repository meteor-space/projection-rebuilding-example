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
            owner: this.newBankData.owner,
            initialBalance: new Money(0, 'EUR')
          })
        )
        .expect([
          new events.BankAccountOpened({
            sourceId: this.bankAccountId,
            owner: this.newBankData.owner,
            initialBalance: new Money(0, 'EUR')
          })
        ]);
    });
  });

  describe('crediting a bank account', function() {

    it('publishes bank account credited event', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount({
            targetId: this.bankAccountId,
            owner: this.newBankData.owner,
            initialBalance: new Money(0, 'EUR')
          })
        ])
        .when(
          new commands.CreditBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(10, 'EUR')
          })
        )
        .expect([
          new events.BankAccountCredited({
            sourceId: this.bankAccountId,
            amount: new Money(10, 'EUR')
          })
        ]);
    });
  });

  describe('debiting a bank account', function() {

    it('publishes bank account debited event', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount({
            targetId: this.bankAccountId,
            owner: this.newBankData.owner,
            initialBalance: new Money(10, 'EUR')
          })
        ])
        .when(
          new commands.DebitBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(5, 'EUR')
          })
        )
        .expect([
          new events.BankAccountDebited({
            sourceId: this.bankAccountId,
            amount: new Money(5, 'EUR')
          })
        ]);
    });
  });

});

