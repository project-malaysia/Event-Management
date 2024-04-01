<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection details
$host = 'nuwebspace_db';
$dbname = 'w20013313';
$username = 'w20013313';
$password = 'BlackJack@14';

// DSN (Data Source Name)
$dsn = "mysql:host=$host;dbname=$dbname;charset=UTF8";

try {
    $conn = new PDO($dsn, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $userName = isset($_POST['userName']) ? $_POST['userName'] : '';
    $eventId = isset($_POST['eventId']) ? $_POST['eventId'] : ''; // Capture the eventId from the POST data

    $stmt = $conn->prepare("INSERT INTO attendees (name, event_id) VALUES (:name, :event_id)");
    $stmt->bindParam(':name', $userName, PDO::PARAM_STR);
    $stmt->bindParam(':event_id', $eventId, PDO::PARAM_INT); // Bind the eventId
    
    $stmt->execute();

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
