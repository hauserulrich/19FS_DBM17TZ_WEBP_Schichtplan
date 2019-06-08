<?php

    include 'connection.php';

    $dblog = array();
    $result = array();

    $name = $_POST['name'];

    $sql = "INSERT INTO mitarbeiter (name)VALUES ('$name');";

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); 

    try { 
        $conn = new mysqli($servername, $username, $password, $database); 

        if (!$conn->connect_error) {
            $dblog['success'] = true;
            $dblog['message'] = "database operation was successful";

            if (!mysqli_query($conn, $sql))
                {
                    $dblog['success'] = false;
                    $dblog['message']  = mysqli_error($conn);
                    $dblog['code']  = "";
                    $sql['sql']  = "";
                }
            else {
                $output = mysqli_query($conn, $sql);
                //while ( $row = $output->fetch_assoc())  {
                //    $result[]=$row; 
                //}
            }

        }
    } 

    //catch (mysqli_sql_exception $e) {
    catch (Exception $e) {
        $dblog['success'] = false;
        $dblog['message']  = $e->getMessage();
        $dblog['code']  = $e->getCode();
        $sql['sql']  = $sql;
    }

    finally { //optional code that always runs
    }

    echo json_encode(array($dblog, $result));
?>