$(document).ready(function() {    

	//prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});
	
	//when click button call function
    $( "#btn_change_shift" ).click(function() {

    	empty_messages(); // clear the message section
    	
    	if ($('tr').hasClass('selected')) { //when table row is selected read variables in row
    		
    		var selected_employee = $('#slc_employees_create_shift option:selected').text();
			var selected_workplace = $('#slc_workplaces_create_shift option:selected').text();
    		var shift_id = $('.selected').attr("id");
    		var time_from = $('#tme_from_creat_shift').val();
  			var time_to = $('#tme_to_creat_shift').val();
  			var date = $('#dat_create_shift').val();

  			// if variables not empty
  			if (shift_id.length > 0 && selected_employee.length > 0 && selected_workplace.length > 0 && Date.parse(date)) {

	  			$.ajax({ 
			    	type 		: 'POST', 
			    	url 		: 'db/update_shift.php', 
		    		data 		: {id_sp: shift_id, name: selected_employee, workplace: selected_workplace, date: date, time_from: time_from, time_until: time_to},
		    		dataType 	: 'json',
		    		success 	: function(data) {
		    			if (!data.success) {
		    				if (data.errors) {  // if error then post error message to message section
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
    	    } else {
    		$('#msg_error').html('error: empty data posted'); // error message if variables empty
		    $('#msg_error').css("background-color", "#f44336"); 
    	}		
        } else {
    		$('#msg_error').html('error: no shift selected'); // error message if no table row is selected
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
    });
});