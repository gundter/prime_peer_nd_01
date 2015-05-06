var augments = require('./augments');

var randomMoney = function(){
    return augments.toUSD(augments.randomNumber(0, 2000));
};

module.exports = randomMoney;