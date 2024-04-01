<?php

namespace Loginn;

/**
 * Class ClientError
 * @package App
 *
 * @author Shuhan Wali
 */
class ClientError extends \Exception
{
    public function __construct($code)
    {
        parent::__construct($this->errorResponses($code));
    }

    public function errorResponses($code)
    {
        switch ($code) {
            case 400:
                $message = 'Bad Request';
                http_response_code(400);
                break;
            case 401:
                $message = 'Unauthorized';
                http_response_code(401);
                break;
            case 403:
                $message = 'Forbidden';
                http_response_code(403);
                break;
            case 404:
                $message = 'Endpoint Not Found';
                http_response_code(404);
                break;
            case 405:
                $message = 'Method Not Allowed';
                http_response_code(405);
                break;
            case 422:
                $message = 'Unprocessable Entity';
                http_response_code(422);
                break;
            default:
                $message = 'Unknown';
                http_response_code($code);
        }
        return $message;
    }
}
