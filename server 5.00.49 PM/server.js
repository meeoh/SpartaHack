
Meteor.methods({

	what: function(){
		//this.unblock();

		var result = Meteor.http.call("GET","https://maps.googleapis.com/maps/api/directions/json?origin=14 osprey court ontario&destination=8 bird court cambridge ontario&key=AIzaSyCbtIooDUgve2uxChkXiKG6v1W3_fNv-Z4");
		// var result = "hi";

		var distance = result.data.routes[0].legs[0].distance.text;
		var time = result.data.routes[0].legs[0].duration.text;
		var start = result.data.routes[0].legs[0].start_address;
		var end = result.data.routes[0].legs[0].end_address;

		var info = [distance, time, start, end];
		// var info = "test";
		//return result;
		// end_location

		return info;

		var i;
		var length = result.data.routes[0].legs[0].steps.length;
		for (i = 0; i < length; i = i + 1)
		{
			console.log(result.data.routes[0].legs[0].steps[i].html_instructions);
		}

		console.log(distance);
		console.log(time);
		console.log(start);
		console.log(end);


	

		// console.log(result);
		//return info;
	}


});