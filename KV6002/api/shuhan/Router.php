<?php

namespace App;

/**
 * Class Router
 * @package App
 * @author Shuhan Wali
 */
abstract class Router
{

    //Creating route requests for each endpoint
    public static function routeRequest()
    {
        try {
            switch (Request::endpointName()) {
                case '/':
                case '/Signin':
                case '/Signin/':
                    $endpoint = new \UserReg\Login\Signin();
                    break;
                case '/country':
                case '/country/':
                    $endpoint = new \UserReg\Login\Signup();
                    break;
                case '/preview':
                case '/preview/':
                    $endpoint = new \UserReg\Login\Endpoint();
                    break;
                case '/author':
                case '/author/':
                    $endpoint = new \UserReg\Login\ProfilePic();
                    break;
                default:
                    throw new ClientError(404);
                    break; 
            }
        } catch (ClientError $e) {
            $data = ['message' => $e->getMessage()];
            $endpoint = new \UserReg\Login\Endpoint($data);
        }
 
        return $endpoint;
    }
}
