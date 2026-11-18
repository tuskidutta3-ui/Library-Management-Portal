import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IMasterReqBookPayload, IReqBookGroupResponse, IDeleteReqBookFormPayload, IReqBookDeleteResponse, IAddReqBookFormPayload, IReqBookCreateResponse, IEditReqBookFormPayload, IRenewBookReqPayload, IAddRenewBookReqFormPayload, IRenewBookReqCreateResponse, IRenewBookReqGroupResponse } from './member-interface';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private http: HttpClient) { }
  ///////////// REQUEST BOOK  ///////////////////////////////////////
    public getReqBookFadata(payload: IMasterReqBookPayload): Observable<IReqBookGroupResponse> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/GetAll';
      return this.http.post<IReqBookGroupResponse>(apiUrl, payload);
    }
    public ReqBookFormstatusData(payload: IDeleteReqBookFormPayload): Observable<IReqBookDeleteResponse> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/StatusChange';
      return this.http.put<IReqBookDeleteResponse>(apiUrl, payload);
    }
    public addReqBookFadata(payload: IAddReqBookFormPayload): Observable<IReqBookCreateResponse> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/Create';
      return this.http.post<IReqBookCreateResponse>(apiUrl, payload);
    }
    public editReqBookFadata(payload: IEditReqBookFormPayload): Observable<any> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/Update';
      return this.http.put<any>(apiUrl, payload);
    }
    ///////////// RENEW BOOK REQUEST ///////////////////////////////////////
    public getRenewBookReqadata(payload: IRenewBookReqPayload): Observable<IRenewBookReqGroupResponse> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/GetAllRenewalRequestForMemebr';
      return this.http.post<IRenewBookReqGroupResponse>(apiUrl, payload);
    }
    public addRenewBookReqadata(payload: IAddRenewBookReqFormPayload): Observable<IRenewBookReqCreateResponse> {
      const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/RenewBookDetailsCommand';
      return this.http.post<IRenewBookReqCreateResponse>(apiUrl, payload);
    }
}
