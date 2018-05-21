//this file offers a set of routes for diplaying
//Dependencies

var connection = require("../config/connection.js");

//Routes (controller a colleciton of routes)
module.exports = function(app){
	//Get all chirps 
	app.get("/api/all", function(req, res){
		var dbQuery = "SELECT * FROM message";
		connection.query(dbQuery, function(err, result){
			res.json(result);
		})
	});

	//Add a chirp 
	app.post ("/api/new", function(req, res){
		console.log("Chirp data: ");
		console.log(req.body);

		var dbQuery = "INSERT INTO message (author, body, created_at) VALUES (?,?,?)";
		connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err,result){
			req.body.body, req
			console.log("chirp successfully saved!");
			res.send();
		});
	});
};

