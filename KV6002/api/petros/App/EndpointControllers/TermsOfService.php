<?php

namespace App\EndpointControllers;

/**
 * Endpoint TermsOfService.
 * 
 * This endpoint represents the endpoint for fetching terms of service page text.
 * 
 * @author Petros Tamboutsiaris W21004471
 */
 
class TermsOfService extends Endpoint
{
    /**
     * The SQL query to select all the data from termsOfServiceText table.
     */
    private $sql = "SELECT DISTINCT * FROM termsOfServiceText";

    /**
     * Constructor of the TermsOfService endpoint.
     * 
     * Handles the GET request to fetch the the text from termsOfServiceText.
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
