$(document).ready(function() { 

	$('form').submit(function() {  
		event.preventDefault();
	});
	
	$( "#btn_delete_workplace" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_workplace = $('#slc_workplaces_create_workplaces option:selected').text();
    	if (selected_workplace.length > 0) { 

    		$.ajax({ 
		   		type 		: 'POST', 
		    	url 		: 'db/delete_workplace.php', 
		    	data 		: ({workplace: selected_workplace}),
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
    		$('#msg_error').html('error: no workplace selected');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_workplaces();	
	});
});