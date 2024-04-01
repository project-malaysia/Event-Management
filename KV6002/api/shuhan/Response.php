<?php

namespace UserReg;

/**
 * Class Response
 * @package App
 * @author Shuhan Wali
 */
class Response
{
    public function __construct()
    {
        $this->outputHeaders();
 
        // If HTTP request method is OPTIONS, exits the script
        if (Request::method() == "OPTIONS") {
            exit();
        }
    }
    
    // Output HTTP headers for JSON response
    // These headers allow (CORS) and remove CORS fetch error
    // Authorization allows browser to make request 
    private function outputHeaders()
    {
        header('Access-Control-Allow-Headers: Authorization');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    }
 
    public function outputJSON($data)
    {
        if (empty($data)) {
            http_response_code(204);
        }
        echo json_encode($data);
    }
}
