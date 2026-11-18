import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { switchMap, throwError, catchError } from 'rxjs';
import { AuthStoreService } from '../services/auth.store.service';
export const auhtTokenInterceptor: HttpInterceptorFn = (req, next) => {
  // Lazily inject the services only when needed
  const jwtHelper = inject(JwtHelperService);
  const authService = inject(AuthStoreService);
  const router = inject(Router);
  // Bypass the interceptor for specific URLs
  if (['Login', 'Refresh', 'ForgotPassword', 'ResetPassword', 'Create'].some(url => req.url.includes(url))) {
    return next(req);
  }
  const userType = localStorage.getItem('user_type');
  if(userType == 'S'){
    return next(req);
  }
  const token = localStorage.getItem('auth_data');
  // if (token) {
    // const isTokenExpired = jwtHelper.isTokenExpired(token);
    if (token && token.split('.').length === 3) {
  const isTokenExpired = jwtHelper.isTokenExpired(token);
    if (!isTokenExpired) {
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedReq);
    } else {
      return authService.refresh(token).pipe(
        switchMap((res: any) => {
          console.log('Response from refresh:', res);  // Log the response to inspect its structure
          if (res.statusCode === '401') {
            router.navigate(['/auth/login']);
            return throwError(() => new Error('Invalid call'));
          }
          if (!res.message) {
            console.error('No token in response');
            router.navigate(['/auth/login']);
            return throwError(() => new Error('No valid token received'));
          }
          localStorage.setItem('auth_data', JSON.stringify(res.message));
          const userInfo = jwtHelper.decodeToken(res.message);
          authService.userProfile.next(userInfo);
          const transformedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${res.message}`
            }
          });
          return next(transformedReq);
        }),
        catchError(error => {
          router.navigate(['/auth/login']);
          return throwError(() => new Error(error.message || 'Invalid call'));
        })
      );
    }
  }
  router.navigate(['/auth/login']);
  return throwError(() => new Error('Invalid call'));
};