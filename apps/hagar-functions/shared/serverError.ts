export interface ServerError {
    error?: {
        code?: string;
        message?: string;
        innerError?: any;
    }
}
