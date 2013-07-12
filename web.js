var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

//var buffer_text = new Buffer( 100);

//var FileBuffer = new Buffer( 1000);

var FileBuffer = fs.readFile('index.html'); 

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send(FileBuffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
