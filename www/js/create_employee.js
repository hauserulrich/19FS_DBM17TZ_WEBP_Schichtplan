$(document).ready(function() {

	$('form').submit(function() {  
		event.preventDefault();
	});

    $( "#btn_create_employee" ).click(function() {

    	empty_messages(); // clear the message section

    	var create_employee = $('#txb_employee_name').val();
    	$('#txb_employee_name').val('');

    	if (create_employee.length > 2) { 	    	
		
    		$.ajax({ 
		    	type 		: 'POST', 
			    url 		: 'db/create_employee.php', 
			    data 		: ({name: create_employee}),
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
    		$('#msg_error').html('error: employee name must consist of at least 3 characters');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_employees();	
	});
});