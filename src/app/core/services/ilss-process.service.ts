import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllDonationReminderGroupResponse, IAllDonationReminderPayload, IAllSubsRemProccessGroupResponse, IAllSubsRemProccessPayload, ICreateLiquorConsumptProcessPayload, ICreateReminderPayload, IDonationFindPayload, IDonationFindResponse, IDonationLetterFindGroupResponse, IDonationLetterFindPayload, IDonRemPrintGroupResponse, IDonRemPrintPayload, IGenYearlySubProcessPayload, IImportMemberCardBalProcessGroupResponse, ILiquorConsumptProcessGroupResponse, ILiquorConsumptProcessPayload, IPrintSubsRemPrintGroupResponse, IPrintSubsRemPrintPayload, IReminderDetailDonatioGroupResponse, IReminderDetailDonatioPayload, IReminderDetailProccessGroupResponse, IReminderDetailProccessPayload, IReminderDonationPayload, IReminderLetterFindGroupResponse, IReminderLetterFindPayload, ISubsRegDataFindPayload, ISubsRegDataFindResponse, ITransferBarStockPayload, ITransferBarStockProcessGroupResponse, ITransferBarStockProcessPayload, ITransferCanteenStockPayload, ITransferCanteenStockProcessGroupResponse, ITransferCanteenStockProcessPayload, ITransferGodownStockPayload, ITransferGodownStockProcessGroupResponse, ITransferGodownStockProcessPayload, IYearlySubProcessGroupResponse, IYearlySubProcessPayload } from '../models/interface/ilss-process';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IlssProcessService {
  constructor(private http: HttpClient) { }
  //////////////////////////Generate Yearly Subscription///////////////////
  public GetAllSubscription(payload: IYearlySubProcessPayload): Observable<IYearlySubProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetAllSubscription`;
    return this.http.post<IYearlySubProcessGroupResponse>(apiUrl, payload);
  }
  public GenerateSubScription(payload: IGenYearlySubProcessPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CreateSubscriptionSturture`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Generate Donation///////////////////
  public GetAllDonation(payload: IYearlySubProcessPayload): Observable<IYearlySubProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetAllDonation`;
    return this.http.post<IYearlySubProcessGroupResponse>(apiUrl, payload);
  }
  public GenerateDonation(payload: IGenYearlySubProcessPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CreateDonationSturture`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Import Member Card Balance///////////////////
  public GetAllMemberOB(payload: IYearlySubProcessPayload): Observable<IImportMemberCardBalProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetAllMemberOB`;
    return this.http.post<IImportMemberCardBalProcessGroupResponse>(apiUrl, payload);
  }
  public MemberObTransfer(payload: IGenYearlySubProcessPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/MemberObTransfer`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Liquor Consumption///////////////////
  public GetUnAdjustedConsumption(payload: ILiquorConsumptProcessPayload): Observable<ILiquorConsumptProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetUnAdjustedConsumption`;
    return this.http.post<ILiquorConsumptProcessGroupResponse>(apiUrl, payload);
  }
  public ProcessBarStockConsumption(payload: ICreateLiquorConsumptProcessPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/ProcessBarStockConsumption`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////////////////////////////////////////////////////////////
  ////////////////////////Subscription Regerate Data Find//////////////////////////
  public GetSubscriptionRegerateDataFind(payload: ISubsRegDataFindPayload): Observable<ISubsRegDataFindResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Process/GetSubscriptionRegerateDataFind';
    return this.http.post<ISubsRegDataFindResponse>(apiUrl, payload);
  }
  ////////////////////////Subscription Regerate Data//////////////////////////
  public GetSubscriptionRegerateData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Process/GetSubscriptionRegerateData';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////Subscription Regerate Data Find//////////////////////////
  public InactiveSubscriptionInstallment(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Process/InactiveSubscriptionInstallment';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////Regerate Subscription //////////////////////////
  public RegenerateSubcription(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Process/RegenerateSubcription';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////Donation Data Find//////////////////////////
  public GetDonationFind(payload: IDonationFindPayload): Observable<IDonationFindResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Process/GetDonationFind';
    return this.http.post<IDonationFindResponse>(apiUrl, payload);
  }
  ////////////////////////Update Donation //////////////////////////
  public UpdateDonation(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Process/UpdateDonation';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////// Transfer Godown Stock ///////////////////
  public GodownStockFind(payload: ITransferGodownStockProcessPayload): Observable<ITransferGodownStockProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GodownStockFind`;
    return this.http.post<ITransferGodownStockProcessGroupResponse>(apiUrl, payload);
  }
  public GodownStockTransfer(payload: ITransferGodownStockPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GodownStockTransfer`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////// Transfer Bar  Stock ///////////////////
  public BarStockFind(payload: ITransferBarStockProcessPayload): Observable<ITransferBarStockProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/BarStockFind`;
    return this.http.post<ITransferBarStockProcessGroupResponse>(apiUrl, payload);
  }
  public BarStockTransfer(payload: ITransferBarStockPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/BarStockTransfer`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////// Transfer Canteen  Stock ///////////////////
  public CanteenStockFind(payload: ITransferCanteenStockProcessPayload): Observable<ITransferCanteenStockProcessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CanteenStockFind`;
    return this.http.post<ITransferCanteenStockProcessGroupResponse>(apiUrl, payload);
  }
  public CanteenStockTransfer(payload: ITransferCanteenStockPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CanteenStockTransfer`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////////////MEMBER SUBSCRIPTION REMINDER///////////////////////////////////////
  public GetAllSubcriptionReminder(payload: IAllSubsRemProccessPayload): Observable<IAllSubsRemProccessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetAllSubcriptionReminder`;
    return this.http.post<IAllSubsRemProccessGroupResponse>(apiUrl, payload);
  }
  public GetReminderDetail(payload: IReminderDetailProccessPayload): Observable<IReminderDetailProccessGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetReminderDetail`;
    return this.http.post<IReminderDetailProccessGroupResponse>(apiUrl, payload);
  }
  public GetReminderLetterFind(payload: IReminderLetterFindPayload): Observable<IReminderLetterFindGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetReminderLetterFind`;
    return this.http.post<IReminderLetterFindGroupResponse>(apiUrl, payload);
  }
  public CreateReminder(payload: ICreateReminderPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CreateReminder`;
    return this.http.post<any>(apiUrl, payload);
  }
  public Get_Print_Subs_Reminder_Print(payload: IPrintSubsRemPrintPayload): Observable<IPrintSubsRemPrintGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/Get_Print_Subs_Reminder_Print`;
    return this.http.post<IPrintSubsRemPrintGroupResponse>(apiUrl, payload);
  }
    ////////////////////////////////////////DONATION REMINDER///////////////////////////////////////
  public GetReminderDonationLetterFind(payload: IDonationLetterFindPayload): Observable<IDonationLetterFindGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetReminderDonationLetterFind`;
    return this.http.post<IDonationLetterFindGroupResponse>(apiUrl, payload);
  }
  public CreateReminderDonation(payload: IReminderDonationPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/CreateReminderDonation`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetAllDonationReminder(payload: IAllDonationReminderPayload): Observable<IAllDonationReminderGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetAllDonationReminder`;
    return this.http.post<IAllDonationReminderGroupResponse>(apiUrl, payload);
  }
  public GetReminderDetailDonation(payload: IReminderDetailDonatioPayload): Observable<IReminderDetailDonatioGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/GetReminderDetailDonation`;
    return this.http.post<IReminderDetailDonatioGroupResponse>(apiUrl, payload);
  }
  public Get_Print_Don_Reminder_Print(payload: IDonRemPrintPayload): Observable<IDonRemPrintGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Process/Get_Print_Don_Reminder_Print`;
    return this.http.post<IDonRemPrintGroupResponse>(apiUrl, payload);
  }
}
