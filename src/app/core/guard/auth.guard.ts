import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
export const authGuard: CanActivateFn = (route, state) => {
  const sharedService = inject(SharedService);
  const router = inject(Router);
  if (sharedService.isLoggedIn) {
    return true;
  }
  else if (window.sessionStorage) {
    return window.sessionStorage.getItem('login') === 'true' || router.parseUrl('/auth/login');
  }
  else {
    return router.parseUrl('/auth/login');
  }
};
