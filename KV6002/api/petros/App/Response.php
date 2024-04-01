<?php

namespace App;

/**
 * Class Response.
 * 
 * @author Petros Tamboutsiaris W21004471
 */
 
class Response
{
    /**
    * Constructor for Response. OPTIONS is an HTTP request method 
    * used to see which headers are returned by a web resource such 
    * as a Web API. If there is an OPTIONS request we want to make 
    * sure that only the headers are returned and that we don't 
    * inadvertently send any error code. OPTIONS requests are often 
    * sent by web browsers as part of what is know as a 'pre-flight' 
    * request as part of its security processes.
    */
    public function __construct() 
    {
        $this->outputHeaders();
 
        if (\App\Request::method() === "OPTIONS") {
            exit();
        }
    }
    
    /**
    * Headers that are essential for the API and application.
    */
    private function outputHeaders() 
    {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Authorization');
    }
 
    public function outputJSON($data) 
    {
        echo json_encode($data);
    }
} 