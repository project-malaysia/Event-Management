<?php

/**
 * Created by John W Ridley for KV6002
 * Database handling for the getting of the threads stored in the database.
 */

header("Access-Control-Allow-Origin: *");

// Include the file with the database connection
require_once("dataConnection.php");

try {
    // Get a connection to the database
    $dbConn = getConnection();
    
    // Query to retrieve threads data
    $sqlQuery = "SELECT threads.id, threads.title, threads.content, users.username
    FROM threads
    INNER JOIN users ON threads.user_id = users.id";
    
    // Prepare and execute the query
    $statement = $dbConn->prepare($sqlQuery);
    $statement->execute();
    
    // Fetch data and format it as an array of thread objects
    $threads = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    // Output the data as JSON
    header('Content-Type: application/json');
    echo json_encode($threads);
} catch (Exception $e) {
    // Handle any errors
    echo "Error: " . $e->getMessage();
}

?>
