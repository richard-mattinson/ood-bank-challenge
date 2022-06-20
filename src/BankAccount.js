const Transaction = require('../src/Transaction')

class BankAccount {
  constructor() {
    this.balance = 0.0;
    this.transactions = [];
  }

    getBalance() {
      return this.balance;
    }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(new Transaction(amount, this.balance));
  }
  // new Transaction is doing the same work as
  // {amount, date: Date.now(), balance: this.balance}
  // but is pulling the date from Transactions instead

  withdrawal(amount) {
    this.balance -= amount;
    this.transactions.push(new Transaction(amount, this.balance));
  }

}

module.exports = BankAccount;