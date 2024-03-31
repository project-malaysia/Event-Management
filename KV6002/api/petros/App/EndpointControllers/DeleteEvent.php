<?php

namespace App\EndpointControllers;

/**
 * Endpoint DeleteEvent.
 * 
 * This endpoint handles deleting an event.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

class DeleteEvent extends Endpoint
{
    /**
     * The allowed parameter for the request.
     */
    protected $allowedParams = ["event_id"];

    /**
     * The SQL query to delete an event from the database.
     */
    private $sql = "DELETE FROM events WHERE event_id = :event_id"; 
    private $sqlParams = [];

     /**
     * Constructor of the DeleteEvent endpoint.
     * 
     * Handles the DELETE request to delete an event.
     * 
     * Throws a ClientError if the request method is not DELETE.
     */
    public function __construct()
    {
        switch(\App\Request::method()) {
            case 'DELETE':
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
    }
}
