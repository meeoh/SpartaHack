
Meteor.methods({

	what: function(usrStart, usrEnd, mode){
		 var apiCall = "https://maps.googleapis.com/maps/api/directions/json?mode=" + mode + "&origin=" + 
		 	usrStart + "&destination=" + usrEnd + 
		 	"&key=AIzaSyBda3mujOJDxUX7Rie_-ad1uW2F0Sp7NQw";
	


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
		var name = [];
		for (i = 0; i < length; i++)
		{
			rating[i] = apiRes.Result[i].StarRating;
			price[i] = "$" + apiRes.Result[i].Price;
			name[i] = apiRes.Result[i].Neighborhood;
		}

		var hotelInfo = [rating, price, name];

		return hotelInfo;
	},


	restuarants: function(){
		var apiCall = "https://api.locu.com/v1_0/venue/search/?locality=toronto&api_key=1b8379d16654e9b0217381d049b37a75542ea3d7";

		var apiRes = JSON.parse(Meteor.http.call("GET", apiCall).content);

		var rest = apiRes.objects;

		var i;
		var length = apiRes.objects.length;
		var name = [];
		var address = [];	
		var phone = [];

		if (length > 5){ length = 5; }

		for (i = 0; i < length; i++)
		{
			name[i] = rest[i].name;
			address[i] = rest[i].street_address;
			phone[i] = rest[i].phone;
		}

		var toReturn = [name, address, phone];
		console.log(toReturn);

		return toReturn;
	}


});













