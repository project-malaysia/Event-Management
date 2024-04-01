<?php

namespace App;
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
 * 
 * 
 */
class ClientError extends \exception
{
    public function __construct($code)
    {
        parent::__construct($this->errorResponses($code));
    }
 
    public function errorResponses($code)
    {
        switch ($code) {
            case 404:
                http_response_code(404); //built in function
                $message = 'Endpoint Not Found';
                break;
            case 405:
                http_response_code(405);
                $message = 'Method Not Allowed';
                break;
            case 422:
                http_response_code(422);
                $message = 'Unprocessable Entity';
                break;
            case 401:
                    http_response_code(401);
                    $message = 'Unauthorised access';
                    break;
            default:
                throw new \Exception('Unknown Error Code');
        }
        return $message;
    }

}