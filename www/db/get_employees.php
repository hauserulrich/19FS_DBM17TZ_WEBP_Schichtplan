<?php
	include 'connection.php';

    $result = $connection->query("SELECT name FROM mitarbeiter");
    $arr_employees = array();
	while ( $row = $result->fetch_assoc())  {
		$arr_employees[]=$row; 
	}
    
    echo json_encode($arr_employees);
    
?>	