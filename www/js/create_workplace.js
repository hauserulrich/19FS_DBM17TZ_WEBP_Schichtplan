$(document).ready(function() { //execute function when window is loaded

	//prevent form default submit
	$('form').submit(function() {   // form can be submitted by clicking on button 
		event.preventDefault();
	});

	$( "#btn_create_workplace" ).click(function() { //when click button call function
		
		empty_messages(); // execute function empty_messages. clear the message section

		var create_workplace = $('#txb_workplace_name').val(); //read user input
		$('#txb_workplace_name').val(''); //empty textbox

		if (create_workplace.length > 2) { //check if user input > 2
		
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'db/create_workplace.php', 
		    	data 		: ({workplace: create_workplace}),
		   		dataType 	: 'json',
		    	success 	: function(data) {
		    		if (!data.success) { 
		    			if (data.errors) {  // if error then post error message to message section
		    				$('#msg_error').html(data.errors); // post error
		    				$('#msg_error').css("background-color", "#f44336"); //style of error message. Background color = red
		    			}
		   			}
		   			else { // if correct (no error) then post data
			    		$('#msg_success').html(data.posted); // post data 
		    			$('#msg_success').css("background-color", "#4CAF50"); //style of error message. Background color = green
		    		}
				}
			});
		} else {
    		$('#msg_error').html('error: workplace name must consist of at least 3 characters'); //if user input not > 2 post error message
		    $('#msg_error').css("background-color", "#f44336"); // style of error message. Background color = red
    	}
	get_workplaces(); //execute funcion get_workplaces		
	});
});