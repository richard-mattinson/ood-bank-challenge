const Transaction = require('../src/Transaction')
const Statement = require('../src/Statement')

class BankAccount {
  constructor() {
    this.balance = 0.00;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }

  deposit(date, credit, debit) {
    this.balance += credit;
    this.transactions.push(new Transaction(date, credit, debit, this.balance));
  }

  // deposit(amount) {
  //   this.balance += amount;
  //   this.transactions.push(new Transaction(amount, this.balance));
  // }
  // new Transaction is doing the same work as
  // {amount, date: Date.now(), balance: this.balance}
  // but is pulling the date from Transactions instead

  withdrawal(date, credit, debit) {
    this.balance -= debit;
    this.transactions.push(new Transaction(date, credit, debit, this.balance));
  }

  getStatement() {
    const statement = new Statement(this.transactions)
    return statement.printStatement()
  }
}

module.exports = BankAccount;