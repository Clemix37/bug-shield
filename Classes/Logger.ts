export default class Logger implements ILogger {
	private moduleName: string;

	constructor(moduleName: string) {
		this.moduleName = moduleName;
	}

	private displayLog(
		level: string,
		message: string,
		context?: Record<string, any>
	): void {
		const timestamp = new Date().toISOString();
		const logMessage = `🔎 [${timestamp}] [${level.toUpperCase()}] [${
		this.moduleName
		}] ${message}`;

		// You can customize how log messages are handled here, e.g., sending to console, a file, or a remote service.
		console.log(logMessage, context);
	}

	public log(message: string, context?: Record<string, any>): void {
		this.displayLog("info", message, context);
	}

	public debug(message: string, context?: Record<string, any>): void {
		this.displayLog("debug", message, context);
	}

	public info(message: string, context?: Record<string, any>): void {
		this.displayLog("info", message, context);
	}

	public warning(message: string, context?: Record<string, any>): void {
		this.displayLog("warning", message, context);
	}

	public error(message: string, context?: Record<string, any>): void {
		this.displayLog("error", message, context);
	}

	public critical(message: string, context?: Record<string, any>): void {
		this.displayLog("critical", message, context);
	}
}