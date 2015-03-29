Template.transportationModal.events({

	'click .test': function(e){
	
		var start = $('.start').val();
		var end = $('.end').val();

		Session.setPersistent("usrStart", start);
		Session.setPersistent("usrEnd", end);
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
	},

	'click .travel': function(e){
		if($('.startField').val() == "")
		{
			$('.startField').addClass('invalid');
		}
		else 
		{
			$('.startField').removeClass('invalid');
		}

		if($('.endField').val() == "")
		{
			$('.endField').addClass('invalid');	
		}
		else {
			$('.endField').removeClass('invalid');
		}
	}

});