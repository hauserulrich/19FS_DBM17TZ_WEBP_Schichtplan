$(document).ready(function() { 

	$('form').submit(function() {  
		event.preventDefault();
	});

	$( "#btn_create_workplace" ).click(function() {
		
		empty_messages(); // clear the message section

		var create_workplace = $('#txb_workplace_name').val();
		$('#txb_workplace_name').val('');

		if (create_workplace.length > 2) { 
		
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'db/create_workplace.php', 
		    	data 		: ({workplace: create_workplace}),
		   		dataType 	: 'json',
		    	success 	: function(data) {
		    		if (!data.success) { 
		    			if (data.errors) { 
		    				$('#msg_error').html(data.errors);
		    				$('#msg_error').css("background-color", "#f44336"); 
		    			}
		   			}
		   			else {
			    		$('#msg_success').html(data.posted);
		    			$('#msg_success').css("background-color", "#4CAF50");
		    		}
				}
			});
		} else {
    		$('#msg_error').html('error: workplace name must consist of at least 3 characters');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_workplaces();		
	});
});