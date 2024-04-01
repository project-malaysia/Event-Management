<?php
 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
 
include("../config/autoloader.php");
spl_autoload_register("autoloader");

$response = new Loginn\Response();

$option = isset($_GET['option']) ? $_GET['option'] : null;
 
switch ($option) {
    case 'signin':
        $endpoint = new Loginn\SignIn();
        break;
    case 'signup':
        $endpoint = new Loginn\Signupp();
        break;
    case 'endpoint':
        $endpoint = new Loginn\Endpoint();
        break;
    default:
        $endpoint = new Loginn\Endpoint(['message' => 'No option specified']);
}
 
$data = $endpoint->getData();

$response->outputJSON($data);