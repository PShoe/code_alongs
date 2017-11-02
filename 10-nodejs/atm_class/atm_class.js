class Atm {

  constructor(type = 'checking', balance = 0){
    this.type = type
    this.balance = balance
    this.transactionHistory = []
  }
  getBalance(){
    return this.balance
  }
  withdraw(withdrawal){
    var newAmount = this.balance - withdrawal
    this.transactionHistory.push('added ' + withdrawal)
    this.balance = newAmount
  }
  deposit(deposit){
    var newAmount = this.balance + deposit
    this.transactionHistory.push('removed ' + deposit)
    this.balance = newAmount
  }
  getTransactionHistory(){
    return this.transactionHistory.join(', ')
  }
}

var atmNoParams = new Atm
var atm1 = new Atm ('checking', 40)
var atm2 = new Atm ('savings', 600)


debugger
