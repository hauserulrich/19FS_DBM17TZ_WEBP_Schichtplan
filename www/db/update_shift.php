<?php

    include 'connection.php';

	$errors = array();
    $ok = array();
    $form_data = array(); 

    $date = $_POST['date'];
    $time_from = $_POST['time_from'];
    $time_until = $_POST['time_until'];
    $id_sp = $_POST['id_sp'];
    $name = $_POST['name'];
    $workplace = $_POST['workplace'];  

    $sql = "UPDATE schicht 
            INNER JOIN mitarbeiter ON mitarbeiter.name = '$name'
            INNER JOIN arbeitsplatz ON arbeitsplatz.beschreibung = '$workplace'
            SET schicht.id_ma = mitarbeiter.id_ma,
                schicht.id_ap = arbeitsplatz.id_ap,
                schicht.datum = '$date', 
                schicht.zeitvon = '$time_from', 
                schicht.zeitbis = '$time_until' 
            WHERE schicht.id_sp = '$id_sp'";

    if ($connection->query($sql) === TRUE) {
        $ok =  "successfully updated shift"; }
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