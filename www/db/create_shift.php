<?php

    include 'connection.php';

	$errors = array();
    $ok = array();
    $form_data = array(); 

    $name = $_POST['name'];
    $workplace = $_POST['workplace'];
    $date = $_POST['date'];
    $time_from = $_POST['time_from'];
    $time_until = $_POST['time_until'];

    $sql = "INSERT INTO schicht (id_ma, id_ap, datum, zeitvon, zeitbis)
            VALUES  ((SELECT id_ma from mitarbeiter where name='$name'), 
            (SELECT id_ap from arbeitsplatz where beschreibung='$workplace'),
            '$date', 
            '$time_from', 
            '$time_until')";
    
    if ($connection->query($sql) === TRUE) {
        $ok =  "successfully created new shift"; }
    else {
        $errors = "error: " . $sql . " --> " . $connection->error; }
    
    if (!empty($errors)) { 
    	$form_data['success'] = false;
    	$form_data['errors']  = $errors;
    } else { 
    	$form_data['success'] = true;
    	$form_data['posted'] = $ok;
    }

    echo json_encode($form_data);
    
?>	