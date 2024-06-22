import IBugShieldError from "../Interfaces/IBugShieldError";

export default class BugShieldError extends Error implements IBugShieldError {
    //#region Properties

    name: string;
    code?: string | number;
    context?: Record<string, any>;

    //#endregion

    //#region Constructor

    constructor(
        name: string,
        message: string,
        code?: string | number,
        context?: Record<string, any>,
    ) {
        super(message);
        this.name = name;
        this.code = code;
        this.context = context;
        // Ensure the stack trace is captured.
        Error.captureStackTrace(this, BugShieldError);
    }

    //#endregion
}
