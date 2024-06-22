export default interface IBugShieldError extends Error {
    name: string; // The name of the error (e.g., 'ValidationError', 'DatabaseError')
    message: string; // The error message
    file?: string; // File throwing the error
    line?: number; // Line of the error
    column?: number; // Column of the error
    stack?: string; // Stack trace (optional)
    code?: string | number; // Custom error code (optional)
    context?: Record<string, any>; // Additional context information (optional)
}
