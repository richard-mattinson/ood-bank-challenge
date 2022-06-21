class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance
  }
}

// class Transaction {
//   constructor(amount, balance) {
//     this.amount = amount;
//     this.date = Date.now();
//     this.balance = balance;
//   }
// }
module.exports = Transaction;
