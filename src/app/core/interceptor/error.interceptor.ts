import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const isClientSideError = error.error instanceof ErrorEvent;
      const errorObj = {
        clientSideError: isClientSideError,
        status: error.status,
        statusText: error.statusText,
        message: isClientSideError ? error.error.message : error.message
      };
      return throwError(() => new Error(errorObj.message));
    })
  );
};
