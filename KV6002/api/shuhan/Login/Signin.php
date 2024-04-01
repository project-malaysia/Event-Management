<?php

namespace App\Endpoint;

/*
*
*
* @author Shuhan Wali
*/

Class SignIn extends Endpoint {

    private $sql = "SELECT id, password FROM account WHERE email = :email";
    private $sqlParams = [];

    public function __construct() {
 
        // @todo 1. Connect to the database
        switch (\App\Request::method()) 
        {
            case 'GET':
            case 'POST':
                $this->checkAllowedParams();
                $dbConn = new \App\DatabaseConn(USER_DATA);
         
                //@todo 3. Check there is a username and password
                if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
                    throw new \App\ClientError(401);
                }
                if (empty(trim($_SERVER['PHP_AUTH_USER'])) || empty(trim($_SERVER['PHP_AUTH_PW']))) {
                    throw new \App\ClientError(401);
                }

                $this->sqlParams[":email"] = $_SERVER['PHP_AUTH_USER'];
                //$data = $dbConn->executeSQL($this->sql, $this->sqlParams);
                //TODO use the database for this
                $data = [[
                        "id" -> 1,
                        "password" => password_hash("12345", PASSWORD_DEFAULT),
                ]];

                if (count($data) != 1) {
                    throw new \App\ClientError(401);
                }

                if (!password_verify($_SERVER['PHP_AUTH_PW'], $data[0]['password'])) {
                    throw new \App\ClientError(401);
                }

                $token = $this->generateJWT($data[0]['id']);        
                $data = ['token' => $token];
                
                parent::__construct($data);
                break;
            default:
                throw new \App\ClientError(405);
                break;
        }
    }

    private function generateJWT($id) { 
 
        // 1. Use the secret key defined earlier
        $secretKey = SECRET;
       
        // 2. Specify what to add to the token payload
        $payload = [
          'sub' => $id,
          'exp' => strtotime('+30mins', time()),
          'iat' => time(),
          'iss' => $_SERVER['HTTP_HOST'],
        ];
            
        // 3. Use the JWT class to encode the token  
        $jwt = \Firebase\JWT\JWT::encode($payload, $secretKey, 'HS256');
        
        return $jwt;
    }
}
