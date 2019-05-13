function get_shift() {
    	
    $('#table_shift tbody').empty();

	$.ajax({
		type 		: 'POST',
		url 		: 'db/get_shift.php',
		dataType 	: 'json',
		success 	: function(data) {
			//console.log(data);
			$.each(data, function( index, value ) {
				$('#table_shift > tbody:last-child').append('<tr id="'+value.id_sp+'"><td class="td_nam">'+value.name+'</td><td class="td_des">'+value.beschreibung+'</td><td class="td_dat">'+value.datum+'</td><td class="td_ti1">'+value.zeitvon+'</td><td class="td_ti2">'+value.zeitbis+'</td></tr>')
				$('#table_shift td').css("border-bottom", '1px solid #e7e7e7');
			});
       	}  
    });
}