import { Mongo } from 'meteor/mongo';

export const BankAccountTransactions = new Mongo.Collection('bank_account_transactions');
export const BankAccounts = new Mongo.Collection('bank_accounts');
