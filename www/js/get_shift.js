function (connection) {
    var sqlStatement = "select mitarbeiter.name, arbeitsplatz.beschreibung, schicht.datum, schicht.zeitvon, schicht.zeitbis "
    + "from schicht "
    + "inner join mitarbeiter on schicht.id_ma = mitarbeiter.id_ma "
    + "inner join arbeitsplatz on schicht.id_ap = arbeitsplatz.id_ap;";
    // Es wird angenommen, dass die Connection gegeben ist
    //conncetion.query führt das SELECT-Statement aus
    connection.query(sqlStatement, function (err, result, fields) {
        if (err) {
            Console.console.log("Es ist ein Fehler bei der Connection passiert.");
            throw err;
        }
        return "<tr><td>" + result[0] + "</td><td>" + result[1] + "</td><td>" + result[2] +"</td><td>" + result[3] + "</td><td>" + result[4] + "</td></tr>";
    });
}

/* sonstiger Lösungsansatz
$.ajax({
    url : 'functions.php', // Unsere php datei
    type : 'GET', // type of the HTTP request
    success : function(data){
       var obj = jQuery.parseJSON(data); // Hier würde ich die Daten bekommen
       console.log(obj);
       return "<tr><td>" + data[0] + "</td><td>" + data[1] + "</td><td>" + data[2] +"</td><td>" + data[3] + "</td><td>" + data[4] + "</td></tr>";
    }
 });*/
