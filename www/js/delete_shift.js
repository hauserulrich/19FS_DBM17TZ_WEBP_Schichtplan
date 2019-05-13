$(document).ready(function() {

	$('form').submit(function() {  
		event.preventDefault();
	});
 
	$( "#btn_delete_shift" ).click(function() {

    	empty_messages(); // clear the message section

		if ($('tr').hasClass('selected')) {
  		
  			var shift_id = $('.selected').attr("id");

  			$.ajax({ 
		    	type 		: 'POST', 
				url 		: 'db/delete_shift.php', 
		    	data 		: {id_sp: shift_id},
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
    		$('#msg_error').html('error: no shift selected');
			$('#msg_error').css("background-color", "#f44336"); 
    	}
   		get_shift();	
	});
});