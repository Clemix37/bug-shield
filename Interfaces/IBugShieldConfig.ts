export default interface IBugShieldConfig {
    logLevel: 'debug' | 'info' | 'warning' | 'error' | 'critical'; // Log level
    logToConsole: boolean; // Whether to log to the console
    logToFile: boolean; // Whether to log to a file
    logFilePath?: string; // File path for logging (optional)
};