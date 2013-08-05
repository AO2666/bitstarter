var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

//var buffer_text = new Buffer( 100);

var buf = new Buffer( 1000);

buf = fs.readFileSync('./index.html'); 

var OutString = buf.toString(); 

// console.log(OutString);

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send(OutString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
