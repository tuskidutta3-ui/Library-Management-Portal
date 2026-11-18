import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  IAddManageBooksFormPayload,
  IAddMasterAddCategoryFormPayload,
  IDeleteManageBooksFormPayload,
  IDeleteMasterAddCategoryFormPayload,
  IEditManageBooksFormPayload,
  IIssueBooksGroupResponse,
  IIssueBooksPayload,
  IManageBooksCreateResponse,
  IManageBooksDeleteResponse,
  IManageBooksPayload,
  IManageBooksResponse,
  IMasterAddCategoryCreateResponse,
  IMasterAddCategoryDeleteResponse,
  IMasterAddCategoryPayload,
  IMasterCategoryResponse,
} from '../interface/librarian-interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LibrarianService {
  constructor(private http: HttpClient) {}
  public getCategoryForService(
    payload: IMasterAddCategoryPayload,
  ): Observable<IMasterCategoryResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MasterConfigEBook/GetAll';
    return this.http.post<IMasterCategoryResponse>(apiUrl, payload);
  }
  public addCategoryForService(
    payload: IAddMasterAddCategoryFormPayload,
  ): Observable<IMasterAddCategoryCreateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/MasterConfigEBook/Create';
    return this.http.post<IMasterAddCategoryCreateResponse>(apiUrl, payload);
  }
  public statusChangeCategory(
    payload: IDeleteMasterAddCategoryFormPayload,
  ): Observable<IMasterAddCategoryDeleteResponse> {
    const apiUrl =
      environment.apiEndpoint + '/api/MasterConfigEBook/StatusChange';
    return this.http.put<IMasterAddCategoryDeleteResponse>(apiUrl, payload);
  }
   public PrintBookCategory(
    payload: any,
  ): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/MasterConfigEBook/PrintBookCategory';
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////// MANAGE BOOK Master ///////////////////////////////////////
  public getManageBooksData(
    payload: IManageBooksPayload,
  ): Observable<IManageBooksResponse> {
    const apiUrl =
      environment.apiEndpoint + '/api/MasterBookDescription/GetAll';
    return this.http.post<IManageBooksResponse>(apiUrl, payload);
  }
  public ManageBooksstatusData(
    payload: IDeleteManageBooksFormPayload,
  ): Observable<IManageBooksDeleteResponse> {
    const apiUrl =
      environment.apiEndpoint + '/api/MasterBookDescription/StatusChange';
    return this.http.put<IManageBooksDeleteResponse>(apiUrl, payload);
  }
  public addManageBooksData(
    payload: IAddManageBooksFormPayload,
  ): Observable<IManageBooksCreateResponse> {
    const apiUrl =
      environment.apiEndpoint + '/api/MasterBookDescription/Create';
    return this.http.post<IManageBooksCreateResponse>(apiUrl, payload);
  }
  public editManageBooksData(
    payload: IEditManageBooksFormPayload,
  ): Observable<any> {
    const apiUrl =
      environment.apiEndpoint + '/api/MasterBookDescription/Update';
    return this.http.put<any>(apiUrl, payload);
  }
     public PrintBookDetails(
    payload: any,
  ): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/MasterBookDescription/PrintBookDetails';
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////MANAGE MEMBER////////////////////////////
  public getMembersData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/User/GetAll';
    return this.http.post<any>(apiUrl, payload);
  }
  public editMembersData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/UpdateMemberDetails/Update';
    return this.http.put<any>(apiUrl, payload);
  }
  public ManageMemeberstatusData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/User/StatusChange';
    return this.http.put<any>(apiUrl, payload);
  }
       public PrintAllMemberDetails(
    payload: any,
  ): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/User/PrintAllMemberDetails';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////ISSUE BOOKS////////////////////////////
  public GetAllIssueBooksDetailsForAdmin(
    payload: IIssueBooksPayload,
  ): Observable<IIssueBooksGroupResponse> {
    const apiUrl =
      environment.apiEndpoint +
      '/api/ReqRenewApp/GetAllIssueBooksDetailsForAdmin';
    return this.http.post<IIssueBooksGroupResponse>(apiUrl, payload);
  }
   public IssueBooksORejectCommand(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/ReqRenewApp/IssueBooksORejectCommand';
    return this.http.post<any>(apiUrl, payload);
  }

    /////////////////////////////PENDING/RENEWAL BOOKS////////////////////////////
  public GetAllPendingRenewalRquest(
    payload: any,
  ): Observable<any> {
    const apiUrl =
      environment.apiEndpoint +
      '/api/AdminPendingRenewalRequest/GetAllPendingRenewalRquest';
    return this.http.post<any>(apiUrl, payload);
  }
   public AdminPendingRenewalRequestCommand(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/AdminPendingRenewalRequest/AdminPendingRenewalRequestCommand';
    return this.http.post<any>(apiUrl, payload);
  }
}
