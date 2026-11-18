import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { auhtTokenInterceptor } from './core/interceptor/auht-token.interceptor';
import { provideToastr } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { jwtOptionsProvider } from './jwt.config';
import { errorInterceptor } from './core/interceptor/error.interceptor';
import { InitializerService } from './core/services/initializer.service';
import { GlobalErrorHandler } from './core/models/class/error.handler';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [
    jwtOptionsProvider,
    JwtHelperService,
    provideHttpClient(withInterceptors([auhtTokenInterceptor, errorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideToastr(),
    provideAnimations(),
    provideNoopAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitializerService) => {
        return () => initService.getConfiguration();
      },
      deps: [InitializerService],
      multi: true
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }, provideAnimationsAsync('noop'), provideAnimationsAsync(), provideAnimationsAsync('noop'), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
