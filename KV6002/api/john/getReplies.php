<?php
/**
 * Created by John W Ridley for KV6002
 * PHP file for checking the replies database
 */

header("Access-Control-Allow-Origin: *");

require_once("dataConnection.php");

try {
    //Connection to the database
    $dbConn = getConnection();
    
    // Do a check firstly to see if a thread-id is passed
    if (!isset($_GET['thread_id'])) {
        throw new Exception('Thread ID is missing');
    }
    
    // Get the thread_id from the request
    $threadId = $_GET['thread_id'];
    
    // Get the replies from the database joining with the users db so that usernames instead of ID's are displayed.
    $sqlQuery = "SELECT replies.id, replies.thread_id, replies.content, users.username
                 FROM replies
                 INNER JOIN users ON replies.user_id = users.id
                 WHERE replies.thread_id = :thread_id";
    
    // Prepare
    $statement = $dbConn->prepare($sqlQuery);
    $statement->bindParam(':thread_id', $threadId, PDO::PARAM_INT);
    
    // Execute
    $statement->execute();
    
    // Fetch data and format it as an array of reply objects
    $replies = $statement->fetchAll(PDO::FETCH_ASSOC);
    
    // Output the data as JSON
    header('Content-Type: application/json');
    echo json_encode($replies);
} catch (Exception $e) {
    // Handle any errors
    echo "Error: " . $e->getMessage();
}

?>

