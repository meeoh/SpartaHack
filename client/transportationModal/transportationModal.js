Template.transportationModal.events({

	'click .test': function(e){
	
		var start = $('.startField').val();
		var end = $('.endField').val();
		var mode = $('.active').text();

		if(mode == "Car"){ mode = "driving"; }
		else if (mode == "Bike") { mode = "bicycling"; }
		else if (mode == "Transit") { mode = "transit"; }
		else if (mode == ""){
			return false;
		}

		if(mode == ""){
		console.log("gg");
	}

		Session.setPersistent("usrStart", start);
		Session.setPersistent("usrEnd", end);
		Session.setPersistent("mode", mode);
	},

	'click .car': function(e){
		 $('.car').addClass('active');
		 $('.plane').removeClass('active');
		 $('.transit').removeClass('active');
	},
	'click .plane': function(e){
		 $('.car').removeClass('active');
		 $('.plane').addClass('active');
		 $('.transit').removeClass('active');
	},
	'click .transit': function(e){
		 $('.car').removeClass('active');
		 $('.plane').removeClass('active');
		 $('.transit').addClass('active');
	}




	

});