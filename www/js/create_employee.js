$(document).ready(function() {

	$('form').submit(function() {  
		event.preventDefault();
	});

    $( "#btn_create_employee" ).click(function() {

    	empty_messages(); // clear the message section

    	var create_employee = $('#txb_employee_name').val();
    	$('#txb_employee_name').val('');

    	if (create_employee.length > 2) {

    		var request = $.ajax({
				url: "db/create_employee.php",
  				method: "POST",
  				data: ({name: create_employee}),
  				dataType: "json"
			});
			//done function: only write dblog to console
			request.done(function(data) {
				console.log(data[0]);
			});
 			//fail function: catch error if there is a server-side problem
			request.fail(function(jqXHR, textStatus, errorThrown) {
				console.log("error thrown in ajax call!");
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);

			});
			//then function: add handler if the action is resolved
			request.then(function(data) {
				//console.log(data[0].success);
				if (data[0].sucess = true) {
					$('#msg_success').text("successfully created employee");
		    		$('#msg_success').css("background-color", "#4CAF50");
				} else {
					$('#msg_error').html("error: could not create employee");
		    		$('#msg_error').css("background-color", "#f44336"); 
				} 
			}); 	    	
        } else {
    		$('#msg_error').html('error: employee name must consist of at least 3 characters');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	//get_employees();	
	});
});