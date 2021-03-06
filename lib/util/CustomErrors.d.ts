export declare class NotSupportedError extends Error {
    constructor();
}
export declare class ProcessCanceled extends Error {
    constructor(message: string);
}
export declare class DataInvalid extends Error {
    constructor(message: string);
}
export declare class UserCanceled extends Error {
    constructor();
}
export declare class MissingDependency extends Error {
    constructor();
}
export declare class SetupError extends Error {
    constructor(message: string);
}
export declare class TemporaryError extends Error {
    constructor(message: string);
}
export declare class HTTPError extends Error {
    private mCode;
    private mMessage;
    private mURL;
    constructor(statusCode: number, message: string, url: string);
    readonly statusCode: number;
    readonly statusMessage: string;
    readonly url: string;
}
export declare class MissingInterpreter extends Error {
    private mURL;
    constructor(message: string, url?: string);
    readonly url: string;
}
export declare class NotFound extends Error {
    constructor(what: string);
}
