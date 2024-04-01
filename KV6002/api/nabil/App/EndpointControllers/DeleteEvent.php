<?php

namespace App\EndpointControllers;
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
 * 
 * 
 * 
 * 
 */
namespace App\EndpointControllers;

class DeleteEvent extends Endpoint

{
        public function __construct()
        {
            switch(\App\Request::method()) {
                case 'DELETE':
                    $sql = "SELECT event_id, date, city, village, time, address, location, additional_details FROM events";
                    $dbConn = new \App\Database(EVENTS_DATABASE);
                    $data = $dbConn->executeSQL($sql);   
                    break;
                case 'GET':
                    $sql = "SELECT event_id, date, city, village, time, address, location, additional_details FROM events";
                    $dbConn = new \App\Database(EVENTS_DATABASE);
                    $data = $dbConn->executeSQL($sql);     
                    break;
                default:
                    throw new \App\ClientError(405);
            }
     
            parent::__construct($data);
        }
    

}