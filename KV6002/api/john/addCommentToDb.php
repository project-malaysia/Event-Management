<?php

//header("Access-Control-Allow-Origin:" "*");
//header("Access-Control-Allow-Methods: POST"); // Adjust the allowed methods as needed
//header("Access-Control-Allow-Headers: Content-Type");

/**
 * Created by John W Ridley for KV6002
 * This file handles the insert for putting data into the replies table.
 */

// Include the database connection
require_once("dataConnection.php");

// Check if all required parameters are provided
if (isset($_POST['thread_id']) && isset($_POST['user_id']) && isset($_POST['content'])) {
    try {
        // Get the provided parameters from the form
        $thread_id = $_POST['thread_id'];
        $user_id = $_POST['user_id'];
        $content = $_POST['content'];

        // Get a connection to the database
        $dbConn = getConnection();

        // Prepare the SQL statement to insert a new reply
        $sql = "INSERT INTO replies (thread_id, user_id, content) VALUES (:thread_id, :user_id, :content)";
        $statement = $dbConn->prepare($sql);

        // Bind the parameters and execute the statement
        $statement->bindParam(':thread_id', $thread_id);
        $statement->bindParam(':user_id', $user_id);
        $statement->bindParam(':content', $content);
        $result = $statement->execute();
        console.log($result);


        // Return success message
        echo json_encode(array('success' => true, 'message' => 'Reply added successfully'));
    } catch (Exception $e) {
        // Return error message
        echo json_encode(array('success' => false, 'message' => 'Failed to add reply: ' . $e->getMessage()));
    }
} else {
    // Return error message if required parameters are missing
    echo json_encode(array('success' => false, 'message' => 'Missing parameters'));
}

?>
