<?php
//PHP file for handling the data connection to connect to my nuwebspace account.
//Created by John W Ridley for KV6002
function getConnection() {
	try {
		$connection = new PDO("mysql:host=nuwebspace_db;dbname=w16012692", 'w16012692', 'Dawn080616!');
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $connection;
		} catch (Exception $e) {
			throw new Exception("Connection Error: ".$e->getMessage(), 0 , $e);
		}
}
?>