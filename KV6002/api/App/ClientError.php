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
                http_response_code(400);
                $message = "The Value Of 'page' Parameter Is Invalid As It Is More Than The Range Of The Data That Can Be Retrieved";
                break;
            case 2:
                http_response_code(400);
                $message = "The Header Is Not A Bearer Token";
                break;
            case 3:
                http_response_code(422);
                $message = "The User Is Not Authorised As The Token Is Not Valid";
                break;
            case 4:
                http_response_code(400);
                $message = "The Value Of 'limit' Parameter Is Invalid As It Is More Than The Range Of The Data That Can Be Retrieved";
                break;
            case 5:
                http_response_code(400);
                $message = "The Header Is Not A Basic Authorization";
                break;
            case 6:
                http_response_code(400);
                $message = "Username Is Missing";
                break;
            case 7:
                http_response_code(400);
                $message = "Password Is Missing";
                break;
            case 8:
                http_response_code(400);
                $message = "Both Username And Password Are Missing";
                break;
            case 9:
                http_response_code(401);
                $message = "Unauthorized As Username Or Password Or Both Are Invalid";
                break;
            case 10:
                http_response_code(403);
                $message = "Attempting To Use Both 'content' And 'country' Parameters Together Is Not Supported";
                break;
            case 11:
                http_response_code(404);
                $message = "Invalid Endpoint";
                break;
            case 12:
                http_response_code(405);
                $message = "Method Not Allowed";
                break;
            case 13:
                http_response_code(406);
                $message = "The Value Of 'limit' Parameter Is Not Acceptable As It Is Under Number 1";
                break;
            case 14:
                http_response_code(406);
                $message = "The Value Of 'content_id' Parameter Is Not Acceptable As It Is Not Numeric";
                break;
            case 15:
                http_response_code(408);
                $message = "Token Has Expired";
                break;
            case 16:
                http_response_code(422);
                $message = "The Value Of 'limit' Parameter Is Invalid As It Is Not Numeric";
                break;
            case 17:
                http_response_code(422);
                $message = "Invalid Value Of Parameter As It Is Numeric. Parameter 'type' accepts only alphabetical strings";
                break;
            case 18:
                http_response_code(422);
                $message = "Unprocessable Entity As Value Of Parameter Is Invalid";
                break;
            case 19:
                http_response_code(422);
                $message = "Invalid Parameter";
                break;
            case 20:
                http_response_code(422);
                $message = "The Value Of 'page' Parameter Is Not Acceptable As It Is Under Number 1";
                break;
            case 21:
                http_response_code(406);
                $message = "The Value Of 'content_id' Parameter Is Not Acceptable As It Is Not Numeric";
                break;
            case 22:
                http_response_code(422);
                $message = "The Value Of Parameter Is Invalid As It Is Not Numeric";
                break;
            case 23:
                http_response_code(422);
                $message = "Invalid Value Of Parameter As It Is Numeric. Parameter 'country' accepts only alphabetical strings";
                break;
            case 24:
                http_response_code(406);
                $message = "The Value Of 'account_id' Parameter Is Not Acceptable As It Is Not Numeric";
                break;
            case 25:
                http_response_code(400);
                $message = "Invalid Value Of Parameter";
                break;
            case 26:
                http_response_code(404);
                $message = "User Does Not Exist";
                break;
            default:
                throw new \Exception('Unknown Error Code');
        }
        return $message;
    }
}
