var express = require('server.js');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var dataBaseURL = 'mongodb://localhost:27017/'

app.use(bodyParser.json());

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});


app.use(express.static("client/build"));

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
