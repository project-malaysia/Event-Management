<?php

namespace App; // namespaces help us avoid naming collisions and enable us to logically group code
/**
 * @author Nabil Rahman
 * 
 * Abstract class to get information about the http request.
 * 
 * The methods in this class are static so they can be called
 * without creating an instance of the class. This will be useful
 * for the endpoint classes.
 * 
 * 
 * 
 * 
 * 
 */
abstract class Request 
{
    public static function method()
    {
        return $_SERVER['REQUEST_METHOD'];
    }
    public static function endpointName()
    {
        $url = $_SERVER["REQUEST_URI"];
        $path = parse_url($url)['path']; //parse to identify the path,query etc
        return str_replace(BASEPATH, "", $path); //removes the basepath when the endpoint is searched in url
    }
 
    public static function params()
    {
        return $_REQUEST; 
    }
    
}