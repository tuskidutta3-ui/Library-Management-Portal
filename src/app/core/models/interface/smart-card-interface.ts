// Payload interface
export interface IWriteSmartCardPayload {
    CardNumber: string;
}
// Base response interface
export interface IBaseResponse {
    statusCode: string;
    status: string;
    result: any;
    message: string;
}
// Success response interface
export interface ISuccessResponse extends IBaseResponse {
    status: 'success';
    result: null; // Assuming success does not return a specific result
}
// Error response interface
export interface IErrorResponse extends IBaseResponse {
    status: 'error';
    result: null;
}
