//When the page loads, grab and display all of our chirps.
// alert("hello"); --> to test that html is linked correctly to javascript

$.get("/api/all", function(data){
	if(data.length !== 0){
		for(var i =0; i<data.length; i++){
			var row = $("#chirpies");
			row.addClass("chirp");
			row.append("<p>" + data[i].author +" chirped: </p>");
			row.append("<p>" + data[i].body + "<p>");
			row.append("<p> At " + moment(data[i].created_at).format("h:m") +"</p> <hr>");
			$("#chirp-area").prepend(row);
		}
	}
});

//When a user chirps (clicks addbtn)
$("#chirp-submit").on("click", function(event){
	event.preventDefault();

//Make a new chirp object every time user clicks submit
	var newChirp = {
		author:$("#author").val(),
		body:$("#chirp-box").val(),
		created_at:moment().format("YYYY-MM-DD H:mm:ss")
	};

	console.log(newChirp);

	//Empty each input box by replacing the value with an empty string
	$("#author").val("");
	$("#chirp-box").val("");

	//Send an ajax POST-request with JQuery
	$.post("/api/new",newChirp)
		.done(function(){
			var row = $("#chirpies");
			row.addClass("chirp");
			row.append ("<p>" + newChirp.author + " chirped: </p>");
			row.append("<p>" + newChirp.body + "</p>");
			row.append("<p> At " + moment(newChirp.created_at).format("h:mm:ss")+"</p> <hr>"
				);
			$("#chirp-area").prepend(row);
		});
});




