<?php

    //include mysqli connection parameters
    include 'connection.php';

    //define variables
	$errors = array();
    $ok = array();
    $form_data = array(); 

    //get POST parameters from ajax
    $id_sp = $_POST['id_sp'];

    //prepare sql statement
    $sql = "DELETE FROM schicht WHERE schicht.id_sp = '$id_sp'";

    //execute sql statement and catch errors
    if ($connection->query($sql) === TRUE) {
        $ok =  "successfully deleted shift"; }
    else {
        $errors = "error: " . $sql . " --> " . $connection->error; }
    
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