$(document).ready(function() {

	//prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});
 
	//when click button call function
    $( "#btn_delete_employee" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_employee = $('#slc_employees_create_employees option:selected').text(); //read user input
		if (selected_employee.length > 0) { //check if user input not empty
    	
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'db/delete_employee.php', 
		    	data 		: ({name: selected_employee}),
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
    		$('#msg_error').html('error: no employee selected'); //post error message if user input empty
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_employees();	
	});
});