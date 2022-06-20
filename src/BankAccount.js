const Transaction = require('../src/Transaction')

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

  deposit(date, credit) {
    this.balance += credit;
    this.transactions.push(new Transaction(date, credit, this.balance));
  }

  // deposit(amount) {
  //   this.balance += amount;
  //   this.transactions.push(new Transaction(amount, this.balance));
  // }
  // new Transaction is doing the same work as
  // {amount, date: Date.now(), balance: this.balance}
  // but is pulling the date from Transactions instead

  withdrawal(date, debit) {
    this.balance -= debit;
    this.transactions.push(new Transaction(date, debit, this.balance));
  }
}

module.exports = BankAccount;