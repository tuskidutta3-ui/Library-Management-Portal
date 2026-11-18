import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddAdmissonJuniorFormPayload, IAddCanFoodWasteFormPayload, IAddCanteenRawAdjFormPayload, IAddCanteenRawMatFormPayload, IAddCardTopUpFormPayload, IAddfeesCollectionFormPayload, IAddGoodsAdjGdwnFormPayload, IAddGoodsRctNoteFormPayload, IAddGoodsRetNoteFormPayload, IAddGRNforCanteenFormPayload, IAddIncreseBarStFormPayload, IAddIssueCardFormPayload, IAddIssueGdnResFormPayload, IAddIssueMemberCardFormPayload, IAddIssueRawMtrlFormPayload, IAddItemOtherOpenBalFormPayload, IAddItemRestOpenBalFormPayload, IAddLiqStockAdjFormPayload, IAddMemberCardBalRetFormPayload, IAddMiscCollecFormPayload, IAddNewMemSubFormPayload, IAddOtherMatIssueDetFormPayload, IAddRunMemDonFormPayload, IAddRunMemSubFormPayload, IAddSwimMemberCardBalRetFormPayload, IAddSwimmerCardTopUpFormPayload, IAddTransferInstFormPayload, IADMFORMDeleteResponse, IAdmFormFormPayload, IADMFORMGroupPayload, IADMFORMroupResponse, IAdmissionFormFormPayload, IAdmissonJuniorCreateResponse, IAdmissonJuniorDeleteResponse, IAdmissonJuniorGroupPayload, IAdmissonJuniorGroupResponse, IBoughtFormPayload, IBUYFORMDeleteResponse, IBuyFormFormPayload, IBUYFORMGroupPayload, IBUYFORMGroupResponse, ICancelIssuePayload, ICanFoodWastebDeleteResponse, ICanFoodWasteCreateResponse, ICanFoodWasteGroupResponse, ICanteenRawAdjbDeleteResponse, ICanteenRawAdjCreateResponse, ICanteenRawAdjGroupResponse, ICanteenRawMatbDeleteResponse, ICanteenRawMatCreateResponse, ICanteenRawMatGroupResponse, ICardMiniApiApiResponse, ICardMiniApiFormPayload, ICardTopUpCreateResponse, ICardTopUpDeleteResponse, ICardTopUpGroupResponse, ICardTypeChangeFormPayload, ICardTypeChangeGroupPayload, ICardTypeChangeGroupResponse, ICardTypeDeleteResponse, ICurrentBalByIdeFormPayload, ICurrentBalByIdResponse, IDeleteADMFORMFormPayload, IDeleteAdmissonJuniorFormPayload, IDeleteBUYFORMFormPayload, IDeleteCanFoodWasteFormPayload, IDeleteCanteenRawAdjFormPayload, IDeleteCanteenRawMatFormPayload, IDeleteCardTopUpFormPayload, IDeleteCardTypeFormPayload, IDeletefeesCollectionFormPayload, IDeleteGoodsRetNoteFormPayload, IDeleteIncreseBarStFormPayload, IDeleteIssueRawMtrlFormPayload, IDeleteItemOtherOpenBalFormPayload, IDeleteItemRestOpenBalFormPayload, IDeleteLiqStockAdjFormPayload, IDeleteMemberCardBalRetFormPayload, IDeleteMiscCollecFormPayload, IDeleteNewMemSubFormPayload, IDeleteOtherMatIssueDetFormPayload, IDeleteRunMemDonFormPayload, IDeleteRunMemSubFormPayload, IDeleteSwimmerCardTopUpFormPayload, IDeleteSwimMMemberCardBalRetFormPayload, IEditMiscCollecFormPayload, IEditRunMemDonFormPayload, IEncodeIssueCardFormPayload, IEncodeIssueCardResponse, IfeesCollectionCreateResponse, IfeesCollectionDeleteResponse, IFeesCollectionGroupPayload, IfeesCollectionGroupResponse, IGoodsAdjGdwnCreateResponse, IGoodsAdjGdwnGroupResponse, IGoodsRctNoteCreateResponse, IGoodsRctNoteGetByIdPayload, IGoodsRctNoteGetByIdResponse, IGoodsRctNoteGroupResponse, IGoodsRetNotebDeleteResponse, IGoodsRetNoteCreateResponse, IGoodsRetNoteDetGetByIdPayload, IGoodsRetNoteGroupResponse, IGRNforCanteenCreateResponse, IGRNforCanteenGetByIdPayload, IGRNforCanteenGetByIdResponse, IGRNforCanteenGroupResponse, IIncreseBarStbDeleteResponse, IIncreseBarStCreateResponse, IIncreseBarStGroupResponse, IIssueCardCreateResponse, IIssueCardGroupResponse, IIssueGdnResCreateResponse, IIssueGdnResGetByIdPayload, IIssueGdnResGetByIdResponse, IIssueGdnResGroupResponse, IIssueMemberCardCreateResponse, IIssueMemberCardGroupPayload, IIssueMemberCardGroupResponse, IIssueOffShopItemFrnGdnPayload, IIssueRawMtrlbDeleteResponse, IIssueRawMtrlCreateResponse, IIssueRawMtrlGroupResponse, IIsTimeSlotFreePayload, IItemOtherOpenBalbDeleteResponse, IItemOtherOpenBalCreateResponse, IItemOtherOpenBalGroupResponse, IItemRestOpenBalbDeleteResponse, IItemRestOpenBalCreateResponse, IItemRestOpenBalGroupResponse, IKOTCANCELApiApiResponse, IKOTCANCELApiFormPayload, IKOTEDITApiApiResponse, IKOTEDITApiFormPayload, IKOTTEMPBILLApiApiResponse, IKOTTEMPBILLApiFormPayload, ILiqStockAdjbDeleteResponse, ILiqStockAdjCreateResponse, ILiqStockAdjGroupResponse, IMemberCardBalRetCreateResponse, IMemberCardBalRetDeleteResponse, IMemberCardBalRetGroupResponse, IMiscCollecbDeleteResponse, IMiscCollecCreateResponse, IMiscCollecGroupPayload, IMiscCollecGroupResponse, IMiscCollecUpdateResponse, INewMemSubbDeleteResponse, INewMemSubCreateResponse, INewMemSubGroupResponse, IOffShopKotCreateResponse, IOffShopKotFormAddPayload, IOTHERKotCreateResponse, IOTHERKotFormAddPayload, IOtherMatIssueDetbDeleteResponse, IOtherMatIssueDetCreateResponse, IOtherMatIssueDetGetByIdPayload, IOtherMatIssueDetGroupResponse, IOtherMatIssueGetByIdResponse, IPosCreateResponse, IPosFormAddPayload, IPrintAdmissionFeeRecptFormPayload, IPrintAdmissionFeeRecptResponse, IPrintCardTopUpFormPayload, IPrintCardTopUpResponse, IPrintIssueCardFormPayload, IPrintIssueCardResponse, IPrintMemCardBalReturnFormPayload, IPrintMemCardBalReturnResponse, IPrintSwimMemCardBalReturnFormPayload, IPrintSwimMemCardBalReturnResponse, IPrintSwimMemCardTopUpFormPayload, IPrintSwimMemCardTopUpResponse, IRunMemDonCreateResponse, IRunMemDonDeleteResponse, IRunMemDonGroupPayload, IRunMemDonGroupResponse, IRunMemDonUpdateResponse, IRunMemSubCreateResponse, IRunMemSubDeleteResponse, IRunMemSubGetByIdFormPayload, IRunMemSubGetByIdResponse, IRunMemSubGroupResponse, ISubscriptionGroupPayload, ISubscriptionGroupResponse, ISwimCurrentBalByIdFormPayload, ISwimCurrentBalByIdResponse, ISwimMemberCardBalRetCreateResponse, ISwimMemberCardBalRetGroupResponse, ISwimmerCardTopUpCreateResponse, ISwimmerCardTopUpDeleteResponse, ISwimmerCardTopUpGroupResponse, ISwimMMemberCardBalRetDeleteResponse, ITimeSlotBookFormPayload, ITopUpApiApiResponse, ITopUpApiFormPayload, ITransactionCanFoodWastePayload, ITransactionCanteenRawAdjPayload, ITransactionCanteenRawMatPayload, ITransactionCardTopUpPayload, ITransactionGoodsAdjGdwnPayload, ITransactionGoodsRctNotePayload, ITransactionGoodsRetNotePayload, ITransactionGRNforCanteenPayload, ITransactionIncreseBarStPayload, ITransactionIssueGdnResPayload, ITransactionIssueRawMtrlPayload, ITransactionItemOtherOpenBalPayload, ITransactionItemRestOpenBalPayload, ITransactionLiqStockAdjPayload, ITransactionMemberCardBalRetPayload, ITransactionNewMemSubPayload, ITransactionOtherMatIssueDetPayload, ITransactionRunMemSubPayload, ITransactionSwimMemberCardBalRetPayload, ITransactionSwimmerCardTopUpPayload, ITransactionTransferInstPayload, ITransferInstCreateResponse, ITransferInstGroupResponse, ITransNewMemSubsPrintsFormPayload, ITransNewMemSubsPrintsResponse, ITransRunMemSubsPrintsFormPayload, ITransRunMemSubsPrintsResponse, IUpdateCardEncoCountFormPayload, IUpdateCardEncoCountResponse } from '../models/interface/ilss-transaction';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IIssueCardGroupPayload, IKOTBillDisplayFormPayload, IKOTBillDisplayResponse, IKOTBillRegenFormPayload, IKOTBillRegenResponse, IKOTBillVoidFormPayload, IKOTBillVoidResponse, IKOTItemApiFormPayload, IKOTItemApiResponse, IKOTOTHERBillDisplayFormPayload, IKOTOTHERBillDisplayResponse } from '../models/interface/common.interface';
import { ILoginPayload, ILoginResponse } from '../models/interface/auth.interfaces';
@Injectable({
  providedIn: 'root'
})
export class IlssTransactionService {
  constructor(private http: HttpClient) { }
  ///////////////////////////////////// ADMISSION OF JUNIOR ASSOCIATES  ///////////////////////////////////////////////////
  public getAdmissionJA(payload: IAdmissonJuniorGroupPayload): Observable<IAdmissonJuniorGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociate/GetAll`;
    return this.http.post<IAdmissonJuniorGroupResponse>(apiUrl, payload);
  }
  public addMemberData(
    payload: IAddAdmissonJuniorFormPayload,
    selectedPhotoFile: File | null,
  ): Observable<IAdmissonJuniorCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociate/CreateUpdate`;
    // Create FormData
    const formData: FormData = new FormData();
    // Check if payload.remarks is not null or undefined
    const remarks = payload.remarks ? payload.remarks.toString() : '';
    // Append each field from the payload to FormData directly
    formData.append('Row_Id', payload.row_Id.toString());
    formData.append('FormNo', payload.formNo.toString());
    formData.append('Session', payload.session.toString());
    formData.append('Form_Date', payload.form_Date.toString());
    formData.append('Ref_Mem_Id', payload.ref_Mem_Id.toString());
    formData.append('JFNm', payload.jfNm.toString());
    formData.append('JLNm', payload.jlNm.toString());
    formData.append('DOB', payload.dob.toString());
    formData.append('AgeYr', payload.ageYr.toString());
    formData.append('AgeMth', payload.ageMth.toString());
    formData.append('AgeDy', payload.ageDy.toString());
    formData.append('TotAge', payload.totAge.toString());
    formData.append('Sex', payload.sex.toString());
    formData.append('SwimCat', payload.swimCat.toString());
    formData.append('SwimmingSince', payload.swimmingSince.toString());
    formData.append('TimeSlot', payload.timeSlot.toString());
    formData.append('Address_Res', payload.address_Res.toString());
    formData.append('PinCode', payload.pinCode.toString());
    formData.append('NomineeNm', payload.nomineeNm.toString());
    formData.append('NomRel_Id', payload.nomRel_Id.toString());
    formData.append('MobNo', payload.mobNo.toString());
    formData.append('LandNo', payload.landNo == null ? '' : payload.landNo.toString());
    formData.append('StudOrNot', payload.studOrNot.toString());
    formData.append('Occupation', payload.occupation == null ? '' : payload.occupation.toString());
    formData.append('Institution', payload.institution.toString());
    formData.append('Class', payload.class.toString());
    formData.append('DocNm', payload.docNm.toString());
    formData.append('DocRNo', payload.docRNo.toString());
    formData.append('Remarks', remarks);
    // Append dynamic image details
    formData.append('Ja_Pic_Path', payload.ja_Pic_Path);
    formData.append('Ja_Pic_Folder', payload.ja_Pic_Folder);
    formData.append('Ja_Pic_Name', payload.ja_Pic_Name);
    formData.append('JPic', selectedPhotoFile as string | Blob);
    formData.append('DPic', payload.dPic);
    formData.append('RcptNo', payload.rcptNo == null ? '' : payload.rcptNo.toString());
    formData.append('Active', payload.active.toString());
    formData.append('InActive_Remarks', payload.inActive_Remarks == null ? '' : payload.inActive_Remarks.toString());
    formData.append('Add_By', payload.add_By.toString());
    formData.append('Add_Comp_IP', payload.add_Comp_IP.toString());
    return this.http.post<IAdmissonJuniorCreateResponse>(apiUrl, formData);
  }
  public InactiveStatusData(payload: IDeleteAdmissonJuniorFormPayload): Observable<IAdmissonJuniorDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociate/StatusChange`;
    return this.http.put<IAdmissonJuniorDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of ADMISSION OF JUNIOR ASSOCIATES ////////////////////////////////////////////////
  ///////////////////////////////////// Fees Collection From Junior Associate  ///////////////////////////////////////////////////
  public getFeesCollection(payload: IFeesCollectionGroupPayload): Observable<IfeesCollectionGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociateFeesDtl/GetAll`;
    return this.http.post<IfeesCollectionGroupResponse>(apiUrl, payload);
  }
  public addFeesCollectionData(payload: IAddfeesCollectionFormPayload): Observable<IfeesCollectionCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociateFeesDtl/CreateUpdate`;
    return this.http.post<IfeesCollectionCreateResponse>(apiUrl, payload);
  }
  public InactiveFeesCollectionStatusData(payload: IDeletefeesCollectionFormPayload): Observable<IfeesCollectionDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranJuniorAssociateFeesDtl/StatusChange`;
    return this.http.put<IfeesCollectionDeleteResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// End Of Fees Collection From Junior Associate  ///////////////////////////////////////////////////
  ///////////////////////////////////// Issue Of Member Card  ///////////////////////////////////////////////////
  public getIssueMemberCard(payload: IIssueMemberCardGroupPayload): Observable<IIssueMemberCardGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemberCradIssue/GetAll`;
    return this.http.post<IIssueMemberCardGroupResponse>(apiUrl, payload);
  }
  public addIssueMemberData(payload: IAddIssueMemberCardFormPayload): Observable<IIssueMemberCardCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemberCradIssue/Create`;
    return this.http.post<IIssueMemberCardCreateResponse>(apiUrl, payload);
  }
  public UpdateCardEncoCount(payload: IUpdateCardEncoCountFormPayload): Observable<IUpdateCardEncoCountResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemberCradIssue/UpdateCardEncoCount`;
    return this.http.put<IUpdateCardEncoCountResponse>(apiUrl, payload);
  }
  public IssueMemberReport(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemberCradIssue/GetPrintMemCardIsuue`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////////////// End Of Issue Of Member Card  ///////////////////////////////////////////////////
  ///////////////////////////////////////NEW MEMBER SUBSCRIPTION////////////////////////////////////////////
  public getNewMemSubscription(payload: ITransactionNewMemSubPayload): Observable<INewMemSubGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranNewMemSubs/GetAll`;
    return this.http.post<INewMemSubGroupResponse>(apiUrl, payload);
  }
  public addNewMemSubscription(payload: IAddNewMemSubFormPayload): Observable<INewMemSubCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranNewMemSubs/CreateUpdate`;
    return this.http.post<INewMemSubCreateResponse>(apiUrl, payload);
  }
  public NewMemSubscriptionstatusData(payload: IDeleteNewMemSubFormPayload): Observable<INewMemSubbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranNewMemSubs/StatusChange`;
    return this.http.put<INewMemSubbDeleteResponse>(apiUrl, payload);
  }
  /////////////////////////NEW MEMBER SUBSCRIPTION PRINT/////////////////////////
  public GetPrintNewMemSubscription(payload: ITransNewMemSubsPrintsFormPayload): Observable<ITransNewMemSubsPrintsResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranNewMemSubs/GetPrintNewMemSubscription`;
    return this.http.post<ITransNewMemSubsPrintsResponse>(apiUrl, payload);
  }
  /////////////////////////////////////// RUNNING MEMBERS DONATION ////////////////////////////////////////////
  public getRunningMemDonation(payload: IRunMemDonGroupPayload): Observable<IRunMemDonGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/GetAll`;
    return this.http.post<IRunMemDonGroupResponse>(apiUrl, payload);
  }
  public addRunningMemDonation(payload: IAddRunMemDonFormPayload): Observable<IRunMemDonCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/CreateUpdate`;
    return this.http.post<IRunMemDonCreateResponse>(apiUrl, payload);
  }
  public RunningMemDonationGetById(payload: IEditRunMemDonFormPayload): Observable<IRunMemDonUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/GetById`;
    return this.http.post<IRunMemDonUpdateResponse>(apiUrl, payload);
  }
  public RunningMemDonationstatusData(payload: IDeleteRunMemDonFormPayload): Observable<IRunMemDonDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/StatusChange`;
    return this.http.put<IRunMemDonDeleteResponse>(apiUrl, payload);
  }
  public RunningMemDonationReport(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/GetPrintRunMemDonation`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////////// MISCELLANEOUS COLLECTION ////////////////////////////////////////////
  public getMisColl(payload: IMiscCollecGroupPayload): Observable<IMiscCollecGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMiscellaneousCollectionContoller/GetAll`;
    return this.http.post<IMiscCollecGroupResponse>(apiUrl, payload);
  }
  public addMisColl(payload: IAddMiscCollecFormPayload): Observable<IMiscCollecCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMiscellaneousCollectionContoller/CreateUpdate`;
    return this.http.post<IMiscCollecCreateResponse>(apiUrl, payload);
  }
  public MisCollGetById(payload: IEditMiscCollecFormPayload): Observable<IMiscCollecUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMiscellaneousCollectionContoller/GetById`;
    return this.http.post<IMiscCollecUpdateResponse>(apiUrl, payload);
  }
  public MisCollstatusData(payload: IDeleteMiscCollecFormPayload): Observable<IMiscCollecbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunMemDonation/StatusChange`;
    return this.http.put<IMiscCollecbDeleteResponse>(apiUrl, payload);
  }
  /////////////////////////////////////// KOT / POS  ////////////////////////////////////////////
  public addKOT(payload: IPosFormAddPayload): Observable<IPosCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKot/GenerateKOT`;
    return this.http.post<IPosCreateResponse>(apiUrl, payload);
  }
  public EditKOT(payload: IKOTEDITApiFormPayload): Observable<IKOTEDITApiApiResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKot/EditDisplayKot`;
    return this.http.post<IKOTEDITApiApiResponse>(apiUrl, payload);
  }
  public CancelKOT(payload: IKOTCANCELApiFormPayload): Observable<IKOTCANCELApiApiResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKot/CancelOrder`;
    return this.http.post<IKOTCANCELApiApiResponse>(apiUrl, payload);
  }
  public sendPdfToWhatsApp(payload: FormData): Observable<Blob> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKot/SendEmailWhatsApp`;
    // Append the Type field to the FormData
    // payload.append('Type', type);  // 'S' or 'V'
    return this.http.post(apiUrl, payload, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        // Add other headers if needed, e.g., authorization tokens
      }),
      observe: 'response',  // Observe the full response
      responseType: 'arraybuffer',  // Expecting ArrayBuffer from the API
    }).pipe(
      map((response: HttpResponse<ArrayBuffer>) => {
        // Check if response.body is not null before converting to Blob
        if (response.body) {
          return new Blob([response.body], { type: 'application/pdf' });
        } else {
          throw new Error('Received null body in the response');
        }
      })
    );
  }
  ////////////////////////////////////// KOT BILL VOID OR REGENERATE /////////////////////////////////////////////////////
  public DisplaySettleBill(payload: IKOTBillDisplayFormPayload): Observable<IKOTBillDisplayResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/DisplaySettleBill';
    return this.http.post<IKOTBillDisplayResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// OTHER BILLING KOT BILL VOID OR REGENERATE /////////////////////////////////////////////////////
  public DisplaySettleBillOther(payload: IKOTBillDisplayFormPayload): Observable<IKOTBillDisplayResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotOther/DisplaySettleBill';
    return this.http.post<IKOTBillDisplayResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// CANCEL  KOT BILL VOID  /////////////////////////////////////////////////////
  public VoidBill(payload: IKOTBillVoidFormPayload): Observable<IKOTBillVoidResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/VoidBill';
    return this.http.post<IKOTBillVoidResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// REGENERATE KOT BILL   /////////////////////////////////////////////////////
  public KotRegenerate(payload: IKOTBillRegenFormPayload): Observable<IKOTBillRegenResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/KotRegenerate';
    return this.http.post<IKOTBillRegenResponse>(apiUrl, payload);
  }
  //////////////////////////////////// PRINT TEMP BILL /////////////////////////////////
  public KotPrint(payload: IKOTTEMPBILLApiFormPayload): Observable<IKOTTEMPBILLApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/PrintKot';
    return this.http.post<IKOTTEMPBILLApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// CARD MIMI STATEMENT ///////////////////////////////////////////
  public CardMiniPrint(payload: ICardMiniApiFormPayload): Observable<ICardMiniApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/MiniStatement';
    return this.http.post<ICardMiniApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// TOP UP UPDATE ///////////////////////////////////////////
  public UpdateKotAfterTopup(payload: ITopUpApiFormPayload): Observable<ITopUpApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKot/UpdateKotAfterTopup';
    return this.http.post<ITopUpApiApiResponse>(apiUrl, payload);
  }
  ///////////////////////////////////////// SWIMMER KOT //////////////////////////////////////////////////
  public addSKOT(payload: IPosFormAddPayload): Observable<IPosCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotSwimmer/GenerateKOT`;
    return this.http.post<IPosCreateResponse>(apiUrl, payload);
  }
  public EditSKOT(payload: IKOTEDITApiFormPayload): Observable<IKOTEDITApiApiResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotSwimmer/EditDisplayKot`;
    return this.http.post<IKOTEDITApiApiResponse>(apiUrl, payload);
  }
  public CancelSKOT(payload: IKOTCANCELApiFormPayload): Observable<IKOTCANCELApiApiResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotSwimmer/CancelOrder`;
    return this.http.post<IKOTCANCELApiApiResponse>(apiUrl, payload);
  }
  public DisplaySettleBillSwimmer(payload: IKOTBillDisplayFormPayload): Observable<IKOTBillDisplayResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/DisplaySettleBill';
    return this.http.post<IKOTBillDisplayResponse>(apiUrl, payload);
  }
  //////////////////////////////////// PRINT TEMP BILL /////////////////////////////////
  public KotPrintSwimmer(payload: IKOTTEMPBILLApiFormPayload): Observable<IKOTTEMPBILLApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/PrintKot';
    return this.http.post<IKOTTEMPBILLApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// CARD MIMI STATEMENT ///////////////////////////////////////////
  public CardMiniPrintSwimmer(payload: ICardMiniApiFormPayload): Observable<ICardMiniApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/MiniStatement';
    return this.http.post<ICardMiniApiApiResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// KOT BILL VOID OR REGENERATE /////////////////////////////////////////////////////
  public DisplaySSettleBill(payload: IKOTBillDisplayFormPayload): Observable<IKOTBillDisplayResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/DisplaySettleBill';
    return this.http.post<IKOTBillDisplayResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// CANCEL  KOT BILL VOID  /////////////////////////////////////////////////////
  public VoidSBill(payload: IKOTBillVoidFormPayload): Observable<IKOTBillVoidResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/VoidBill';
    return this.http.post<IKOTBillVoidResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// REGENERATE KOT BILL   /////////////////////////////////////////////////////
  public KotSRegenerate(payload: IKOTBillRegenFormPayload): Observable<IKOTBillRegenResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/KotRegenerate';
    return this.http.post<IKOTBillRegenResponse>(apiUrl, payload);
  }
  //////////////////////////////////// PRINT TEMP BILL /////////////////////////////////
  public KotSPrint(payload: IKOTTEMPBILLApiFormPayload): Observable<IKOTTEMPBILLApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/PrintKot';
    return this.http.post<IKOTTEMPBILLApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// CARD MIMI STATEMENT ///////////////////////////////////////////
  public SCardMiniPrint(payload: ICardMiniApiFormPayload): Observable<ICardMiniApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/MiniStatement';
    return this.http.post<ICardMiniApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// TOP UP UPDATE ///////////////////////////////////////////
  public UpdateSKotAfterTopup(payload: ITopUpApiFormPayload): Observable<ITopUpApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotSwimmer/UpdateKotAfterTopup';
    return this.http.post<ITopUpApiApiResponse>(apiUrl, payload);
  }
  /////////////////////////////////// OFFSHOP KOT ///////////////////////////////////////////////
  public GenerateKOTOffShop(payload: IOffShopKotFormAddPayload): Observable<IOffShopKotCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotOffShop/GenerateKOTOffShop`;
    return this.http.post<IOffShopKotCreateResponse>(apiUrl, payload);
  }
  public GetItemDataData(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotOffShop/GetItemDataData`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////// KOT BILL VOID OR REGENERATE /////////////////////////////////////////////////////
  public DisplaySettleBillOffshop(payload: IKOTBillDisplayFormPayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotOffShop/DisplaySettleBill';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////// CARD MIMI STATEMENT ///////////////////////////////////////////
  public CardMiniPrintOffshop(payload: ICardMiniApiFormPayload): Observable<ICardMiniApiApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotOffShop/MiniStatement';
    return this.http.post<ICardMiniApiApiResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// WINEX /////////////////////////////////////
  public GetTransferData(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotOffShop/GetTransferData`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////START OF RUNNING MEMBER SUBSCRIPTION//////////////////////////////
  public getRunMemSubscription(payload: ITransactionRunMemSubPayload): Observable<IRunMemSubGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunningMemberSubs/GetAll`;
    return this.http.post<IRunMemSubGroupResponse>(apiUrl, payload);
  }
  public addRunMemSubscription(payload: IAddRunMemSubFormPayload): Observable<IRunMemSubCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunningMemberSubs/CreateUpdate`;
    return this.http.post<IRunMemSubCreateResponse>(apiUrl, payload);
  }
  public RunMemSubscriptionstatusData(payload: IDeleteRunMemSubFormPayload): Observable<IRunMemSubDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunningMemberSubs/StatusChange`;
    return this.http.put<IRunMemSubDeleteResponse>(apiUrl, payload);
  }
  public RunMemSubscriptionGetByID(payload: IRunMemSubGetByIdFormPayload): Observable<IRunMemSubGetByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunningMemberSubs/GetById`;
    return this.http.post<IRunMemSubGetByIdResponse>(apiUrl, payload);
  }
  /////////////////////////RUNNING MEMBER SUBSCRIPTION PRINT/////////////////////////
  public GetPrintRunMemSubscription(payload: ITransRunMemSubsPrintsFormPayload): Observable<ITransRunMemSubsPrintsResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranRunningMemberSubs/GetPrintRunMemSubscription`;
    return this.http.post<ITransRunMemSubsPrintsResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////TRANSFER INSTALLMENT//////////////////////////////////////
  public getTransferInst(payload: ITransactionTransferInstPayload): Observable<ITransferInstGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranInstallCollecSusAc/GetAll`;
    return this.http.post<ITransferInstGroupResponse>(apiUrl, payload);
  }
  public addTransferInst(payload: IAddTransferInstFormPayload): Observable<ITransferInstCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranInstallCollecSusAc/Create`;
    return this.http.post<ITransferInstCreateResponse>(apiUrl, payload);
  }
  public TransferInstGetByID(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranInstallCollecSusAc/GetById`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////MEMBER CARD BALANCE RETURN//////////////////////////////////////
  public getMemberCardBalRet(payload: ITransactionMemberCardBalRetPayload): Observable<IMemberCardBalRetGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardBalReturn/GetAll`;
    return this.http.post<IMemberCardBalRetGroupResponse>(apiUrl, payload);
  }
  public addMemberCardBalRet(payload: IAddMemberCardBalRetFormPayload): Observable<IMemberCardBalRetCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardBalReturn/Create`;
    return this.http.post<IMemberCardBalRetCreateResponse>(apiUrl, payload);
  }
  public MemberCardBalRetstatusData(payload: IDeleteMemberCardBalRetFormPayload): Observable<IMemberCardBalRetDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardBalReturn/StatusChange`;
    return this.http.put<IMemberCardBalRetDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetPrintMemCardBalReturn////////////////////
  public GetCurrentBalById(payload: ICurrentBalByIdeFormPayload): Observable<ICurrentBalByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardBalReturn/GetCurrentBalById`;
    return this.http.post<ICurrentBalByIdResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetPrintMemCardBalReturn////////////////////
  public GetPrintMemCardBalReturn(payload: IPrintMemCardBalReturnFormPayload): Observable<IPrintMemCardBalReturnResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardBalReturn/GetPrintMemCardBalReturn`;
    return this.http.post<IPrintMemCardBalReturnResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////MEMBER CARD TOP UP//////////////////////////////////////
  public getMemCardTopup(payload: ITransactionCardTopUpPayload): Observable<ICardTopUpGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardTopUp/GetAll`;
    return this.http.post<ICardTopUpGroupResponse>(apiUrl, payload);
  }
  public addMemCardTopup(payload: IAddCardTopUpFormPayload): Observable<ICardTopUpCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardTopUp/Create`;
    return this.http.post<ICardTopUpCreateResponse>(apiUrl, payload);
  }
  public MemCardTopupstatusData(payload: IDeleteCardTopUpFormPayload): Observable<ICardTopUpDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardTopUp/StatusChange`;
    return this.http.put<ICardTopUpDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetPrintMemCardTopUp////////////////////
  public GetPrintMemCardTopUp(payload: IPrintCardTopUpFormPayload): Observable<IPrintCardTopUpResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranMemCardTopUp/GetPrintMemCardTopUp`;
    return this.http.post<IPrintCardTopUpResponse>(apiUrl, payload);
  }
  //////////////////////////////////// OTHER BILLING KOT //////////////////////////////////////////
  public GenerateKOTOtherBilling(payload: IOTHERKotFormAddPayload): Observable<IOTHERKotCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranKotOther/GenerateKOT`;
    return this.http.post<IOTHERKotCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// CANCEL  OTHER BILL VOID  /////////////////////////////////////////////////////
  public OtherVoidBill(payload: IKOTBillVoidFormPayload): Observable<IKOTBillVoidResponse> {
    const apiUrl = environment.apiEndpoint + '/api/TranKotOther/VoidBill';
    return this.http.post<IKOTBillVoidResponse>(apiUrl, payload);
  }
  /////////////////////////  Issue Of Member Card  (SEASONAL SWIMMER) //////////////////////////////////////
  public getIssueCardSwim(payload: IIssueCardGroupPayload): Observable<IIssueCardGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemberCradIssue/GetAll`;
    return this.http.post<IIssueCardGroupResponse>(apiUrl, payload);
  }
  public addIssueMemberSwimData(payload: IAddIssueCardFormPayload): Observable<IIssueCardCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemberCradIssue/Create`;
    return this.http.post<IIssueCardCreateResponse>(apiUrl, payload);
  }
  public UpdateIssueCardSwimEncoCount(payload: IEncodeIssueCardFormPayload): Observable<IEncodeIssueCardResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemberCradIssue/UpdateSwimCardEncoCount`;
    return this.http.put<IEncodeIssueCardResponse>(apiUrl, payload);
  }
  public IssueCardSwimMemberReport(payload: IPrintIssueCardFormPayload): Observable<IPrintIssueCardResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemberCradIssue/GetPrintSwimMemCardIssue`;
    return this.http.post<IPrintIssueCardResponse>(apiUrl, payload);
  }
  ///////////////////////End Of Issue Of Member Card (SEASONAL SWIMMER)/////////////////////////////////////
  /////////////////////////////MEMBER CARD TOP UP(SEASONAL SWIMMER)/////////////////////////////////
  public getMemCardTopupSwim(payload: ITransactionSwimmerCardTopUpPayload): Observable<ISwimmerCardTopUpGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardTopUp/GetAll`;
    return this.http.post<ISwimmerCardTopUpGroupResponse>(apiUrl, payload);
  }
  public addMemCardTopupSwim(payload: IAddSwimmerCardTopUpFormPayload): Observable<ISwimmerCardTopUpCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardTopUp/Create`;
    return this.http.post<ISwimmerCardTopUpCreateResponse>(apiUrl, payload);
  }
  public MemCardTopupSwimstatusData(payload: IDeleteSwimmerCardTopUpFormPayload): Observable<ISwimmerCardTopUpDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardTopUp/StatusChange`;
    return this.http.put<ISwimmerCardTopUpDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetPrintSwimMemCardTopUp////////////////////
  public GetPrintSwimMemCardTopUp(payload: IPrintSwimMemCardTopUpFormPayload): Observable<IPrintSwimMemCardTopUpResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardTopUp/GetPrintSwimMemCardTopUp`;
    return this.http.post<IPrintSwimMemCardTopUpResponse>(apiUrl, payload);
  }
  //////////////////////////////SWIMMER MEMBER CARD BALANCE RETURN/////////////////////////////////
  public getSwimMemberCardBalRet(payload: ITransactionSwimMemberCardBalRetPayload): Observable<ISwimMemberCardBalRetGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardBalReturn/GetAll`;
    return this.http.post<ISwimMemberCardBalRetGroupResponse>(apiUrl, payload);
  }
  public addSwimMemberCardBalRet(payload: IAddSwimMemberCardBalRetFormPayload): Observable<ISwimMemberCardBalRetCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardBalReturn/Create`;
    return this.http.post<ISwimMemberCardBalRetCreateResponse>(apiUrl, payload);
  }
  public SwimMemberCardBalRetstatusData(payload: IDeleteSwimMMemberCardBalRetFormPayload): Observable<ISwimMMemberCardBalRetDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardBalReturn/StatusChange`;
    return this.http.put<ISwimMMemberCardBalRetDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetSwimCurrentBalById////////////////////
  public GetSwimCurrentBalById(payload: ISwimCurrentBalByIdFormPayload): Observable<ISwimCurrentBalByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardBalReturn/GetSwimCurrentBalById`;
    return this.http.post<ISwimCurrentBalByIdResponse>(apiUrl, payload);
  }
  //////////////////////////START OF GetPrintSwimMemCardBalReturn////////////////////
  public GetPrintSwimMemCardBalReturn(payload: IPrintSwimMemCardBalReturnFormPayload): Observable<IPrintSwimMemCardBalReturnResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimMemCardBalReturn/GetPrintSwimMemCardBalReturn`;
    return this.http.post<IPrintSwimMemCardBalReturnResponse>(apiUrl, payload);
  }
  ///////////////////////////////////////// TRAN ISSUE OFF SHOP ITEM FROM GODOWN //////////////////////
  public CancelIssue(
    payload: ICancelIssuePayload
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueOffShopItemGdn/CancelIssue`;
    return this.http.post<any>(apiUrl, payload);
  }
  public IssueOffShopItemFrnGdn(
    payload: IIssueOffShopItemFrnGdnPayload
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueOffShopItemGdn/IssueOffShopItemFrnGdn`;
    return this.http.post<any>(apiUrl, payload);
  }
  checkUser(payload: ILoginPayload): Observable<ILoginResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/User/Login`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////// Time Slot Book ////////////////
  public SwimSlotBooking(payload: ITimeSlotBookFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/SwimSlotBooking`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetHelpIsTimeSlotFree(payload: IIsTimeSlotFreePayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/TranSwimBooking/IsTimeSlotFree';
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////////////// Card Type Change /////////////////////////////////////////////////
  public SwimTypeChange(payload: ICardTypeChangeFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/SwimTypeChange`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetAllSwimTypeChange(payload: ICardTypeChangeGroupPayload): Observable<ICardTypeChangeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetAllSwimTypeChange`;
    return this.http.post<ICardTypeChangeGroupResponse>(apiUrl, payload);
  }
  public CardTypestatusData(payload: IDeleteCardTypeFormPayload): Observable<ICardTypeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/ChangeStatusTypeChange`;
    return this.http.post<ICardTypeDeleteResponse>(apiUrl, payload);
  }
  /////////////////////////////GetPrintAdmissionFeeRecpt//////////////////////
  public GetPrintAdmissionFeeRecpt(payload: IPrintAdmissionFeeRecptFormPayload): Observable<IPrintAdmissionFeeRecptResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintAdmissionFeeRecpt`;
    return this.http.post<IPrintAdmissionFeeRecptResponse>(apiUrl, payload);
  }
  public GetPrintAdmissionFeeRecptBDate(payload: any): Observable<IPrintAdmissionFeeRecptResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintAdmissionFeeRecptBDate`;
    return this.http.post<IPrintAdmissionFeeRecptResponse>(apiUrl, payload);
  }
  public GetPrintSwimForm
    (payload: any): Observable<IPrintAdmissionFeeRecptFormPayload> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintSwimForm`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetPrintSwimFormBDate
    (payload: any): Observable<IPrintAdmissionFeeRecptFormPayload> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintSwimFormBDate`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////GetPrintFormPurchaseRecpt//////////////////////
  public GetPrintFormPurchaseRecpt(payload: IPrintAdmissionFeeRecptFormPayload): Observable<IPrintAdmissionFeeRecptResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintFormPurchaseRecpt`;
    return this.http.post<IPrintAdmissionFeeRecptResponse>(apiUrl, payload);
  }
  public GetPrintFormPurchaseRecptBDate(payload: IPrintAdmissionFeeRecptFormPayload): Observable<IPrintAdmissionFeeRecptResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintFormPurchaseRecptBDate`;
    return this.http.post<IPrintAdmissionFeeRecptResponse>(apiUrl, payload);
  }
  /////////////////////////////PURCHASE FORM FOR ONLINE //////////////////////
  public GetPrintFormPurchaseRefNo(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintFormPurchaseRefNo`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////// ADMISSION FORM FOR ONLINE //////////////////////////////
  public GetPrintAdmissionFeeRecptRefNo(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintAdmissionFeeRecptRefNo`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetPrintSwimFormRefNo(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPrintSwimFormRefNo`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////Admission Form Fill Up///////////////////////////
  public addAdmissionFormData(
    payload: IAdmissionFormFormPayload,
    selectedPhotoFile: File | null,
    slectedDocument: File | null
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/Create`;
    // Create FormData
    const formData: FormData = new FormData();
    // Append each field from the payload to FormData directly
    formData.append('FormNo', payload.formNo)
    formData.append('Swim_Pic', selectedPhotoFile as string | Blob)
    formData.append('SwimBookId', payload.swimBookId.toString())
    formData.append('UFile', slectedDocument as string | Blob)
    formData.append('ReceiptNo', payload.receiptNo)
    formData.append('Category', payload.category)
    formData.append('Sex', payload.sex)
    formData.append('CardNo', payload.cardNo)
    formData.append('Address', payload.address)
    formData.append('Pin', payload.pin)
    formData.append('NomName', payload.nomName)
    formData.append('NomRel', payload.nomRel)
    formData.append('SwimSince', payload.swimSince)
    formData.append('DocName', payload.docName)
    formData.append('DocRegNo', payload.docRegNo)
    formData.append('StudentOrNot', payload.studentOrNot)
    formData.append('Occupation', payload.occupation)
    formData.append('Institution', payload.institution)
    formData.append('Class', payload.class)
    formData.append('Description', payload.description)
    formData.append('FinYear', payload.finYear)
    formData.append('Filename', payload.filename)
    formData.append('FileExtension', payload.fileExtension)
    formData.append('MimeType', payload.mimeType)
    formData.append('FilePath', payload.filePath)
    formData.append('CardNo_Collection', payload.cardNo_Collection)
    formData.append('BankCode', payload.bankCode)
    formData.append('PaymentTypeCode', payload.paymentTypeCode)
    formData.append('ReceiptDt', payload.receiptDt)
    formData.append('ReceiptTm', payload.receiptTm)
    formData.append('TenderedAmount', payload.tenderedAmt.toString())
    formData.append('IsManual', payload.isManual)
    formData.append('Add_By', '')
    formData.append('Add_Comp_IP', '')
    formData.append('Basic_Amt', payload.basic_Amt.toString())
    formData.append('Gst_Per', payload.gst_Per.toString())
    formData.append('Gst_Amt', payload.gst_Amt.toString())
    formData.append('Round_Off', payload.round_Off.toString())
    formData.append('Total_Amt', payload.total_Amt.toString())
    return this.http.post<any>(apiUrl, formData);
  }
  public addAdmissionFormDataOnline(
    payload: IAdmissionFormFormPayload,
    selectedPhotoFile: File | null,
    slectedDocument: File | null
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/CreateOnline`;
    // Create FormData
    const formData: FormData = new FormData();
    // Append each field from the payload to FormData directly
    formData.append('FormNo', payload.formNo)
    formData.append('Swim_Pic', selectedPhotoFile as string | Blob)
    formData.append('SwimBookId', payload.swimBookId.toString())
    formData.append('UFile', slectedDocument as string | Blob)
    formData.append('ReceiptNo', payload.receiptNo)
    formData.append('Category', payload.category)
    formData.append('Sex', payload.sex)
    formData.append('CardNo', payload.cardNo)
    formData.append('Address', payload.address)
    formData.append('Pin', payload.pin)
    formData.append('NomName', payload.nomName)
    formData.append('NomRel', payload.nomRel)
    formData.append('SwimSince', payload.swimSince)
    formData.append('DocName', payload.docName)
    formData.append('DocRegNo', payload.docRegNo)
    formData.append('StudentOrNot', payload.studentOrNot)
    formData.append('Occupation', payload.occupation)
    formData.append('Institution', payload.institution)
    formData.append('Class', payload.class)
    formData.append('Description', payload.description)
    formData.append('FinYear', payload.finYear)
    formData.append('Filename', payload.filename)
    formData.append('FileExtension', payload.fileExtension)
    formData.append('MimeType', payload.mimeType)
    formData.append('FilePath', payload.filePath)
    formData.append('CardNo_Collection', payload.cardNo_Collection)
    formData.append('BankCode', payload.bankCode)
    formData.append('PaymentTypeCode', payload.paymentTypeCode)
    formData.append('ReceiptDt', payload.receiptDt)
    formData.append('ReceiptTm', payload.receiptTm)
    formData.append('TenderedAmount', payload.tenderedAmt.toString())
    formData.append('IsManual', payload.isManual)
    formData.append('Add_By', '')
    formData.append('Add_Comp_IP', '')
    formData.append('Basic_Amt', payload.basic_Amt.toString())
    formData.append('Gst_Per', payload.gst_Per.toString())
    formData.append('Gst_Amt', payload.gst_Amt.toString())
    formData.append('Round_Off', payload.round_Off.toString())
    formData.append('Total_Amt', payload.total_Amt.toString())
    return this.http.post<any>(apiUrl, formData);
  }
  public AdmissionFormData(
    payload: IAdmFormFormPayload,
    selectedPhotoFile: File | null,
    slectedDocument: File | null
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/Create`;
    // Create FormData
    const formData: FormData = new FormData();
    // Append each field from the payload to FormData directly
    formData.append('FormNo', payload.formNo)
    formData.append('Year', payload.years)
    formData.append('TenderedAmt', payload.tenderedAmt.toString())
    formData.append('SwimBookId', payload.swimBookId.toString())
    formData.append('IsManual', payload.isManual)
    formData.append('Add_By', payload.add_By)
    formData.append('Add_Comp_IP', payload.add_Comp_IP)
    formData.append('Swim_Pic', selectedPhotoFile as string | Blob)
    formData.append('UFile', slectedDocument as string | Blob)
    formData.append('ReceiptNo', payload.receiptNo)
    formData.append('Category', payload.category)
    formData.append('Sex', payload.sex)
    formData.append('CardNo', payload.cardNo)
    formData.append('Address', payload.address)
    formData.append('Pin', payload.pin)
    formData.append('NomName', payload.nomName)
    formData.append('NomRel', payload.nomRel)
    formData.append('SwimSince', payload.swimSince)
    formData.append('DocName', payload.docName)
    formData.append('DocRegNo', payload.docRegNo)
    formData.append('StudentOrNot', payload.studentOrNot)
    formData.append('Occupation', payload.occupation)
    formData.append('Institution', payload.institution)
    formData.append('Class', payload.class)
    formData.append('Description', payload.description)
    formData.append('FinYear', payload.finYear)
    formData.append('Filename', payload.filename)
    formData.append('FileExtension', payload.fileExtension)
    formData.append('MimeType', payload.mimeType)
    formData.append('FilePath', payload.filePath)
    formData.append('CardNo_Collection', payload.cardNo_Collection)
    formData.append('BankCode', payload.bankCode)
    formData.append('PaymentTypeCode', payload.paymentTypeCode)
    formData.append('ReceiptDt', payload.receiptDt)
    formData.append('ReceiptTm', payload.receiptTm)
    formData.append('Basic_Amt', payload.basic_Amt.toString())
    formData.append('Gst_Per', payload.gst_Per.toString())
    formData.append('Gst_Amt', payload.gst_Amt.toString())
    formData.append('Round_Off', payload.round_Off.toString())
    formData.append('Total_Amt', payload.total_Amt.toString())
    return this.http.post<any>(apiUrl, formData);
  }
  public UpdateSwimmBook(
    payload: IAdmFormFormPayload,
    selectedPhotoFile: File | null,
    slectedDocument: File | null
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/UpdateSwimmBook`;
    // Create FormData
    const formData: FormData = new FormData();
    // Append each field from the payload to FormData directly
    formData.append('FormNo', payload.formNo)
    formData.append('Year', payload.years)
    formData.append('TenderedAmt', payload.tenderedAmt.toString())
    formData.append('SwimBookId', payload.swimBookId.toString())
    formData.append('IsManual', payload.isManual)
    formData.append('Add_By', payload.add_By)
    formData.append('Add_Comp_IP', payload.add_Comp_IP)
    formData.append('Swim_Pic', selectedPhotoFile as string | Blob)
    formData.append('UFile', slectedDocument as string | Blob)
    formData.append('ReceiptNo', payload.receiptNo)
    formData.append('Category', payload.category)
    formData.append('Sex', payload.sex)
    formData.append('CardNo', payload.cardNo)
    formData.append('Address', payload.address)
    formData.append('Pin', payload.pin)
    formData.append('NomName', payload.nomName)
    formData.append('NomRel', payload.nomRel)
    formData.append('SwimSince', payload.swimSince)
    formData.append('DocName', payload.docName)
    formData.append('DocRegNo', payload.docRegNo)
    formData.append('StudentOrNot', payload.studentOrNot)
    formData.append('Occupation', payload.occupation)
    formData.append('Institution', payload.institution)
    formData.append('Class', payload.class)
    formData.append('Description', payload.description)
    formData.append('FinYear', payload.finYear)
    formData.append('Filename', payload.filename)
    formData.append('FileExtension', payload.fileExtension)
    formData.append('MimeType', payload.mimeType)
    formData.append('FilePath', payload.filePath)
    formData.append('CardNo_Collection', payload.cardNo_Collection)
    formData.append('BankCode', payload.bankCode)
    formData.append('PaymentTypeCode', payload.paymentTypeCode)
    formData.append('ReceiptDt', payload.receiptDt)
    formData.append('ReceiptTm', payload.receiptTm)
    formData.append('Basic_Amt', payload.basic_Amt.toString())
    formData.append('Gst_Per', payload.gst_Per.toString())
    formData.append('Gst_Amt', payload.gst_Amt.toString())
    formData.append('Round_Off', payload.round_Off.toString())
    formData.append('Total_Amt', payload.total_Amt.toString())
    return this.http.post<any>(apiUrl, formData);
  }
  public GetAllSwimmBook(payload: IADMFORMGroupPayload): Observable<IADMFORMroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetAllSwimmBook`;
    return this.http.post<IADMFORMroupResponse>(apiUrl, payload);
  }
  public SwimBookstatusData(payload: IDeleteADMFORMFormPayload): Observable<IADMFORMDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/StatusChangeFormBook`;
    return this.http.post<IADMFORMDeleteResponse>(apiUrl, payload);
  }
  /////////////////////////////////// BUY SWIMMER FORM ////////////////// 
  public BuyForm(payload: IBuyFormFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/BuyForm`;
    return this.http.post<any>(apiUrl, payload);
  }
  public BuyFormOnline(payload: IBuyFormFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/BuyFormOnline`;
    return this.http.post<any>(apiUrl, payload);
  }
  public Payment(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/Payment/initiate`;
    return this.http.post<any>(apiUrl, payload);
  }
  public GetAllBuyForm(payload: IBUYFORMGroupPayload): Observable<IBUYFORMGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetAllBuyForm`;
    return this.http.post<IBUYFORMGroupResponse>(apiUrl, payload);
  }
  public BuyFormstatusData(payload: IDeleteBUYFORMFormPayload): Observable<IBUYFORMDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/StatusChangeFormBuy`;
    return this.http.post<IBUYFORMDeleteResponse>(apiUrl, payload);
  }
  public UpdateAllBuyForm(payload: IBuyFormFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/UpdateAllBuyForm`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////GetAllBougthForms//////////////////////
  public GetAllBougthForms(payload: IBoughtFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetAllBougthForms`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////// SUBSCRIPTION GETALL (MEMBER PORTAL) //////////////////////////////////////
  public SubscriptionGetAll(payload: ISubscriptionGroupPayload): Observable<ISubscriptionGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranNewMemSubs/GetById`;
    return this.http.post<ISubscriptionGroupResponse>(apiUrl, payload);
  }
  //////////////////////////////ITEM(RESTAURANT) OPENING BALANCE////////////////////////////
  public getItemRestOpenBal(payload: ITransactionItemRestOpenBalPayload): Observable<IItemRestOpenBalGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemRestOB/GetAll`;
    return this.http.post<IItemRestOpenBalGroupResponse>(apiUrl, payload);
  }
  public addItemRestOpenBal(payload: IAddItemRestOpenBalFormPayload): Observable<IItemRestOpenBalCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemRestOB/CreateUpdate`;
    return this.http.post<IItemRestOpenBalCreateResponse>(apiUrl, payload);
  }
  public ItemRestOpenBalstatusData(payload: IDeleteItemRestOpenBalFormPayload): Observable<IItemRestOpenBalbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemRestOB/StatusChange`;
    return this.http.put<IItemRestOpenBalbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////GOODS RECEIPT NOTE////////////////////////////
  public getGoodsRcptNote(payload: ITransactionGoodsRctNotePayload): Observable<IGoodsRctNoteGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGrn/GetAll`;
    return this.http.post<IGoodsRctNoteGroupResponse>(apiUrl, payload);
  }
  public addGoodsRcptNote(payload: IAddGoodsRctNoteFormPayload): Observable<IGoodsRctNoteCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGrn/CreateUpdate`;
    return this.http.post<IGoodsRctNoteCreateResponse>(apiUrl, payload);
  }
  public GoodsRcptNoteGetByID(payload: IGoodsRctNoteGetByIdPayload): Observable<IGoodsRctNoteGetByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGrn/GetByGrnNo`;
    return this.http.post<IGoodsRctNoteGetByIdResponse>(apiUrl, payload);
  }
  ////////////////////////////// ISSUE FROM GODOWN TO RESTAURANT////////////////////////////
  public getIssueGdwnRest(payload: ITransactionIssueGdnResPayload): Observable<IIssueGdnResGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmGdnToRest/GetAll`;
    return this.http.post<IIssueGdnResGroupResponse>(apiUrl, payload);
  }
  public addIssueGdwnRest(payload: IAddIssueGdnResFormPayload): Observable<IIssueGdnResCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmGdnToRest/CreateUpdate`;
    return this.http.post<IIssueGdnResCreateResponse>(apiUrl, payload);
  }
  public IssueGdwnRestGetByID(payload: IIssueGdnResGetByIdPayload): Observable<IIssueGdnResGetByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmGdnToRest/GetByIssueNo`;
    return this.http.post<IIssueGdnResGetByIdResponse>(apiUrl, payload);
  }
  //////////////////////////////ITEM(OTHER) OPENING BALANCE////////////////////////////
  public getItemOtherOpenBal(payload: ITransactionItemOtherOpenBalPayload): Observable<IItemOtherOpenBalGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranOtherItemOB/GetAll`;
    return this.http.post<IItemOtherOpenBalGroupResponse>(apiUrl, payload);
  }
  public addItemOtherOpenBal(payload: IAddItemOtherOpenBalFormPayload): Observable<IItemOtherOpenBalCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranOtherItemOB/CreateUpdate`;
    return this.http.post<IItemOtherOpenBalCreateResponse>(apiUrl, payload);
  }
  public ItemOtherOpenBalstatusData(payload: IDeleteItemOtherOpenBalFormPayload): Observable<IItemOtherOpenBalbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranOtherItemOB/StatusChange`;
    return this.http.put<IItemOtherOpenBalbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////CANTEEN FOOD WASTAGE AT RESTAURANT////////////////////////////
  public getCanFoodWaste(payload: ITransactionCanFoodWastePayload): Observable<ICanFoodWasteGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenFdWstAtRest/GetAll`;
    return this.http.post<ICanFoodWasteGroupResponse>(apiUrl, payload);
  }
  public addCanFoodWaste(payload: IAddCanFoodWasteFormPayload): Observable<ICanFoodWasteCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenFdWstAtRest/CreateUpdate`;
    return this.http.post<ICanFoodWasteCreateResponse>(apiUrl, payload);
  }
  public CanFoodWastestatusData(payload: IDeleteCanFoodWasteFormPayload): Observable<ICanFoodWastebDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenFdWstAtRest/StatusChange`;
    return this.http.put<ICanFoodWastebDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////LIQUOR STOCK ADJUSTMENT////////////////////////////
  public getLiqStockAdj(payload: ITransactionLiqStockAdjPayload): Observable<ILiqStockAdjGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranLqrStkAdj/GetAll`;
    return this.http.post<ILiqStockAdjGroupResponse>(apiUrl, payload);
  }
  public addLiqStockAdj(payload: IAddLiqStockAdjFormPayload): Observable<ILiqStockAdjCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranLqrStkAdj/CreateUpdate`;
    return this.http.post<ILiqStockAdjCreateResponse>(apiUrl, payload);
  }
  public LiqStockAdjstatusData(payload: IDeleteLiqStockAdjFormPayload): Observable<ILiqStockAdjbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranLqrStkAdj/StatusChange`;
    return this.http.put<ILiqStockAdjbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////INCREASE BAR STOCK ADJUSTMENT////////////////////////////
  public getIncreseBarSt(payload: ITransactionIncreseBarStPayload): Observable<IIncreseBarStGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIncreaseBarStock/GetAll`;
    return this.http.post<IIncreseBarStGroupResponse>(apiUrl, payload);
  }
  public addIncreseBarSt(payload: IAddIncreseBarStFormPayload): Observable<IIncreseBarStCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIncreaseBarStock/CreateUpdate`;
    return this.http.post<IIncreseBarStCreateResponse>(apiUrl, payload);
  }
  public IncreseBarStstatusData(payload: IDeleteIncreseBarStFormPayload): Observable<IIncreseBarStbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIncreaseBarStock/StatusChange`;
    return this.http.put<IIncreseBarStbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////CANTEEN RAW MATERIAL OPENING BALANCE////////////////////////////
  public getCanteenRawMat(payload: ITransactionCanteenRawMatPayload): Observable<ICanteenRawMatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenRawMatrlOb/GetAll`;
    return this.http.post<ICanteenRawMatGroupResponse>(apiUrl, payload);
  }
  public addCanteenRawMat(payload: IAddCanteenRawMatFormPayload): Observable<ICanteenRawMatCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenRawMatrlOb/CreateUpdate`;
    return this.http.post<ICanteenRawMatCreateResponse>(apiUrl, payload);
  }
  public CanteenRawMatstatusData(payload: IDeleteCanteenRawMatFormPayload): Observable<ICanteenRawMatbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenRawMatrlOb/StatusChange`;
    return this.http.put<ICanteenRawMatbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////GRN FOR CANTEEN RAW MATERIALS////////////////////////////
  public getGRNforCanteen(payload: ITransactionGRNforCanteenPayload): Observable<IGRNforCanteenGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenGrn/GetAll`;
    return this.http.post<IGRNforCanteenGroupResponse>(apiUrl, payload);
  }
  public addGRNforCanteen(payload: IAddGRNforCanteenFormPayload): Observable<IGRNforCanteenCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenGrn/CreateUpdate`;
    return this.http.post<IGRNforCanteenCreateResponse>(apiUrl, payload);
  }
  public GRNforCanteenGetByID(payload: IGRNforCanteenGetByIdPayload): Observable<IGRNforCanteenGetByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranCanteenGrn/GetByCanteenGrnNo`;
    return this.http.post<IGRNforCanteenGetByIdResponse>(apiUrl, payload);
  }
  //////////////////////////////OTHER MATERIALS ISSUE DETAILS////////////////////////////
  public getOtherMatIssue(payload: ITransactionOtherMatIssueDetPayload): Observable<IOtherMatIssueDetGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemOtherMatlIssue/GetAll`;
    return this.http.post<IOtherMatIssueDetGroupResponse>(apiUrl, payload);
  }
  public addOtherMatIssue(payload: IAddOtherMatIssueDetFormPayload): Observable<IOtherMatIssueDetCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemOtherMatlIssue/CreateUpdate`;
    return this.http.post<IOtherMatIssueDetCreateResponse>(apiUrl, payload);
  }
  public OtherMatIssuestatusData(payload: IDeleteOtherMatIssueDetFormPayload): Observable<IOtherMatIssueDetbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemOtherMatlIssue/StatusChange`;
    return this.http.put<IOtherMatIssueDetbDeleteResponse>(apiUrl, payload);
  }
  public OtherMatIssueGetByID(payload: IOtherMatIssueDetGetByIdPayload): Observable<IOtherMatIssueGetByIdResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranItemOtherMatlIssue/GetIssueByNo`;
    return this.http.post<IOtherMatIssueGetByIdResponse>(apiUrl, payload);
  }
  //////////////////////////////GOODS RETURN NOTE////////////////////////////
  public getGoodsRetNote(payload: ITransactionGoodsRetNotePayload): Observable<IGoodsRetNoteGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodsRtrnNote/GetAll`;
    return this.http.post<IGoodsRetNoteGroupResponse>(apiUrl, payload);
  }
  public addGoodsRetNote(payload: IAddGoodsRetNoteFormPayload): Observable<IGoodsRetNoteCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodsRtrnNote/CreateUpdate`;
    return this.http.post<IGoodsRetNoteCreateResponse>(apiUrl, payload);
  }
  public GoodsRetNotestatusData(payload: IDeleteGoodsRetNoteFormPayload): Observable<IGoodsRetNotebDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodsRtrnNote/StatusChange`;
    return this.http.put<IGoodsRetNotebDeleteResponse>(apiUrl, payload);
  }
  public GoodsRetNoteGetByID(payload: IGoodsRetNoteDetGetByIdPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodsRtrnNote/GetByReturnNo`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////GOODS ADJUSTMENT AT GODOWN////////////////////////////
  public getGoodsAdjGodown(
    payload: ITransactionGoodsAdjGdwnPayload
  ): Observable<IGoodsAdjGdwnGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodAdjGowdown/GetAll`;
    return this.http.post<IGoodsAdjGdwnGroupResponse>(apiUrl, payload);
  }
  public addGoodsAdjGodown(
    payload: IAddGoodsAdjGdwnFormPayload
  ): Observable<IGoodsAdjGdwnCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodAdjGowdown/CreateUpdate`;
    return this.http.post<IGoodsAdjGdwnCreateResponse>(apiUrl, payload);
  }
  public addGetItemCB(
    payload: any
  ): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/TranGoodAdjGowdown/GetItemCB`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////ISSUE OF CANTEEN RAW MATERIAL////////////////////////////
  public getIssueCantRawMtrl(
    payload: ITransactionIssueRawMtrlPayload
  ): Observable<IIssueRawMtrlGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmCanteen/GetAll`;
    return this.http.post<IIssueRawMtrlGroupResponse>(apiUrl, payload);
  }
  public addIssueCantRawMtrl(
    payload: IAddIssueRawMtrlFormPayload
  ): Observable<IIssueRawMtrlCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmCanteen/CreateUpdate`;
    return this.http.post<IIssueRawMtrlCreateResponse>(apiUrl, payload);
  }
  public adjIssueRawMtrlStatusChange(
    payload: IDeleteIssueRawMtrlFormPayload
  ): Observable<IIssueRawMtrlbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranIssueFrmCanteen/StatusChange`;
    return this.http.put<IIssueRawMtrlbDeleteResponse>(apiUrl, payload);
  }
  //////////////////////////////ADJUSTMENT CANTEEN RAW MATERIAL////////////////////////////
  public getAdjCantRawMtrl(
    payload: ITransactionCanteenRawAdjPayload
  ): Observable<ICanteenRawAdjGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranAdjCantRawMtrl/GetAll`;
    return this.http.post<ICanteenRawAdjGroupResponse>(apiUrl, payload);
  }
  public addAdjCantRawMtrl(
    payload: IAddCanteenRawAdjFormPayload
  ): Observable<ICanteenRawAdjCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranAdjCantRawMtrl/CreateUpdate`;
    return this.http.post<ICanteenRawAdjCreateResponse>(apiUrl, payload);
  }
  public adjCantRawMtrlStatusChange(
    payload: IDeleteCanteenRawAdjFormPayload
  ): Observable<ICanteenRawAdjbDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranAdjCantRawMtrl/StatusChange`;
    return this.http.put<ICanteenRawAdjbDeleteResponse>(apiUrl, payload);
  }
}
