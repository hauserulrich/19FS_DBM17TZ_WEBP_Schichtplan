<?php

    include 'connection.php';

	$errors = array();
    $ok = array();
    $form_data = array(); 

    $workplace = $_POST['workplace'];
    
    $sql = "INSERT INTO arbeitsplatz (beschreibung)
            VALUES ('$workplace')";

    if ($connection->query($sql) === TRUE) {
        $ok = "successfully created new workplace -> $workplace"; }
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