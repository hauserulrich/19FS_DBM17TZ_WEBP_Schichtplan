function get_workplaces() {
		
	$('.slc_workplaces').find('option').remove();

	$.ajax({
		type 		: 'POST',
		url 		: 'db/get_workplaces.php',
		dataType 	: 'json',
		success 	: function(data) {
			$.each(data, function( index, value ) {
				$('.slc_workplaces').append('"<option value="' + value.beschreibung + '">' + value.beschreibung + '</option>');
			});
       	}  
    });
}