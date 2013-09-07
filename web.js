var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var html = fs.readFile("index.html", "utf8", function(error, data){
    console.log(data);
});

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
