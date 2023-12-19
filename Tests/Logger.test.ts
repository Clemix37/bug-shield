import Logger from "../Classes/Logger";

describe('Logger', () => {
	let logger: Logger;
  
	beforeEach(() => {
	  	logger = new Logger('TestModule');
	});
  
	it('should create an instance of Logger', () => {
	  	expect(logger).toBeInstanceOf(Logger);
	});
  
	it('should log an error message', () => {
		const consoleErrorSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	
		logger.error('This is an error');
	
		expect(consoleErrorSpy).toHaveBeenCalled();
	
		consoleErrorSpy.mockRestore();
	});
  
	it('should log an info message', () => {
		const consoleInfoSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	
		logger.info('This is an info');
	
		expect(consoleInfoSpy).toHaveBeenCalled();
	
		consoleInfoSpy.mockRestore();
	});
  
	it('should log a debug message', () => {
		const consoleDebugSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
	
		logger.debug('This is an debug');
	
		expect(consoleDebugSpy).toHaveBeenCalled();
	
		consoleDebugSpy.mockRestore();
	});
  });