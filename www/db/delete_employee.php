<?php
    //include mysqli connection parameters
    include 'connection.php';

    //define variables
	$errors = array(); 
    $ok = array();
    $form_data = array();

    //get POST parameters from ajax
    $name = $_POST['name'];

    //prepare sql statement
	$sql = "DELETE FROM mitarbeiter WHERE name = '$name'";

    //execute sql statement and catch errors 
	if ($connection->query($sql) === TRUE) {
    	$ok = "successfully deleted employee -> $name"; }
    else {
    	$errors = "error: " . $sql . "<br>" . $connection->error; }
    
    //write success or error messages to array for send back to ajax
    if (!empty($errors)) { 
    	$form_data['success'] = false;
    	$form_data['errors']  = $errors;
    } else {
    	$form_data['success'] = true;
    	$form_data['posted'] = $ok;
    }

    //send back array in json format
    echo json_encode($form_data);
    
?>	