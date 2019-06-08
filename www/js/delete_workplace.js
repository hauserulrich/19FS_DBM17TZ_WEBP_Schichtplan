$(document).ready(function() { 

	//prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});
	
	//when click button call function
	$( "#btn_delete_workplace" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_workplace = $('#slc_workplaces_create_workplaces option:selected').text(); //read user input
    	if (selected_workplace.length > 0) { //check if user input not empty

    		$.ajax({ 
		   		type 		: 'POST', 
		    	url 		: 'db/delete_workplace.php', 
		    	data 		: ({workplace: selected_workplace}),
		    	dataType 	: 'json',
		    	success 	: function(data) {
		    		if (!data.success) { 
		    			if (data.errors) { // if error then post error message to message section
		    				$('#msg_error').html(data.errors);
		    				$('#msg_error').css("background-color", "#f44336"); 
		    			}
		   			}
		   			else { // if error then post error message to message section
		    			$('#msg_success').html(data.posted);
		    			$('#msg_success').css("background-color", "#4CAF50");
		    		}
				}
			});
		} else {
    		$('#msg_error').html('error: no workplace selected'); //post error if user input empty
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_workplaces();	
	});
});