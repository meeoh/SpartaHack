Template.index.rendered = function() {
	var info = Meteor.call('what');
	Session.setPersistent("info", info);
	console.log(info);
}