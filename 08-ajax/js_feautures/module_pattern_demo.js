console.log('working?')
var count = 0;
function increment() {
  counter++
}

var counterMaker = function(initialCount) {
  var count = initialCount || 0;
  var publicApi = {
    count: function() {
      return count;
    },
    increment: function(incrementNum) {
      count = count + incrementNum;
    }
  }
  return publicApi;
}

var myCount = counterMaker(1);
myCount.count();



//not protected, too much freedom
var account = {
  balance: 0,
  deposit: function(amount){ balance = balance + amount }
}

account.balance = "lots of money"

// module pattern

var accountMaker = function(initialBalance) {
  var balance = initialBalance || 0;
  var publicApi = {
    getBalance: function(){
      return balance;
    },
    deposit: function(amount){
      balance = balance + amount;
    }
  }
  return publicApi;
}

var account = accountMaker(5000);
account.getBalance();

var jonAccount = accountMaker(100000000);

// iife (immediately invoked function expression)

function newScope() {
  var asdfasdf
  var pokok
  var cvcvcvc
}

newScope();
