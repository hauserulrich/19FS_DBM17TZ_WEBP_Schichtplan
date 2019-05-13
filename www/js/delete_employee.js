$(document).ready(function() {

	$('form').submit(function() {  
		event.preventDefault();
	});
 
    $( "#btn_delete_employee" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_employee = $('#slc_employees_create_employees option:selected').text();
		if (selected_employee.length > 0) { 
    	
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'db/delete_employee.php', 
		    	data 		: ({name: selected_employee}),
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
    		$('#msg_error').html('error: no employee selected');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_employees();	
	});
});