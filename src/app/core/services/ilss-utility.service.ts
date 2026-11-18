import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IAddMemberUserFormPayload, IDeleteMemberUserFormPayload, IEditMemberUserFormPayload, IMemberUserCreateResponse, IMemberUserDeleteResponse, IMemberUserPayload, IMemberUserResponse, IMemberUserUpdateResponse, IUtilityUpdatedNewDayPayload } from '../models/interface/ilss-utility-interface';
@Injectable({
  providedIn: 'root'
})
export class IlssUtilityService {
  constructor(private http: HttpClient) { }
  ////////////////////////DAY END/////////////////////////
  public Get_Unended_Dates(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Day_End_/Get_Unended_Dates`;
    return this.http.post<any>(apiUrl, payload);
  }
  public Update_New_Day(payload: IUtilityUpdatedNewDayPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Day_End_/Update_New_Day`;
    return this.http.post<any>(apiUrl, payload);
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
