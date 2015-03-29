Template.information.rendered = function(){


	Meteor.call('hotels', Session.get('usrEnd'), function(err, res)
	{
		Session.set("hotelInfo", res);
	});

	Meteor.call('what', Session.get('usrStart'), Session.get("usrEnd"), Session.get("mode"),
		function(err, data)
	{
		Session.set("testing", data);
	});

	Meteor.call('restuarants', function(err, res)
	{
		console.log(res);
		Session.set("restaurantz", res);
	});
};

Template.information.helpers({

	'starting': function() {
		return Session.get("testing")[2];
	},
	'ending': function() {
		return Session.get("testing")[3];
	},
	'timing': function() {
		return Session.get("testing")[1];
	},
	'distance': function() {
		return Session.get("testing")[0];
	},
	'steps': function() {
		return Session.get("testing")[4];
	},
	'rating': function(i){
		return Session.get("hotelInfo")[0][i];
	},
	'pricing': function(i){
		return Session.get("hotelInfo")[1][i];
	},
	'hotelName': function(i){
		return Session.get("hotelInfo")[2][i];
	},
	'restaurantName': function(i) {
		return Session.get("restaurantz")[0][i];
	},
	'restaurantPhone': function(i) {
		return Session.get("restaurantz")[2][i];
	},
	'restaurantAddress': function(i) {
		return Session.get("restaurantz")[1][i];
	}
});

