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
const Statement = require('../src/Statement')

describe('bank, transaction, statement', () => {
  let bank;
  let transaction;
  let statement;

  beforeEach(() => {
    bank = new BankAccount();
    transaction = new Transaction();
    statement = new Statement();
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
    const expected = 1000;
    bank.balance = 0
    // execute
    bank.deposit('10/01/2012', 1000);
    const result = bank.balance
    // verify
    expect(result).toEqual(expected)
  });

  it("withdraw from account", () => {
    // setup
    const expected = 2500;
    bank.balance = 3000;
    // execute
    bank.withdrawal('14/10/2012', 0, 500);
    const result = bank.balance
    // verify
    expect(result).toEqual(expected)
  });

  fit("get statement", () => {
    // setup
    const expected = [
      { Date: "10/01/2012", Credit: 1000, Debit: null, Balance: 1000 },
      { Date: "13/10/2012", Credit: 2000, Debit: null, Balance: 3000 },
      { Date: "14/10/2012", Credit: null, Debit: 500, Balance: 2500 }
    ];
    // execute
    expect(bank.transactions.length).toEqual(0);

    bank.deposit("10/01/2012", 1000, null);
    bank.deposit("13/10/2012", 2000, null);
    bank.withdrawal("14/10/2012", null, 500);
    const result = bank.getStatement();
    console.log('Statement', result);
    // verify
    expect(result).toEqual(expected);
  });

  // it("get statement", () => {
  //   // setup
  //   const expected = 3
  //   // execute
  //   expect(bank.transactions.length).toEqual(0)
  //   bank.deposit('10/01/2012', 1000, 0)
  //   bank.deposit('13/10/2012', 2000, 0)
  //   bank.withdrawal('14/10/2012', 0, 500)
  //   console.log('Statement', bank.transactions);
  //   // verify
  //   expect(bank.transactions.length).toEqual(expected)
  // });
})