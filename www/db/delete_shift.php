<?php

    include 'connection.php';

	$errors = array();
    $ok = array();
    $form_data = array(); 

    //$name = $_POST['name'];
    //$workplace = $_POST['workplace'];
    //$date = $_POST['date'];
    //$time_from = $_POST['time_from'];
    //$time_until = $_POST['time_until'];

    //$sql = "DELETE FROM schicht 
    //        WHERE schicht.id_ma IN (SELECT mitarbeiter.id_ma from mitarbeiter where mitarbeiter.name = '$name')
    //        AND schicht.id_ap IN (SELECT arbeitsplatz.id_ap FROM arbeitsplatz where arbeitsplatz.beschreibung = '$workplace')
    //        AND schicht.datum = '$date'
    //        AND schicht.zeitvon = '$time_from'
    //      AND schicht.zeitbis = '$time_until'";

    $id_sp = $_POST['id_sp'];

    $sql = "DELETE FROM schicht WHERE schicht.id_sp = '$id_sp'";

    if ($connection->query($sql) === TRUE) {
        //$ok =  "successfully deleted shift: " . $name . " | " . $workplace . " | " . $date . " | " . $time_from  . " | " . $time_until; }
        $ok =  "successfully deleted shift"; }
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