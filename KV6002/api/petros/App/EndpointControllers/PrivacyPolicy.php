<?php

namespace App\EndpointControllers;

/**
 * Endpoint PrivacyPolicy.
 * 
 * This endpoint handles fetching the text from the privacyPolicyText table.
 * 
 * @author Petros Tamboutsiaris W21004471
 */
 
class PrivacyPolicy extends Endpoint
{
    /**
     * The SQL query to select the data from privacyPolicyText table.
     */
    private $sql = "SELECT DISTINCT * FROM privacyPolicyText";

    /**
     * Constructor of the PrivacyPolicy endpoint.
     * 
     * Handles the GET request to fetch the the text from privacyPolicyText.
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
