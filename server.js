//this file is the initial starting point for the node

//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//sets up the Express App
var app = express();
var PORT = process.env.PORT ||8080;

//sets up the express app to handle data parsing 
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//Static directory to be served 
app.use(express.static ("app/public"));
//Routes
require("./app/routes/api-route.js")(app);
//starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});