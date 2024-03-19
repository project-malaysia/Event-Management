<?php

if(!defined('SECURE')) {
    exit('Direct script access is not allowed');
}

ini_set('display_errors', '0'); // Disable error display
error_reporting(E_ALL); // Report all errors

class ErrorHandler {
    private $logFile;

    public function __construct($logFilePath) {
        $this->logFile = $logFilePath;

        // Set custom error and exception handlers
        set_error_handler([$this, 'handleError']);
        set_exception_handler([$this, 'handleException']);
        register_shutdown_function([$this, 'handleShutdown']);
    }

    public function handleError($severity, $message, $file, $line) {
        $this->handleException(new ErrorException($message, 0, $severity, $file, $line));
    }

    public function handleException($exception) {
        $logMessage = "[" . date("Y-m-d H:i:s") . "] Error: " . $exception->getMessage();
        $logMessage .= " in " . $exception->getFile() . " on line " . $exception->getLine() . "\n";
        $logMessage .= "Stack trace:\n" . $exception->getTraceAsString() . "\n\n";
        
        file_put_contents($this->logFile, $logMessage, FILE_APPEND);

        // Since we don't want to show any error to users, we ensure the script execution ends silently
        if(!headers_sent()) {
            http_response_code(500); // Optional: Set a 500 Internal Server Error response code
        }
        exit; // Terminate script execution without any message
    }

    public function handleShutdown() {
        $error = error_get_last();
        if ($error !== NULL) {
            $this->handleError($error["type"], $error["message"], $error["file"], $error["line"]);
        }
    }
}
