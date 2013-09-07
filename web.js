var express = require('express');
var app = express();
app.use(express.logger());

var html = fs.readFile("./index.html");

app.get('/', function(request, response) {
  response.send(html.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
