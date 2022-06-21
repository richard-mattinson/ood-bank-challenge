class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  printStatement() {
    for (let i = 0; i < this.transactions.length; i++) {
      const statementDate = ['Date', this.transactions[i].date]
      const statementCredit = ['Credit Amount', this.transactions[i].credit]
      const statementDebit = ['Debit Amount', this.transactions[i].debit]
      const statementBalance = ['Balance', this.transactions[i].balance]
      
      const statementLine = {
        statementDate,
        statementCredit,
        statementDebit,
        statementBalance,
      };

      console.log(statementLine)
  }
}
}

module.exports = Statement;
