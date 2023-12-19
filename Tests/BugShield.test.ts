import BugShield from "../Classes/BugShield";
import BugShieldError from "../Classes/BugShieldError";
import IBugShieldConfig from "../Interfaces/IBugShieldConfig";

describe('BugShield', () => {
  let bugShield: BugShield;

  beforeEach(() => {
    bugShield = new BugShield();
  });

  it('should create an instance of BugShield', () => {
    expect(bugShield).toBeInstanceOf(BugShield);
  });

  it('should configure BugShield with provided config', () => {
    const config:IBugShieldConfig = {
      logLevel: 'debug',
      logToConsole: true,
      logToFile: false,
      logFilePath: '/path/to/log/file.log',
    };
    
    bugShield.configure(config);

    expect(BugShield.config).toEqual(config);
  });

  it('should create a custom error', () => {
    const error = bugShield.createError('CustomError', 'This is a custom error', '123');

    expect(error.name).toBeDefined();
    expect(error.message).toBeDefined();
    expect(error.code).toBeDefined();
    expect(error).toHaveProperty('name', 'CustomError');
    expect(error).toHaveProperty('message', 'This is a custom error');
    expect(error).toHaveProperty('code', '123');
  });

  it('should be instance of BugShieldError and Error', () => {
    const error = bugShield.createError('CustomError', 'This is a custom error', '123');

    expect(error).toBeInstanceOf(BugShieldError);
    expect(error).toBeInstanceOf(Error);
  });

  // Add more test cases for handleError, getLogger, etc.
});
