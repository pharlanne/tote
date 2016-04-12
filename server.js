var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var dataBaseURL = 'mongodb://localhost:27017/MyTotes'

var Tote = require('./client/src/models/tote.js')

app.use(bodyParser.json());

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.get("/totes", function(req, res){

  MongoClient.connect(dataBaseURL, function(err, db){
    var totes = db.listCollections();
    // console.log(totes)

    totes.toArray(function(err, docs){
      res.json(docs);
      db.close;
    })   
  })
});

app.get("/totes/single", function(req, res){

  MongoClient.connect(dataBaseURL, function(err, db){
    if(err){
      console.log(err);
      return;
    }
    var collection = db.collection("DreamTrip");//this is what would be sent when user clicks specific 
    //tote
    collection.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close;
    })
    
  })
});


app.post("/new", function(req, res){
  console.log(req.body)

  MongoClient.connect(dataBaseURL, function(err, db){
    
    var tote = new Tote(req.body.value)
    console.log(tote)
    db.createCollection(req.body.value);
    res.status(200).end();
    db.close();
  })

});

app.post("/totes/single/update", function(req, res){
  
  MongoClient.connect(dataBaseURL, function(err, db){
    var collection = db.collection("DreamTrip");//this wont be hardcoded 
    collection.update({name: "Paris"}, {$set:req.body});
    res.status(200).end();
    db.close;
  })
});

app.post("/totes/single/remove", function(req, res){

  MongoClient.connect(dataBaseURL, function(err, db){
    var collection = db.collection("FriendsHoldiday");//so have to actually post something i.e. name of 
    //colection we want to drop (in an object e.g. {name: <collectionName}  ) then do req.body.name
    collection.drop();
    res.status(200).end();
    db.close;
  })
});

app.use(express.static("client/build"));

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
