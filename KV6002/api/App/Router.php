<?php

namespace App;

/**
 * Class Router
 *
 * This abstract class serves as a router to handle incoming requests and determine
 * which EndpointController should handle the request based on the requested endpoint.
 *
 * @author Petros Tamboutsiaris W21004471
 */

abstract class Router
{
    public static function routerRequest() {
        try {
                /**
                * Get the lowercase version of the requested endpoint for case-insensitive comparison.
                */
                $lowercaseEndpoint = strtolower(Request::endpointName());

                /**
                * Determine the appropriate EndpointController based on the endpoint.
                */
                switch ($lowercaseEndpoint) {
                    case '/':
                        $endpoint = new \App\EndpointControllers\Homepage();
                        break;
                    case '/homepage':
                    case '/homepage/':
                        $endpoint = new \App\EndpointControllers\Homepage();
                        break;
                    case '/homepage/add':
                    case '/homepage/add/':
                        $endpoint = new \App\EndpointControllers\HomepageAdd();
                        break;
                    case '/events':
                    case '/events/':
                        $endpoint = new \App\EndpointControllers\Events();
                        break;
                    case '/event/add':
                    case '/event/add/':
                        $endpoint = new \App\EndpointControllers\AddEvent();
                        break;
                    case '/event/delete':
                    case '/event/delete/':
                        $endpoint = new \App\EndpointControllers\DeleteEvent();
                        break;
                    case '/privacy-policy':
                    case '/privacy-policy/':
                        $endpoint = new \App\EndpointControllers\PrivacyPolicy();
                        break;
                    case '/privacy-policy/add':
                    case '/privacy-policy/add/':
                        $endpoint = new \App\EndpointControllers\PrivacyPolicyAdd();
                        break;
                    case '/terms-of-service':
                    case '/terms-of-service/':
                        $endpoint = new \App\EndpointControllers\TermsOfService();
                        break;
                    case '/terms-of-service/add':
                    case '/terms-of-service/add/':
                        $endpoint = new \App\EndpointControllers\TermsOfServiceAdd();
                        break;           
                    default:
                        /**
                        * If the endpoint is not recognized, throw a
                        * client error message.
                        */
                        throw new \App\ClientError(11);
                }
            }   catch (ClientError $e) {
                
                $data['message'] = $e->getMessage();
                $endpoint = new \App\EndpointControllers\Endpoint($data);
                }
            return $endpoint;
    }
}
