Template.information.rendered = function(){

	// Meteor.call('what', function(err, res){
	// 	console.log(res);
	// })

	Meteor.call('what', function(err, data)
	{
		console.log(data);
		Session.set("testing", data);

		// Session.setPersistant("testing", data);
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
	}


});

