<?php
/**
 * @author Nabil Rahman
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

namespace App;


class Response
{
    public function __construct()
    {
        $this->outputHeaders();
    }

    public function outputHeaders() 
    {   
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE'); 

        if (Request::method()==='OPTIONS')
        {
            exit();
        }
    }
    
    public function outputJSON($data)
    {
        echo json_encode($data);
    }

}