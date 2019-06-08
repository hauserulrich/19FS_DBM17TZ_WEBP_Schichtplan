<?php

	//include mysqli connection parameters
	include 'connection.php';

	//define variables
	$arr_employees = array();

	//execute sql statement
    $result = $connection->query("SELECT name FROM mitarbeiter");
    
    //loop through output and write to array
	while ( $row = $result->fetch_assoc())  {
		$arr_employees[]=$row; 
	}
    
    //send back array in json format
    echo json_encode($arr_employees);
    
?>	