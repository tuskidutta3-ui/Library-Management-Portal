import { ErrorHandler } from "@angular/core";
import * as StackTrace from 'stacktrace-js';
import { environment } from "../../../../environments/environment";
export class GlobalErrorHandler implements ErrorHandler {
    public handleError(error: any): void {
        console.log(error);
        const message = error.message ? error.message : error.toString();
        // Get the stack trace.
        StackTrace.fromError(error).then(stackframes => {
            const stackArr = stackframes.slice(0, environment.stackFrameCount);
            // logging error with stack details.
            // Apply Logging service to log errors.
            console.error('Error: ', { message, stack: stackArr });
        })
            .catch(_ => { }); // Not handling any service triggered error.
    }
}