export = GenericException;
/**
 * Error used when is an generic or API response.
 */
declare class GenericException extends Error {
    constructor(message: any, code: any);
}
