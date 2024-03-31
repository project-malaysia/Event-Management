<?php

namespace App;

/**
* Database class.
*
* The Database class that connects to the database file 
* and execute the SQL queries.
*
* @author Petros Tamboutsiaris W21004471
*/
 
class Database 
{
    private $dbConnection;
  
    public function __construct($dbName) {
        $this->setDbConnection($dbName);  
    }
 
    private function setDbConnection($dbName) {
        $this->dbConnection = new \PDO('sqlite:'.$dbName);
        $this->dbConnection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    }
    
    public function executeSQL($sql, $params=[]) { 
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}