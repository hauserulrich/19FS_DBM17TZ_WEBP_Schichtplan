$(document).ready(function() {

	get_employees(); //refresh dropdown menue
	get_workplaces(); //refresh dropdown menue
	get_shift(); //refresh shift table

  //prevent form default submit
	$('form').submit(function() {  
		event.preventDefault();
	});

    //when click into table
    $(document).on('click','tbody tr',function(){

    //read variables from selected
		$('.selected').removeClass('selected'); //remove class if exists
    	$(this).addClass("selected"); //add class to to selected row for css purpose (highlight)
    	
      //read table row to variables
    	var name = $('.td_nam',this).html(); 
    	var description =$('.td_des',this).html();
     	var date =$('.td_dat',this).html();
    	var time_from =$('.td_ti1',this).html();
    	var time_to =$('.td_ti2',this).html();
    	
      //set input fields to values from selected row
    	$('#slc_employees_create_shift').val(name);
		  $('#slc_workplaces_create_shift').val(description);
  		$('#dat_create_shift').val(date);
  		$('#tme_from_creat_shift').val(time_from);
  		$('#tme_to_creat_shift').val(time_to);
  		
	}); 
});
