$(document).ready(function() {
	//global variables
	var fullKey;

	// On "Submit" click
	$("#submit").on("click", function() {

		//Variables
		let key = "&key=ch010065553";
		let name = "name=" + $("#nameSearch").val().toLocaleLowerCase();
		fullKey = "https://www.behindthename.com/api/lookup.json?" + name + key;
		
		// Reset
		$("#images").empty();
		$("#content").empty();

		$.ajax({
        	method: "GET",
        	url: fullKey,
        	dataType: "json",
        	success: function(data, status) {
        		try{
        			document.getElementById("nameAlert").innerHTML = "";
        			if (data["0"]["gender"] == "f") {
        			$("#images").append("<img src='img/female.png'></img>");
        			$("#container").css("background-color", "pink");
        		}
        		else if (data["0"]["gender"] == "m") {
        			$("#images").append("<img src='img/male.png'></img>");
        			$("#container").css("background-color", "aqua");
        		} else {
        			$("#images").append("<img src='img/female.png'></img>");
        			$("#images").append("<img src='img/male.png'></img>");
        			$("#container").css("background-color", "yellow");
        		}

        		$("#content").append("<p> Name: " + data["0"]["name"] + "</p>");
        		$("#content").append("<p> Native Language: " + data["0"]["usages"]["0"]["usage_full"] + "</p>");
        		$("#content").append("<br><p>Click to get more information!</p>");
        		$("#content").append("<p>(Thanks to the power of Wikipedia)</p>");
        		}
        		catch(err) {
        			console.log("Error!");
        			document.getElementById("nameAlert").innerHTML = "Error! Name not found in database!";
        			$("#nameAlert").css("background-color", "red");
        		}
          }

        }); //ajax
	}); //Submit

	$("#container").on("click", function() {
		$.ajax({
			method:"GET",
			url: fullKey,
			dataType: "json",
			success: function(data, status) {
				try {
					window.open("https://en.wikipedia.org/wiki/" + data["0"]["name"]);
				} catch(err) {
        			console.log("Error!");
        			document.getElementById("nameAlert").innerHTML = "Error! Name not found in database!";
        			$("#nameAlert").css("background-color", "red");
				}
			}
		}); //Ajax
	}); //Extrabutton
});