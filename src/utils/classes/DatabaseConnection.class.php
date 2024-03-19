<?php

if(!defined('SECURE')) {
    exit('Direct script access is not allowed');
}

require_once '../../../config/db_config.php';
class DatabaseConnection {
    private $host = DB_HOST;
    private $db_name = DB_NAME;
    private $username = DB_USER;
    private $password = DB_PASSWD;
    private $conn;

    // Database connection
    public function connect() {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name,
                                  $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch(PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }

    // Enhanced Query execution with automatic transaction management
    public function executeQuery($sql, ...$params) {
        $this->connect();
        $this->conn->beginTransaction();
        
        try {
            $stmt = $this->conn->prepare($sql);
            if (!$stmt->execute($params)) {
                $this->conn->rollBack();
                return false;
            }

            if (stripos($sql, 'SELECT') === 0) {
                $result = $stmt->fetchAll();
            } elseif (stripos($sql, 'INSERT') === 0 || stripos($sql, 'UPDATE') === 0 || stripos($sql, 'DELETE') === 0) {
                $result = $stmt->rowCount();
            } else {
                $result = true;
            }

            $this->conn->commit();
            return $result;
        } catch(PDOException $e) {
            $this->conn->rollBack();
            throw new Exception('Error executing query: ' . $e->getMessage());
        }
    }
}

