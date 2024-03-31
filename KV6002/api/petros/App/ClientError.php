<?php

namespace App;

/**
 * Class ClientError.
 * 
 * Exception class for handling client errors with specific 
 * error responses.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

class ClientError extends \Exception
{
    /**
    * ClientError constructor.
    */
    public function __construct($num)
    {
        parent::__construct($this->errorResponses($num));
    }

    /**
    * This function is for retrieving the error message based on the provided error status code.
    */
    public function errorResponses($num)
    {
        switch ($num) {
            case 1:
                http_response_code(405);
                $message = "Method Not Allowed";
                break;
            case 2:
                http_response_code(422);
                $message = "The Value Of Parameter Is Invalid As It Is Not Numeric";
                break;
            case 3:
                http_response_code(422);
                $message = "The Value Of Parameter Is Invalid As It Is Numeric";
                break;
            default:
                throw new \Exception('Unknown Error Code');
        }
        return $message;
    }
}
