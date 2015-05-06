var randomNumber = require('./randomNumber');

var randomMoney = function(){
    return randomNumber(0, 100);
};

module.exports = randomMoney;