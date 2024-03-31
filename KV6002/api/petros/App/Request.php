<?php

namespace App;

/**
 * Abstract class to get information about the http request.
 * 
 * The methods in this class are static so they can be called
 * without creating an instance of the class. This will be useful
 * for the endpoint classes.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

abstract class Request 
{
    public static function method() 
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    /**
    * Return the name of the requested endpoint. 
    * Ensure that $basepath is correct for your environment.
    */
    public static function endpointName()
    {
        $url = $_SERVER["REQUEST_URI"];
        $path = parse_url($url)['path'];
        return str_replace(BASEPATH, "", $path);
    }
 
    /**
    * Function that makes the parameters case insensitive.
    */
    public static function params() 
    {
        return array_change_key_case($_REQUEST, CASE_LOWER);
    }
}