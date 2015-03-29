
Meteor.methods({

	what: function(usrStart, usrEnd){
		var apiCall = "https://maps.googleapis.com/maps/api/directions/json?&mode=driving&origin=" + 
			usrStart + "&destination=" + usrEnd + 
			"&key=AIzaSyCbtIooDUgve2uxChkXiKG6v1W3_fNv-Z4";

		var result = Meteor.http.call("GET", apiCall);

		var distance = result.data.routes[0].legs[0].distance.text;
		var time = result.data.routes[0].legs[0].duration.text;
		var start = result.data.routes[0].legs[0].start_address;
		var end = result.data.routes[0].legs[0].end_address;
		var steps = result.data.routes[0].legs[0].steps;

		var i;
		var length = result.data.routes[0].legs[0].steps.length;
		for (i = 0; i < length; i = i + 1)
		{
			steps[i].html_instructions = steps[i].html_instructions.replace(/(<([^>]+)>)/ig, " ");
		}

		var info = [distance, time, start, end, steps];

		return info;
	},


	hotels: function(usrEnd){
		var apiCall = "http://api.hotwire.com/v1/deal/hotel?format=json&apikey=ngyewqe42k3nzqw2qwvwub57&limit=5&dest="
			+ usrEnd + "&distance=%2A%7E30&starrating=4%7E%2A&sort=price";

		var apiRes = JSON.parse(Meteor.http.call("GET", apiCall).content);

		var i;
		var length = apiRes.Result.length;
		var rating = [];
		var price = [];	
		for (i = 0; i < length; i++)
		{
			rating[i] = apiRes.Result[i].StarRating;
			price[i] = "$" + apiRes.Result[i].Price;
		}

		var hotelInfo = [rating, price];

		return hotelInfo;
	}



});













