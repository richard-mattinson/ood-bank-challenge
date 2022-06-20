class Transaction {
  constructor(amount, balance) {
    this.amount = amount;
    this.date = Date.now();
    this.balance = balance
  }
}
module.exports = Transaction;
