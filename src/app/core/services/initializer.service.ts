import { HttpBackend } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class InitializerService {
  private sharedService: SharedService;
  constructor(
    private readonly http: HttpBackend,
    private readonly injector: Injector
  ) {
    this.sharedService = this.injector.get(SharedService);
  }
  /**
   * Method to call the API bypassing the Interceptor chain.
   * Method called before Application is initialized to get the:
   * 1. CSP security headers.
   * 2. CSRF token as a secure HTTP only cookie.
   * 3. Any additional / runtime configuration.
   * 4. Loading user information based on token from web storage while reloading.
   */
  public getConfiguration(): Promise<any> {
    return Promise.resolve(true);
  }
}
