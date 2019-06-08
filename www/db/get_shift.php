<?php

	//include mysqli connection parameters
	include 'connection.php';

	//define variables
	$arr_shift = array();

	//prepare sql statement
	$sql = "select schicht.id_sp, mitarbeiter.name, arbeitsplatz.beschreibung, schicht.datum, schicht.zeitvon, schicht.zeitbis 
            from schicht
            inner join mitarbeiter on schicht.id_ma = mitarbeiter.id_ma 
            inner join arbeitsplatz on schicht.id_ap = arbeitsplatz.id_ap;";

    //execute sql statement
    $result = mysqli_query($connection, $sql);
    
    //loop through output and write to array
	while ( $row = $result->fetch_assoc())  {
		$arr_shift[]=$row; 
	}
    
    //send back array in json format
    echo json_encode($arr_shift);

?>	