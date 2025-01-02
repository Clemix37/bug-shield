# bug-shield

Simple TS Library to catch errors for developers.

## Usage

### Logger

Create an instance of `Logger`, then you can call these methods:
- `log`, logs an info message
- `debug`, logs a debug message
- `info`, logs an info message
- `warning`, logs a warning message
- `error`, logs an error message
- `critical`, logs a critical message

Each of these methods, with the message, logs the context given as second argument.  

### BugShieldError

This class is an extension of the `Error` class which add these properties:
- `name`, name of the error
- `code`, a string or number of error code
- `context`, the context of the error

It captures the stackTrace using `Error.captureStackTrace()` in the constructor.

### BugShield

This is the default class to use in your applications.  
You have to create an instance and then call `configure` with a configuration in argument as `IBugShieldConfig` with these properties:
- `logLevel`, the level of logging you want, as defined in the functions callable in the `Logger` class
- `logToConsole`, a boolean if you want to log in the console or not
- `logToFile`, a boolean if you want to log in a file or not (in progress)
- `logFilePath`, a string representing the current file path to log, mandatory if `logToFile` is `true`

If `configure` is not called, the default value are:
- `logLevel`: `info`
- `logToConsole`: `true`
- `logToFile`: `false`
- `logFilePath`: `/path/to/log/file.log`

If you want to create an error yourself, you can use your instance of `BugShield` and call `createError`, that returns the `BugShieldError` created.
Also, based on the environment (only NodeJS & Browser are currently supported), it catches `error` (Browser) or `uncaughtException` (NodeJS) events.  
When an error occurs, it calls `handleError` which logs to console and/or to the file based on the configuration.

## Tests

### Logger

To be instance of `Logger`.  
To call `console.log` when calling `log` | `debug` | `info` | `warning` | `error` | `critical`.  

### BugShieldError

To be instance of `BugShieldError` and `Error`.  
To have properties correctly set.  
To have captured stack trace.

### BugShield

To be instance of `BugShield`.  
To configure properly the instance.  
The function `createError` creates a correct error, assigning proper properties and be instance of `BugShieldError` and `Error`.  
Getting logger be instance of `Logger`.
