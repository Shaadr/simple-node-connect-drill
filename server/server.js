var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var keys = require('./secretKeys')
var port = 3737;

// TODO server front end files with static √
app.use(express.static('public')) // once per project

app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({secret:keys.expressSecret})) // √ make sure session & keys are required

app.post("/api/screenname", function(req, res){
  // TODO Save screenname to session
  // console.log("Got Screename: " + req.body.name);
  req.session.screenname = req.body.name;

})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
