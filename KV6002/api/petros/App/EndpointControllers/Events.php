<?php

namespace App\EndpointControllers;

/**
 * Events endpoint.
 *
 * This endpoint handles requests related to events, including retrieving event information 
 * such as event_id, date_id, date, city, village, address, location, time, and additional_details
 * from the events table in the database. It supports GET requests with optional parameters
 * for filtering events by event_id or date_id.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

class Events extends Endpoint
{
    protected $allowedParams = ["event_id", "date_id"];

    /**
    * SQL query for retrieving event_id, date_id, date, city, 
    * village, address, location, time, and additional_details
    * from events table.
    */
    private $sql = "SELECT events.event_id, events.date_id, events.date, events.city, events.village, events.address, events.location, events.time, events.additional_details
                    FROM events";

    private $sqlParams = [];

    /**
     * Constructor of the DeleteEvent endpoint.
     * 
     * Handles the GET request to fetch the details of an event.
     * 
     * Throws a ClientError if the request method is not GET.
     */
    public function __construct()
    {
        switch (\App\Request::method()) {
            case 'GET':
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
        * there are data, and then the data. If there are no data, it throws a client error
        * message.
        */
        $this->setData(array(
            "length" => count($data),
            "message" => "Successful Response",
            "data" => $data
        ));
    }

    /**
     * Builds the SQL query based on the request parameters.
     */
    private function buildSQL()
    {
        /**
         * Check if the event_id parameter exists.
         */
        if (isset(\App\REQUEST::params()['event_id'])) {
            
            /**
            * Check if the event_id parameter is numeric and throw an error
            * message if it is not.
            */
            if (!is_numeric(\App\REQUEST::params()['event_id'])) {
                throw new \App\ClientError(2);
            }

            $this->sql .= " WHERE LOWER(events.event_id) = LOWER(:event_id)";
            $this->sqlParams[":event_id"] = \App\REQUEST::params()['event_id'];
        }

        if (isset(\App\REQUEST::params()['date_id'])) {
            
            /**
            * Check if the date_id parameter is not numeric and throw an error
            * message if it is.
            */
            if (is_numeric(\App\REQUEST::params()['date_id'])) {
                throw new \App\ClientError(3);
            }

            $this->sql .= " WHERE LOWER(events.date_id) = LOWER(:date_id)";
            $this->sqlParams[":date_id"] = \App\REQUEST::params()['date_id'];
        }
    }
}