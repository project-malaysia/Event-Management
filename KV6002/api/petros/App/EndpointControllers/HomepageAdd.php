<?php

namespace App\EndpointControllers;

/**
 * Endpoint HomepageAdd.
 * 
 * This endpoint handles adding text to the homepage.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

class HomepageAdd extends Endpoint
{
    /**
     * The allowed parameter for the request.
     */
    protected $allowedParams = ["text"];

    /**
     * The SQL query to update the text on the homepage.
     */
    private $sql = "UPDATE homepageText SET text = :text"; 
    private $sqlParams = [];

    /**
     * Constructor of the HomepageAdd endpoint.
     * 
     * Handles the POST request to update the text on the homepage.
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

    private function buildSQL()
    {
        /* Check if the 'text' parameter exists in the request */
        if (isset(\App\Request::params()['text'])) {
            /* Set the value of :text in the SQL query to the value of the 'text' parameter */
            $this->sqlParams[':text'] = \App\Request::params()['text'];
        }       
    }
}
