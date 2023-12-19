import ILogixConfig from "./IBugShieldConfig";
import IBugShieldError from "./IBugShieldError";

export default interface IBugShield {
    configure(config: ILogixConfig): void; // Configure the library
    createError(name: string, message: string, code?: string | number): IBugShieldError; // Create a custom error
    handleError(error: IBugShieldError): void; // Handle an error
    getLogger(moduleName: string): ILogger; // Get a logger for a specific module
};  