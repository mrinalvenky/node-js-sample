var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var len = 0;

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  var buf = data;
});

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
