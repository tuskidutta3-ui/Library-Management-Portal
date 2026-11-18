import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IAdjNatureResponse, IADMImagePayload, IADMImageResponse, IAgeWiseFormCatFormPayload, IAgeWiseFormCatResponse, IAllMembersResponse, IBankTypeResponse, IBevcoItemResponse, ICancelIssueHelperPayload, ICanteenGrnItemResponse, ICardIssueMemberNameResponse, ICardIssueSwimmerMemberNameResponse, ICatererKotEntryFormPayload, ICatererKotEntryResponse, ICatererNameResponse, ICatererResponse, IChangePrimaryMemFormPayload, IChangePrimaryMemResponse, IChargeNameResponse, IDepartmentCodeResponse, IFinYearItemResponse, IfinyearResponse, IGDNItemAndGroupResponse, IGetHelpConfigEbookResponse, IGetHelpItmPriceSubGrpResponse, IGetHelpMemberForCardBalReturnAutoSuggestionPayload, IGetHelpMemberForCardBalReturnResponse, IGodownItemGroupResponse, IGodownPartyResponse, IGowdownItemGroupResponse, IGradeCodeResponse, IGroupNameResponse, IHallByComputerFormPayload, IHallNameApiFormPayload, IHallNameApiResponse, IHallNameResponse, IHelpMemberResponse, IIdProofResponse, IIFinYearResponse, IImagePayload, IImageResponse, IIMemberLockerResponse, IIReasonResponse, IIssueCardGroupPayload, IIssueCardSwimmerGroupPayload, IIssueTypeResponse, IIssueTypeSwimmerResponse, IItemForBevcoResponse, IItemForGdRtrnNoteResponse, IItemForGrnResponse, IItemForIssueToRestResponse, IItemForResturantObResponse, IItemGroupGSTRateResponse, IItemNameResponse, IItemOtrMatlIssueResponse, IItemPriceForLqrResponse, IItemRecipeNameResponse, IItemSubGroupFormPayload, IItemSubGroupGSTRateResponse, IItemSubGroupResponse, IIUomLiqResponse, IJAImagePayload, IJAImageResponse, IJAMemberDetailsResponse, IJAMemberNameResponse, IKOTApiFormPayload, IKOTApiResponse, IKOTItemApiFormPayload, IKOTItemApiResponse, IKOTOTHERItemApiResponse, ILiqureItemResponse, ILocationNameResponse, ILockerMemberResponse, ILockerMovementResponse, ILockerNameResponse, ILockerTypeNameResponse, ILocStatusNameResponse, IMachineApiResponse, IMasterUnitResponse, IMemberHallResponse, IMemberNameResponse, IMemberSwimmerResponse, IMemberTypeResponse, IMemDltFromCardNoFormPayload, IMemDltFromCardNoResponse, IMemDonPrimaryMemCodeFormPayload, IMemDonPrimaryMemCodeResponse, IMemDtlFromCardNoFormPayload, IMemDtlFromCardNoResponse, IMemInfoFrmCardNoForBalReturnFormPayload, IMemInfoFrmCardNoForBalReturnResponse, IMemOpenBalResponse, IMemPayHeadResponse, IModuleItemResponse, IModuleResponse, IMrpPerMlFormPayload, IMrpPerMlResponse, IOnlyPrimaryMemResponse, IOtherItemGroupResponse, IPayHeadHelperResponse, IPayHeadResponse, IPaymentTypeFormPayload, IPaymentTypeResponse, IPendingIssueByBillNoIssuePayload, IPrimaryMemCodeFormPayload, IPrimaryMemCodeResponse, IReasonResponse, IReasonTypeResponse, IReceiptDateResponse, IRecipeItmGroupResponse, IRecptTypePayload, IRecptTypeResponse, IRelationHelperResponse, IRelationResponse, IRunPrimaryMemCodeFormPayload, IRunPrimaryMemCodeResponse, IRunValidateSuspNoFormPayload, ISanctionalCalResponse, ISourceListResponse, IstatemasterResponse, ISubscriptionResponse, ISusMemCodeResponse, ISuspenseMemDetailResponse, ISwimFormColorResponse, ISwimFormPayload, ISwimFormResponse, ISwimForTimeSlotPayload, ISwimForTimeSlotResponse, ISwimMemCatagoryResponse, ISwimMemForCardBalReturnGroupPayload, ISwimMemForCardBalReturnResponse, ISwimMemInfoFrmCardNoForBalReturnFormPayload, ISwimMemInfoFrmCardNoForBalReturnResponse, ISwimMemNomineeResponse, ISwimmerDtlFromCardNoFormPayload, ISwimmerDtlFromCardNoResponse, ITaxGroupNameResponse, ITimeSlotResponse, ITransInstColSusFormPayload, ITransInstColSusResponse, IUnitItemResponse, IUnitNameResponse, IUnsettledBillApiFormPayload, IUnsettledBillApiResponse, IUomNameResponse, IUomResponse, IUserCheckFormPayload, IUserCheckResponse, IUserGroupItemResponse, IUserGroupResponse, IWaiterResponse } from '../models/interface/common.interface';
import { ISwimFormAmtResponse } from '../models/interface/ilss-transaction';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }
  // uploadFile(file: File, type: 'photo' | 'signature'): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('type', type);
  //   return this.http.post('/api/upload', formData);
  // }
  uploadFile(file: File, type: 'photo' | 'signature'): Observable<any> {
    const formData = new FormData();
    // Prepare the payload based on the type
    const folderPath = type === 'photo' ? 'photos' : 'signatures';
    formData.append('Mem_Pic', file, file.name);
    formData.append('Mem_Pic_Name', file.name);
    formData.append('Mem_Pic_Folder', folderPath);
    formData.append('Mem_Pic_Path', `${folderPath}/${file.name}`);
    return this.http.post('/api/upload', formData).pipe(
      catchError((error) => {
        console.error('Upload failed', error);
        return throwError(error);
      })
    );
  }
  uploadSigFile(file: File, type: 'photo' | 'signature'): Observable<any> {
    const formData = new FormData();
    // Prepare the payload based on the type
    const folderPath = type === 'photo' ? 'photos' : 'signatures';
    formData.append('Mem_Sig', file, file.name);
    formData.append('Mem_Sig_Name', file.name);
    formData.append('Mem_Sig_Folder', folderPath);
    formData.append('Mem_Sig_Path', `${folderPath}/${file.name}`);
    return this.http.post('/api/upload', formData); // Adjust the URL as necessary
  }
  /*  Common Unit */
  public getUnitList(data: any): Observable<IMasterUnitResponse> {
    const apiUrl = environment.apiEndpoint + '/api/FaMasterUnit/GetAll';
    return this.http.post<IMasterUnitResponse>(apiUrl, data);
  }
  // Unit List
  public getUnit(payload: any): Observable<IUnitItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/FaUnit';
    return this.http.post<IUnitItemResponse>(apiUrl, payload);
  }
  // User Group
  public getUserGroup(payload: any): Observable<IUserGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/FaUserGroup';
    return this.http.post<IUserGroupResponse>(apiUrl, payload);
  }
  // Parent Information
  public getParentData(payload: any): Observable<IModuleResponse> {
    const apiUrl = environment.apiEndpoint + '/api/UserGroup/GetUserRoleByFormId';
    return this.http.post<IModuleResponse>(apiUrl, payload);
  }
  // left menu list
  public getMenuListData(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/MasterFrom/GetAll';
    return this.http.post<any>(apiUrl, payload);
  }
  public getFinYear(payload: any): Observable<IFinYearItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpFinYearChange';
    return this.http.post<IFinYearItemResponse>(apiUrl, payload);
  }
  public GetModuleName(payload: any): Observable<IModuleItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpFromModule';
    return this.http.post<IModuleItemResponse>(apiUrl, payload);
  }
  public GetUserGroupName(payload: any): Observable<IUserGroupItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/UserGroupMaster/GetHelpUserGroup';
    return this.http.post<IUserGroupItemResponse>(apiUrl, payload);
  }
  public GetUnitName(payload: any): Observable<IUnitNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMasterUnit';
    return this.http.post<IUnitNameResponse>(apiUrl, payload);
  }
  public GetDepartmentCode(payload: any): Observable<IDepartmentCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMasterDept';
    return this.http.post<IDepartmentCodeResponse>(apiUrl, payload);
  }
  public GetGradeCode(payload: any): Observable<IGradeCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMasterGrade';
    return this.http.post<IGradeCodeResponse>(apiUrl, payload);
  }
  public GetSourceWB(payload: any): Observable<ISourceListResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSource';
    return this.http.post<ISourceListResponse>(apiUrl, payload);
  }
  public GetGSTRegTypeWB(payload: any): Observable<ISourceListResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpRegType';
    return this.http.post<ISourceListResponse>(apiUrl, payload);
  }
  public GetSanctionalCal(payload: any): Observable<ISanctionalCalResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSanctionCal';
    return this.http.post<ISanctionalCalResponse>(apiUrl, payload);
  }
  // /////////////////////////////////finyear Helper///////////////
  public getfinyear(payload: any): Observable<IfinyearResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpFinYear';
    return this.http.post<IfinyearResponse>(apiUrl, payload);
  }
  ////////////////STATE HELPER/////////////////
  public getstatemaster(payload: any): Observable<IstatemasterResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpState';
    return this.http.post<IstatemasterResponse>(apiUrl, payload);
  }
  //////////////////location helper//////////////////////////
  public GetHelpLocation(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLocation';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////Party helper - location wise ////////////////////////
  public GetHelpPartyLocationWise(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPartyLocationWise';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////hsn helper/////////////////////////////
  public GetHelpHsn(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpHsn';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////Order inv dtl////////////////////////
  public GetHelpOrderInvDtl(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpOrderInvDtl';
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////party//////////////////////////////
  public GetHelpParty(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpParty';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////Member Search Helper/////////////////
  public memberCodeSuggestion(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMastMember';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////Member Tran Monthly Search Helper/////////////////
  public memberTranMonthlyCodeSuggestion(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpTranMonthly';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////Member Seperation Search Helper/////////////////
  public memberSeperationCodeSuggestion(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemFinalSettlement';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////// Locker Location Helper /////////////////////////////////////////////////
  public GetLocation(payload: any): Observable<ILocationNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLockerLocation';
    return this.http.post<ILocationNameResponse>(apiUrl, payload);
  }
  /////////////////////////// Waiter Helper /////////////////////////////////////////////////
  public GetHelpWaiter(payload: any): Observable<IWaiterResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpWaiter';
    return this.http.post<IWaiterResponse>(apiUrl, payload);
  }
  /////////////////////////// Caterer Helper For KOT Entry /////////////////////////////////////////////////
  public GetHelpKotCatererOtherThanOffShop(payload: ICatererKotEntryFormPayload): Observable<ICatererKotEntryResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotCatererOtherThanOffShop';
    return this.http.post<ICatererKotEntryResponse>(apiUrl, payload);
  }
  /////////////////////////// Locker Type Helper /////////////////////////////////////////////////
  public GetLockerType(payload: any): Observable<ILockerTypeNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLockerType';
    return this.http.post<ILockerTypeNameResponse>(apiUrl, payload);
  }
  /////////////////////////// Tax Group Helper /////////////////////////////////////////////////
  public GetTaxGroup(payload: any): Observable<ITaxGroupNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpTaxGroup';
    return this.http.post<ITaxGroupNameResponse>(apiUrl, payload);
  }
  ///////////////////////////////////////Item Sub Group Wise GST Rate Helper//////////////////////////////////////////
  public GetItemGSTRate(payload: any): Observable<IItemGroupGSTRateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemGroup';
    return this.http.post<IItemGroupGSTRateResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Pay Head Helper ////////////////////////////////////////////////////////////
  public GetPayHeadList(payload: any): Observable<IPayHeadResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPayHead';
    return this.http.post<IPayHeadResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Member Type Helper ////////////////////////////////////////////////////////////
  public GetMemberTypeList(payload: any): Observable<IMemberTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberType';
    return this.http.post<IMemberTypeResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////// FINYEAR HELPER ////////////////////////////////////////////////////
  public GetHelpSwimSession(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimSession';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Pay Head Helper ////////////////////////////////////////////////////////////
  public GetPayHeadTypeList(payload: any): Observable<IPayHeadHelperResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPayHeadForMisc';
    return this.http.post<IPayHeadHelperResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Relation Helper ////////////////////////////////////////////////////////////
  public GetHelpRelation(payload: any): Observable<IRelationHelperResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpRelation';
    return this.http.post<IRelationHelperResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// ID PROOF Helper ////////////////////////////////////////////////////////////
  public GetHelpIdProof(payload: any): Observable<IIdProofResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpIdProof';
    return this.http.post<IIdProofResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Issue Type Helper ////////////////////////////////////////////////////////////
  public GetHelpIssueType(payload: any): Observable<IIssueTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpIssueType';
    return this.http.post<IIssueTypeResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Received By Helper ////////////////////////////////////////////////////////////
  public GetHelpPaymentType(payload: IRecptTypePayload): Observable<IRecptTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPaymentType';
    return this.http.post<IRecptTypeResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// Bank Helper ////////////////////////////////////////////////////////////
  public GetHelpBank(payload: any): Observable<IBankTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpBank';
    return this.http.post<IBankTypeResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// UOM Helper ////////////////////////////////////////////////////////////
  public GetUOMList(payload: any): Observable<IUomResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpUOM';
    return this.http.post<IUomResponse>(apiUrl, payload);
  }
  /////////////////////////////////// Item Group Helper ///////////////////////////////////////////////////////
  public GetGroupName(payload: any): Observable<IGroupNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemGroup';
    return this.http.post<IGroupNameResponse>(apiUrl, payload);
  }
  //////////////////////////////////////ITEM SEARCH HELPER/////////////////////////////////////////////////////
  public GetItemDetails(payload: any): Observable<IItemNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItem';
    return this.http.post<IItemNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// KOT ITEM SEARCH HELPER /////////////////////////////////////////////////////
  public GetHelpKotForItem(payload: IKOTItemApiFormPayload): Observable<IKOTItemApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotForItem';
    return this.http.post<IKOTItemApiResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// OFFSHOP ITEM SEARCH HELPER /////////////////////////////////////////////////////
  public GetHelpOffShopKotForItem(payload: IKOTItemApiFormPayload): Observable<IKOTItemApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpOffShopKotForItem';
    return this.http.post<IKOTItemApiResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// Reason Helper /////////////////////////////////////////////////////
  public GetHelpReason(payload: any): Observable<IIReasonResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpReason';
    return this.http.post<IIReasonResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// PRIMARY MEMBER SEARCH HELPER/////////////////////////////////////////////////////
  public GetMemberDetails(payload: any): Observable<IMemberNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemForMaster';
    return this.http.post<IMemberNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// MEMBER SEARCH HELPER FOR CARD ISSUE /////////////////////////////////////////////////////
  public GetHelpMemberForCradIssue(payload: IIssueCardGroupPayload): Observable<ICardIssueMemberNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberForCradIssue';
    return this.http.post<ICardIssueMemberNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// JA MEMBER SEARCH HELPER/////////////////////////////////////////////////////
  public GetJAMemberDetails(payload: any): Observable<IJAMemberNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberForJuniorAsso';
    return this.http.post<IJAMemberNameResponse>(apiUrl, payload);
  }
  //////////////////////////////////////CHARGE SEARCH HELPER/////////////////////////////////////////////////////
  public GetChargeDetails(payload: any): Observable<IChargeNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpOtherCharges';
    return this.http.post<IChargeNameResponse>(apiUrl, payload);
  }
  //////////////////////////////////////ITEM OFF SHOP SEARCH HELPER/////////////////////////////////////////////////////
  public GetHelpItemPrice(payload: any): Observable<IItemNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemPrice';
    return this.http.post<IItemNameResponse>(apiUrl, payload);
  }
  //////////////////////////////////////JA MEMBER SEARCH HELPER/////////////////////////////////////////////////////
  public GetJADetails(payload: any): Observable<IJAMemberDetailsResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpJuniorAssociate';
    return this.http.post<IJAMemberDetailsResponse>(apiUrl, payload);
  }
  //////////////////////////////////////ITEM RECIPE SEARCH HELPER/////////////////////////////////////////////////////
  public GetItemRecipeDetails(payload: any): Observable<IItemRecipeNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemForRecipe';
    return this.http.post<IItemRecipeNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// Caterer Helper /////////////////////////////
  public GetCatererDetails(payload: any): Observable<ICatererNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpCaterer';
    return this.http.post<ICatererNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// Hall Helper /////////////////////////////
  public GetHallDetails(payload: any): Observable<IHallNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpHall';
    return this.http.post<IHallNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// Uom Helper /////////////////////////////
  public GetUomDetails(payload: any): Observable<IUomNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpUOM';
    return this.http.post<IUomNameResponse>(apiUrl, payload);
  }
  ////////////////////////////////////// Locker Status Helper /////////////////////////////
  public GetLocStatusDetails(payload: any): Observable<ILocStatusNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLockerStatus';
    return this.http.post<ILocStatusNameResponse>(apiUrl, payload);
  }
  //////////////////////////////////////Locker SEARCH HELPER/////////////////////////////////////////////////////
  public GetLockerDetails(payload: any): Observable<ILockerNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLocker';
    return this.http.post<ILockerNameResponse>(apiUrl, payload);
  }
  //////////////////Godown Item Master/////////////////
  public GetGodownItem(payload: any): Observable<IItemGroupGSTRateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpGowdownItemGroup';
    return this.http.post<IItemGroupGSTRateResponse>(apiUrl, payload);
  }
  /////////////////////////// Reason Type Helper /////////////////////////////////////////////////
  public GetReasonTypeList(payload: any): Observable<IReasonTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpReasonType';
    return this.http.post<IReasonTypeResponse>(apiUrl, payload);
  }
  ////////////CLUB PARAMETER//////////////////
  public GetHelpMemberType(payload: any): Observable<IMemberTypeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberType';
    return this.http.post<IMemberTypeResponse>(apiUrl, payload);
  }
  public GetHelpPayHead(payload: any): Observable<IMemPayHeadResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPayHead';
    return this.http.post<IMemPayHeadResponse>(apiUrl, payload);
  }
  public GetUomLiq(payload: any): Observable<IIUomLiqResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpUOM';
    return this.http.post<IIUomLiqResponse>(apiUrl, payload);
  }
  public GetHelpCaterer(payload: any): Observable<ICatererResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpCaterer';
    return this.http.post<ICatererResponse>(apiUrl, payload);
  }
  public GetSusMemCode(payload: any): Observable<ISusMemCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberForParameter';
    return this.http.post<ISusMemCodeResponse>(apiUrl, payload);
  }
  /////////////////////////////Member SEARCH HELPER////////////////////////////////////
  public GetMemberLockerDetails(payload: any): Observable<IIMemberLockerResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMember';
    return this.http.post<IIMemberLockerResponse>(apiUrl, payload);
  }
  /////////////////////////////Swimmer Member SEARCH HELPER////////////////////////////////////
  public GetMemberSwimmerDetails(payload: any): Observable<IMemberSwimmerResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimmingMember';
    return this.http.post<IMemberSwimmerResponse>(apiUrl, payload);
  }
  //////////////////////////////Member Locker Member SEARCH HELPER////////////////////////////////////////
  public GetMemLockerDetails(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLockerForMemberLocker';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////Member OPENING BALANCE SEARCH  HELPER////////////////////////////////////
  public GetMemOpenBalDetails(payload: any): Observable<IMemOpenBalResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberForOB';
    return this.http.post<IMemOpenBalResponse>(apiUrl, payload);
  }
  /////////////////////////////Member Master Image Generate////////////////////////////////////
  public GetHelpMemberImage(payload: IImagePayload): Observable<IImageResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Helper/GetHelpMemberImage`;
    return this.http.post<IImageResponse>(apiUrl, payload);
  }
  /////////////////////////////Admission of Junior Associate Image Generate////////////////////////////////////
  public GetHelpJAImage(payload: IJAImagePayload): Observable<IJAImageResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Helper/GetHelpJAImage`;
    return this.http.post<IJAImageResponse>(apiUrl, payload);
  }
  public GetPic(payload: IADMImagePayload): Observable<IADMImageResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/GetPic`;
    return this.http.post<IADMImageResponse>(apiUrl, payload);
  }
  /////////////////////////////Admission of Junior Associate Image Generate////////////////////////////////////
  public GetHelpSubscription(payload: any): Observable<ISubscriptionResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Helper/GetHelpSubscription`;
    return this.http.post<ISubscriptionResponse>(apiUrl, payload);
  }
  /////////////////////////////Recipt Date Helper////////////////////////////////////
  public GetBusinessDate(payload: any): Observable<IReceiptDateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/Helper/GetBusinessDate`;
    return this.http.post<IReceiptDateResponse>(apiUrl, payload);
  }
  ///////////////////////////// Subscription Remarks////////////////////////////////
  public GetHelpSubcriptionRemarks(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSubcriptionRemarks';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////PRIMARY MEMBER CODE//////////////////////////
  public GetHelpMemForDirectSubs(payload: IPrimaryMemCodeFormPayload): Observable<IPrimaryMemCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemForDirectSubs';
    return this.http.post<IPrimaryMemCodeResponse>(apiUrl, payload);
  }
  /////////////////////////// MEMBER DONATION FOR PRIMARY MEMBER CODE ////////////////////////////////
  public GetHelpMemDonForDirectSubs(payload: IMemDonPrimaryMemCodeFormPayload): Observable<IMemDonPrimaryMemCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpDonationDue';
    return this.http.post<IMemDonPrimaryMemCodeResponse>(apiUrl, payload);
  }
  /////////////////////////// Hall Name Helper According To System Name From Api  ////////////////////////////////
  public GetHelpHallByComputer(payload: IHallNameApiFormPayload): Observable<IHallNameApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpHallByComputer';
    return this.http.post<IHallNameApiResponse>(apiUrl, payload);
  }
  /////////////////////////// KOT MEMBER DETAILS FROM CARD NUMBER   ////////////////////////////////
  public GetHelpMemDtlFromCardNo(payload: IMemDltFromCardNoFormPayload): Observable<IMemDltFromCardNoResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemDtlFromCardNo';
    return this.http.post<IMemDltFromCardNoResponse>(apiUrl, payload);
  }
  /////////////////////////// KOT MEMBER DETAILS FROM CARD NUMBER   ////////////////////////////////
  public GetHelpSwimmerDtlFromCardNo(payload: IMemDltFromCardNoFormPayload): Observable<IMemDltFromCardNoResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimmerDtlFromCardNo';
    return this.http.post<IMemDltFromCardNoResponse>(apiUrl, payload);
  }
  /////////////////////////// UNSETTLED BILL FORMARRAY SHOW DATA API SERVICE  ////////////////////////////////
  public GetHelpKotLoadDetailForLocation(payload: IUnsettledBillApiFormPayload): Observable<IUnsettledBillApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotLoadDetailForLocation';
    return this.http.post<IUnsettledBillApiResponse>(apiUrl, payload);
  }
  /////////////////////////// KOT SERIAL NO API   ////////////////////////////////
  public GetHelpKotSerialNo(payload: IKOTApiFormPayload): Observable<IKOTApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotSerialNo';
    return this.http.post<IKOTApiResponse>(apiUrl, payload);
  }
  /////////////////////////// UNSETTLED BILL FORMARRAY SHOW DATA API SERVICE  ////////////////////////////////
  public GetHelpKotLoadDetailForLocationSwimmer(payload: IUnsettledBillApiFormPayload): Observable<IUnsettledBillApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotLoadDetailForLocationSwimmer';
    return this.http.post<IUnsettledBillApiResponse>(apiUrl, payload);
  }
  //////////////////////////////////////////////  Other Billing Item Search //////////////////////////////
  ////////////////////////////////////// KOT ITEM SEARCH HELPER /////////////////////////////////////////////////////
  public GetHelpKotOtherForItem(payload: any): Observable<IKOTOTHERItemApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpKotOtherForItem';
    return this.http.post<IKOTOTHERItemApiResponse>(apiUrl, payload);
  }
  public GetHelpCheckUser(payload: IUserCheckFormPayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpCheckUser';
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////PRIMARY MEMBER CODE(RUNNING MEMBER SUBSCRIPTION)/////////////////////////
  public GetHelpSusbcriptionDue(payload: IRunPrimaryMemCodeFormPayload): Observable<IRunPrimaryMemCodeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSusbcriptionDue';
    return this.http.post<IRunPrimaryMemCodeResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpValidateSuspNo////////////////////
  public GetHelpValidateSuspNo(payload: IRunValidateSuspNoFormPayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpValidateSuspNo';
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////GetHelpMemberForCardBalReturn////////////////////
  public GetHelpMemberForCardBalReturn(payload: IGetHelpMemberForCardBalReturnAutoSuggestionPayload): Observable<IGetHelpMemberForCardBalReturnResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemberForCardBalReturn';
    return this.http.post<IGetHelpMemberForCardBalReturnResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpMemInfoFrmCardNoForBalReturn////////////////////
  public GetHelpMemInfoFrmCardNoForBalReturn(payload: IMemInfoFrmCardNoForBalReturnFormPayload): Observable<IMemInfoFrmCardNoForBalReturnResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMemInfoFrmCardNoForBalReturn';
    return this.http.post<IMemInfoFrmCardNoForBalReturnResponse>(apiUrl, payload);
  }
  ////////////////////////RECEIPT NO(GetHelpTranInstallCollectionSuspence)/////////////////////////
  public GetHelpTranInstallCollectionSuspence(payload: ITransInstColSusFormPayload): Observable<ITransInstColSusResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpTranInstallCollectionSuspence';
    return this.http.post<ITransInstColSusResponse>(apiUrl, payload);
  }
  ////////////////////////GetHelpSuspenceMemDtl/////////////////////////
  public GetHelpSuspenceMemDtl(payload: any): Observable<ISuspenseMemDetailResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSuspenceMemDtl';
    return this.http.post<ISuspenseMemDetailResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpSwimmerDtlFromCardNo////////////////////
  public GetHelpSwimmerDtlFromCardNoCardTopUp(payload: ISwimmerDtlFromCardNoFormPayload): Observable<ISwimmerDtlFromCardNoResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimmerDtlFromCardNo';
    return this.http.post<ISwimmerDtlFromCardNoResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpSwimMemForCardBalReturn////////////////////
  public GetHelpSwimMemForCardBalReturn(payload: ISwimMemForCardBalReturnGroupPayload): Observable<ISwimMemForCardBalReturnResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimMemForCardBalReturn';
    return this.http.post<ISwimMemForCardBalReturnResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpSwimMemInfoFrmCardNoForBalReturn////////////////////
  public GetHelpSwimMemInfoFrmCardNoForBalReturn(payload: ISwimMemInfoFrmCardNoForBalReturnFormPayload): Observable<ISwimMemInfoFrmCardNoForBalReturnResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimMemInfoFrmCardNoForBalReturn';
    return this.http.post<ISwimMemInfoFrmCardNoForBalReturnResponse>(apiUrl, payload);
  }
  //////////////////////////////////  Issue Type Helper (SWIMMER MEMBER)  ///////////////////////////////////////
  public GetHelpIssueTypeSwimmer(payload: any): Observable<IIssueTypeSwimmerResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpIssueTypeSwimmer';
    return this.http.post<IIssueTypeSwimmerResponse>(apiUrl, payload);
  }
  //////////////// /  MEMBER SEARCH HELPER FOR CARD ISSUE (SWIMMER MEMBER)   ///////////////////////////////
  public GetHelpSwimmerMemberForCardIssue(payload: IIssueCardSwimmerGroupPayload): Observable<ICardIssueSwimmerMemberNameResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimmerMemberForCardIssue';
    return this.http.post<ICardIssueSwimmerMemberNameResponse>(apiUrl, payload);
  }
  /////////////////////////// Pending Issue By Bill No ///////////////////////////
  public GetHelpPendingIssueByBillNo(payload: IPendingIssueByBillNoIssuePayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPendingIssueByBillNo';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////// Reason Helper /////////////////////////////////////////////////
  public GetReasonList(payload: any): Observable<IReasonResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpReason';
    return this.http.post<IReasonResponse>(apiUrl, payload);
  }
  /////////////////////////// Pending Issue ///////////////////////////
  public GetHelpPendingIssue(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpPendingIssue';
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////// Cancel Issue ///////////////////////////
  public GetHelpCancelIssue(payload: ICancelIssueHelperPayload): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpCancelIssue';
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////////////ITEM FOR BEVCO SEARCH HELPER/////////////////////////////////////////////////////
  public GetHelpItemForItemLinkBevco(
    payload: any
  ): Observable<IItemForBevcoResponse> {
    const apiUrl =
      environment.apiEndpoint + '/api/Helper/GetHelpItemForItemLinkBevco';
    return this.http.post<IItemForBevcoResponse>(apiUrl, payload);
  }
  //////////////////////////////////////BEVCO ITEM SEARCH HELPER/////////////////////////////////////////////////////
  public GetHelpBevcoItem(payload: any): Observable<IBevcoItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpBevcoItem';
    return this.http.post<IBevcoItemResponse>(apiUrl, payload);
  }
  ///////////////////////////  HALL MASTER HELPER ////////////////////////////////////////////
  public GetHelpHallMaster(payload: any): Observable<IMemberHallResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpHall';
    return this.http.post<IMemberHallResponse>(apiUrl, payload);
  }
  ///////////////////////GetHelpAllMemFromPrimCode////////////////////
  public GetHelpAllMemFromPrimCode(payload: IChangePrimaryMemFormPayload): Observable<IChangePrimaryMemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpAllMemFromPrimCode';
    return this.http.post<IChangePrimaryMemResponse>(apiUrl, payload);
  }
  public GetHelpMachine(payload: any): Observable<IMachineApiResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMachine';
    return this.http.post<IMachineApiResponse>(apiUrl, payload);
  }
  public GetHelpAllSwimingMembers(payload: any): Observable<IAllMembersResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpAllSwimingMembers';
    return this.http.post<IAllMembersResponse>(apiUrl, payload);
  }
  public GetHelpAllMembers(payload: any): Observable<IAllMembersResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpAllMembers';
    return this.http.post<IAllMembersResponse>(apiUrl, payload);
  }
  public GetHelpItemSubGroup(payload: IItemSubGroupFormPayload): Observable<IItemSubGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemSubGroup';
    return this.http.post<IItemSubGroupResponse>(apiUrl, payload);
  }
  public GetHelpSwimMemCatagory(payload: any): Observable<ISwimMemCatagoryResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimMemCatagory';
    return this.http.post<ISwimMemCatagoryResponse>(apiUrl, payload);
  }
  public GetHelpSwimMemNominee(payload: any): Observable<ISwimMemNomineeResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimMemNominee';
    return this.http.post<ISwimMemNomineeResponse>(apiUrl, payload);
  }
  ///////////////////////////////////////Item Sub Group Wise GST Rate Helper//////////////////////////////////////////
  public GetAllItemSubGroupForGstPer(payload: any): Observable<IItemSubGroupGSTRateResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetAllItemSubGroupForGstPer';
    return this.http.post<IItemSubGroupGSTRateResponse>(apiUrl, payload);
  }
  public GetHelpMember(payload: any): Observable<IHelpMemberResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMember';
    return this.http.post<IHelpMemberResponse>(apiUrl, payload);
  }
  public GetHelpLockerListForMovementRpt(payload: any): Observable<ILockerMovementResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLockerListForMovementRpt';
    return this.http.post<ILockerMovementResponse>(apiUrl, payload);
  }
  public GetHelpOnlyPrimaryMember(payload: any): Observable<IOnlyPrimaryMemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpOnlyPrimaryMember';
    return this.http.post<IOnlyPrimaryMemResponse>(apiUrl, payload);
  }
  public GetHelpSwimFormColor(payload: any): Observable<ISwimFormColorResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFormColor';
    return this.http.post<ISwimFormColorResponse>(apiUrl, payload);
  }
  public GetHelpSwimTimeSlot(payload: any): Observable<ITimeSlotResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimTimeSlot';
    return this.http.post<ITimeSlotResponse>(apiUrl, payload);
  }
  public GetHelpAgeWiseFormCat(payload: IAgeWiseFormCatFormPayload): Observable<IAgeWiseFormCatResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpAgeWiseFormCat';
    return this.http.post<IAgeWiseFormCatResponse>(apiUrl, payload);
  }
  public GetHelpSwimForTimeSlot(payload: ISwimForTimeSlotPayload): Observable<ISwimForTimeSlotResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimForTimeSlot';
    return this.http.post<ISwimForTimeSlotResponse>(apiUrl, payload);
  }
  public GetHelpSwimFinYear(payload: any): Observable<IIFinYearResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFinYear';
    return this.http.post<IIFinYearResponse>(apiUrl, payload);
  }
  public GetHelpSwimForTypeChange(payload: ISwimForTimeSlotPayload): Observable<ISwimForTimeSlotResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimForTypeChange';
    return this.http.post<ISwimForTimeSlotResponse>(apiUrl, payload);
  }
  public GetHelpSwimFormCategory(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFormCategory';
    return this.http.post<any>(apiUrl, payload);
  }
  public GetHelpSwimForm(payload: ISwimFormPayload): Observable<ISwimFormResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFormForBooking';
    return this.http.post<ISwimFormResponse>(apiUrl, payload);
  }
  ///////////////////////////// ADMISSION DETAILS ONLINE FIND ///////////////////////////////////////
  public GetHelpSwimFormFind(payload: ISwimFormPayload): Observable<ISwimFormResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFormForBookingOnline';
    return this.http.post<ISwimFormResponse>(apiUrl, payload);
  }
  public GetHelpSwimFormAmt(payload: any): Observable<ISwimFormAmtResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpSwimFormAmt';
    return this.http.post<ISwimFormAmtResponse>(apiUrl, payload);
  }
  public GetHelpCanteenGrnItem(payload: any): Observable<ICanteenGrnItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpCanteenGrnItem';
    return this.http.post<ICanteenGrnItemResponse>(apiUrl, payload);
  }
  public GetHelpItemForGrn(payload: any): Observable<IItemForGrnResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemForGrn';
    return this.http.post<IItemForGrnResponse>(apiUrl, payload);
  }
  public GetHelpGodownParty(payload: any): Observable<IGodownPartyResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpGodownParty';
    return this.http.post<IGodownPartyResponse>(apiUrl, payload);
  }
  public GetHelpItemForGdRtrnNote(payload: any): Observable<IItemForGdRtrnNoteResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemForGdRtrnNote';
    return this.http.post<IItemForGdRtrnNoteResponse>(apiUrl, payload);
  }
  public GetHelpItemOtrMatlIssue(payload: any): Observable<IItemOtrMatlIssueResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemOtrMatlIssue';
    return this.http.post<IItemOtrMatlIssueResponse>(apiUrl, payload);
  }
  public GetHelpItemForResturantOb(payload: any): Observable<IItemForResturantObResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemForResturantOb';
    return this.http.post<IItemForResturantObResponse>(apiUrl, payload);
  }
  public GetHelpItemPriceForLqr(payload: any): Observable<IItemPriceForLqrResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemPriceForLqr';
    return this.http.post<IItemPriceForLqrResponse>(apiUrl, payload);
  }
  public GetHelpAdjNature(payload: any): Observable<IAdjNatureResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpAdjNature';
    return this.http.post<IAdjNatureResponse>(apiUrl, payload);
  }
  public GetHelpItmPriceSubGrp(payload: any): Observable<IGetHelpItmPriceSubGrpResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItmPriceSubGrp';
    return this.http.post<IGetHelpItmPriceSubGrpResponse>(apiUrl, payload);
  }
  public GetHelpItemForIssueToRest(payload: any): Observable<IItemForIssueToRestResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpItemForIssueToRest';
    return this.http.post<IItemForIssueToRestResponse>(apiUrl, payload);
  }
  public GetHelpMrpPerMl(payload: IMrpPerMlFormPayload): Observable<IMrpPerMlResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpMrpPerMl';
    return this.http.post<IMrpPerMlResponse>(apiUrl, payload);
  }
  public GetHelpGodownItem(payload: any): Observable<IGodownItemGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpGodownItem';
    return this.http.post<IGodownItemGroupResponse>(apiUrl, payload);
  }
  public GetHelpGDNItemAndGroup(payload: any): Observable<IGDNItemAndGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpGDNItemAndGroup';
    return this.http.post<IGDNItemAndGroupResponse>(apiUrl, payload);
  }
  public GetHelpGowdownItemGroup(payload: any): Observable<IGowdownItemGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpGowdownItemGroup';
    return this.http.post<IGowdownItemGroupResponse>(apiUrl, payload);
  }
  public GetHelpRecipeItm(payload: any): Observable<IRecipeItmGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpRecipeItm';
    return this.http.post<IRecipeItmGroupResponse>(apiUrl, payload);
  }
  public GetHelpOtherItem(payload: any): Observable<IOtherItemGroupResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpOtherItem';
    return this.http.post<IOtherItemGroupResponse>(apiUrl, payload);
  }
  public GetHelpLiqureItem(payload: any): Observable<ILiqureItemResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpLiqureItem';
    return this.http.post<ILiqureItemResponse>(apiUrl, payload);
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////GetHelpConfigEbooks////////////////////////////////////
  public GetHelpConfigEbooks(payload: any): Observable<IGetHelpConfigEbookResponse> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpConfigEbooks';
    return this.http.post<IGetHelpConfigEbookResponse>(apiUrl, payload);
  }
    ///////////////////////////////////GetHelpBooks////////////////////////////////////
  public GetHelpBooks(payload: any): Observable<any> {
    const apiUrl = environment.apiEndpoint + '/api/Helper/GetHelpBooks';
    return this.http.post<any>(apiUrl, payload);
  }
}
