<?php

namespace Loginn;

/**
 * Class Request
 * @package App
 * @author Shuhan Wali
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
        $path = parse_url($url)['path'];
        return strtolower(str_replace("/kf6012/WebAssessment2", "", $path));
    }

    // converts router to all lowercase making it not case sensitive
    public static function params()
    {
        $lowercaseParams = array();
        foreach ($_REQUEST as $key => $value) {
            $lowercaseParams[strtolower($key)] = $value;
        }
        return $lowercaseParams;
    }

    public static function getBody()
    {
        return file_get_contents("php://input");
    }
}
