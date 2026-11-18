import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  map,
  tap,
  shareReplay,
  throwError,
} from 'rxjs';
import { ResponseApi } from '../models/class/ResponseApi';
import {
  ILoginItem,
  ILoginPayload,
  ILoginResponse,
  Fin_year_Change,
  PermissionReqApi,
  INewRegPayload,
  INewRegResponse,
} from '../models/interface/auth.interfaces';
import { UserProfile } from '../models/interface/user-profile.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
const AUTH_DATA = 'auth_data';
const USER_TYPE = 'user_type';
@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  jwtHelper = new JwtHelperService();
  public userProfile = new BehaviorSubject<UserProfile | null>(null);
  public subject = new BehaviorSubject<any>(null);
  user$: Observable<ILoginItem> = this.subject.asObservable();
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  userName$: Observable<string>;
  accessToken = '';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      withCredentials: 'true',
    }),
  };
  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.user$.pipe(map((isLoggedIn) => !isLoggedIn));
    this.userName$ = this.user$.pipe(
      map((user) => (user === null ? '' : user.userName))
    );
 
  }
  getAccessToken() {
    console.log('pp');
    const token = localStorage.getItem(AUTH_DATA);
    if (!token) {
      console.log('qq');
      return;
    }
    var code = this.jwtHelper.decodeToken(token as string) as UserProfile;
    this.userProfile.next(code);
    // console.log(code);
    return token;
  }
  login(data: ILoginPayload): Observable<ILoginResponse> {
    // console.log(environment.apiEndpoint + 'XXXXXXX');
    const apiUrl = environment.apiEndpoint + '/api/User/Login';
    console.log(environment.fileEndpoint);
    return this.http.post<ILoginResponse>(apiUrl, data).pipe(
      tap((user) => {
        // console.log('Inside login');
        this.subject.next(user.result);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user.message));
        localStorage.setItem(USER_TYPE, 'OfficeUser');
        var code = this.jwtHelper.decodeToken(user.message) as UserProfile;
        this.userProfile.next(code);
      }),
      shareReplay()
    );
  }
  public register(payload: INewRegPayload): Observable<INewRegResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/User/Create`;
    return this.http.post<INewRegResponse>(apiUrl, payload);
  }
  user(): Observable<any> {
    return this.http
      .get<ResponseApi>(environment.apiEndpoint + '/api/User/User')
      .pipe(shareReplay());
  }
  refresh(token: string): Observable<any> {
    let token1 = token.replace(/^"(.*)"$/, '$1');
    token1 = 'bearer ' + token1;
    const payload = {
      token: token1,
    };
    const userType = localStorage.getItem('user_type');
    let apiendp = '';
    if (userType == 'OfficeUsFer') {
      apiendp = '/api/User/Refresh';
    } else {
      apiendp = '/api/User/Refresh';
    }
    return this.http.post(
      environment.apiEndpoint + apiendp,
      JSON.stringify(payload),
      this.httpOptions
    );
  }
  logout() {
    console.log('service');
    const token = localStorage.getItem('auth_data');
    let token1 = token?.replace(/^"(.*)"$/, '$1');
    token1 = 'bearer ' + token1;
    const payload = {
      token: token1,
    };
    return this.http
      .post(
        environment.apiEndpoint + '/api/User/logout',
        JSON.stringify(payload),
        this.httpOptions
      )
      .pipe(
        tap(() => {
          this.subject.next(null);
          this.userProfile.next(null);
          sessionStorage.removeItem(AUTH_DATA);
        }),
        shareReplay()
      );
  }
  forgotPassword(email: string): Observable<any> {
    return this.http.post(
      environment.apiEndpoint + '/api/User/ForgotPassword',
      JSON.stringify(email),
      this.httpOptions
    );
  }
  resetPassword(data: any): Observable<any> {
    return this.http.post(
      environment.apiEndpoint + '/api/User/ChangePassword',
      JSON.stringify(data),
      this.httpOptions
    );
  }
  resetForgotPassword(data: any): Observable<any> {
    return this.http.post(
      environment.apiEndpoint + '/api/User/ResetPassword',
      JSON.stringify(data),
      this.httpOptions
    );
  }
  getUserName(): Observable<string> {
    return this.user$.pipe(map((user) => user.userName));
  }
  changeFinancialYear(data: Fin_year_Change): Observable<any> {
    return this.http
      .post<ResponseApi>(
        environment.apiEndpoint + '/api/User/FinancialYearChange',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(
        tap((user) => {
          this.subject.next(user.result);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user.message));
          var code = this.jwtHelper.decodeToken(user.message) as UserProfile;
          this.userProfile.next(code);
        }),
        shareReplay()
      );
  }
  CreateNewFinYear(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/FinYear/CreateNewFinYear';
    return this.http.post<any>(apiUrl, payload);
  }
  getMenu(userId: number): Observable<any> {
    const payload = {
      userId: userId,
    };
    return this.http.post(
      environment.apiEndpoint + '/MasterFrom/GetAll',
      JSON.stringify(payload),
      this.httpOptions
    );
  }
  GetPermission(payload: any): Observable<any> {
    const apiUrl =
      environment.apiEndpoint + '/api/UserGroupMaster/GetPermission';
    return this.http.post<PermissionReqApi>(apiUrl, payload);
  }
  handleError(error: any) {
    return throwError(() => {
      console.log(`Error Code: ${error.status}\nMessage: ${error.message}`);
      return error;
    });
  }
}
