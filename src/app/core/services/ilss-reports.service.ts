import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IBillRegisterPayload, ISwimBillRegisterPayload, IDailyCollectionReportPayload, IDailyCollectionOthChargesReportPayload, IDailyCollectionCanteenReportPayload, IMemberTopUpComSumRecordPayload, IReportsOffShopBillRegPayload, ISubJAPayload, ISubStatusPayload, IBillWiseKotGroupResponse, IItemWiseSaleOffShopGroupResponse, IItemWiseSaleRestGroupResponse, IOffShopVoidBillRegGroupResponse, IReportsBillWiseKotPayload, IReportsCatWiseSalePayload, IReportsItemWiseSaleOffShopPayload, IReportsItemWiseSaleRestPayload, IReportsOffShopVoidBillRegPayload, IReportsVoidBillRegPayload, IVoidBillRegGroupResponse, ICardRechargeRegisterPayload, IItemMasterPayload, IItemOfferPayload, IMemRegPicPayload, ILabelPrintingPayload, ICautionMoneyCollectionGroupResponse, ICautionMoneyCollectionPayload, ICautionMoneyRefundGroupResponse, ICautionMoneyRefundPayload, IContacttNoWiseReportGroupResponse, IContacttNoWiseReportPayload, IDonationOtstandGroupResponse, IDonationRecvMemGroupResponse, IFineFromCardPayload, IItemPriceReportGroupResponse, IItemPriceReportPayload, IJuniorAssoSessionReportGroupResponse, IJuniorAssoSessionReportPayload, ILockerMovementGroupResponse, ILockerMovementPayload, ILockerRentOtstandGroupResponse, ILockerRentRecMemGroupResponse, IMemCardBalRetGroupResponse, IMemListForCardPrintReportGroupResponse, IMemListForCardPrintReportPayload, IMemNegBalGroupResponse, IMemRegWthtPicReportGroupResponse, IMemRegWthtPicReportPayload, IMemWiseLockerGroupResponse, IMemWiseLockerPayload, IRefferdCodeWiseJAReportGroupResponse, IRefferdCodeWiseJAReportPayload, IReportsDonationOtstandPayload, IReportsDonationRecvMemPayload, IReportsLockerRentOtstandPayload, IReportsLockerRentRecMemPayload, IReportsMemCardBalRetPayload, IReportsMemNegBalPayload, IReportsPayModeCardRechPayload, IServTaxRegReportPayload, IStatusWiseLockerGroupResponse, IStatusWiseLockerPayload, ISwimMemCardBalPayload, ICanteenStockRegGroupResponse, IFocSaleCanteenGroupResponse, IGoodsRcptnOTEGroupResponse, IGoodsRcptRegGroupResponse, IIssueRegCantMatGroupResponse, IItemWiseSaleCanteenGroupResponse, IListOfCantItemOBGroupResponse, IRecipeListGroupResponse, IReportsCanteenStockRegPayload, IReportsFocSaleCanteenPayload, IReportsGoodsRcptnOTEPayload, IReportsGoodsRcptRegPayload, IReportsIssueRegCantMatPayload, IReportsItemWiseSaleCanteenPayload, IReportsListOfCantItemOBPayload, IReportsRecipeListPayload, IGoodsRcptnOTEgdnGroupResponse, IReportsGoodsRcptnOTEgdnPayload, IAdjCantItemOBGroupResponse, IReportsAdjCantItemOBPayload, IGoodsRcptREGgdnGroupResponse, IReportsGoodsRcptREGgdnPayload, IIssueNoteRestMatGroupResponse, IReportsIssueNoteRestMatPayload, IIssueRegRestMatGroupResponse, IReportsIssueRegRestMatPayload, IIssueNoteOthMatGroupResponse, IReportsIssueNoteOthMatPayload, IIssueRegOthMatGroupResponse, IReportsIssueRegOthMatPayload, IReportsStockLedgSummPayload, IReportsGdwnStkSumValPayload, IReportsStkTakeWrkstPayload, IGdwnWastageGroupResponse, IReportsGdwnWastagePayload, IGdsRtrnNoteReportGroupResponse, IReportsGdsRtrnNoteReportPayload, IGdsRtrnRegReportGroupResponse, ILiquorStockReportPayload, ILiquorWastRegReportPayload, IReportsGdsRtrnRegReportPayload, ISuspenceReportPayload, ICanteenBillRegGroupResponse, ICanteenVoidBillRegGroupResponse, IReportsCanteenBillRegPayload, IReportsCanteenVoidBillRegPayload, ICatWiseMemListGroupResponse, IReportsCatWiseMemListPayload, IInsuranceDtlsGroupResponse, IReportsInsuranceDtlsPayload, IReportsMnyRcptpaymodePayload } from '../models/interface/ilss-reports.interface';
@Injectable({
  providedIn: 'root'
})
export class IlssReportsService {
  constructor(private http: HttpClient) { }
  /////////////////////////Get_Member_TopUp_Repport(COMMON)/////////////////////////
  public Get_Member_TopUp_Repport(payload: IMemberTopUpComSumRecordPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Member_TopUp_Repport`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Get_Active_Mem_Count_Report////////////////////
  public Get_Active_Mem_Count_Report
    (payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Active_Mem_Count_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////Get_Swim_Member_TopUp_Report/////////////////////////
  public Get_Swim_Member_TopUp_Report(payload: IMemberTopUpComSumRecordPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Swim_Member_TopUp_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////Get_Bill_Register_Hall_wise_Report/////////////////////////
  public Get_Bill_Register_Hall_wise_Report(payload: IBillRegisterPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Bill_Register_Hall_wise_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////Get_OS_Bill_Register_Hall_Wise_Report/////////////////////////
  public Get_OS_Bill_Register_Hall_Wise_Report(payload: IReportsOffShopBillRegPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_OS_Bill_Register_Hall_Wise_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////Get_Swim_Bill_Register_Hall_wise_Report/////////////////////////
  public Get_Swim_Bill_Register_Hall_wise_Report(payload: ISwimBillRegisterPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Swim_Bill_Register_Hall_wise_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////DAILY COLLECTION REPORT////////////////////
  public dailyCollectionReport(payload: IDailyCollectionReportPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Daily_Collection_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////DAILY COLLECTION OTHER CHARGES////////////////////
  public Get_Daily_Collection_Oth_Crg_Report
    (payload: IDailyCollectionOthChargesReportPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Daily_Collection_Oth_Crg_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////DAILY COLLECTION CANTEEN///////////////////
  public dailyCollectionCanteenReport(payload: IDailyCollectionCanteenReportPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Daily_Collection_Canteen_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////  SUBSCRIPTION FROM JA ////////////////////////////////////////////
  public Get_JA_Subs_Stat_Report(payload: ISubJAPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_JA_Subs_Stat_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////  Member Subscription Status ////////////////////////////////////////////
  public Get_Mem_Subs_Status_Report(payload: ISubStatusPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Mem_Subs_Status_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Get_Cat_Wise_Sale_Register_Report///////////////////
  public Get_Cat_Wise_Sale_Register_Report(payload: IReportsCatWiseSalePayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Cat_Wise_Sale_Register_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Get_Bill_Wise_Kot_Report///////////////////
  public Get_Bill_Wise_Kot_Report(payload: IReportsBillWiseKotPayload): Observable<IBillWiseKotGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Bill_Wise_Kot_Report`;
    return this.http.post<IBillWiseKotGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Void_Bill_Register///////////////////
  public Get_Void_Bill_Register(payload: IReportsVoidBillRegPayload): Observable<IVoidBillRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Void_Bill_Register`;
    return this.http.post<IVoidBillRegGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Item_Wise_Sale_Restaurant///////////////////
  public Get_Item_Wise_Sale_Restaurant(payload: IReportsItemWiseSaleRestPayload): Observable<IItemWiseSaleRestGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Wise_Sale_Restaurant`;
    return this.http.post<IItemWiseSaleRestGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_OS_Void_Register///////////////////
  public Get_OS_Void_Register(payload: IReportsOffShopVoidBillRegPayload): Observable<IOffShopVoidBillRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_OS_Void_Register`;
    return this.http.post<IOffShopVoidBillRegGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Item_Wise_Sale_OffShop///////////////////
  public Get_Item_Wise_Sale_OffShop(payload: IReportsItemWiseSaleOffShopPayload): Observable<IItemWiseSaleOffShopGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Wise_Sale_OffShop`;
    return this.http.post<IItemWiseSaleOffShopGroupResponse>(apiUrl, payload);
  }
  /////////////////////////Get_Bill_Register_Hall_wise_Report/////////////////////////
  public Get_Card_Recharge_Register_Report(payload: ICardRechargeRegisterPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Card_Recharge_Register_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////  Member Subscription Status ////////////////////////////////////////////
  public Get_Member_Card_Balance_Report(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Member_Card_Balance_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////  Item Master Report /////////////////////////
  public Get_Item_Master_Report(payload: IItemMasterPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Master_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////  Item Offer Report /////////////////////////
  public Get_Item_Offer_Report(payload: IItemOfferPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Offer_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////  MEMBER REGISTER (WITH PIC) MEMBER CODE RANGE REPORT /////////////////////////
  public Get_Mem_Reg_WI_Pc_Report(payload: IMemRegPicPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Mem_Reg_WI_Pc_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////  LABEL PRINTNG  ////////////////////////////////////////////
  public Get_Label_Print_Report(payload: ILabelPrintingPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Label_Print_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////Get_Locker_Rent_Recived_Report///////////////////
  public Get_Locker_Rent_Recived_Report(payload: IReportsLockerRentRecMemPayload): Observable<ILockerRentRecMemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Locker_Rent_Recived_Report`;
    return this.http.post<ILockerRentRecMemGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Locker_Outstanding_Report///////////////////
  public Get_Locker_Outstanding_Report(payload: IReportsLockerRentOtstandPayload): Observable<ILockerRentOtstandGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Locker_Outstanding_Report`;
    return this.http.post<ILockerRentOtstandGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Donation_Outstanding_Report///////////////////
  public Get_Donation_Outstanding_Report(payload: IReportsDonationOtstandPayload): Observable<IDonationOtstandGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Donation_Outstanding_Report`;
    return this.http.post<IDonationOtstandGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Donation_Recived_Report///////////////////
  public Get_Donation_Recived_Report(payload: IReportsDonationRecvMemPayload): Observable<IDonationRecvMemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Donation_Recived_Report`;
    return this.http.post<IDonationRecvMemGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Member_Card_Bal_Return_Report///////////////////
  public Get_Member_Card_Bal_Return_Report(payload: IReportsMemCardBalRetPayload): Observable<IMemCardBalRetGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Member_Card_Bal_Return_Report`;
    return this.http.post<IMemCardBalRetGroupResponse>(apiUrl, payload);
  }
  //////////////////////////Get_Mem_Nagative_Bal_Report///////////////////
  public Get_Mem_Nagative_Bal_Report(payload: IReportsMemNegBalPayload): Observable<IMemNegBalGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Mem_Nagative_Bal_Report`;
    return this.http.post<IMemNegBalGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_PModeWise_Card_Rcrge_Reg_Report////////////////////
  public Get_PModeWise_Card_Rcrge_Reg_Report
    (payload: IReportsPayModeCardRechPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_PModeWise_Card_Rcrge_Reg_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Get_Ctn_Money_Cln_Frm_Temp_Card_Report////////////////////
  public Get_Ctn_Money_Cln_Frm_Temp_Card_Report
    (payload: ICautionMoneyCollectionPayload): Observable<ICautionMoneyCollectionGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Ctn_Money_Cln_Frm_Temp_Card_Report`;
    return this.http.post<ICautionMoneyCollectionGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Ctn_Money_Cln_Frm_Temp_Card_Report////////////////////
  public Get_Ctn_Money_Rfnd_Frm_Mem_Card_Report
    (payload: ICautionMoneyRefundPayload): Observable<ICautionMoneyRefundGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Ctn_Money_Rfnd_Frm_Mem_Card_Report`;
    return this.http.post<ICautionMoneyRefundGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Fine_Cln_Frm_Mem_Card_Report////////////////////
  public Get_Fine_Cln_Frm_Mem_Card_Report
    (payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Fine_Cln_Frm_Mem_Card_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Get_Status_Wise_Locker_Report////////////////////
  public Get_Status_Wise_Locker_Report
    (payload: IStatusWiseLockerPayload): Observable<IStatusWiseLockerGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Status_Wise_Locker_Report`;
    return this.http.post<IStatusWiseLockerGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Locker_Movement_Report////////////////////
  public Get_Locker_Movement_Report
    (payload: ILockerMovementPayload): Observable<ILockerMovementGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Locker_Movement_Report`;
    return this.http.post<ILockerMovementGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Member_Wise_Locker_Report////////////////////
  public Get_Member_Wise_Locker_Report
    (payload: IMemWiseLockerPayload): Observable<IMemWiseLockerGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Member_Wise_Locker_Report`;
    return this.http.post<IMemWiseLockerGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Item_Price_Report////////////////////
  public Get_Item_Price_Report
    (payload: IItemPriceReportPayload): Observable<IItemPriceReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Price_Report`;
    return this.http.post<IItemPriceReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Mem_Reg_WO_Pc_Report////////////////////
  public Get_Mem_Reg_WO_Pc_Report
    (payload: IMemRegWthtPicReportPayload): Observable<IMemRegWthtPicReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Mem_Reg_WO_Pc_Report`;
    return this.http.post<IMemRegWthtPicReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Contact_No_Wise_Mem_Dtls////////////////////
  public Get_Contact_No_Wise_Mem_Dtls
    (payload: IContacttNoWiseReportPayload): Observable<IContacttNoWiseReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Contact_No_Wise_Mem_Dtls`;
    return this.http.post<IContacttNoWiseReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Mem_List_For_Card_Print_Report////////////////////
  public Get_Mem_List_For_Card_Print_Report
    (payload: IMemListForCardPrintReportPayload): Observable<IMemListForCardPrintReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Mem_List_For_Card_Print_Report`;
    return this.http.post<IMemListForCardPrintReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_List_Of_Jr_Asso_Session_Wise_Report////////////////////
  public Get_List_Of_Jr_Asso_Session_Wise_Report
    (payload: IJuniorAssoSessionReportPayload): Observable<IJuniorAssoSessionReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_List_Of_Jr_Asso_Session_Wise_Report`;
    return this.http.post<IJuniorAssoSessionReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Reff_Code_Wise_JA_Report////////////////////
  public Get_Reff_Code_Wise_JA_Report
    (payload: IRefferdCodeWiseJAReportPayload): Observable<IRefferdCodeWiseJAReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Reff_Code_Wise_JA_Report`;
    return this.http.post<IRefferdCodeWiseJAReportGroupResponse>(apiUrl, payload);
  }
  /////////////////Get_Service_Tax_Register_Report////////////////////
  public Get_Service_Tax_Register_Report
    (payload: IServTaxRegReportPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Service_Tax_Register_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////// FORM PURCHASE REPORT ////////////////////
  public GetPrintSwimForm
    (payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintSwimForm`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////Money Receipt Collection Report Card Type Wise////////////////////
  public Get_Form_Admission_MR_Collection_CardWise(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Form_Admission_MR_Collection_CardWise`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////Money Receipt Collection Report Date Wise////////////////////
  public Get_Form_Admission_MR_Collection_DateWise(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Form_Admission_MR_Collection_DateWise`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////// Batch List Summary Report ////////////////////
  public Get_BatchList_Summary_Report(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_BatchList_Summary_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////// Form Purchase But Admission Not Done ////////////////////
  public Get_Due_Booking(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Due_Booking`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Card Type Change Report////////////////////
  public Get_Swim_Type_Change
    (payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Swim_Type_Change`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Get_Swim_Mem_Card_Bal_Report////////////////////
  public Get_Swim_Mem_Card_Bal_Report
    (payload: ISwimMemCardBalPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Swim_Mem_Card_Bal_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_List_Of_Cant_Item_Ob_Report///////////////////
  public Get_List_Of_Cant_Item_Ob_Report(payload: IReportsListOfCantItemOBPayload): Observable<IListOfCantItemOBGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_List_Of_Cant_Item_Ob_Report`;
    return this.http.post<IListOfCantItemOBGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Adj_Of_CantOb_Report///////////////////
  public Get_Adj_Of_CantOb_Report(payload: IReportsAdjCantItemOBPayload):
    Observable<IAdjCantItemOBGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Adj_Of_CantOb_Report`;
    return this.http.post<IAdjCantItemOBGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Goods_Reciept_Reg_Report///////////////////
  public Get_Goods_Reciept_Reg_Report(payload: IReportsGoodsRcptRegPayload):
    Observable<IGoodsRcptRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Goods_Reciept_Reg_Report`;
    return this.http.post<IGoodsRcptRegGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Canteen_GRN_Report///////////////////
  public Get_Canteen_GRN_Report(payload: IReportsGoodsRcptnOTEPayload):
    Observable<IGoodsRcptnOTEGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Canteen_GRN_Report`;
    return this.http.post<IGoodsRcptnOTEGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_GRN_Report///////////////////
  public Get_GRN_Report(payload: IReportsGoodsRcptnOTEgdnPayload):
    Observable<IGoodsRcptnOTEgdnGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_GRN_Report`;
    return this.http.post<IGoodsRcptnOTEgdnGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_GRN_Register_Report///////////////////
  public Get_GRN_Register_Report(payload: IReportsGoodsRcptREGgdnPayload):
    Observable<IGoodsRcptREGgdnGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_GRN_Register_Report`;
    return this.http.post<IGoodsRcptREGgdnGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Issue_Note_Of_Rest_Mtrls_Report///////////////////
  public Get_Issue_Note_Of_Rest_Mtrls_Report(payload: IReportsIssueNoteRestMatPayload):
    Observable<IIssueNoteRestMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Issue_Note_Of_Rest_Mtrls_Report`;
    return this.http.post<IIssueNoteRestMatGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Issue_Reg_Of_Rest_Mtrls_Report///////////////////
  public Get_Issue_Reg_Of_Rest_Mtrls_Report(payload: IReportsIssueRegRestMatPayload):
    Observable<IIssueRegRestMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Issue_Reg_Of_Rest_Mtrls_Report`;
    return this.http.post<IIssueRegRestMatGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Issue_Note_Of_Oth_Mtrls_Report///////////////////
  public Get_Issue_Note_Of_Oth_Mtrls_Report(payload: IReportsIssueNoteOthMatPayload):
    Observable<IIssueNoteOthMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Issue_Note_Of_Oth_Mtrls_Report`;
    return this.http.post<IIssueNoteOthMatGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Issue_Reg_Of_Other_Mtrl_Report///////////////////
  public Get_Issue_Reg_Of_Other_Mtrl_Report(payload: IReportsIssueRegOthMatPayload):
    Observable<IIssueRegOthMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Issue_Reg_Of_Other_Mtrl_Report`;
    return this.http.post<IIssueRegOthMatGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Stock_Ledger_Report///////////////////
  public Get_Stock_Ledger_Report(payload: IReportsStockLedgSummPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Stock_Ledger_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Stock_Ledger_WIth_Value_Report///////////////////
  public Get_Stock_Ledger_WIth_Value_Report(payload: IReportsGdwnStkSumValPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Stock_Ledger_WIth_Value_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Stock_Take_Worksheet_Report///////////////////
  public Get_Stock_Take_Worksheet_Report(payload: IReportsStkTakeWrkstPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Stock_Take_Worksheet_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Godown_Wast_Report///////////////////
  public Get_Godown_Wast_Report(payload: IReportsGdwnWastagePayload):
    Observable<IGdwnWastageGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Godown_Wast_Report`;
    return this.http.post<IGdwnWastageGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Goods_Return_Note_Report///////////////////
  public Get_Goods_Return_Note_Report(payload: IReportsGdsRtrnNoteReportPayload):
    Observable<IGdsRtrnNoteReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Goods_Return_Note_Report`;
    return this.http.post<IGdsRtrnNoteReportGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Goods_Return_Reg_report///////////////////
  public Get_Goods_Return_Reg_report(payload: IReportsGdsRtrnRegReportPayload):
    Observable<IGdsRtrnRegReportGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Goods_Return_Reg_report`;
    return this.http.post<IGdsRtrnRegReportGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Liquor_Stock_Report///////////////////
  public Get_Liquor_Stock_Report(payload: ILiquorStockReportPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Liquor_Stock_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Liquor_Wast_Reg_Report///////////////////
  public Get_Liquor_Wast_Reg_Report(payload: ILiquorWastRegReportPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Liquor_Wast_Reg_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Suspence_Reg_Report///////////////////
  public Get_Suspence_Reg_Report(payload: ISuspenceReportPayload):
    Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Suspence_Reg_Report`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////Get_Issue_Of_Canteen_Materials_Report///////////////////
  public Get_Issue_Of_Canteen_Materials_Report(payload: IReportsIssueRegCantMatPayload): Observable<IIssueRegCantMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Issue_Of_Canteen_Materials_Report`;
    return this.http.post<IIssueRegCantMatGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_FOC_Sale_Cant_Report///////////////////
  public Get_FOC_Sale_Cant_Report(payload: IReportsFocSaleCanteenPayload): Observable<IFocSaleCanteenGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_FOC_Sale_Cant_Report`;
    return this.http.post<IFocSaleCanteenGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Canteen_Strock_Reg_Report///////////////////
  public Get_Canteen_Strock_Reg_Report(payload: IReportsCanteenStockRegPayload): Observable<ICanteenStockRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Canteen_Strock_Reg_Report`;
    return this.http.post<ICanteenStockRegGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Recipe_Listing_Report///////////////////
  public Get_Recipe_Listing_Report(payload: IReportsRecipeListPayload): Observable<IRecipeListGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Recipe_Listing_Report`;
    return this.http.post<IRecipeListGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Bill_Register_Canteen_Report///////////////////
  public Get_Bill_Register_Canteen_Report(payload: IReportsCanteenBillRegPayload): Observable<ICanteenBillRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Bill_Register_Canteen_Report`;
    return this.http.post<ICanteenBillRegGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Bill_Register_Void__Cant_Report///////////////////
  public Get_Bill_Register_Void__Cant_Report(payload: IReportsCanteenVoidBillRegPayload): Observable<ICanteenVoidBillRegGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Bill_Register_Void__Cant_Report`;
    return this.http.post<ICanteenVoidBillRegGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Item_Wise_Sale_Cant_Report///////////////////
  public Get_Item_Wise_Sale_Cant_Report(payload: IReportsItemWiseSaleCanteenPayload): Observable<IItemWiseSaleCanteenGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Report/Get_Item_Wise_Sale_Cant_Report`;
    return this.http.post<IItemWiseSaleCanteenGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Category_wise_Mem_List_Report///////////////////
  public Get_Category_wise_Mem_List_Report(payload: IReportsCatWiseMemListPayload): Observable<ICatWiseMemListGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Category_wise_Mem_List_Report`;
    return this.http.post<ICatWiseMemListGroupResponse>(apiUrl, payload);
  }
  /////////////////////Get_Insurance_Details_Report///////////////////
  public Get_Insurance_Details_Report(payload: IReportsInsuranceDtlsPayload): Observable<IInsuranceDtlsGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Insurance_Details_Report`;
    return this.http.post<IInsuranceDtlsGroupResponse>(apiUrl, payload);
  }
    /////////////////////Get_Form_Admission_MR_Collection_PayModeWise///////////////////
    public Get_Form_Admission_MR_Collection_PayModeWise(payload: IReportsMnyRcptpaymodePayload): Observable<any> {
      const apiUrl = `${environment.apiEndpoint}/api/ReportSwimming/Get_Form_Admission_MR_Collection_PayModeWise`;
      return this.http.post<any>(apiUrl, payload);
    }
}
