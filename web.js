var express = require('express');

var app = express.createServer(express.logger());

//var buffer_text = new Buffer( 100);

var file_buffer = new Buffer;

file_buffer = fs.readFile(index.html); file

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  response.send(buf.toString(file_buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
