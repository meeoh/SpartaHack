Template.information.rendered = function(){

	Meteor.call('hotels', Session.get('usrEnd'), function(err, res)
	{
		Session.set("hotelInfo", res);
	});

	Meteor.call('what', Session.get('usrStart'), Session.get("usrEnd"),
		function(err, data)
	{
		Session.set("testing", data);
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
	'rating': function(){
		return Session.get("hotelInfo")[0];
	},
	'pricing': function(){
		return Session.get("hotelInfo")[1];
	}
});

