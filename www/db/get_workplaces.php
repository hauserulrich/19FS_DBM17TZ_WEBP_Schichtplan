<?php

	//include mysqli connection parameters
	include 'connection.php';

	//define variables
	$arr_workplaces = array();

	//execute sql statement
    $result = $connection->query("SELECT beschreibung FROM arbeitsplatz");
    
    //loop through output and write to array
	while ( $row = $result->fetch_assoc())  {
		$arr_workplaces[]=$row; 
	}
    
    //send back array in json format
    echo json_encode($arr_workplaces);
    
?>	