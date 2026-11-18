import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddBankFormPayload, IAddBatchTimeListFormPayload, IAddBookingRngFormPayload, IAddCatererFormPayload, IAddChargesFormPayload, IAddChargesRateFormPayload, IAddEditLinkHeadtFormPayload, IAddGodownItemFormPayload, IAddHallFormPayload, IAddHallMachineMappingFormPayload, IAddHallMembershipFormPayload, IAddIdentityFormPayload, IAddItemFormPayload, IAddItemGroupDetailsFormPayload, IAddItemGroupFormPayload, IAddItemOfferFormPayload, IAddItemPriceFormPayload, IAddItemSubGroupWiseRateFormPayload, IAddLockerFormPayload, IAddLockerLocationFormPayload, IAddLockerStatusFormPayload, IAddLockerTypeFormPayload, IAddMemBalanceFormPayload, IAddMemberPaymentFormPayload, IAddMemberRegistrationFormPayload, IAddMemberTypeFormPayload, IAddMemberTypeSubFormPayload, IAddMemWiseLockerFormPayload, IAddOffshopOfferFormPayload, IAddOtherItemFormPayload, IAddPartynFormPayload, IAddPaymentFormPayload, IAddReasonMFormPayload, IAddReasonTypeFormPayload, IAddRecipeFormPayload, IAddRelationFormPayload, IAddSubscriptionFormPayload, IAddSwimCatFormPayload, IAddSwimMemTypeFormPayload, IAddSwimmerFormPayload, IAddSwimSessionFormPayload, IAddTaxFormPayload, IAddTaxGroupFormPayload, IAddUnitFormPayload, IAddWaiterFormPayload, IBankCreateResponse, IBankDeleteResponse, IBankGroupPayload, IBankGroupResponse, IBatchTimeListCreateResponse, IBatchTimeListDeleteResponse, IBatchTimeListGroupPayload, IBatchTimeListGroupResponse, IBatchTimeListUpdateResponse, IBookingRngCreateResponse, IBookingRngDeleteResponse, IBookingRngGroupPayload, IBookingRngGroupResponse, IBookingRngUpdateResponse, ICanteenUomItemGroupPayload, ICanteenUomItemGroupResponse, ICanteenUomItemUpdateResponse, ICatererCreateResponse, ICatererDeleteResponse, ICatererGroupPayload, ICatererGroupResponse, IChargesCreateResponse, IChargesDeleteResponse, IChargesGroupPayload, IChargesGroupResponse, IChargesRateCreateResponse, IChargesRateDeleteResponse, IChargesRateGroupPayload, IChargesRateGroupResponse, IChargesRateUpdateResponse, IChargesUpdateResponse, IClubParameterGroupResponse, IClubParameterUpdateResponse, IDeleteBankFormPayload, IDeleteBatchTimeListFormPayload, IDeleteBookingRngFormPayload, IDeleteCatererFormPayload, IDeleteChangePrimaryMemberFormPayload, IDeleteChargesFormPayload, IDeleteChargesRateFormPayload, IDeleteGodownItemFormPayload, IDeleteHallFormPayload, IDeleteHallMachineMappingFormPayload, IDeleteIdentityFormPayload, IDeleteItemFormPayload, IDeleteItemGroupDetailsFormPayload, IDeleteItemGroupFormPayload, IDeleteItemOfferFormPayload, IDeleteItemPriceFormPayload, IDeleteItemSubGroupWiseRateFormPayload, IDeleteLinkHeadFormPayload, IDeleteLockerFormPayload, IDeleteLockerLocationFormPayload, IDeleteLockerStatusFormPayload, IDeleteLockerTypeFormPayload, IDeleteMemBalanceFormPayload, IDeleteMemberPaymentFormPayload, IDeleteMemberTypeFormPayload, IDeleteMemberTypeSubFormPayload, IDeleteOffshopOfferFormPayload, IDeleteOtherItemFormPayload, IDeletePartyFormPayload, IDeletePaymentFormPayload, IDeleteReasonMFormPayload, IDeleteReasonTypeFormPayload, IDeleteRecipeFormPayload, IDeleteRelationFormPayload, IDeleteSubscriptionFormPayload, IDeleteSwimCatFormPayload, IDeleteSwimMemTypeFormPayload, IDeleteSwimmerFormPayload, IDeleteSwimSessionFormPayload, IDeleteTaxFormPayload, IDeleteTaxGroupFormPayload, IDeleteUnitFormPayload, IDeleteWaiterFormPayload, IDocumentPayload, IEditBatchTimeListFormPayload, IEditBookingRngFormPayload, IEditCanteenUomItemFormPayload, IEditChargesFormPayload, IEditChargesRateFormPayload, IEditClubParameterFormPayload, IEditSwimCatFormPayload, IEditSwimMemTypeFormPayload, IEditSwimmerFormPayload, IEditSwimSessionFormPayload, IGetByIdRecipeCreateResponse, IGetByIdRecipeFormPayload, IGodownItemCreateResponse, IGodownItemDeleteResponse, IGodownItemGroupPayload, IGodownItemGroupResponse, IHallCreateResponse, IHallDeleteResponse, IHallGroupPayload, IHallGroupResponse, IHallMachineMappingCreateResponse, IHallMachineMappingDeleteResponse, IHallMachineMappingGroupResponse, IHallMembershipCreateResponse, IHallMembershipGroupPayload, IHallMembershipGroupResponse, IHelpNumberResponse, IHelpPNumberResponse, IIdentityCreateResponse, IIdentityDeleteResponse, IIdentityGroupPayload, IIdentityGroupResponse, IItemCreateResponse, IItemDeleteResponse, IItemGroupCreateResponse, IItemGroupDeleteResponse, IItemGroupDetailsCreateResponse, IItemGroupDetailsDeleteResponse, IItemGroupDetailsGroupPayload, IItemGroupDetailsGroupResponse, IItemGroupGroupPayload, IItemGroupGroupResponse, IItemGroupPayload, IItemGroupResponse, IItemOfferCreateResponse, IItemOfferDeleteResponse, IItemOfferGroupPayload, IItemOfferGroupResponse, IItemPriceCreateResponse, IItemPriceDeleteResponse, IItemPriceGroupPayload, IItemPriceGroupResponse, IItemSubGroupWiseRateCreateResponse, IItemSubGroupWiseRateDeleteResponse, IItemSubGroupWiseRateGroupPayload, IItemSubGroupWiseRateGroupResponse, ILinkHeadCreateResponse, ILinkHeadDeleteResponse, ILinkHeadGroupResponse, ILinkHeadPayload, ILockerCreateResponse, ILockerDeleteResponse, ILockerGroup, ILockerGroupPayload, ILockerGroupResponse, ILockerLocationCreateResponse, ILockerLocationDeleteResponse, ILockerLocationGroupPayload, ILockerLocationGroupResponse, ILockerStatusCreateResponse, ILockerStatusDeleteResponse, ILockerStatusGroupResponse, ILockerStatusPayload, ILockerTypeCreateResponse, ILockerTypeDeleteResponse, ILockerTypeGroupPayload, ILockerTypeGroupResponse, IMasterHallMachineMappingPayload, IMasterMemBalancePayload, IMemBalanceCreateResponse, IMemBalanceDeleteResponse, IMemBalanceGroupResponse, IMemberHelpNumberPayload, IMemberPaymentCreateResponse, IMemberPaymentDeleteResponse, IMemberPaymentGroupPayload, IMemberPaymentGroupResponse, IMemberRegistrationCreateResponse, IMemberRegistrationGroupPayload, IMemberRegistrationGroupResponse, IMemberTypeCreateResponse, IMemberTypeDeleteResponse, IMemberTypeGroupPayload, IMemberTypeGroupResponse, IMemberTypeSubCreateResponse, IMemberTypeSubDeleteResponse, IMemberTypeSubGroupPayload, IMemberTypeSubGroupResponse, IMemWiseLockerCreateResponse, IMemWiseLockerGroupPayload, IMemWiseLockerGroupResponse, IOffshopOfferCreateResponse, IOffshopOfferDeleteResponse, IOffshopOfferGroupPayload, IOffshopOfferGroupResponse, IOtherItemCreateResponse, IOtherItemDeleteResponse, IOtherItemGroupPayload, IOtherItemGroupResponse, IPartyCreateResponse, IPartyDeleteResponse, IPartyGroupPayload, IPartyGroupResponse, IPaymentCreateResponse, IPaymentDeleteResponse, IPaymentGroupResponse, IPaymentPayload, IPMemberHelpNumberPayload, IPrintHallMapResponse, IReasonMCreateResponse, IReasonMDeleteResponse, IReasonMGroupPayload, IReasonMGroupResponse, IReasonTypeCreateResponse, IReasonTypeDeleteResponse, IReasonTypeGroupPayload, IReasonTypeGroupResponse, IRecipeCreateResponse, IRecipeDeleteResponse, IRecipeGroupResponse, IRecipePayload, IRelationCreateResponse, IRelationDeleteResponse, IRelationGroupPayload, IRelationGroupResponse, ISubscriptionCreateResponse, ISubscriptionDeleteResponse, ISubscriptionGroupResponse, ISubscriptionPayload, ISwimCatCreateResponse, ISwimCatDeleteResponse, ISwimCatGroupPayload, ISwimCatGroupResponse, ISwimCatUpdateResponse, ISwimMemTypeCreateResponse, ISwimMemTypeDeleteResponse, ISwimMemTypeGroupPayload, ISwimMemTypeGroupResponse, ISwimMemTypeUpdateResponse, ISwimmerCreateResponse, ISwimmerGroupResponse, ISwimmerPayload, ISwimmerUpdateResponse, ISwimSessionCreateResponse, ISwimSessionDeleteResponse, ISwimSessionGroupPayload, ISwimSessionGroupResponse, ISwimSessionUpdateResponse, ITaxCreateResponse, ITaxDeleteResponse, ITaxGroupCreateResponse, ITaxGroupDeleteResponse, ITaxGroupGroupResponse, ITaxGroupPayload, ITaxGroupResponse, IUnitCreateResponse, IUnitDeleteResponse, IUnitGroupPayload, IUnitGroupResponse, IWaiterCreateResponse, IWaiterDeleteResponse, IWaiterGroupPayload, IWaiterGroupResponse } from '../models/interface/ilss-master.interface';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IlssMasterService {
  constructor(private http: HttpClient) { }
  ////////////////////////////////////////////// Locker Location /////////////////////////////////////////////////////
  public getLocMaster(payload: ILockerLocationGroupPayload): Observable<ILockerLocationGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerLocation/GetAll`;
    return this.http.post<ILockerLocationGroupResponse>(apiUrl, payload);
  }
  public LocMasterstatusData(payload: IDeleteLockerLocationFormPayload): Observable<ILockerLocationDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerLocation/StatusChange`;
    return this.http.put<ILockerLocationDeleteResponse>(apiUrl, payload);
  }
  public addLocMasterData(payload: IAddLockerLocationFormPayload): Observable<ILockerLocationCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerLocation/CreateUpdate`;
    return this.http.post<ILockerLocationCreateResponse>(apiUrl, payload);
  }
  public GetPrintLocLocation(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerLocation/GetPrintLocLocation`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Locker Location /////////////////////////////////////////////////////
  ////////////////////////////////////////////// Master Locker Type /////////////////////////////////////////////////////
  public getLocTypeMaster(payload: ILockerTypeGroupPayload): Observable<ILockerTypeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerType/GetAll`;
    return this.http.post<ILockerTypeGroupResponse>(apiUrl, payload);
  }
  public LocTypeMasterstatusData(payload: IDeleteLockerTypeFormPayload): Observable<ILockerTypeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerType/StatusChange`;
    return this.http.put<ILockerTypeDeleteResponse>(apiUrl, payload);
  }
  public addLocTypeMasterData(payload: IAddLockerTypeFormPayload): Observable<ILockerTypeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerType/CreateUpdate`;
    return this.http.post<ILockerTypeCreateResponse>(apiUrl, payload);
  }
  public GetPrintLockerType(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerType/GetPrintLockerType`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Master Locker Type /////////////////////////////////////////////////////
  ////////////////////////////////////////////// Master Locker /////////////////////////////////////////////////////
  public getLockerMaster(payload: ILockerGroupPayload): Observable<ILockerGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLocker/GetAll`;
    return this.http.post<ILockerGroupResponse>(apiUrl, payload);
  }
  public LockerMasterstatusData(payload: IDeleteLockerFormPayload): Observable<ILockerDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLocker/StatusChange`;
    return this.http.put<ILockerDeleteResponse>(apiUrl, payload);
  }
  public addLockerMasterData(payload: IAddLockerFormPayload): Observable<ILockerCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLocker/CreateUpdate`;
    return this.http.post<ILockerCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Master Locker  /////////////////////////////////////////////////////
  ////////////////////////////////////////////// Waiter Master /////////////////////////////////////////////////////
  public getWaiterMaster(payload: IWaiterGroupPayload): Observable<IWaiterGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterWaiterStuart/GetAll`;
    return this.http.post<IWaiterGroupResponse>(apiUrl, payload);
  }
  public WaiterMasterstatusData(payload: IDeleteWaiterFormPayload): Observable<IWaiterDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterWaiterStuart/StatusChange`;
    return this.http.put<IWaiterDeleteResponse>(apiUrl, payload);
  }
  public addWaiterMasterData(payload: IAddWaiterFormPayload): Observable<IWaiterCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterWaiterStuart/CreateUpdate`;
    return this.http.post<IWaiterCreateResponse>(apiUrl, payload);
  }
  public GetPrintWaiterStuart(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterWaiterStuart/GetPrintWaiterStuart`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Waiter Master  /////////////////////////////////////////////////////
  ////////////////////////////////////////////// Hall Master /////////////////////////////////////////////////////
  public getHallMaster(payload: IHallGroupPayload): Observable<IHallGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHall/GetAll`;
    return this.http.post<IHallGroupResponse>(apiUrl, payload);
  }
  public HallMasterstatusData(payload: IDeleteHallFormPayload): Observable<IHallDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHall/StatusChange`;
    return this.http.put<IHallDeleteResponse>(apiUrl, payload);
  }
  public addHallMasterData(payload: IAddHallFormPayload): Observable<IHallCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHall/CreateUpdate`;
    return this.http.post<IHallCreateResponse>(apiUrl, payload);
  }
  public GetPrintHall(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHall/GetPrintHall`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Hall Master  /////////////////////////////////////////////////////
  ////////////////////////////////////////////// Tax Master /////////////////////////////////////////////////////
  public getTaxMaster(payload: ITaxGroupPayload): Observable<ITaxGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTax/GetAll`;
    return this.http.post<ITaxGroupResponse>(apiUrl, payload);
  }
  public TaxMasterstatusData(payload: IDeleteTaxFormPayload): Observable<ITaxDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTax/StatusChange`;
    return this.http.put<ITaxDeleteResponse>(apiUrl, payload);
  }
  public addTaxMasterData(payload: IAddTaxFormPayload): Observable<ITaxCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTax/CreateUpdate`;
    return this.http.post<ITaxCreateResponse>(apiUrl, payload);
  }
  public GetPrintTax(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTax/GetPrintTax`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////////////////// End of Tax Master  /////////////////////////////////////////////////////
  ///////////////////////////////////////// Tax Group ///////////////////////////////////////////////
  public getTaxGroupMaster(payload: ITaxGroupPayload): Observable<ITaxGroupGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTaxGroup/GetAll`;
    return this.http.post<ITaxGroupGroupResponse>(apiUrl, payload);
  }
  public TaxGroupstatusData(payload: IDeleteTaxGroupFormPayload): Observable<ITaxGroupDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTaxGroup/StatusChange`;
    return this.http.put<ITaxGroupDeleteResponse>(apiUrl, payload);
  }
  public addTaxGroupData(payload: IAddTaxGroupFormPayload): Observable<ITaxGroupCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTaxGroup/CreateUpdate`;
    return this.http.post<ITaxGroupCreateResponse>(apiUrl, payload);
  }
  public GetPrintTaxGroup(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterTaxGroup/GetPrintTaxGroup`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////////// End of Tax Group ///////////////////////////////////////////////
  /////////////////////////////////////Caterer Master///////////////////////////////////////////////
  public getCatererMaster(payload: ICatererGroupPayload): Observable<ICatererGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCaterer/GetAll`;
    return this.http.post<ICatererGroupResponse>(apiUrl, payload);
  }
  public CatererstatusData(payload: IDeleteCatererFormPayload): Observable<ICatererDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCaterer/StatusChange`;
    return this.http.put<ICatererDeleteResponse>(apiUrl, payload);
  }
  public addCatererData(payload: IAddCatererFormPayload): Observable<ICatererCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCaterer/CreateUpdate`;
    return this.http.post<ICatererCreateResponse>(apiUrl, payload);
  }
  public GetPrintCaterar(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCaterer/GetPrintCaterar`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////////////// End of Caterer Master ///////////////////////////////////////////////
  /////////////////////////////////////Unit Master///////////////////////////////////////////////
  public getUnitMaster(payload: IUnitGroupPayload): Observable<IUnitGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterUom/GetAll`;
    return this.http.post<IUnitGroupResponse>(apiUrl, payload);
  }
  public UnitstatusData(payload: IDeleteUnitFormPayload): Observable<IUnitDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterUom/StatusChange`;
    return this.http.put<IUnitDeleteResponse>(apiUrl, payload);
  }
  public addUnitData(payload: IAddUnitFormPayload): Observable<IUnitCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterUom/CreateUpdate`;
    return this.http.post<IUnitCreateResponse>(apiUrl, payload);
  }
  public GetPrintUom(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterUom/GetPrintUom`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////////////// End of Unit Master ///////////////////////////////////////////////
  /////////////////////////////////////Item Group Master///////////////////////////////////////////////
  public getItemGroupMaster(payload: IItemGroupGroupPayload): Observable<IItemGroupGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemGroup/GetAll`;
    return this.http.post<IItemGroupGroupResponse>(apiUrl, payload);
  }
  public ItemGroupstatusData(payload: IDeleteItemGroupFormPayload): Observable<IItemGroupDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemGroup/StatusChange`;
    return this.http.put<IItemGroupDeleteResponse>(apiUrl, payload);
  }
  public addItemGroupData(payload: IAddItemGroupFormPayload): Observable<IItemGroupCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemGroup/CreateUpdate`;
    return this.http.post<IItemGroupCreateResponse>(apiUrl, payload);
  }
  public GetPrintItemGroup(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemGroup/GetPrintItemGroup`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////// End of Item Group Master /////////////////////////////////////////
  /////////////////////////////////////Item Group Details///////////////////////////////////////////////
  public getItemGroupDetailsMaster(payload: IItemGroupDetailsGroupPayload): Observable<IItemGroupDetailsGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrp/GetAll`;
    return this.http.post<IItemGroupDetailsGroupResponse>(apiUrl, payload);
  }
  public ItemGroupDetailsstatusData(payload: IDeleteItemGroupDetailsFormPayload): Observable<IItemGroupDetailsDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrp/StatusChange`;
    return this.http.put<IItemGroupDetailsDeleteResponse>(apiUrl, payload);
  }
  public addItemGroupDetailsData(payload: IAddItemGroupDetailsFormPayload): Observable<IItemGroupDetailsCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrp/CreateUpdate`;
    return this.http.post<IItemGroupDetailsCreateResponse>(apiUrl, payload);
  }
  public GetPrintItemSub(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrp/GetPrintItemSub`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////// End of Item Group Details /////////////////////////////////////////
  /////////////////////////////////////ItemSubGroupWiseRate Master///////////////////////////////////////////////
  public getItemSubGroupWiseRateMaster(payload: IItemSubGroupWiseRateGroupPayload): Observable<IItemSubGroupWiseRateGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrpGstRate/GetAll`;
    return this.http.post<IItemSubGroupWiseRateGroupResponse>(apiUrl, payload);
  }
  public ItemSubGroupWiseRatestatusData(payload: IDeleteItemSubGroupWiseRateFormPayload): Observable<IItemSubGroupWiseRateDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrpGstRate/StatusChange`;
    return this.http.put<IItemSubGroupWiseRateDeleteResponse>(apiUrl, payload);
  }
  public addItemSubGroupWiseRateData(payload: IAddItemSubGroupWiseRateFormPayload): Observable<IItemSubGroupWiseRateCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemSubGrpGstRate/CreateUpdate`;
    return this.http.post<IItemSubGroupWiseRateCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////// End of ItemSubGroupWiseRate Master ////////////////////////////////////////
  ///////////////////////////////////// Item Master ///////////////////////////////////////////////
  public getItemMaster(payload: IItemGroupPayload): Observable<IItemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItem/GetAll`;
    return this.http.post<IItemGroupResponse>(apiUrl, payload);
  }
  public ItemstatusData(payload: IDeleteItemFormPayload): Observable<IItemDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItem/StatusChange`;
    return this.http.put<IItemDeleteResponse>(apiUrl, payload);
  }
  public addItemData(payload: IAddItemFormPayload): Observable<IItemCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItem/CreateUpdate`;
    return this.http.post<IItemCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////// End of Item Master ////////////////////////////////////////
  ///////////////////////////////////// Item Price Master ///////////////////////////////////////////////
  public getItemPriceMaster(payload: IItemPriceGroupPayload): Observable<IItemPriceGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemPrice/GetAll`;
    return this.http.post<IItemPriceGroupResponse>(apiUrl, payload);
  }
  public ItemPricestatusData(payload: IDeleteItemPriceFormPayload): Observable<IItemPriceDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemPrice/StatusChange`;
    return this.http.put<IItemPriceDeleteResponse>(apiUrl, payload);
  }
  public addItemPriceData(payload: IAddItemPriceFormPayload): Observable<IItemPriceCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemPrice/CreateUpdate`;
    return this.http.post<IItemPriceCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////// End of Item Price Master ////////////////////////////////////////
  ///////////////////////////////////// Locker Status Other Than Member ///////////////////////////////////////////////
  public getLocStatusMaster(payload: ILockerStatusPayload): Observable<ILockerStatusGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerStatOthMem/GetAll`;
    return this.http.post<ILockerStatusGroupResponse>(apiUrl, payload);
  }
  public LocStatusstatusData(payload: IDeleteLockerStatusFormPayload): Observable<ILockerStatusDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerStatOthMem/StatusChange`;
    return this.http.put<ILockerStatusDeleteResponse>(apiUrl, payload);
  }
  public addLocStatusData(payload: IAddLockerStatusFormPayload): Observable<ILockerStatusCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterLockerStatOthMem/Create`;
    return this.http.post<ILockerStatusCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////// End of Locker Status Other Than Member ////////////////////////////////////////
  ///////////////////////////////////// Other Item Group  ///////////////////////////////////////////////
  public getOtherItemGroupMaster(payload: IOtherItemGroupPayload): Observable<IOtherItemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOthItemGrp/GetAll`;
    return this.http.post<IOtherItemGroupResponse>(apiUrl, payload);
  }
  public OtherItemGroupstatusData(payload: IDeleteOtherItemFormPayload): Observable<IOtherItemDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOthItemGrp/StatusChange`;
    return this.http.put<IOtherItemDeleteResponse>(apiUrl, payload);
  }
  public addOtherItemGroupData(payload: IAddOtherItemFormPayload): Observable<IOtherItemCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOthItemGrp/CreateUpdate`;
    return this.http.post<IOtherItemCreateResponse>(apiUrl, payload);
  }
  public GetPrintOtherItemGrp(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOthItemGrp/GetPrintOtherItemGrp`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////// End of Other Item Group ////////////////////////////////////////
  /////////////////////////////////////IDENTITY PROOF MASTER///////////////////////////////////////////////
  public getIdentityMaster(payload: IIdentityGroupPayload): Observable<IIdentityGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterIdProof/GetAll`;
    return this.http.post<IIdentityGroupResponse>(apiUrl, payload);
  }
  public IdentitystatusData(payload: IDeleteIdentityFormPayload): Observable<IIdentityDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterIdProof/StatusChange`;
    return this.http.put<IIdentityDeleteResponse>(apiUrl, payload);
  }
  public addIdentityData(payload: IAddIdentityFormPayload): Observable<IIdentityCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterIdProof/CreateUpdate`;
    return this.http.post<IIdentityCreateResponse>(apiUrl, payload);
  }
  //////////////////////////////// END OF IDENTITY PROOF MASTER /////////////////////////////////////////
  ///////////////////////////////////// Item Offer Master ///////////////////////////////////////////////
  public getItemOfferMaster(payload: IItemOfferGroupPayload): Observable<IItemOfferGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOffer/GetAll`;
    return this.http.post<IItemOfferGroupResponse>(apiUrl, payload);
  }
  public ItemOfferstatusData(payload: IDeleteItemOfferFormPayload): Observable<IItemOfferDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOffer/StatusChange`;
    return this.http.put<IItemOfferDeleteResponse>(apiUrl, payload);
  }
  public addItemOfferData(payload: IAddItemOfferFormPayload): Observable<IItemOfferCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOffer/CreateUpdate`;
    return this.http.post<IItemOfferCreateResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of Item Offer Master /////////////////////////////////////////
  /////////////////////////////////////ITEM GODOWN MASTER///////////////////////////////////////////////
  public getGodownItemMaster(payload: IGodownItemGroupPayload): Observable<IGodownItemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterGowdownItem/GetAll`;
    return this.http.post<IGodownItemGroupResponse>(apiUrl, payload);
  }
  public GodownItemstatusData(payload: IDeleteGodownItemFormPayload): Observable<IGodownItemDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterGowdownItem/StatusChange`;
    return this.http.put<IGodownItemDeleteResponse>(apiUrl, payload);
  }
  public addGodownItemData(payload: IAddGodownItemFormPayload): Observable<IGodownItemCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterGowdownItem/CreateUpdate`;
    return this.http.post<IGodownItemCreateResponse>(apiUrl, payload);
  }
  public GetPrintGowdownItem(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterGowdownItem/GetPrintGowdownItem`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////ITEM GODOWN MASTER /////////////////////////////////////////
  /////////////////////////////////////ITEM OFFER MASTER(OFF SHOP)///////////////////////////////////////////////
  public getOffshopOfferMaster(payload: IOffshopOfferGroupPayload): Observable<IOffshopOfferGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOfferOffShop/GetAll`;
    return this.http.post<IOffshopOfferGroupResponse>(apiUrl, payload);
  }
  public OffshopOfferstatusData(payload: IDeleteOffshopOfferFormPayload): Observable<IOffshopOfferDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOfferOffShop/StatusChange`;
    return this.http.put<IOffshopOfferDeleteResponse>(apiUrl, payload);
  }
  public addOffshopOfferData(payload: IAddOffshopOfferFormPayload): Observable<IOffshopOfferCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterItemOfferOffShop/CreateUpdate`;
    return this.http.post<IOffshopOfferCreateResponse>(apiUrl, payload);
  }
  //////////////////////////////// END OF ITEM OFFER MASTER(OFF SHOP)////////////////////////////////////////////////
  /////////////////////////////////////Bank Master///////////////////////////////////////////////
  public getBankMaster(payload: IBankGroupPayload): Observable<IBankGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBank/GetAll`;
    return this.http.post<IBankGroupResponse>(apiUrl, payload);
  }
  public BankstatusData(payload: IDeleteBankFormPayload): Observable<IBankDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBank/StatusChange`;
    return this.http.put<IBankDeleteResponse>(apiUrl, payload);
  }
  public addBankData(payload: IAddBankFormPayload): Observable<IBankCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBank/CreateUpdate`;
    return this.http.post<IBankCreateResponse>(apiUrl, payload);
  }
  public GetPrintBANK(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBank/GetPrintBANK`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////End Of Bank Master//////////////////////////////////////////////////////////////////
  ///////////////////////////////////// Payment Head Master ///////////////////////////////////////////////////
  public getPayHeadMaster(payload: IPaymentPayload): Observable<IPaymentGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterPaymentHead/GetAll`;
    return this.http.post<IPaymentGroupResponse>(apiUrl, payload);
  }
  public PayHeadstatusData(payload: IDeletePaymentFormPayload): Observable<IPaymentDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterPaymentHead/StatusChange`;
    return this.http.put<IPaymentDeleteResponse>(apiUrl, payload);
  }
  public addPayHeadData(payload: IAddPaymentFormPayload): Observable<IPaymentCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterPaymentHead/CreateUpdate`;
    return this.http.post<IPaymentCreateResponse>(apiUrl, payload);
  }
  public GetPrintPayHead(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterPaymentHead/GetPrintPayHead`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////End Of Payment Head Master////////////////////////////////////////////////
  ///////////////////////////////////// Subscription Remarks Master ///////////////////////////////////////////////////
  public getSubRemarksMaster(payload: ISubscriptionPayload): Observable<ISubscriptionGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSubscriptionRemarks/GetAll`;
    return this.http.post<ISubscriptionGroupResponse>(apiUrl, payload);
  }
  public SubRemarksstatusData(payload: IDeleteSubscriptionFormPayload): Observable<ISubscriptionDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSubscriptionRemarks/StatusChange`;
    return this.http.put<ISubscriptionDeleteResponse>(apiUrl, payload);
  }
  public addSubRemarksData(payload: IAddSubscriptionFormPayload): Observable<ISubscriptionCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSubscriptionRemarks/CreateUpdate`;
    return this.http.post<ISubscriptionCreateResponse>(apiUrl, payload);
  }
  public GetPrintSubsRemarks(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSubscriptionRemarks/GetPrintSubsRemarks`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////End Of Subscription Remarks Master////////////////////////////////////////////////
  ///////////////////////////////////// Hall Member Type Mapping For Card Recharge ///////////////////////////////////////////////////
  public getHallMemberTypeMaster(payload: IHallMembershipGroupPayload): Observable<IHallMembershipGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMemTypeMap/GetAll`;
    return this.http.post<IHallMembershipGroupResponse>(apiUrl, payload);
  }
  public updateHallMemberTypeData(payload: IAddHallMembershipFormPayload): Observable<IHallMembershipCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMemTypeMap/Update`;
    return this.http.post<IHallMembershipCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////End Of Hall Member Type Mapping For Card Recharge///////////////////////////////////////////
  ///////////////////////////////////// Party Master ///////////////////////////////////////////////////
  public getPartyMaster(payload: IPartyGroupPayload): Observable<IPartyGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterParty/GetAll`;
    return this.http.post<IPartyGroupResponse>(apiUrl, payload);
  }
  public PartystatusData(payload: IDeletePartyFormPayload): Observable<IPartyDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterParty/StatusChange`;
    return this.http.put<IPartyDeleteResponse>(apiUrl, payload);
  }
  public addPartyData(payload: IAddPartynFormPayload): Observable<IPartyCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterParty/CreateUpdate`;
    return this.http.post<IPartyCreateResponse>(apiUrl, payload);
  }
  public GetPrintParty(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterParty/GetPrintParty`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////////////////////////// End Of Party Master ///////////////////////////////////////////////////////
  ///////////////////////////////////// RelationShip Master  ///////////////////////////////////////////////////
  public getRelationMaster(payload: IRelationGroupPayload): Observable<IRelationGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRelation/GetAll`;
    return this.http.post<IRelationGroupResponse>(apiUrl, payload);
  }
  public RelationstatusData(payload: IDeleteRelationFormPayload): Observable<IRelationDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRelation/StatusChange`;
    return this.http.put<IRelationDeleteResponse>(apiUrl, payload);
  }
  public addRelationData(payload: IAddRelationFormPayload): Observable<IRelationCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRelation/CreateUpdate`;
    return this.http.post<IRelationCreateResponse>(apiUrl, payload);
  }
  public GetPrintRelation(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRelation/GetPrintRelation`;
    return this.http.post<any>(apiUrl, payload);
  }
  ////////////////////////////////End Of RelationShip Master //////////////////////////////////////////////////////////////////
  ///////////////////////////////////// Member Type Master  ///////////////////////////////////////////////////
  public getMemberTypeMaster(payload: IMemberTypeGroupPayload): Observable<IMemberTypeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberType/GetAll`;
    return this.http.post<IMemberTypeGroupResponse>(apiUrl, payload);
  }
  public MemberTypestatusData(payload: IDeleteMemberTypeFormPayload): Observable<IMemberTypeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberType/StatusChange`;
    return this.http.put<IMemberTypeDeleteResponse>(apiUrl, payload);
  }
  public addMemberTypeData(payload: IAddMemberTypeFormPayload): Observable<IMemberTypeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberType/CreateUpdate`;
    return this.http.post<IMemberTypeCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////End Of Member Type Master ////////////////////////////////////////////////
  ///////////////////////////////////// Member Type Subscription Master  ///////////////////////////////////////////////////
  public getMemberTypeSubMaster(payload: IMemberTypeSubGroupPayload): Observable<IMemberTypeSubGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberTypeSubs/GetAll`;
    return this.http.post<IMemberTypeSubGroupResponse>(apiUrl, payload);
  }
  public MemberTypeSubstatusData(payload: IDeleteMemberTypeSubFormPayload): Observable<IMemberTypeSubDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberTypeSubs/StatusChange`;
    return this.http.put<IMemberTypeSubDeleteResponse>(apiUrl, payload);
  }
  public addMemberTypeSubData(payload: IAddMemberTypeSubFormPayload): Observable<IMemberTypeSubCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberTypeSubs/CreateUpdate`;
    return this.http.post<IMemberTypeSubCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////End Of Member Type Subscription Master ////////////////////////////////////////////////
  ///////////////////////////////////// Reason Type Master  ///////////////////////////////////////////////////
  public getReasonTypeMaster(payload: IReasonTypeGroupPayload): Observable<IReasonTypeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReasonType/GetAll`;
    return this.http.post<IReasonTypeGroupResponse>(apiUrl, payload);
  }
  public ReasonTypestatusData(payload: IDeleteReasonTypeFormPayload): Observable<IReasonTypeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReasonType/StatusChange`;
    return this.http.put<IReasonTypeDeleteResponse>(apiUrl, payload);
  }
  public addReasonTypeData(payload: IAddReasonTypeFormPayload): Observable<IReasonTypeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReasonType/CreateUpdate`;
    return this.http.post<IReasonTypeCreateResponse>(apiUrl, payload);
  }
  public GetPrintReasonType(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReasonType/GetPrintReasonType`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////// End Of Reason Type Master ////////////////////////////////////////////////
  ///////////////////////////////////// Reason Master  ///////////////////////////////////////////////////
  public getReasonMaster(payload: IReasonMGroupPayload): Observable<IReasonMGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReason/GetAll`;
    return this.http.post<IReasonMGroupResponse>(apiUrl, payload);
  }
  public ReasonstatusData(payload: IDeleteReasonMFormPayload): Observable<IReasonMDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReason/StatusChange`;
    return this.http.put<IReasonMDeleteResponse>(apiUrl, payload);
  }
  public addReasonData(payload: IAddReasonMFormPayload): Observable<IReasonMCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReason/CreateUpdate`;
    return this.http.post<IReasonMCreateResponse>(apiUrl, payload);
  }
  public GetPrintReason(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterReason/GetPrintReason`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////// End Of Reason Master ////////////////////////////////////////////////
  ///////////////////////////////////// Other Charges Master  ///////////////////////////////////////////////////
  public getOtherChargesMaster(payload: IChargesGroupPayload): Observable<IChargesGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherCharges/GetAll`;
    return this.http.post<IChargesGroupResponse>(apiUrl, payload);
  }
  public OtherChargesstatusData(payload: IDeleteChargesFormPayload): Observable<IChargesDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherCharges/StatusChange`;
    return this.http.put<IChargesDeleteResponse>(apiUrl, payload);
  }
  public addOtherChargesData(payload: IAddChargesFormPayload): Observable<IChargesCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherCharges/Create`;
    return this.http.post<IChargesCreateResponse>(apiUrl, payload);
  }
  public updateOtherChargesData(payload: IEditChargesFormPayload): Observable<IChargesUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherCharges/Update`;
    return this.http.put<IChargesUpdateResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of Other Charges Master ////////////////////////////////////////////////
  ///////////////////////////////////// Other Charges Rate Master  ///////////////////////////////////////////////////
  public getOtherChargesRateMaster(payload: IChargesRateGroupPayload): Observable<IChargesRateGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherChargesRate/GetAll`;
    return this.http.post<IChargesRateGroupResponse>(apiUrl, payload);
  }
  public OtherChargesRatestatusData(payload: IDeleteChargesRateFormPayload): Observable<IChargesRateDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherChargesRate/StatusChange`;
    return this.http.put<IChargesRateDeleteResponse>(apiUrl, payload);
  }
  public addOtherChargesRateData(payload: IAddChargesRateFormPayload): Observable<IChargesRateCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherChargesRate/Create`;
    return this.http.post<IChargesRateCreateResponse>(apiUrl, payload);
  }
  public updateOtherChargesRateData(payload: IEditChargesRateFormPayload): Observable<IChargesRateUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterOtherChargesRate/Update`;
    return this.http.put<IChargesRateUpdateResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of Other Charges Master ////////////////////////////////////////////////
  ///////////////////////////////////// Canteen Item & UOM Mapping  ///////////////////////////////////////////////////
  public getCanteenItemMaster(payload: ICanteenUomItemGroupPayload): Observable<ICanteenUomItemGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCanteenItemUomMap/GetAll`;
    return this.http.post<ICanteenUomItemGroupResponse>(apiUrl, payload);
  }
  public updateCanteenItemData(payload: IEditCanteenUomItemFormPayload): Observable<ICanteenUomItemUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterCanteenItemUomMap/Update`;
    return this.http.put<ICanteenUomItemUpdateResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of Canteen Item & UOM Mapping ////////////////////////////////////////////////
  /////////////////////////////////////MASTER SWIMMING MEMBER///////////////////////////////////////////////
  public getSwimmerMaster(payload: ISwimmerPayload): Observable<ISwimmerGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimmingMember/GetAll`;
    return this.http.post<ISwimmerGroupResponse>(apiUrl, payload);
  }
  // public DownloadFile(
  //   payload: IDocumentPayload,
  //   slectedDocument: File | null
  // ): Observable<any> {
  //   const apiUrl = `${environment.apiEndpoint}/api/TranSwimBooking/Create`;
  //   // Create FormData
  //   const formData: FormData = new FormData();
  //   // Append each field from the payload to FormData directly
  //   formData.append('FormNo', payload.formNo)
  //   formData.append('UFile', slectedDocument as string | Blob)
  //   formData.append('FinYear', payload.finYear)
  //   return this.http.post<any>(apiUrl, formData);
  // }
  downloadFile(filename: string, formNo: string, mimeType: string, finYear: string): Observable<HttpResponse<Blob>> {
    const params: IDocumentPayload = {
      filename: filename,
      formNo: formNo,
      finYear: finYear,
      MimeType: mimeType
    };
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimmingMember/DownloadFile`;
    // Ensure we're returning an Observable, not a Subscription
    return this.http.post(apiUrl, params, { observe: 'response', responseType: 'blob' });
  }
  public SwimmerstatusData(payload: IDeleteSwimmerFormPayload): Observable<IOffshopOfferDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimmingMember/StatusChange`;
    return this.http.put<IOffshopOfferDeleteResponse>(apiUrl, payload);
  }
  public addSwimmerData(payload: IAddSwimmerFormPayload): Observable<ISwimmerCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimmingMember/Create`;
    return this.http.post<ISwimmerCreateResponse>(apiUrl, payload);
  }
  public editSwimmerData(payload: IEditSwimmerFormPayload): Observable<ISwimmerUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimmingMember/Update`;
    return this.http.put<ISwimmerUpdateResponse>(apiUrl, payload);
  }
  ////////////////////////////////MASTER SWIMMING MEMBER/////////////////////////////////////////
  ///////////////////////////////////// Recipe Master  ///////////////////////////////////////////////////
  public getRecipeMaster(payload: IRecipePayload): Observable<IRecipeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRecipe/GetAll`;
    return this.http.post<IRecipeGroupResponse>(apiUrl, payload);
  }
  public RecipestatusData(payload: IDeleteRecipeFormPayload): Observable<IRecipeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRecipe/StatusChange`;
    return this.http.put<IRecipeDeleteResponse>(apiUrl, payload);
  }
  public addRecipeData(payload: IAddRecipeFormPayload): Observable<IRecipeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRecipe/CreateUpdate`;
    return this.http.post<IRecipeCreateResponse>(apiUrl, payload);
  }
  public GetByIdRecipeData(payload: IGetByIdRecipeFormPayload): Observable<IGetByIdRecipeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterRecipe/GetRecipeById`;
    return this.http.post<IGetByIdRecipeCreateResponse>(apiUrl, payload);
  }
  //////////////////////////////// End Of Recipe Master ////////////////////////////////////////////////
  ///////////////////////////////////// Member Master  ///////////////////////////////////////////////////
  public getMemberMaster(payload: IMemberRegistrationGroupPayload): Observable<IMemberRegistrationGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/GetAll`;
    return this.http.post<IMemberRegistrationGroupResponse>(apiUrl, payload);
  }
  public addMemberData(
    payload: IAddMemberRegistrationFormPayload,
    selectedPhotoFile: File | null,
    selectedSignatureFile: File | null
  ): Observable<IMemberRegistrationCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/CreateUpdate`;
    // Create FormData
    const formData: FormData = new FormData();
    // Append each field from the payload to FormData directly
    formData.append('Row_Id', payload.row_Id.toString());
    formData.append('Primary_Mem_Code', payload.primary_Mem_Code);
    formData.append('Mem_Type', payload.mem_Type);
    formData.append('Mem_Suffix', payload.mem_Suffix);
    formData.append('Main_Mem', payload.main_Mem);
    formData.append('Main_Mem_Id', payload.main_Mem_Id.toString());
    formData.append('Ref_Mem_Id', payload.ref_Mem_Id.toString());
    formData.append('IssueYr', payload.issueYr);
    formData.append('FirstIssueYr', payload.issueYr);
    formData.append('IssueDate', payload.issueDate);
    formData.append('ReIssueRemarks', payload.reIssueRemarks);
    formData.append('Salutation', payload.salutation);
    formData.append('FNm', payload.fNm);
    formData.append('SNm', payload.sNm);
    formData.append('Address_Res', payload.address_Res);
    formData.append('Address_Off', payload.address_Off);
    formData.append('Location', payload.location);
    formData.append('PinCode', payload.pinCode);
    formData.append('Sex', payload.sex);
    formData.append('DOB', payload.dob);
    formData.append('Contact', payload.contact);
    formData.append('BloodGrp', payload.bloodGrp);
    formData.append('EmailId', payload.emailId);
    formData.append('UINo', payload.uiNo);
    formData.append('IdProof_Id', payload.idProof_Id.toString());
    formData.append('IdNo', payload.idNo);
    formData.append('Occu', payload.occu);
    formData.append('MobNo', payload.mobNo);
    formData.append('LandNo', payload.landNo);
    // Append dynamic image details
    formData.append('Mem_Pic_Path', payload.mem_Pic_Path);
    formData.append('Mem_Pic_Folder', payload.mem_Pic_Folder);
    formData.append('Mem_Pic_Name', payload.mem_Pic_Name);
    // if (selectedPhotoFile) {
    formData.append('Mem_Pic', selectedPhotoFile as string | Blob);
    // }
    formData.append('DPic', payload.dPic);
    formData.append('PicEntryDt', payload.picEntryDt);
    formData.append('PicEntryType', payload.picEntryType);
    // Append dynamic signature details
    formData.append('Mem_Sig_Path', payload.mem_Sig_Path);
    formData.append('Mem_Sig_Folder', payload.mem_Sig_Folder);
    formData.append('Mem_Sig_Name', payload.mem_Sig_Name);
    // if (selectedSignatureFile) {
    formData.append('Mem_Sig', selectedSignatureFile as string | Blob);
    // }
    formData.append('DSig', payload.dSig);
    formData.append('SigEntryDt', payload.sigEntryDt);
    formData.append('SigEntryType', payload.sigEntryType);
    formData.append('Active', payload.active);
    formData.append('Activity_Remarks', payload.activity_Remarks);
    formData.append('Add_By', payload.add_By);
    formData.append('InActiveType', payload.inActiveType);
    formData.append('Add_Comp_IP', payload.add_Comp_IP);
    formData.append('Mem_Code', payload.mem_Code);
    if (payload.memLockerDetail.length == 0) {
      // Append other fields
      formData.append(`memLockerDetail[${0}].locker_Tran_Date`, ""); // Blank
      formData.append(`memLockerDetail[${0}].loc_Code`, ""); // Blank
      formData.append(`memLockerDetail[${0}].loc_Location_Name`, ""); // Blank
      formData.append(`memLockerDetail[${0}].loc_Type`, ""); // Blank
      formData.append(`memLockerDetail[${0}].loc_Rent_Per_Yr`, ""); // Blank
      formData.append(`memLockerDetail[${0}].servTaxPerc`, ""); // Blank
      formData.append(`memLockerDetail[${0}].oldNo`, ""); // Blank
      formData.append(`memLockerDetail[${0}].remarks`, ""); // Blank
    }
    else {
      payload.memLockerDetail.forEach((item: any, index: number) => {
        formData.append(`memLockerDetail[${index}].locker_Tran_Date`, item.locker_Tran_Date);
        formData.append(`memLockerDetail[${index}].loc_Code`, item.loc_Code);
        formData.append(`memLockerDetail[${index}].loc_Location_Name`, item.loc_Location_Name);
        formData.append(`memLockerDetail[${index}].loc_Type`, item.loc_Type);
        formData.append(`memLockerDetail[${index}].loc_Rent_Per_Yr`, item.loc_Rent_Per_Yr);
        formData.append(`memLockerDetail[${index}].servTaxPerc`, item.servTaxPerc);
        formData.append(`memLockerDetail[${index}].oldNo`, item.oldNo);
        formData.append(`memLockerDetail[${index}].remarks`, item.remarks);
      });
    }
    return this.http.post<IMemberRegistrationCreateResponse>(apiUrl, formData);
  }
  public MemberId(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/GetById`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////////////// Number Of Members /////////////////////////////////////////////
  public GetHelpNumberOfMembers(payload: IMemberHelpNumberPayload): Observable<IHelpNumberResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/GetHelpNumberOfMembers`;
    return this.http.post<IHelpNumberResponse>(apiUrl, payload);
  }
  ///////////////////////////////////Number Of Primary Member //////////////////////////////////////////
  public GetHelpLastPrimaryMemberCode(payload: IPMemberHelpNumberPayload): Observable<IHelpPNumberResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/GetHelpLastPrimaryMemberCode`;
    return this.http.post<IHelpPNumberResponse>(apiUrl, payload);
  }
  public ConvertMemberCommand(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMember/ConvertMemberCommand`;
    return this.http.post<any>(apiUrl, payload);
  }
  //////////////////////////////// End Of Member Master ////////////////////////////////////////////////
  /////////////////////////////////////CLUB PARAMETER///////////////////////////////////////////////
  public getClubParameterMaster(payload: any): Observable<IClubParameterGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/CompanyParameter/GetAll`;
    return this.http.post<IClubParameterGroupResponse>(apiUrl, payload);
  }
  public editClubParameterData(payload: IEditClubParameterFormPayload): Observable<IClubParameterUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/CompanyParameter/Update`;
    return this.http.put<IClubParameterUpdateResponse>(apiUrl, payload);
  }
  ////////////////////////////////CLUB PARAMETER/////////////////////////////////////////
  /////////////////////////////////////MASTER MEMBER WISE LOCKER DETAILS///////////////////////////////////////////////
  public getMemWiseLockerMaster(payload: IMemWiseLockerGroupPayload): Observable<IMemWiseLockerGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberLocker/GetAll`;
    return this.http.post<IMemWiseLockerGroupResponse>(apiUrl, payload);
  }
  public addMemWiseLockerData(payload: IAddMemWiseLockerFormPayload): Observable<IMemWiseLockerCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberLocker/CreateUpdate`;
    return this.http.post<IMemWiseLockerCreateResponse>(apiUrl, payload);
  }
  ////////////////////////////////MASTER MEMBER LOCKER/////////////////////////////////////////
  /////////////////////////////////////Member Open Balance///////////////////////////////////////////////
  public getMemBalanceMaster(payload: IMasterMemBalancePayload): Observable<IMemBalanceGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberOB/GetAll`;
    return this.http.post<IMemBalanceGroupResponse>(apiUrl, payload);
  }
  public MemBalancestatusData(payload: IDeleteMemBalanceFormPayload): Observable<IMemBalanceDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberOB/StatusChange`;
    return this.http.put<IMemBalanceDeleteResponse>(apiUrl, payload);
  }
  public addMemBalanceData(payload: IAddMemBalanceFormPayload): Observable<IMemBalanceCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberOB/CreateUpdate`;
    return this.http.post<IMemBalanceCreateResponse>(apiUrl, payload);
  }
  public GetPrintMemOb(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemberOB/GetPrintMemOb`;
    return this.http.post<any>(apiUrl, payload);
  }
  /////////////////////////////////Member Open Balance/////////////////////////////////////////
  /////////////////////////////////////Bevco Item Link Master///////////////////////////////////////////////
  public getBevcoItemLinkMaster(payload: ILinkHeadPayload): Observable<ILinkHeadGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBevcoItemLink/GetAll`;
    return this.http.post<ILinkHeadGroupResponse>(apiUrl, payload);
  }
  public changeStatusBevcoItemLink(payload: IDeleteLinkHeadFormPayload): Observable<ILinkHeadDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBevcoItemLink/StatusChange`;
    return this.http.put<ILinkHeadDeleteResponse>(apiUrl, payload);
  }
  public addEditBevcoItemLink(payload: IAddEditLinkHeadtFormPayload): Observable<ILinkHeadCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterBevcoItemLink/CreateUpdate`;
    return this.http.post<ILinkHeadCreateResponse>(apiUrl, payload);
  }
  /////////////////////////////////Bevco Item Link Master/////////////////////////////////////////
  /////////////////////////////////////HALL MACHINE MAPPING///////////////////////////////////////////////
  public getHallMapping(payload: IMasterHallMachineMappingPayload): Observable<IHallMachineMappingGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMapComputer/GetAll`;
    return this.http.post<IHallMachineMappingGroupResponse>(apiUrl, payload);
  }
  public HallMappingstatusData(payload: IDeleteHallMachineMappingFormPayload): Observable<IHallMachineMappingDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMapComputer/StatusChange`;
    return this.http.put<IHallMachineMappingDeleteResponse>(apiUrl, payload);
  }
  public addHallMappingData(payload: IAddHallMachineMappingFormPayload): Observable<IHallMachineMappingCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMapComputer/CreateUpdate`;
    return this.http.post<IHallMachineMappingCreateResponse>(apiUrl, payload);
  }
  public GetPrintHallMap(payload: any): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterHallMapComputer/GetPrintHallMap`;
    return this.http.post<any>(apiUrl, payload);
  }
  ///////////////////////////////// End of MACHINE MAPPING/////////////////////////////////////////
  ///////////////////////////////////Change Primary Member //////////////////////////////////////////
  public ChangePrimaryMemberUpdate(payload: IDeleteChangePrimaryMemberFormPayload): Observable<any> {
    const apiUrl = `${environment.apiEndpoint}/api/ChangePrimaryMember/Update`;
    return this.http.put<any>(apiUrl, payload);
  }
  ///////////////////////////////////// SWIMMER BATCH TIMING ///////////////////////////////////////////////////
  public getBatchTimeMaster(payload: IBatchTimeListGroupPayload): Observable<IBatchTimeListGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBatchTime/GetAll`;
    return this.http.post<IBatchTimeListGroupResponse>(apiUrl, payload);
  }
  public BatchTimestatusData(payload: IDeleteBatchTimeListFormPayload): Observable<IBatchTimeListDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBatchTime/StatusChange`;
    return this.http.put<IBatchTimeListDeleteResponse>(apiUrl, payload);
  }
  public addBatchTimeData(payload: IAddBatchTimeListFormPayload): Observable<IBatchTimeListCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBatchTime/Create`;
    return this.http.post<IBatchTimeListCreateResponse>(apiUrl, payload);
  }
  public updateBatchTimeData(payload: IEditBatchTimeListFormPayload): Observable<IBatchTimeListUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBatchTime/Update`;
    return this.http.put<IBatchTimeListUpdateResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// SWIMMER BOOKING RANGE ///////////////////////////////////////////////////
  public getBookingRngMaster(payload: IBookingRngGroupPayload): Observable<IBookingRngGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBookingRange/GetAll`;
    return this.http.post<IBookingRngGroupResponse>(apiUrl, payload);
  }
  public BookingRngstatusData(payload: IDeleteBookingRngFormPayload): Observable<IBookingRngDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBookingRange/StatusChange`;
    return this.http.put<IBookingRngDeleteResponse>(apiUrl, payload);
  }
  public addBookingRngData(payload: IAddBookingRngFormPayload): Observable<IBookingRngCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBookingRange/Create`;
    return this.http.post<IBookingRngCreateResponse>(apiUrl, payload);
  }
  public updateBookingRngData(payload: IEditBookingRngFormPayload): Observable<IBookingRngUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimBookingRange/Update`;
    return this.http.put<IBookingRngUpdateResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// SWIMMER MEMBER CATEGORY ///////////////////////////////////////////////////
  public getSwimCatMaster(payload: ISwimCatGroupPayload): Observable<ISwimCatGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimFormCat/GetAll`;
    return this.http.post<ISwimCatGroupResponse>(apiUrl, payload);
  }
  public SwimCatstatusData(payload: IDeleteSwimCatFormPayload): Observable<ISwimCatDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimFormCat/StatusChange`;
    return this.http.put<ISwimCatDeleteResponse>(apiUrl, payload);
  }
  public addSwimCatData(payload: IAddSwimCatFormPayload): Observable<ISwimCatCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimFormCat/Create`;
    return this.http.post<ISwimCatCreateResponse>(apiUrl, payload);
  }
  public updateSwimCatData(payload: IEditSwimCatFormPayload): Observable<ISwimCatUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimFormCat/Update`;
    return this.http.put<ISwimCatUpdateResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// SWIMMER MEMBER TYPE  ///////////////////////////////////////////////////
  public getSwimTypeMaster(payload: ISwimMemTypeGroupPayload): Observable<ISwimMemTypeGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimMemType/GetAll`;
    return this.http.post<ISwimMemTypeGroupResponse>(apiUrl, payload);
  }
  public SwimTypestatusData(payload: IDeleteSwimMemTypeFormPayload): Observable<ISwimMemTypeDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimMemType/StatusChange`;
    return this.http.put<ISwimMemTypeDeleteResponse>(apiUrl, payload);
  }
  public addSwimTypeData(payload: IAddSwimMemTypeFormPayload): Observable<ISwimMemTypeCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimMemType/Create`;
    return this.http.post<ISwimMemTypeCreateResponse>(apiUrl, payload);
  }
  public updateSwimTypeData(payload: IEditSwimMemTypeFormPayload): Observable<ISwimMemTypeUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimMemType/Update`;
    return this.http.put<ISwimMemTypeUpdateResponse>(apiUrl, payload);
  }
  ///////////////////////////////////// SWIMMER SESSION TYPE ///////////////////////////////////////////////////
  public getSwimSessionMaster(payload: ISwimSessionGroupPayload): Observable<ISwimSessionGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimSessionType/GetAll`;
    return this.http.post<ISwimSessionGroupResponse>(apiUrl, payload);
  }
  public SwimSessionstatusData(payload: IDeleteSwimSessionFormPayload): Observable<ISwimSessionDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimSessionType/StatusChange`;
    return this.http.put<ISwimSessionDeleteResponse>(apiUrl, payload);
  }
  public addSwimSessionData(payload: IAddSwimSessionFormPayload): Observable<ISwimSessionCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimSessionType/Create`;
    return this.http.post<ISwimSessionCreateResponse>(apiUrl, payload);
  }
  public updateSwimSessionData(payload: IEditSwimSessionFormPayload): Observable<ISwimSessionUpdateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterSwimSessionType/Update`;
    return this.http.put<ISwimSessionUpdateResponse>(apiUrl, payload);
  }
  ///////////////////////////////////////// Member Payment Purpose ///////////////////////////////////////////////
  public GetAllPaymentPurpose(payload: IMemberPaymentGroupPayload): Observable<IMemberPaymentGroupResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemPayment/GetAll`;
    return this.http.post<IMemberPaymentGroupResponse>(apiUrl, payload);
  }
  public PaymentPurposestatusData(payload: IDeleteMemberPaymentFormPayload): Observable<IMemberPaymentDeleteResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemPayment/StatusChange`;
    return this.http.post<IMemberPaymentDeleteResponse>(apiUrl, payload);
  }
  public AddPaymentPurposeData(payload: IAddMemberPaymentFormPayload): Observable<IMemberPaymentCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemPayment/Create`;
    return this.http.post<IMemberPaymentCreateResponse>(apiUrl, payload);
  }
  public UpdatePaymentPurposeData(payload: IAddMemberPaymentFormPayload): Observable<IMemberPaymentCreateResponse> {
    const apiUrl = `${environment.apiEndpoint}/api/MasterMemPayment/Update`;
    return this.http.post<IMemberPaymentCreateResponse>(apiUrl, payload);
  }
  /////////////////////////////////////// End of Member Payment Purpose ///////////////////////////////////////////////
}
