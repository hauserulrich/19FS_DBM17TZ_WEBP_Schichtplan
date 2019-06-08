window.onload = function current_date() { //execute function when window is loaded 
		
	var myDate = new Date(); //define variable myDate

		var month = myDate.getMonth()+1; //define variable month
		var day = myDate.getDate(); //define variable day

		var current_date = myDate.getFullYear() + '-' + //define variable current_date = myDate
    	((''+month).length<2 ? '0' : '') + month + '-' + //how to display month (length)
    	((''+day).length<2 ? '0' : '') + day; //how to display day (length)

		document.getElementById("dat_create_shift").value = current_date;
}
