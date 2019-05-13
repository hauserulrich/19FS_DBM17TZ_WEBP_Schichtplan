$(document).ready(function() {

	$('form').submit(function() {  
		event.preventDefault();
	});
	 
	$( "#btn_create_shift" ).click(function() {
		
		empty_messages(); // clear the message section

		var selected_employee = $('#slc_employees_create_shift option:selected').text();
		var selected_workplace = $('#slc_workplaces_create_shift option:selected').text();
  		var time_from = $('#tme_from_creat_shift').val();
  		var time_to = $('#tme_to_creat_shift').val();
  		var date = $('#dat_create_shift').val();

  		if (selected_employee.length > 0 && selected_workplace.length > 0 && Date.parse(date)) {

	    	$.ajax({ 
			  	type 		: 'POST', 
			   	url 		: 'db/create_shift.php', 
		    	data 		: {name: selected_employee, workplace: selected_workplace, date: date, time_from: time_from, time_until: time_to},
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
			get_shift();
		} else {
	    	$('#msg_error').html('error: empty data posted');
			$('#msg_error').css("background-color", "#f44336"); 
    	}		
	});
});