class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  printStatement() {
    const statement = []
    for (let i = 0; i < this.transactions.length; i++) {      
      const statementLine = {
        'Date': this.transactions[i].date,
        'Credit': this.transactions[i].credit,
        'Debit': this.transactions[i].debit,
        'Balance': this.transactions[i].balance
      };

      statement.push(statementLine)

      // console.log(statementLine)
    }
    return statement
  }
}

module.exports = Statement;
