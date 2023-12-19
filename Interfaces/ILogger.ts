interface ILogger {
    log(message: string, context?: Record<string, any>): void; // Log a message
    debug(message: string, context?: Record<string, any>): void; // Log a debug message
    info(message: string, context?: Record<string, any>): void; // Log an info message
    warning(message: string, context?: Record<string, any>): void; // Log a warning message
    error(message: string, context?: Record<string, any>): void; // Log an error message
    critical(message: string, context?: Record<string, any>): void; // Log a critical message
};