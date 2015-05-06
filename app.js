var express = require('express');
var app = express();

var randomNumber = require('./randomNumber');

app.set('port', 5000);

app.get('/', function(request, response){
   response.sendStatus(randomNumber(0, 100));
});

app.listen(app.get('port'), function(){
   console.log("Node app running on port: ", app.get('port'));
});
