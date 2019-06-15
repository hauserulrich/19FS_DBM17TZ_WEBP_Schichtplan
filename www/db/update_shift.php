<?php

    //include mysqli connection parameters
    include 'connection.php';

    //define variables
	$errors = array();
    $ok = array();
    $form_data = array(); 

    //get POST parameters from ajax
    $date = $_POST['date'];
    $time_from = $_POST['time_from'];
    $time_until = $_POST['time_until'];
    $id_sp = $_POST['id_sp'];
    $name = $_POST['name'];
    $workplace = $_POST['workplace'];  

    //prepare sql statement
    $sql = "UPDATE schicht 
            INNER JOIN mitarbeiter ON mitarbeiter.name = '$name'
            INNER JOIN arbeitsplatz ON arbeitsplatz.beschreibung = '$workplace'
            SET schicht.id_ma = mitarbeiter.id_ma,
                schicht.id_ap = arbeitsplatz.id_ap,
                schicht.datum = '$date', 
                schicht.zeitvon = '$time_from', 
                schicht.zeitbis = '$time_until' 
            WHERE schicht.id_sp = '$id_sp'";

    //execute sql statement and catch errors 
    if ($connection->query($sql) === TRUE) {
        $ok =  "successfully updated shift"; }
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