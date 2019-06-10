
function create_shift() {

		empty_messages(); // clear the message section

		//read variables
		var selected_employee = $('#slc_employees_create_shift option:selected').text();
		var selected_workplace = $('#slc_workplaces_create_shift option:selected').text();
  		var time_from = $('#tme_from_creat_shift').val();
  		var time_to = $('#tme_to_creat_shift').val();
  		var date = $('#dat_create_shift').val();

  		// if variables not empty
  		if (selected_employee.length > 0 && selected_workplace.length > 0 && Date.parse(date)) {


	    	$.ajax({
			  	type 		: 'POST',
			   	url 		: 'db/create_shift.php',
		    	data 		: {name: selected_employee, workplace: selected_workplace, date: date, time_from: time_from, time_until: time_to},
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
				get_shift(); // refresh shift table
				}
		else {
	    	$('#msg_error').html('error: empty data posted or invalid time slot'); //post error message if variables not valid
			$('#msg_error').css("background-color", "#f44336");
    	}
}
