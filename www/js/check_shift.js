$(document).ready(function() {

	//prevent form default submit
	$('form').submit(function() {
		event.preventDefault();
	});

	//when click button call function
		$( "#btn_create_shift" ).click(function() {
/*
************************************
the following code is disabled in case of an error during the validation between the enterd employee and date fields
and the json output. We weren't able to fix this issue. With focus on the main functions of this website, we decided
to disable this part of the script.

The current code section checks the individual JSON series with the checks set. Shifts are created as soon as a defined
check is not fulfilled. We couldn't figure out how to skip these checks and create only the required individual user entry.
A possible solution would be a data record list showing the shifts of the selected person to perform the check.
After various solution attempts and time expenditure of now more than 30 working hours only for this part,
we decided to exclude this function.
Overall the workload is already well over 36 working hours per person. L. Müller / N. Schwendimann
************************************

  // read variables
  var selected_employee = $('#slc_employees_create_shift option:selected').text();  //collect selected employee from html
  var date = $('#dat_create_shift').val();  //collect date from html

    // ajax request
    $.ajax({
      type 		   : 'POST',
      async      : false,
      url 		   : 'db/get_shift.php',
  	  dataType 	 : 'json',
  	  success 	  : function(data) {
        $.each(data, function(index, value) {      //check each row from json output
          if (date == value.datum && selected_employee == value.name) {       //compare entered values with DB result values
            $('#msg_error').html('error: Datum und Mitarbeiter sind gleich'); //post error message if variables not valid
    			  $('#msg_error').css("background-color", "#f44336");;              //color of error message
          }
          else if (selected_employee !== value.name && date == value.date) {  //compare entered values with DB result values
            $('#msg_error').html('error: Datum und Mitarbeiter sind gleich'); //post error message if variables not valid
    			  $('#msg_error').css("background-color", "#f44336");;              //color of error message
          }
          else {
              empty_messages(); // clear the message section
              create_shift();   // run function
            }
        });
      }
    });
*/
      create_shift();   //run function (without any checks from json compare)
    });
    });
