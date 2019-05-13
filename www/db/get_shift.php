<?php

	include 'connection.php';
	$arr_shift = array();

	$sql = "select schicht.id_sp, mitarbeiter.name, arbeitsplatz.beschreibung, schicht.datum, schicht.zeitvon, schicht.zeitbis 
            from schicht
            inner join mitarbeiter on schicht.id_ma = mitarbeiter.id_ma 
            inner join arbeitsplatz on schicht.id_ap = arbeitsplatz.id_ap;";

    $result = mysqli_query($connection, $sql);
    
	while ( $row = $result->fetch_assoc())  {
		$arr_shift[]=$row; 
	}
    
    echo json_encode($arr_shift);

?>	