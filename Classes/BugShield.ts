import IBugShield from "../Interfaces/IBugShield";
import IBugShieldConfig from "../Interfaces/IBugShieldConfig";
import IBugShieldError from "../Interfaces/IBugShieldError";
import Logger from "./Logger";

export default class BugShield implements IBugShield {
    private _logger: Logger|null;
    public static config: IBugShieldConfig = {
        logLevel: 'info',
        logToConsole: true,
        logToFile: false,
        logFilePath: '/path/to/log/file.log',
    };

    constructor(){
        const that = this;
        window.addEventListener('error', function (e) {
            const err: IBugShieldError = {
                name: "Test",
                message: e.message,
                line: e.lineno,
                column: e.colno,
            };
            that.handleError(err);
        });
    }
  
    public configure(config: IBugShieldConfig): void {
        BugShield.config = { ...BugShield.config, ...config };
    }
  
    public createError(name: string, message: string, code?: string | number): IBugShieldError {
        const error = new Error(message) as IBugShieldError;
        error.name = name;
        error.code = code;
        return error;
    }
  
    public handleError(error: IBugShieldError): void {
        // Handle the error based on the configured log level and destinations (console, file, etc.)
        if (BugShield.config.logToConsole) {
            console.error(`[${error.name}] ${error.message}`);
        }
        if (BugShield.config.logToFile) {
            // Write the error to the specified log file (Logix.config.logFilePath)
        }
    }
  
    public getLogger(moduleName: string): ILogger {
        return new Logger(moduleName);
    }
}
  