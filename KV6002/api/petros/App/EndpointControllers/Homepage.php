<?php

namespace App\EndpointControllers;

/**
 * Endpoint Homepage.
 * 
 * This endpoint represents the endpoint for fetching homepage text.
 * 
 * @author Petros Tamboutsiaris W21004471
 */
 
class Homepage extends Endpoint
{
    /**
     * The SQL query to select all the data from homepageText table.
     */
    private $sql = "SELECT DISTINCT * FROM homepageText";

    /**
     * Constructor of the Homepage endpoint.
     * 
     * Handles the GET request to fetch the the text from homepageText.
     * 
     * Throws a ClientError if the request method is not GET.
     */
    public function __construct()
    {
        switch(\App\Request::method()) {
            case 'GET':
                $this->checkAllowedParams();
                /**
                * Connect to database.
                */
                $dbConn = new \App\Database(DATABASE);
                $data = $dbConn->executeSQL($this->sql); 
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
}
