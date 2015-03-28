
Meteor.methods({

	what: function(){
		var result = Meteor.http.call("GET","https://maps.googleapis.com/maps/api/directions/json?origin=14 osprey court ontario&destination=8 bird court cambridge ontario&key=AIzaSyCbtIooDUgve2uxChkXiKG6v1W3_fNv-Z4");

		var distance = result.data.routes[0].legs[0].distance.text;
		var time = result.data.routes[0].legs[0].duration.text;
		var start = result.data.routes[0].legs[0].start_address;
		var end = result.data.routes[0].legs[0].end_address;
		var steps = result.data.routes[0].legs[0].steps;

		var i;
		var length = result.data.routes[0].legs[0].steps.length;
		for (i = 0; i < length; i = i + 1)
		{
			// console.log(result.data.routes[0].legs[0].steps[i].html_instructions);
			result.data.routes[0].legs[0].steps[i].html_instructions = 
			$.parseHTML(result.data.routes[0].legs[0].steps[i].html_instructions);

		}

		var info = [distance, time, start, end, steps];
		return info;
	}
});