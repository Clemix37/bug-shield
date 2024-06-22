import IBugShield from "../Interfaces/IBugShield";
import IBugShieldConfig from "../Interfaces/IBugShieldConfig";
import IBugShieldError from "../Interfaces/IBugShieldError";
import ILogger from "../Interfaces/ILogger";
import BugShieldError from "./BugShieldError";
import Logger from "./Logger";

export default class BugShield implements IBugShield {
    //#region Properties

    private _logger: Logger | null;
    public static config: IBugShieldConfig = {
        logLevel: "info",
        logToConsole: true,
        logToFile: false,
        logFilePath: "/path/to/log/file.log",
    };

    //#endregion

    //#region Constructor

    constructor() {
        this.attachEventBasedOnEnv();
    }

    //#endregion

    //#region Public methods

    public configure(config: IBugShieldConfig): void {
        BugShield.config = { ...BugShield.config, ...config };
    }

    public createError(
        name: string,
        message: string,
        code?: string | number,
    ): BugShieldError {
        const bugShieldError = new BugShieldError(name, message, code);
        return bugShieldError;
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

    //#endregion

    //#region Private methods

    private attachEventBasedOnEnv(): void {
        if (!!process) this.attachEventOnProcess();
        else if (!!window) this.attachEventOnBrowser();
        else
            throw new Error(
                "🔍 Error creating the bug shield... the environment is not supported",
            );
    }

    private attachEventOnBrowser(): void {
        const that = this;
        window.addEventListener("error", function (e) {
            const err: IBugShieldError = {
                name: "Test",
                message: e.message,
                line: e.lineno,
                column: e.colno,
            };
            that.handleError(err);
        });
    }

    private attachEventOnProcess(): void {
        const that = this;
        process.on("uncaughtException", function (e) {
            const err: IBugShieldError = {
                name: e.name,
                message: e.message,
                stack: e.stack,
                line: null,
                column: null,
            };
            that.handleError(err);
        });
    }

    //#endregion
}
