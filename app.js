
$(document).on("ready", function() {


	if ("geolocation" in navigator) {
		console.log("Geolocation is available");

		navigator.geolocation.getCurrentPosition(displayPosition,showPositionError);
	}

	else {
		alert("Oops, you don't have Geolocation. Time to upgrade your browser");
	}
});




// -------------------------------------------------------------


function displayPosition (data){
	console.log("Got position");
	//console.log(data);  pull all data to analyze
	//console.log(data.coords.latitude);  pull latitude dataset to analyze
	//console.log(data.coords.longitude); pull longitude dataset to analyze

	//$(".js-set-lat").text(data.coords.latitude);
	//$(".js-set-long").text(data.coords.longitude);

	var latitude = data.coords.latitude;
	var longitude = data.coords.longitude;

	$(".js-set-map").html(`<img src="http://maps.googleapis.com/maps/api/staticmap?size=1000x1000&zoom=15&center=${latitude},${longitude}">`);
}


// ------------------------------------------------------------
function showPositionError(error) {
	console.log("Failed to get position :( ");
	console.log(error);
}