import BugShield from "../Classes/BugShield";
import BugShieldError from "../Classes/BugShieldError";
import Logger from "../Classes/Logger";
import IBugShieldConfig from "../Interfaces/IBugShieldConfig";

describe("BugShield", () => {
    let bugShield: BugShield;

    // Before each test, create and store an instance of BugShield
    beforeEach(() => {
        bugShield = new BugShield();
    });

    it("should create an instance of BugShield", () => {
        expect(bugShield).toBeInstanceOf(BugShield); // Check for instance
    });

    it("should configure BugShield with provided config", () => {
        const config: IBugShieldConfig = {
            logLevel: "debug",
            logToConsole: true,
            logToFile: false,
            logFilePath: "/path/to/log/file.log",
        };

        bugShield.configure(config);

        expect(BugShield.config).toEqual(config); // Check for correct configuration
    });

    it("should create a custom error", () => {
        const error = bugShield.createError(
            "CustomError",
            "This is a custom error",
            "123",
        );

        // Each property is defined
        expect(error.name).toBeDefined();
        expect(error.message).toBeDefined();
        expect(error.code).toBeDefined();
        // Each property is correctly assigned
        expect(error).toHaveProperty("name", "CustomError"); // Name is assigned the correct value
        expect(error).toHaveProperty("message", "This is a custom error"); // Message is assigned the correct value
        expect(error).toHaveProperty("code", "123"); // Code is assigned the correct value
    });

    it("should be instance of BugShieldError and Error", () => {
        const error = bugShield.createError(
            "CustomError",
            "This is a custom error",
            "123",
        );

        expect(error).toBeInstanceOf(BugShieldError); // Returns BugShieldError
        expect(error).toBeInstanceOf(Error); // BugShieldError extends Error
    });

    it("should get a logger and be instance of Logger", () => {
        const newLogger = bugShield.getLogger("test-logger");
        expect(newLogger).toBeInstanceOf(Logger); // Check for the instance of Logger
    });

    // Add more test cases for handleError, etc.
});
