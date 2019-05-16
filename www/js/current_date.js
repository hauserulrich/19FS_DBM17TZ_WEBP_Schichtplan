window.onload = function current_date() {
		
	var myDate = new Date();

		var month = myDate.getMonth()+1;
		var day = myDate.getDate();

		var current_date = myDate.getFullYear() + '-' +
    	((''+month).length<2 ? '0' : '') + month + '-' +
    	((''+day).length<2 ? '0' : '') + day;

		//alert(current_date);

		document.getElementById("dat_create_shift").value = current_date;
}
