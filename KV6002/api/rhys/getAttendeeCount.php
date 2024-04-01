<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate, max-age=0');

// Database connection details
$host = 'nuwebspace_db';
$dbname = 'w20013313';
$username = 'w20013313';
$password = 'BlackJack@14';

$dsn = "mysql:host=$host;dbname=$dbname;charset=UTF8";

try {
    $conn = new PDO($dsn, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $eventId = isset($_GET['eventId']) ? $_GET['eventId'] : 0; // Get the eventId from the query parameter

    $stmt = $conn->prepare("SELECT COUNT(*) AS attendeeCount FROM attendees WHERE event_id = :event_id");
    $stmt->bindParam(':event_id', $eventId, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'attendeeCount' => (int)$result['attendeeCount']]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>