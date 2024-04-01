<?php

namespace App\EndpointControllers;

/**
 * Endpoint AddEvent.
 * 
 * This endpoint handles adding a new event.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

class AddEvent extends Endpoint
{
    /**
     * $allowedParams The allowed parameters for the request.
     */
    protected $allowedParams = ["event_id", "date_id", "date", "city", "village", "address", "location", "time", "additional_details"];

    /**
     * The SQL query to insert a new event with its event details into the database.
     */
    private $sql = "INSERT INTO events (event_id, date_id, date, city, village, address, location, time, additional_details)
    VALUES (:event_id, :date_id, :date, :city, :village, :address, :location, :time, :additional_details)"; 
    private $sqlParams = [];

    /**
     * Constructor of the AddEvent endpoint.
     * 
     * Handles the POST request to add a new event.
     * 
     * Throws a ClientError if the request method is not POST.
     */
    public function __construct()
    {
        switch(\App\Request::method()) {
            case 'POST':
                $this->checkAllowedParams();
                $this->buildSQL();
                /**
                * Connect to database.
                */
                $dbConn = new \App\Database(DATABASE);
                $data = $dbConn->executeSQL($this->sql, $this->sqlParams); 
                break;    
            default:
                throw new \App\ClientError(1);
        }
 
        parent::__construct($data);

        /**
        * It displays response data including the length of the data, a success message if
        * there are data, and then the data.
        */
        $this->setData(array(
            "length" => count($data),
            "message" => "Successful Response",
            "data" => $data));
    }

    /**
     * Builds the SQL query based on the request parameters.
     */
    private function buildSQL()
    {
        /* Check if the 'event_id' parameter exists in the request */
        if (isset(\App\Request::params()['event_id'])) {
            /* Set the value of :event_id in the SQL query to the value of the 'event_id' parameter */
            $this->sqlParams[':event_id'] = \App\Request::params()['event_id'];
        }

        /* Check if the 'date_id' parameter exists in the request */
        if (isset(\App\Request::params()['date_id'])) {
            /* Set the value of :date in the SQL query to the value of the 'date' parameter */
            $this->sqlParams[':date_id'] = \App\Request::params()['date_id'];
        }

        /* Check if the 'date' parameter exists in the request */
        if (isset(\App\Request::params()['date'])) {
            /* Set the value of :date in the SQL query to the value of the 'date' parameter */
            $this->sqlParams[':date'] = \App\Request::params()['date'];
        }

        /* Check if the 'city' parameter exists in the request */
        if (isset(\App\Request::params()['city'])) {
            /* Set the value of :city in the SQL query to the value of the 'city' parameter */
            $this->sqlParams[':city'] = \App\Request::params()['city'];
        }
        
        /* Check if the 'village' parameter exists in the request */
        if (isset(\App\Request::params()['village'])) {
            /* Set the value of :village in the SQL query to the value of the 'village' parameter */
            $this->sqlParams[':village'] = \App\Request::params()['village'];
        }

        /* Check if the 'address' parameter exists in the request */
        if (isset(\App\Request::params()['address'])) {
            /* Set the value of :address in the SQL query to the value of the 'address' parameter */
            $this->sqlParams[':address'] = \App\Request::params()['address'];
        }

        /* Check if the 'location' parameter exists in the request */
        if (isset(\App\Request::params()['location'])) {
            /* Set the value of :location in the SQL query to the value of the 'location' parameter */
            $this->sqlParams[':location'] = \App\Request::params()['location'];
        }

        /* Check if the 'time' parameter exists in the request */
        if (isset(\App\Request::params()['time'])) {
            /* Set the value of :time in the SQL query to the value of the 'time' parameter */
            $this->sqlParams[':time'] = \App\Request::params()['time'];
        }

        /* Check if the 'additional_details' parameter exists in the request */
        if (isset(\App\Request::params()['additional_details'])) {
            /* Set the value of :additional_details in the SQL query to the value of the 'additional_details' parameter */
            $this->sqlParams[':additional_details'] = \App\Request::params()['additional_details'];
        } 
    }
}
