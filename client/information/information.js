Template.information.helpers({

	'starting': function() {
		return (Session.get("info"))[2];
	},
	'ending': function() {
		return (Session.get("info"))[3];
	}


});