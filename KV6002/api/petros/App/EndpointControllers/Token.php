<?php

namespace App\EndpointControllers;

/**
 * Issue Token to Authenticated Users
 *
 * This class will check a username and password against those held in the 
 * database. Where authentication is successful it will return a JWT.
 *
 * @author Petros Tamboutsiaris
*/

class Token extends Endpoint
{
    /**
    * SQL query to retrieve account id and password.
    */
    private $sql = "SELECT id, password_hash FROM account WHERE email = :email";
    private $sqlParams = [];

    /**
    * Constructor for Token endpoint.
    */
    public function __construct() {

        /**
        * Check the request method is GET.
        */
        switch(\App\Request::method()) {
            case 'GET':
                $this->checkAllowedParams();

                /**
                * Get all headers from the HTTP request.
                */ 
                $allHeaders = getallheaders();
                $authorizationHeader = "";
                
                /**
                * Look for an Authorization header. This 
                * might not exist. It might start with a capital A (requests
                * from Postman do), or a lowercase a (requests from browsers might).
                */
                if (array_key_exists('Authorization', $allHeaders)) {
                     $authorizationHeader = $allHeaders['Authorization'];
                } elseif (array_key_exists('authorization', $allHeaders)) {
                    $authorizationHeader = $allHeaders['authorization'];
                }

                /**
                * Check if there is Basic Authorization in the header.
                */
                if (substr($authorizationHeader, 0, 6 ) != 'Basic ') {
                    throw new \App\ClientError(5);
                }
                
                /**
                * Check if there is no username but there is a password.
                */
                if (empty(trim($_SERVER['PHP_AUTH_USER'])) && !empty(trim($_SERVER['PHP_AUTH_PW']))) {
                    throw new \App\ClientError(6);
                }

                /**
                * Check if there is a username but there is no password.
                */
                if (!empty(trim($_SERVER['PHP_AUTH_USER'])) && empty(trim($_SERVER['PHP_AUTH_PW']))) {
                    throw new \App\ClientError(7);
                }

                /**
                * Check if there is no username and no password.
                */
                if (empty(trim($_SERVER['PHP_AUTH_USER'])) && empty(trim($_SERVER['PHP_AUTH_PW']))) {
                    throw new \App\ClientError(8);
                }

                /**
                * Connect to database.
                */
                $dbConn = new \App\Database(USERS_DATABASE);

                /**
                * Execute an SQL query.
                */
                $this->sqlParams[":email"] = $_SERVER['PHP_AUTH_USER'];
                $data = $dbConn->executeSQL($this->sql, $this->sqlParams);

                /**
                * Check if username matches one in database.
                */
                if (count($data) != 1) {
                    throw new \App\ClientError(9);
                }

                /**
                * Validate the password.
                */
                if (!password_verify($_SERVER['PHP_AUTH_PW'], $data[0]['password_hash'])) {
                    throw new \App\ClientError(9);
                }

                /**
                * Issue token.
                */
                $token = $this->generateJWT($data[0]['id']);        
                $data = ['token' => $token];

                parent::__construct($data);
                break;
            default:
            throw new \App\ClientError(12);
            break;    
        }
    }

    private function generateJWT($id) { 
 
        /**
        * Use the sectret key defined in settings.php.
        */
        $key = SECRET;
        
        /**
        * Specify what to add to the token payload.
        */
        $payload = [
            'created_and_signed_by' => $_SERVER['HTTP_HOST'],
            'users_id' => $id,
            'created_at' => time(),
            'expires_in' => strtotime('+30 mins', time())
        ];
        
        /**
        * Use the JWT class to encode the token.
        */ 
        $jwt = \Firebase\JWT\JWT::encode($payload, $key, 'HS256');
        
        return $jwt;
    }
}