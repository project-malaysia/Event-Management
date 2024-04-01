<?php

namespace App\EndpointControllers;

/**
 * @author Nabil Rahman
 * 
 * 
 * 
 * this endpoint class is the parent class of the other endpoints
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




class Endpoint 
{
    private $data;
    protected $allowedParams = [];
    public function __construct($data = ["message" => []])
    {
        $this->setData($data);
    }
 
    protected function setData($data) 
    {
        $this->data = $data;
    }
 
    public function getData()
    {
        return $this->data;
    }

       
        protected function checkAllowedParams()
        {   
            foreach (\App\Request::params() as $key => $value) 
            {
                if (!in_array($key, $this->allowedParams)) 
                {
                    throw new \App\ClientError(422);
                }
            }
        }

}