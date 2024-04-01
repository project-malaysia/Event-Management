<?php

/**
 * autoloader function.
 * 
 * Whenever a class is instantiated in PHP, the autoloader is called to look 
 * for a file named after that class, and will include that code.
 * 
 * @author Petros Tamboutsiaris W21004471
 */

function autoloader($className) {
    $filename = $className . ".php";
    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $filename);
    if (is_readable($filename)) {
        include_once $filename;
    } else {
        throw new Exception("File not found: " . $filename);
      }
}