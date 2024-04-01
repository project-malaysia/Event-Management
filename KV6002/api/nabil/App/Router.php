<?php
/**
 * @author Nabil Rahman
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
 * 
 */

namespace App;

abstract class Router
{
    public static function routeRequest()
    {
        try {
            switch (Request::endpointName()) {
                case '/':
                case '/AddEvent':
                case '/addevent':
                case '/addEvent/':
                case '/Addevent/':
                case '/ADDEVENT':
                    $endpoint = new \App\EndpointControllers\AddEvent();
                    break;
                case '/DeleteEvent':
                case '/Deleteevent':
                case '/deleteevent/':
                case '/DeleteEvent/':
                    $endpoint = new \App\EndpointControllers\DeleteEvent();
                    break;
                case '/updateEvent':
                case '/UpdateEvent':
                case '/updateevent/':
                case '/UpdateEvent/':
                    $endpoint = new \App\EndpointControllers\UpdateEvent();
                    break;
                case '/token':
                case '/token/':
                    $endpoint = new \App\EndpointControllers\Token();
                    break;
                default:
                    //$endpoint = new Endpoint(['message' => '404 Not Found']); week4: dnt need this after creating client error handler
                    throw new ClientError(404); //befrore was just 404 not found but now we just use the error code so it will use the exception class to find and show the code message
        
            }
        
        } catch (ClientError $e) {
            $data['message'] = $e->getMessage();
            $endpoint = new \App\EndpointControllers\Endpoint($data);
        
        }

        return $endpoint;
    }

}