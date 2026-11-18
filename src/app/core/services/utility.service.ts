import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IGeneralPayload } from '../models/interface/common.interface';
import { IGroupNameCreatePayload, IGroupNameCreateResponse, IGroupNamePermissionAddPayload, IUserResponse, IUserStatusChangePayload, IUserStatusChangeResponse, IUserCreatePayload, IUserCreateResponse, IUserUpdatePayload, IUserUpdateResponse, IObTransferPayload, IObTransferResponse } from '../models/interface/utility.interface';
import { IMemberUserPayload, IMemberUserResponse, IDeleteMemberUserFormPayload, IMemberUserDeleteResponse, IAddMemberUserFormPayload, IMemberUserCreateResponse, IEditMemberUserFormPayload, IMemberUserUpdateResponse } from '../models/interface/ilss-utility-interface';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private http: HttpClient) { }
  //=========== User Group start ==================//
  public getAllMenuListData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/UserGroupMaster/GetAllMenu';
    return this.http.post<any>(apiUrl, payload);
  }
  public addUserGroup(payload: IGroupNameCreatePayload): Observable<IGroupNameCreateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/UserGroupMaster/AddUser';
    return this.http.post<IGroupNameCreateResponse>(apiUrl, payload);
  }
  // public editUserGroup(payload: IGroupNameUpdatePayload): Observable<IGroupNameUpdateResponse> {
  //   const apiUrl = environment.apiEndpoint + '/api/UserGroup/UpdateUserGroup';
  //   return this.http.put<IGroupNameUpdateResponse>(apiUrl, payload);
  // }
  public addPermission(payload: IGroupNamePermissionAddPayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/UserGroupMaster/Create';
    return this.http.post<any>(apiUrl, payload);
  }
  // ================ User Group End ====================//
  //======================  User List ============================
  public getuserData(payload: IGeneralPayload): Observable<IUserResponse> {
    const apiUrl = environment.apiEndpoint + '/api/User/GetAll';
    return this.http.post<IUserResponse>(apiUrl, payload);
  }
  public statusUserData(payload: IUserStatusChangePayload): Observable<IUserStatusChangeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/User/StatusChange';
    return this.http.put<IUserStatusChangeResponse>(apiUrl, payload);
  }
  public addUserData(payload: IUserCreatePayload): Observable<IUserCreateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/User/Create';
    return this.http.post<IUserCreateResponse>(apiUrl, payload);
  }
  public editUserData(payload: IUserUpdatePayload): Observable<IUserUpdateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/User/Update';
    return this.http.put<IUserUpdateResponse>(apiUrl, payload);
  }
  //======================== End User List ==============================
  //======================== Ob Transfer ================================
  public transfer_Ob(payload: IObTransferPayload): Observable<IObTransferResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Report/OpeningBalancetransfer';
    return this.http.post<IObTransferResponse>(apiUrl, payload);
  }
   //========================= Member User ==========================
   public getMemberUserData(payload: IMemberUserPayload): Observable<IMemberUserResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MemberPortal/GetAll';
    return this.http.post<IMemberUserResponse>(apiUrl, payload);
  }
  public statusMemberUserData(payload: IDeleteMemberUserFormPayload): Observable<IMemberUserDeleteResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MemberPortal/StatusChange';
    return this.http.put<IMemberUserDeleteResponse>(apiUrl, payload);
  }
  public addMemberUserData(payload: IAddMemberUserFormPayload): Observable<IMemberUserCreateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MemberPortal/Create';
    return this.http.post<IMemberUserCreateResponse>(apiUrl, payload);
  }
  public editMemberUserData(payload: IEditMemberUserFormPayload): Observable<IMemberUserUpdateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MemberPortal/Update';
    return this.http.put<IMemberUserUpdateResponse>(apiUrl, payload);
  }
}
