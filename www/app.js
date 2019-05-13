$(document).ready(function() {

	get_employees();
	get_workplaces();
	get_shift();

	$('form').submit(function() {  
		event.preventDefault();
	});

	function empty_messages() {
		$('#msg_error').empty();
		$('#msg_success').empty();
	}

	function get_employees() {

		$('.slc_employees').find('option').remove();

		$.ajax({
			type 		: 'POST',
			url 		: 'functions/get_employees.php',
			dataType 	: 'json',
			success 	: function(data) {
				$.each(data, function( index, value ) {
					$('.slc_employees').append('"<option value="' + value.name + '">' + value.name + '</option>');
				});
       		}  
    	});
    }

    function get_workplaces() {
		
		$('.slc_workplaces').find('option').remove();

		$.ajax({
			type 		: 'POST',
			url 		: 'functions/get_workplaces.php',
			dataType 	: 'json',
			success 	: function(data) {
				$.each(data, function( index, value ) {
					$('.slc_workplaces').append('"<option value="' + value.beschreibung + '">' + value.beschreibung + '</option>');
				});
       		}  
    	});
    }

    function get_shift() {
    	
    	$('#table_shift tbody').empty();

		$.ajax({
			type 		: 'POST',
			url 		: 'functions/get_shift.php',
			dataType 	: 'json',
			success 	: function(data) {
				console.log(data);
				$.each(data, function( index, value ) {
					$('#table_shift > tbody:last-child').append('<tr id="'+value.id_sp+'"><td class="td_nam">'+value.name+'</td><td class="td_des">'+value.beschreibung+'</td><td class="td_dat">'+value.datum+'</td><td class="td_ti1">'+value.zeitvon+'</td><td class="td_ti2">'+value.zeitbis+'</td></tr>')
					$('#table_shift td').css("border-bottom", '1px solid #e7e7e7');
				});
       		}  
    	});
    }

    $(document).on('click','tbody tr',function(){

		$('.selected').removeClass('selected');
    	$(this).addClass("selected");
    	
    	var name = $('.td_nam',this).html();
    	var description =$('.td_des',this).html();
     	var date =$('.td_dat',this).html();
    	var time_from =$('.td_ti1',this).html();
    	var time_to =$('.td_ti2',this).html();
    	
    	$('#slc_employees_create_shift').val(name);
		$('#slc_workplaces_create_shift').val(description);
  		$('#dat_create_shift').val(date);
  		$('#tme_from_creat_shift').val(time_from);
  		$('#tme_to_creat_shift').val(time_to);
  		
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
		   		url 		: 'functions/create_shift.php', 
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

    $( "#btn_delete_shift" ).click(function() {

    	empty_messages(); // clear the message section

		if ($('tr').hasClass('selected')) {
  		
  			var shift_id = $('.selected').attr("id");

  			$.ajax({ 
		    	type 		: 'POST', 
			    url 		: 'functions/delete_shift.php', 
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


    $( "#btn_change_shift" ).click(function() {

    	empty_messages(); // clear the message section
    	
    	if ($('tr').hasClass('selected')) {
    		
    		var selected_employee = $('#slc_employees_create_shift option:selected').text();
			var selected_workplace = $('#slc_workplaces_create_shift option:selected').text();
    		var shift_id = $('.selected').attr("id");
    		var time_from = $('#tme_from_creat_shift').val();
  			var time_to = $('#tme_to_creat_shift').val();
  			var date = $('#dat_create_shift').val();

  			if (shift_id.length > 0 && selected_employee.length > 0 && selected_workplace.length > 0 && Date.parse(date)) {

	  			$.ajax({ 
			    	type 		: 'POST', 
			    	url 		: 'functions/update_shift.php', 
		    		data 		: {id_sp: shift_id, name: selected_employee, workplace: selected_workplace, date: date, time_from: time_from, time_until: time_to},
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
        } else {
    		$('#msg_error').html('error: no shift selected');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
    });

    $( "#btn_create_employee" ).click(function() {

    	empty_messages(); // clear the message section

    	var create_employee = $('#txb_employee_name').val();
    	$('#txb_employee_name').val('');

    	if (create_employee.length > 2) { 	    	
		
    		$.ajax({ 
		    	type 		: 'POST', 
			    url 		: 'functions/create_employee.php', 
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

	$( "#btn_create_workplace" ).click(function() {
		
		empty_messages(); // clear the message section

		var create_workplace = $('#txb_workplace_name').val();
		$('#txb_workplace_name').val('');

		if (create_workplace.length > 2) { 
		
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'functions/create_workplace.php', 
		    	data 		: ({workplace: create_workplace}),
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
    		$('#msg_error').html('error: workplace name must consist of at least 3 characters');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_workplaces();		
	});

    $( "#btn_delete_employee" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_employee = $('#slc_employees_create_employees option:selected').text();
		if (selected_employee.length > 0) { 
    	
    		$.ajax({ 
		    	type 		: 'POST', 
		    	url 		: 'functions/delete_employee.php', 
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

    $( "#btn_delete_workplace" ).click(function() {

    	empty_messages(); // clear the message section

  	    var selected_workplace = $('#slc_workplaces_create_workplaces option:selected').text();
    	if (selected_workplace.length > 0) { 

    		$.ajax({ 
		   		type 		: 'POST', 
		    	url 		: 'functions/delete_workplace.php', 
		    	data 		: ({workplace: selected_workplace}),
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
    		$('#msg_error').html('error: no workplace selected');
		    $('#msg_error').css("background-color", "#f44336"); 
    	}
	get_workplaces();	
	});
});
