import { Provider } from '@angular/core';
import { JwtModuleOptions, JWT_OPTIONS } from '@auth0/angular-jwt';
export function tokenGetter() {
    const token = localStorage.getItem("auth_data");
    if (token) {
        return token.replace(/^"(.*)"$/, '$1');
    }
    return '';
}
export const jwtOptionsProvider: Provider = {
    provide: JWT_OPTIONS,
    useValue: {
        tokenGetter: tokenGetter,
        allowedDomains: ['151.106.35.128:7880', '151.106.35.128:7855'],
        disallowedRoutes: [
            'http://151.106.35.128:7880/api/User/Login',
            'http://151.106.35.128:7880/api/User/Refresh',
            'http://151.106.35.128:7880/api/User/ForgotPassword',
            'http://151.106.35.128:7880/api/User/ResetPassword',
            'http://151.106.35.128:7855/api/User/Login',
            'http://151.106.35.128:7855/api/User/Refresh',
            'http://151.106.35.128:7855/api/User/ForgotPassword',
            'http://151.106.35.128:7855/api/User/ResetPassword',
        ]
    } as JwtModuleOptions
};
