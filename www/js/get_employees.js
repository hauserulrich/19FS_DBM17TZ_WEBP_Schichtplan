function get_employees() {

	$('.slc_employees').find('option').remove();

	$.ajax({
		type 		: 'POST',
		url 		: 'db/get_employees.php',
		dataType 	: 'json',
		success 	: function(data) {
			$.each(data, function( index, value ) {
				$('.slc_employees').append('"<option value="' + value.name + '">' + value.name + '</option>');
			});
      		}  
   	});
}