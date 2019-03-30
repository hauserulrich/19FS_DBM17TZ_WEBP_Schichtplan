<!DOCTYPE html>

<?php
	include 'connection.php';
	include 'functions.php';
?>

<head>
	<title>Schichtplan</title>
	<link href="design.css" rel="stylesheet">
</head>

<body>
	<div style="background-color:#B9E4FF; width: 1100px; height: 25px">
		<form method="post">
  		Mitarbeiter:
  		<input type="text" name="textbox_employee" style="width:100px;">
  		<input type="submit" name="create_employee" value="Anlegen">
		Mitarbeiter: 
		<select name="dropdown_employee" style="width:100px;">
		<?php
			$dropdown_menue = $connection->query("SELECT name from mitarbeiter" );
			while($rows = $dropdown_menue->fetch_assoc()) {
				$name = $rows['name'];
				echo "<option value='$name'>$name</option>"; }
		?>	
		</select>
		<input type="submit" name="delete_employee" value="Löschen">
		</form>
	</div>
	<div style="background-color:#94E1FF; width: 1100px; height: 25px">
		<form method="post">
  		Arbeitsplatz:
  		<input type="text" name="textbox_workplace" style="width:100px;">
  		<input type="submit" name="create_workplace" value="Anlegen">
		Arbeitsplatz: 
		<select name="dropdown_workplace" style="width:100px;">
		<?php
			$dropdown_menue_workplace = $connection->query("SELECT beschreibung from arbeitsplatz" );
			while($rows = $dropdown_menue_workplace->fetch_assoc()) {
				$beschreibung = $rows['beschreibung'];
				echo "<option value='$beschreibung'>$beschreibung</option>"; }
		?>	
		</select>
		<input type="submit" name="delete_workplace" value="Löschen">
		</form>
	</div>
	<div style="background-color:#B4C6CC; width: 1100px; height: 25px">
		<form method="post">
		Mitarbeiter: 
		<select name="dropdown_employee_shift" style="width:100px;">
		<?php
			$dropdown_menue = $connection->query("SELECT name from mitarbeiter" );
			while($rows = $dropdown_menue->fetch_assoc()) {
				$name = $rows['name'];
				echo "<option value='$name'>$name</option>"; }
		?>	
		</select>
		Arbeitsplatz: 
		<select name="dropdown_workplace_shift" style="width:100px;">
		<?php
			$dropdown_menue_workplace = $connection->query("SELECT beschreibung from arbeitsplatz" );
			while($rows = $dropdown_menue_workplace->fetch_assoc()) {
				$beschreibung = $rows['beschreibung'];
				echo "<option value='$beschreibung'>$beschreibung</option>"; }
		?>	
		</select>
		Datum:
  		<input type="date" name="textbox_date" style="width:130px;">
  		Zeit von:
  		<input type="time" name="textbox_time_from" step="1" style="width:130px;">
  		Zeit bis:
  		<input type="time" name="textbox_time_until" step="1" style="width:130px;">
  		<input type="submit" name="create_shift" value="Speichern">
		</form>
	</div>
	<div style="background-color:#E1F8FF; width: 1100px; height: 40px">
		<?php

		$create_name = filter_input(INPUT_POST, 'textbox_employee');
		$delete_name = filter_input(INPUT_POST, 'dropdown_employee');
		$create_workplace = filter_input(INPUT_POST, 'textbox_workplace');
		$delete_workplace = filter_input(INPUT_POST, 'dropdown_workplace');
		$create_shift_employee = filter_input(INPUT_POST, 'dropdown_employee_shift');
		$create_shift_workplace = filter_input(INPUT_POST, 'dropdown_workplace_shift');
		$date = filter_input(INPUT_POST, 'textbox_date');
		$time_from = filter_input(INPUT_POST, 'textbox_time_from');
		$time_until = filter_input(INPUT_POST, 'textbox_time_until');

		if(isset($_POST["create_employee"])) {
    		echo create_employee($create_name, $connection); }
		if(isset($_POST["delete_employee"])) {
 		   	delete_employee($delete_name, $connection); }
 		if(isset($_POST["create_workplace"])) {
    		echo create_workplace($create_workplace, $connection); }
    	if(isset($_POST["delete_workplace"])) {
 		   	echo delete_workplace($delete_workplace, $connection); }
 		if(isset($_POST["create_shift"])) {
 		   	echo create_shift($create_shift_employee, $create_shift_workplace, $date, $time_from, $time_until, $connection); }
		?>
	</div>
	<h1>Schichtplan</h1>
	<div style="background-color:#ffffff; width: 1100px; height: 400px">
		<table>
            <tr>
                <th>Name</th>
                <th>Arbeitsplatz</th>
                <th>Datum</th>
                <th>Von</th>
                <th>Bis</th>
            </tr>
      	
      	<?php
      	echo get_shift($connection);
      	include 'disconnect.php';
		?> 
      
        </table>
	</div>	

</body>
</html>