Template.index.rendered = function() {

$('.title').hide();
$('.title').fadeIn(4000);

}



Template.index.events({
	
	'click .travel': function(e){
		var error;

		if($('.startField').val() == "")
		{
			$('.startField').addClass('invalid');
			error = 1;
		}
		else 
		{
			$('.startField').removeClass('invalid');			
		}

		if($('.endField').val() == "")
		{
			$('.endField').addClass('invalid');	
			error = 1;
		}
		else {
			$('.endField').removeClass('invalid');
		}
		if(error == 1){ return false; }

	}

	
});

