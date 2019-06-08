<?php

    //include mysqli connection parameters
    include 'connection.php';

    //define variables
	$errors = array();
    $ok = array();
    $form_data = array(); 

    //get POST parameters from ajax
    $name = $_POST['name'];
    $workplace = $_POST['workplace'];
    $date = $_POST['date'];
    $time_from = $_POST['time_from'];
    $time_until = $_POST['time_until'];

    //prepare sql statement
    $sql = "INSERT INTO schicht (id_ma, id_ap, datum, zeitvon, zeitbis)
            VALUES  ((SELECT id_ma from mitarbeiter where name='$name'), 
            (SELECT id_ap from arbeitsplatz where beschreibung='$workplace'),
            '$date', 
            '$time_from', 
            '$time_until')";
    
    //execute sql statement and catch errors 
    if ($connection->query($sql) === TRUE) {
        $ok =  "successfully created new shift"; }
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