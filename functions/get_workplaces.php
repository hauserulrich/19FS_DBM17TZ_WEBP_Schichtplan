<?php
	include 'connection.php';

    $result = $connection->query("SELECT beschreibung FROM arbeitsplatz");
    $arr_workplaces = array();
	while ( $row = $result->fetch_assoc())  {
		$arr_workplaces[]=$row; 
	}
    
    echo json_encode($arr_workplaces);
    
?>	