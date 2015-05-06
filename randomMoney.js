var augments = require('./augments');

var randomMoney = function(){
    return augments.randomNumber(0, 100);
};

module.exports = randomMoney;