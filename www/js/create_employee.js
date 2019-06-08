$(document).ready(function() {

	//prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});

	//when click button call function
    $( "#btn_create_employee" ).click(function() {

    	empty_messages(); // clear the error message section

    	var create_employee = $('#txb_employee_name').val(); //read user input (name of the employee)
    	$('#txb_employee_name').val(''); //empty textbox

    	if (create_employee.length > 2) { //check if user input > 2	    	
		
    		$.ajax({ 
		    	type 		: 'POST', 
			    url 		: 'db/create_employee.php', 
			    data 		: ({name: create_employee}),
			    dataType 	: 'json',
			    success 	: function(data) {
			    	if (!data.success) {  
			    		if (data.errors) { // if error then post error message to message section, create_employee was not successful
		    				$('#msg_error').html(data.errors);
		    				$('#msg_error').css("background-color", "#f44336"); //error message has a red background
		    			}
		   			}
		   			else { // if error then post error message to message section
		    			$('#msg_success').html(data.posted); //create_employee is sucessful
		    			$('#msg_success').css("background-color", "#4CAF50"); //message has a green background
		    		}
				} 
			});
        } else {
    		$('#msg_error').html('error: employee name must consist of at least 3 characters'); //if user input not > 2 post error message, create_employee was not successful
		    $('#msg_error').css("background-color", "#f44336"); //error massage has a red background 
    	}
	get_employees(); //refresh employee in dropdown menue	
	});
});