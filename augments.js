var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var toUSD = function (number) {
    var number = number.toString(),
        dollars = number.split('.')[0],
        cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
};

module.exports.randomNumber = randomNumber;
module.exports.toUSD = toUSD;