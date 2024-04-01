<?php

/**
 * Created by John W Ridley for KV6002
 * PHP script for adding the new threads into the threads table
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include the database connection
require_once("dataConnection.php");

// Check if all required parameters are provided
if (isset($_POST['user_id']) && isset($_POST['title']) && isset($_POST['content'])) {
    try {
        // Get the provided parameters from the forum
        //userId is set to 2 as a temporary placeholder.
        //The userId will be changed once integrated with Shuhans system
        $user_id = $_POST['user_id'];
        $title = $_POST['title'];
        $content = $_POST['content'];

        // Get a connection to the database
        $dbConn = getConnection();

        // Prepare the SQL statement to insert a new thread
        $sql = "INSERT INTO threads (user_id, title, content) VALUES (:user_id, :title, :content)";
        $statement = $dbConn->prepare($sql);
        
        // Bind the parameters and execute the statement
        $statement->bindParam(':user_id', $user_id);
        $statement->bindParam(':title', $title);
        $statement->bindParam(':content', $content);
        //$statement->execute();

        $result = $statement->execute();
        console.log($result);

        if ($result === false) {
            die('Error executing the query: ' . $statement->errorInfo()[2]);
        }

        // Return success message
        echo json_encode(array('success' => true, 'message' => 'Thread added successfully'));
    } catch (Exception $e) {
        // Return error message
        echo json_encode(array('success' => false, 'message' => 'Failed to add thread: ' . $e->getMessage()));
    }
} else {
    // Return error message if required parameters are missing
    echo json_encode(array('success' => false, 'message' => 'Missing parameters'));
}

?>
