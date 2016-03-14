// import { Meteor } from 'meteor/meteor';
import { mocha } from 'meteor/avital:mocha';
// import { chai, assert } from "meteor/practicalmeteor:chai";
import BankingDomain from '../banking-domain-module';
import BankAccount from './bank-account';
import OpenAccountCommand from '../../domain-commands/open-account-command';
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
        nin: new NIN('21212121212')
      })
    };

  });

  describe('opening a bank account', function() {

    it('publishes bank account opened event', function() {
      BankingDomain.test(BankAccount)
        .given()
        .when(
          new OpenAccountCommand(Object.assign({}, this.newBankData, {
            targetId: this.bankAccountId
          }))
        )
        .expect([
          new BankAccountOpened(Object.assign({}, this.newBankData, {
            sourceId: this.bankAccountId
          }))
        ]);
    });
  });

});
