<?php

    include 'connection.php';

	$errors = array();
    $ok = array();
    $form_data = array(); 

    $name = $_POST['name'];

    $sql = "INSERT INTO mitarbeiter (name)
            VALUES ('$name')";
        
    if ($connection->query($sql) === TRUE) {
        $ok = "successfully created new employee -> $name"; }
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