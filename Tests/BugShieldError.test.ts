import BugShieldError from "../Classes/BugShieldError";

describe('BugShieldError', () => {
    it('should create an instance of BugShieldError', () => {
        const error = new BugShieldError('CustomError', 'This is a custom error', '123', { additionalInfo: 'data' });

        expect(error).toBeInstanceOf(BugShieldError);
        expect(error).toBeInstanceOf(Error);
        expect(error.name).toBe('CustomError');
        expect(error.message).toBe('This is a custom error');
        expect(error.code).toBe('123');
        expect(error.context).toEqual({ additionalInfo: 'data' });
        // Check that the stack property exists (it's automatically generated).
        expect(error.stack).toBeDefined();
    });

    it('should capture a stack trace', () => {
        const error = new BugShieldError('CustomError', 'This is a custom error');

        // Check that the stack property exists (it's automatically generated).
        expect(error.stack).toBeDefined();
        // Check that the stack property includes the constructor function name (BugShieldError).
        expect(error.stack).toContain('BugShieldError');
    });
});
