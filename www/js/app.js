$(document).ready(function() {

	get_employees();
	get_workplaces();
	get_shift();

	$('form').submit(function() {  
		event.preventDefault();
	});

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
});
