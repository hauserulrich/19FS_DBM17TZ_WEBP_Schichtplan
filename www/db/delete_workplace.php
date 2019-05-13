<?php
    include 'connection.php';
	$errors = array(); 
    $ok = array();
    $form_data = array(); 

    $workplace = $_POST['workplace'];

	$sql = "DELETE FROM arbeitsplatz WHERE beschreibung = '$workplace'";
    
	if ($connection->query($sql) === TRUE) {
    	$ok = "successfully deleted workplace -> $workplace"; }
    else {
    	$errors = "error: " . $sql . "<br>" . $connection->error; }
    
    if (!empty($errors)) { 
    	$form_data['success'] = false;
    	$form_data['errors']  = $errors;
    } else { 
    	$form_data['success'] = true;
    	$form_data['posted'] = $ok;
    }

    echo json_encode($form_data);
    
?>	