var express = require('express');
var app = express();

var randomMoney = require('./randomMoney');


app.set('port', 5000);

app.get('/', function(request, response){
   response.sendStatus(randomMoney.accountBalance() + randomMoney.randomMoney());
});

app.listen(app.get('port'), function(){
   console.log("Node app running on port: ", app.get('port'));
});
