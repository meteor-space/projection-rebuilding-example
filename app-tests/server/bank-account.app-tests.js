import BankAccount from '/source/imports/domain/bank-account';
import commands from '/source/imports/domain/commands';
import events from '/source/imports/domain/events';
import Contact from '/source/imports/domain/value-objects/contact';
import NIN from '/source/imports/domain/value-objects/nin';
import ServerApp from '/source/imports/application/server-application.js';
import BankAccountOverdrawn from '/source/imports/application/domain-exceptions/domain-exceptions';
import DebitingBankAccountIsNotPossibleWithWrongCurrency from '/source/imports/application/domain-exceptions/domain-exceptions';
import CreditingBankAccountIsNotPossibleWithWrongCurrency from '/source/imports/application/domain-exceptions/domain-exceptions';
import _ from 'lodash';

describe('BankAccount', function() {

  beforeEach(function() {

    this.bankAccountId = new Guid();

    this.newBankAccountData = {
      owner: new Contact({
        name: 'Name Surname',
        email: new EmailAddress('user@server.com'),
        nin: new NIN({
          nin: '11111',
          countryCode: 'HR'
        })
      }),
      initialBalance: new Money(0, new Currency('EUR')),
      overdraft: new Money(10000, new Currency('EUR')),
      currency: new Currency('EUR')
    };

  });

  describe('opening a bank account', function() {

    it('publishes bank account opened event', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given()
        .when(
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        )
        .expect([
          new events.BankAccountOpened(_.extend({}, this.newBankAccountData, {
            sourceId: this.bankAccountId
          }))
        ]);
    });

  });

  describe('crediting a bank account', function() {

    it('publishes bank account credited event', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        ])
        .when(
          new commands.CreditBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(10, new Currency('EUR'))
          })
        )
        .expect([
          new events.BankAccountCredited({
            sourceId: this.bankAccountId,
            amount: new Money(10, new Currency('EUR'))
          })
        ]);
    });
  });

  describe('crediting a bank account is not possible with wrong currency', function() {

    it('generates crediting bank account is not possible with wrong currency exception', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        ])
        .when(
          new commands.CreditBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(10, new Currency('HRK'))
          })
        )
        .expect([
          new Space.domain.Exception({
            thrower: 'BankAccount',
            error: new CreditingBankAccountIsNotPossibleWithWrongCurrency(this.bankAccountId.toString(), 'HRK')
          })
        ]);
    });
  });

  describe('debiting a bank account', function() {

    it('publishes bank account debited event', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        ])
        .when(
          new commands.DebitBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(5, new Currency('EUR'))
          })
        )
        .expect([
          new events.BankAccountDebited({
            sourceId: this.bankAccountId,
            amount: new Money(5, new Currency('EUR'))
          })
        ]);
    });
  });

  describe('debiting a bank account is not possible with wrong currency', function() {

    it('generates debiting bank account is not possible with wrong currency exception', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        ])
        .when(
          new commands.DebitBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(10, new Currency('HRK'))
          })
        )
        .expect([
          new Space.domain.Exception({
            thrower: 'BankAccount',
            error: new DebitingBankAccountIsNotPossibleWithWrongCurrency(this.bankAccountId.toString(), 'HRK')
          })
        ]);
    });
  });

  describe('debiting a bank account is not possible if account would be overdrawn', function() {

    it('generates a bank account overdrawn exception', function() {

      Space.Application.test(BankAccount, ServerApp)
        .given([
          new commands.OpenBankAccount(_.extend({}, this.newBankAccountData, {
            targetId: this.bankAccountId
          }))
        ])
        .when(
          new commands.DebitBankAccount({
            targetId: this.bankAccountId,
            amount: new Money(500000, new Currency('EUR'))
          })
        )
        .expect([
          new Space.domain.Exception({
            thrower: 'BankAccount',
            error: new BankAccountOverdrawn(this.bankAccountId.toString())
          })
        ]);
    });
  });

});

