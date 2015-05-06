var augments = require('./augments');

var randomMoney = function(){
    return augments.toUSD(augments.randomNumber(100, 1000000));
};

var accountBalance = function(){
  return "Account balance: \n";
};

module.exports.randomMoney = randomMoney;
module.exports.accountBalance = accountBalance;