//this file offers a set of routes for diplaying
//Dependencies

var connection = require("../config/connection.js");

//Routes (controller a colleciton of routes)
module.exports = function(app){
	//Get all chirps 
	app.get("api/all", function(req, res){
		var dbQuery = "SELECT * FROM chirps";
		conneciton.query(dbQuery, function(err, result){
			res.json(result);
		})
	});

	//
}