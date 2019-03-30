<?php
function create_employee($name, $connection){
	$sql = "INSERT INTO mitarbeiter (name)
	VALUES ('$name')";
	if ($connection->query($sql) === TRUE) {
    	return "Neuer Mitarbeiter erfolgreich angelegt"; }
    else {
        return "Fehler: " . $sql . " --> " . $connection->error; }
}

function delete_employee($name, $connection){
	$sql = "DELETE FROM mitarbeiter WHERE name = '$name'";
	if ($connection->query($sql) === TRUE) {
    	return "Mitarbeiter wurde gelöscht"; }
    else {
    	return "Fehler: " . $sql . "<br>" . $connection->error; }
}

function create_workplace($arbeitsplatz, $connection){
    $sql = "INSERT INTO arbeitsplatz (beschreibung)
    VALUES ('$arbeitsplatz')";
    if ($connection->query($sql) === TRUE) {
        return "Neuer Arbeitsplatz erfolgreich angelegt"; }
    else {
        return "Fehler: " . $sql . " --> " . $connection->error; }
}

function delete_workplace($arbeitsplatz, $connection){
    $sql = "DELETE FROM arbeitsplatz WHERE beschreibung = '$arbeitsplatz'";
    if ($connection->query($sql) === TRUE) {
        return "Arbeitsplatz wurde gelöscht"; }
    else {
        return "Fehler: " . $sql . "<br>" . $connection->error; }
}
function create_shift($name, $arbeitsplatz, $date, $time_from, $time_until, $connection){
    $sql = "INSERT INTO schicht (id_ma, id_ap, datum, zeitvon, zeitbis)
    VALUES  ((SELECT id_ma from mitarbeiter where name='$name'), 
            (SELECT id_ap from arbeitsplatz where beschreibung='$arbeitsplatz'),
            '$date', 
            '$time_from', 
            '$time_until')";
    if ($connection->query($sql) === TRUE) {
        return "Neue Schicht erfolgreich angelegt"; }
    else {
        return "Fehler: " . $sql . " --> " . $connection->error; }
}
function get_shift($connection){
    $sql =  "select mitarbeiter.name, arbeitsplatz.beschreibung, schicht.datum, schicht.zeitvon, schicht.zeitbis 
            from schicht
            inner join mitarbeiter on schicht.id_ma = mitarbeiter.id_ma 
            inner join arbeitsplatz on schicht.id_ap = arbeitsplatz.id_ap;";
    $result = mysqli_query($connection, $sql);
    $dataRow = "";
    while($row = mysqli_fetch_array($result)) {
        $dataRow = $dataRow."<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td><td>$row[4]</td></tr>"; }
    return $dataRow;
}
?>

