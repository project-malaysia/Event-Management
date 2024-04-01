<?php

/**
 * @author Shuhan Wali w19006674
 * Signup Class
 * Endpoint for signup. 

 * @generated CO PILOT AI.
 */
namespace Loginn;

class Signupp extends Endpoint
{
    private const SQL = "INSERT INTO account (name, email, password_hash) VALUES (?, ?, ?)";
    private $sqlParams = [];

    /**
     * constructor for signup.
     * @throws ClientError
     */
    public function __construct()
    {
        $dbConn = new Database("../db/TeamDB.db");

        if (Request::method() !== 'POST') {
            throw new ClientError(405);
        }

        $body = json_decode(Request::getBody(), true);
        if (!is_array($body) || !isset($body['username']) || !isset($body['email']) || !isset($body['password'])) {
            throw new ClientError(400);
        }

        $username = $body['username'];
        $email = $body['email'];
        $password = $body['password'];

        $this->validateInputParams($username, $email, $password);

        $password_hash = password_hash($password, PASSWORD_ARGON2ID);
        
        $this->sqlParams[] = $username;
        $this->sqlParams[] = $email;
        $this->sqlParams[] = $password_hash;

        $dbConn->executeSQL(self::SQL, $this->sqlParams);

        $data = ['message' => 'User has been registered'];
        // } catch (ClientError $ce) {
        //     http_response_code($ce->getCode());
        //     $data = ['error' => $ce->getMessage()];
        // } catch (\Exception $e) {
        //     http_response_code(500);
        //     $data = ['error' => 'Internal Server Error'];
        // }

        parent::__construct($data);
    }

    /**
     * Validates the input parameters.
     * @param $email
     * @param $password
     * @param $name
     * @throws ClientError
     */
    private function validateInputParams($username, $email, $password)
    {
        if (empty($email) || empty($password) || empty($username)) {
            throw new ClientError(409);
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new ClientError(400);
        }

        $dbConn = new Database("../db/TeamDB.db");
        $UserExists = $dbConn->executeSQL("SELECT * FROM account WHERE email = ?", [$email]);

        if (!empty($UserExists)) {
            throw new ClientError(409);
        }
    }
}