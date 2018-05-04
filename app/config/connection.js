//this file initiates the connection MYSQL
//Requires MYSQL

var mysql = require("mysql");
//set up our connection information

var connection = mysql.connection({
	port:3306,
	host:"localhost",
	user:"root",
	password:"toor",
	database:"chirpy"
});

//Connect to the database

connection.connect(function(err){
	if(err){
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;