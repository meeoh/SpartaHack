Template.transportationModal.events({

	'click .test': function(e){

		var start = $('.start').val();
		var end = $('.end').val();
		console.log(start);
		console.log(end);

		Session.setPersistent("start", start);
		Session.setPersistent("end", end);

	

	}


});