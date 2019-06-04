$(document).ready(function() {

	//prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});
 
 	//when click button call function
	$( "#btn_delete_shift" ).click(function() {

    	empty_messages(); // clear the message section

		if ($('tr').hasClass('selected')) { //when table row is selected read variables in row
  		
  			var shift_id = $('.selected').attr("id"); //id form table

  			$.ajax({ 
		    	type 		: 'POST', 
				url 		: 'db/delete_shift.php', 
		    	data 		: {id_sp: shift_id},
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
    		$('#msg_error').html('error: no shift selected'); //post error if user input empty
			$('#msg_error').css("background-color", "#f44336"); 
    	}
   		get_shift();	
	});
});