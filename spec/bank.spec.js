/* DOMAIN MODEL
class BankAccount
PROPERTIES: 
    - balance: number
    - transactions: from Transactions.js
METHODS:
    - constructor
    - getBalance()

class Transaction
PROPERTIES: 
    - constructor
METHODS:
    - creditAccount: date(string), amount(number)
    - debitAccount: date(string), amount(number)

class Statement
PROPERTIES: 
METHODS:

TESTS
- Each test must add the new transaction to the previous ones?
- Each test must update both the balance, but also the credit or debit objects
*/

const BankAccount = require('../src/BankAccount') 
const Transaction = require('../src/Transaction')

describe('bank, transaction', () => {
  let bank;
  let transaction;

  beforeEach(() => {
    bank = new BankAccount();
    transaction = new Transaction();
  });

  it ('get initial balance', () => {
    // setup
    const expected = 0.00
    // execute
    const result = bank.getBalance() 
    // verify
    expect(result).toEqual(expected)
  });

  it("deposit in to account", () => {
    // setup
    // const expected = {
    //     date: '10/01/2012',
    //     credit: 1000.00
    // }
    const expected = 1000;
    expect(bank.balance).toEqual(0)
    // execute
    // const result = transaction.creditAccount(expected.date, expected.credit)
    bank.deposit(1000);
    const result = bank.balance
    // verify
    expect(result).toEqual(expected)
  });

  it("withdraw from account", () => {
    // setup
    const expected = 2500;
    expect(bank.balance).toEqual(3000)
    // execute
    bank.withdrawal(500)
    const result = bank.balance
    // verify
    expect(result).toEqual(expected)
  });

  it("get statement", () => {
    // setup
    const expected = 3
    // execute
    expect(bank.transactions.length).toEqual(0)
    bank.deposit(1000)
    bank.deposit(2000)
    bank.withdrawal(500)
    console.log('Statement', bank.transactions);
    // verify
    expect(bank.transactions.length).toEqual(expected)
  });
})