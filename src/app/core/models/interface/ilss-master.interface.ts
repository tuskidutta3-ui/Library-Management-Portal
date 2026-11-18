export interface IGeneralResponse {
    message: string;
    pagingDetails: {
        pageNumber: number;
        pageSize: number;
        totalCount: number;
    };
    status: string;
    statusCode: string;
}
export interface IPaginationConfig {
    page: number;
    pageSize: number;
    collectionSize: number;
    maxSize: number;
}
/////////////////////// Caterer Master //////////////////////////////
export interface IMasterCatererPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICatererGroupResponse extends IGeneralResponse {
    result: ICatererGroup[];
}
export interface ICatererGroupPayload extends IMasterCatererPayload { }
export interface ICatererGroup {
    row_Id: number,
    catererName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    catererType: string,
    aliasName: string
}
export interface IAddCatererFormPayload {
    row_Id: number,
    catererName: string,
    catererType: string,
    aliasName: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
}
// export interface IEditCatererFormPayload {
//     name: string;
//     type: string;
//     alias: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface ICatererEditResponse {
//     name: string;
//     type: string;
//     alias: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface ICatererCreateResponse extends IGeneralResponse {
    result: ICatererGroup;
}
// export interface ICatererUpdateResponse extends IGeneralResponse {
//     result: ICatererEditResponse;
// }
export interface ICatererDeleteResponse extends IGeneralResponse { }
export interface CatererGetById {
    row_Id: number,
    catererName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    catererType: string,
    aliasName: string
}
export interface IDeleteCatererFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Caterer Master///////////////////////////////
/////////////////////// Club Parameter //////////////////////////////
export interface IClubParameterGroupResponse extends IGeneralResponse {
    result: IClubParameterGroup[];
}
export interface IClubParameterGroup {
    row_Id: number,
    club_Name: string,
    club_Add1: string,
    club_Add2: string,
    phone_No: string,
    email: string,
    webSite: string,
    eCess: number,
    heCess: number,
    activate: string,
    fine_FirstHalf_May: number,
    fine_FirstHalf_June: number,
    fine_SecHalf_October: number,
    fine_SecHalf_November: number,
    fine_JA_Dup_Card: number,
    add_Comp_IP: string,
    jA_Code: number,
    annualMemCode: number,
    ladyAssociateCode: number,
    payHeadId_MemFees: number,
    payHeadId_LockerRent: number,
    liquorTaxRate: number,
    uomIdForRes: number,
    vaT_No: string,
    sT_NO: string,
    suspense_Mem_Id: number,
    offShop_Caterer_Id: number,
    canteen_Caterer_Id: number,
    readCard_Or_SoftwareTesting: string,
    payHeadId_Donation: number,
    fine_Donation: number,
    from_FinYr: string,
    upto_FinYr: string,
    suspenceMemberName: string,
    suspenceMemberCode: string
}
export interface IEditClubParameterFormPayload {
    row_Id: number,
    club_Name: string,
    club_Add1: string,
    club_Add2: string,
    phone_No: string,
    email: string,
    webSite: string,
    jA_Code: number,
    annualMemCode: number,
    ladyAssociateCode: number,
    payHeadId_MemFees: number,
    payHeadId_LockerRent: number,
    uomIdForRes: number,
    eCess: number,
    heCess: number,
    liquorTaxRate: number,
    vaT_No: string,
    sT_NO: string,
    fine_FirstHalf_May: number,
    fine_FirstHalf_June: number,
    fine_SecHalf_October: number,
    fine_SecHalf_November: number,
    fine_JA_Dup_Card: number,
    offShop_Caterer_Id: number,
    canteen_Caterer_Id: number,
    suspense_Mem_Id: number,
    add_Comp_IP: string
}
export interface IClubParameterEditResponse {
    row_Id: number,
    club_Name: string,
    club_Add1: string,
    club_Add2: string,
    phone_No: string,
    email: string,
    webSite: string,
    jA_Code: number,
    annualMemCode: number,
    ladyAssociateCode: number,
    payHeadId_MemFees: number,
    payHeadId_LockerRent: number,
    uomIdForRes: number,
    eCess: number,
    heCess: number,
    liquorTaxRate: number,
    vaT_No: string,
    sT_NO: string,
    fine_FirstHalf_May: number,
    fine_FirstHalf_June: number,
    fine_SecHalf_October: number,
    fine_SecHalf_November: number,
    fine_JA_Dup_Card: number,
    offShop_Caterer_Id: number,
    canteen_Caterer_Id: number,
    suspense_Mem_Id: number,
    add_Comp_IP: string
}
export interface IClubParameterUpdateResponse extends IGeneralResponse {
    result: IClubParameterEditResponse;
}
export interface ClubParameterGetById {
    row_Id: number,
    club_Name: string,
    club_Add1: string,
    club_Add2: string,
    phone_No: string,
    email: string,
    webSite: string,
    eCess: number,
    heCess: number,
    activate: string,
    fine_FirstHalf_May: number,
    fine_FirstHalf_June: number,
    fine_SecHalf_October: number,
    fine_SecHalf_November: number,
    fine_JA_Dup_Card: number,
    add_Comp_IP: string,
    jA_Code: number,
    annualMemCode: number,
    ladyAssociateCode: number,
    payHeadId_MemFees: number,
    payHeadId_LockerRent: number,
    liquorTaxRate: number,
    uomIdForRes: number,
    vaT_No: string,
    sT_NO: string,
    suspense_Mem_Id: number,
    offShop_Caterer_Id: number,
    canteen_Caterer_Id: number,
    readCard_Or_SoftwareTesting: string,
    payHeadId_Donation: number,
    fine_Donation: number,
    from_FinYr: string,
    upto_FinYr: string,
    suspenceMemberName: string,
    suspenceMemberCode: string
}
//////////////////////////////////////// End Of Club Parameter///////////////////////////////
/////////////////////// Locker Location Master //////////////////////////////
export interface IMasterLockerLocationPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILockerLocationGroupResponse extends IGeneralResponse {
    result: ILockerLocationGroup[];
}
export interface ILockerLocationGroupPayload extends IMasterLockerLocationPayload { }
export interface ILockerLocationGroup {
    row_Id: number;
    loc_Location_Alias: string;
    loc_Location_Name: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    activate: string;
}
export interface IAddLockerLocationFormPayload {
    row_Id: number;
    loc_Location_Alias: string;
    loc_Location_Name: string;
    add_By: string;
    add_Comp_IP: string;
    activate: string;
}
export interface ILockerLocationCreateResponse extends IGeneralResponse {
    result: ILockerLocationGroup;
}
export interface ILockerLocationDeleteResponse extends IGeneralResponse { }
export interface LockerLocationGetById {
    row_Id: number;
    loc_Location_Alias: string;
    loc_Location_Name: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    activate: string;
}
export interface IDeleteLockerLocationFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Locker Location Master ///////////////////////////////
/////////////////////// Locker Type Master //////////////////////////////
export interface IMasterLockerTypePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILockerTypeGroupResponse extends IGeneralResponse {
    result: ILockerTypeGroup[];
}
export interface ILockerTypeGroupPayload extends IMasterLockerTypePayload { }
export interface ILockerTypeGroup {
    row_Id: number,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    activate: string;
}
export interface IAddLockerTypeFormPayload {
    row_Id: number,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    add_By: string;
    add_Comp_IP: string;
    activate: string;
}
export interface ILockerTypeCreateResponse extends IGeneralResponse {
    result: ILockerTypeGroup;
}
export interface IEditLockerTypeFormPayload {
    row_Id: number,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    activate: string;
}
export interface ILockerTypeDeleteResponse extends IGeneralResponse { }
export interface LockerTypeGetById {
    row_Id: number,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    activate: string;
}
export interface IDeleteLockerTypeFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Locker Type Master ///////////////////////////////
/////////////////////// Locker Master //////////////////////////////
export interface IMasterLockerPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILockerGroupResponse extends IGeneralResponse {
    result: ILockerGroup[];
}
export interface ILockerGroupPayload extends IMasterLockerPayload { }
export interface ILockerGroup {
    loc_Code: string;
    activate: string;
    row_Id: number;
    oldNo: string;
    loc_Status: string
    loc_Type_Id: number;
    loc_Type: string;
    loc_Location_Alias: string;
    loc_Location_Name: string;
    loc_Location_Id: number;
    add_By: string;
    add_Comp_IP: string;
}
export interface IAddLockerFormPayload {
    row_Id: number;
    loc_Location_Id: number;
    loc_Type_Id: number;
    loc_Status: string;
    activate: string;
    add_By: string;
    add_Comp_IP: string;
    oldNo: string;
}
export interface ILockerCreateResponse extends IGeneralResponse {
    result: ILockerGroup;
}
export interface ILockerDeleteResponse extends IGeneralResponse { }
export interface LockerGetById {
    loc_Code: string;
    activate: string;
    row_Id: number;
    oldNo: string;
    loc_Status: string
    loc_Type_Id: number;
    loc_Type: string;
    loc_Location_Alias: string;
    loc_Location_Name: string;
    loc_Location_Id: number;
    add_By: string;
    add_Comp_IP: string;
}
export interface IDeleteLockerFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Locker Master ///////////////////////////////
/////////////////////// Hall Master //////////////////////////////
export interface IMasterHallPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IHallGroupResponse extends IGeneralResponse {
    result: IHallGroup[];
}
export interface IHallGroupPayload extends IMasterHallPayload { }
export interface IHallGroup {
    row_Id: number;
    hall_Alias: string;
    hall_Name: string;
    covChgAppl: boolean;
    chgType: string;
    chargAmt: number;
    servTaxPerc: number;
    activate: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    hallType: string;
}
export interface IAddHallFormPayload {
    row_Id: number,
    hall_Alias: string,
    hall_Name: string,
    covChgAppl: boolean,
    chgType: string,
    chargAmt: number,
    servTaxPerc: number,
    hallType: string,
    activate: string;
    add_By: string;
    add_Comp_IP: string;
}
export interface IHallCreateResponse extends IGeneralResponse {
    result: IHallGroup;
}
export interface IHallDeleteResponse extends IGeneralResponse { }
export interface HallGetById {
    row_Id: number;
    hall_Alias: string;
    hall_Name: string;
    covChgAppl: boolean;
    chgType: string;
    chargAmt: number;
    servTaxPerc: number;
    activate: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
    hallType: string;
}
export interface IDeleteHallFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Hall Master ///////////////////////////////
/////////////////////// Hall Machine Mapping //////////////////////////////
export interface IMasterHallMachineMappingPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IHallMachineMappingGroupResponse extends IGeneralResponse {
    result: IHallMachineMappingGroup[];
}
export interface IHallMachineMappingGroupPayload extends IMasterHallMachineMappingPayload { }
export interface IHallMachineMappingGroup {
    row_Id: number,
    compName: string,
    activate: string,
    hall_Id: number,
    hall_Name: string,
    hall_Alias: string,
    hallType: string,
    add_Comp_IP: string,
    add_By: string
}
export interface IAddHallMachineMappingFormPayload {
    row_Id: number,
    hall_Id: number,
    compName: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IHallMachineMappingCreateResponse extends IGeneralResponse {
    result: IHallMachineMappingGroup;
}
export interface IHallMachineMappingDeleteResponse extends IGeneralResponse { }
export interface HallMachineMappingGetById {
    row_Id: number,
    compName: string,
    activate: string,
    hall_Id: number,
    hall_Name: string,
    hall_Alias: string,
    hallType: string,
    add_Comp_IP: string,
    add_By: string
}
export interface IDeleteHallMachineMappingFormPayload {
    row_Id: number;
}
/////////////////////////START OF GetPrintHallMap////////////////////
export interface IPrintHallMap {
    compName: string,
    activate: string,
    hall_Id: number,
    hall_Name: string
}
export interface IPrintHallMapResponse extends IGeneralResponse {
    result: IPrintHallMap;
}
//////////////////////////////////////// End Of Hall Machine Mapping ///////////////////////////////
/////////////////////// Waiter Master //////////////////////////////
export interface IMasterWaiterPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IWaiterGroupResponse extends IGeneralResponse {
    result: IWaiterGroup[];
}
export interface IWaiterGroupPayload extends IMasterWaiterPayload { }
export interface IWaiterGroup {
    row_Id: number;
    waiterName: string;
    category: string;
    activate: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
}
export interface IAddWaiterFormPayload {
    row_Id: 0;
    waiterName: string;
    category: string;
    add_By: string;
    add_Comp_IP: string;
}
export interface IWaiterCreateResponse extends IGeneralResponse {
    result: IWaiterGroup;
}
export interface IWaiterDeleteResponse extends IGeneralResponse { }
export interface WaiterGetById {
    row_Id: number;
    waiterName: string;
    category: string;
    activate: string;
    add_By: string;
    add_Time: any;
    edit_By: string;
    edit_Time: any;
    add_Comp_IP: string;
    edit_Comp_IP: string;
}
export interface IDeleteWaiterFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Waiter Mater ///////////////////////////////
/////////////////////// Tax Group //////////////////////////////
export interface IMasterTaxGroupPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ITaxGroupGroupResponse extends IGeneralResponse {
    result: ITaxGroupGroup[];
}
export interface ITaxGroupGroupPayload extends IMasterTaxGroupPayload { }
export interface ITaxGroupGroup {
    row_Id: number,
    taxGroupCode: string,
    taxGroupName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: null,
    edit_Time: null,
    add_Comp_IP: string,
    edit_Comp_IP: null
}
export interface IAddTaxGroupFormPayload {
    row_Id: number,
    taxGroupCode: string,
    taxGroupName: string,
    add_Comp_IP: string,
    add_By: string,
}
// export interface IEditTaxGroupFormPayload {
//     taxgroup: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface ITaxGroupEditResponse {
//     taxgroup: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface ITaxGroupCreateResponse extends IGeneralResponse {
    result: ITaxGroupGroup;
}
// export interface ITaxGroupUpdateResponse extends IGeneralResponse {
//     result: ITaxGroupEditResponse;
// }
export interface ITaxGroupDeleteResponse extends IGeneralResponse { }
export interface TaxGroupGetById {
    row_Id: number,
    taxGroupCode: string,
    taxGroupName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteTaxGroupFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Tax Group ///////////////////////////////
/////////////////////// Tax Master //////////////////////////////
export interface IMasterTaxPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ITaxGroupResponse extends IGeneralResponse {
    result: ITaxGroup[];
}
export interface ITaxGroupPayload extends IMasterTaxPayload { }
export interface ITaxGroup {
    taxCode: string;
    activate: string;
    row_Id: number;
    taxName: string;
    taxGroupCode: string;
    add_Comp_IP: string;
    add_By: string;
    taxGroupId: number;
    taxRate: number,
}
export interface IAddTaxFormPayload {
    row_Id: number,
    taxCode: string,
    taxName: string,
    taxGroupCode: string,
    taxRate: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
}
export interface ITaxCreateResponse extends IGeneralResponse {
    result: ITaxGroup;
}
export interface ITaxDeleteResponse extends IGeneralResponse { }
export interface TaxGetById {
    taxCode: string;
    activate: string;
    row_Id: number;
    taxName: string;
    taxGroupCode: string;
    add_Comp_IP: string;
    add_By: string;
    taxGroupId: number;
    taxRate: number,
}
export interface IDeleteTaxFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Tax Master ///////////////////////////////
/////////////////////// Unit Master //////////////////////////////
export interface IMasterUnitPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IUnitGroupResponse extends IGeneralResponse {
    result: IUnitGroup[];
}
export interface IUnitGroupPayload extends IMasterUnitPayload { }
export interface IUnitGroup {
    row_Id: number,
    uomShort: string,
    uomName: string,
    measureInMl: number,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    isRestaurantOnly: boolean
}
export interface IAddUnitFormPayload {
    row_Id: number,
    uomShort: string,
    uomName: string,
    measureInMl: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    isRestaurantOnly: boolean
}
// export interface IEditUnitFormPayload {
//     uom: string;
//     name: string;
//     measure: number;
//     rest: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IUnitEditResponse {
//     uom: string;
//     name: string;
//     measure: number;
//     rest: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IUnitCreateResponse extends IGeneralResponse {
    result: IUnitGroup;
}
// export interface IUnitUpdateResponse extends IGeneralResponse {
//     result: IUnitEditResponse;
// }
export interface IUnitDeleteResponse extends IGeneralResponse { }
export interface UnitGetById {
    row_Id: number,
    uomShort: string,
    uomName: string,
    measureInMl: number,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    isRestaurantOnly: boolean
}
export interface IDeleteUnitFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Unit Master ///////////////////////////////
//////////////////////////////// Item Group //////////////////////////////
export interface IMasterItemGroupPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemGroupGroupResponse extends IGeneralResponse {
    result: IItemGroupGroup[];
}
export interface IItemGroupGroupPayload extends IMasterItemGroupPayload { }
export interface IItemGroupGroup {
    row_Id: number,
    gCode: string,
    gName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddItemGroupFormPayload {
    row_Id: number,
    gCode: string,
    gName: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
// export interface IEditItemGroupFormPayload {
//     code: string;
//     name: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IItemGroupEditResponse {
//     code: string;
//     name: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IItemGroupCreateResponse extends IGeneralResponse {
    result: IItemGroupGroup;
}
// export interface IItemGroupUpdateResponse extends IGeneralResponse {
//     result: IItemGroupEditResponse;
// }
export interface IItemGroupDeleteResponse extends IGeneralResponse { }
export interface ItemGroupGetById {
    row_Id: number,
    gCode: string,
    gName: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteItemGroupFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item Group ///////////////////////////////
//////////////////////////////// Item Group Details //////////////////////////////
export interface IMasterItemGroupDetailsPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemGroupDetailsGroupResponse extends IGeneralResponse {
    result: IItemGroupDetailsGroup[];
}
export interface IItemGroupDetailsGroupPayload extends IMasterItemGroupDetailsPayload { }
export interface IItemGroupDetailsGroup {
    row_Id: number,
    sgCode: string,
    sgName: string,
    subGrpType: string,
    add_Comp_IP: string,
    add_By: string,
    wefDt: string,
    servTaxPer: number
    activate: string
}
export interface IAddItemGroupDetailsFormPayload {
    row_Id: number,
    sgCode: string,
    sgName: string
    subGrpType: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    servTaxPer: number,
    wefDt: string
}
// export interface IEditItemGroupDetailsFormPayload {
//     code: string;
//     name: string;
//     type: string;
//     date: string;
//     gst: number;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IItemGroupDetailsEditResponse {
//     code: string;
//     name: string;
//     type: string;
//     date: string;
//     gst: number;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IItemGroupDetailsCreateResponse extends IGeneralResponse {
    result: IItemGroupDetailsGroup;
}
// export interface IItemGroupDetailsUpdateResponse extends IGeneralResponse {
//     result: IItemGroupDetailsEditResponse;
// }
export interface IItemGroupDetailsDeleteResponse extends IGeneralResponse { }
export interface ItemGroupDetailsGetById {
    row_Id: number,
    sgCode: string,
    sgName: string,
    subGrpType: string,
    add_Comp_IP: string,
    add_By: string,
    wefDt: string,
    servTaxPer: number
    activate: string
}
export interface IDeleteItemGroupDetailsFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item Group Details ///////////////////////////////
//////////////////////////////// Item SubGroupWise GST Rate //////////////////////////////
export interface IMasterItemSubGroupWiseRatePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemSubGroupWiseRateGroupResponse extends IGeneralResponse {
    result: IItemSubGroupWiseRateGroup[];
}
export interface IItemSubGroupWiseRateGroupPayload extends IMasterItemSubGroupWiseRatePayload { }
export interface IItemSubGroupWiseRateGroup {
    row_Id: number,
    sgCode: string,
    wef: string,
    add_Comp_IP: string,
    add_By: string,
    servTaxPer: number,
    wet: null,
    sgName: string,
    activate: string
}
export interface IAddItemSubGroupWiseRateFormPayload {
    row_Id: number,
    sgCode: string,
    servTaxPer: number,
    wef: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IItemSubGroupWiseRateCreateResponse extends IGeneralResponse {
    result: IItemSubGroupWiseRateGroup;
}
export interface IItemSubGroupWiseRateDeleteResponse extends IGeneralResponse { }
export interface ItemSubGroupWiseRateGetById {
    row_Id: number,
    sgCode: string,
    wef: string,
    add_Comp_IP: string,
    add_By: string,
    servTaxPer: number,
    wet: null,
    sgName: string,
    activate: string
}
export interface IDeleteItemSubGroupWiseRateFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item SubGroupWse GST Rate ///////////////////////////////
//////////////////////////////// Item Master //////////////////////////////
export interface IMasterItemPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemGroupResponse extends IGeneralResponse {
    result: IItemGroup[];
}
export interface IItemGroupPayload extends IMasterItemPayload { }
export interface IItemGroup {
    row_Id: number,
    sgCode: string,
    itemCode: string,
    itemName: string,
    itemShort: string,
    itemType: string,
    add_Comp_IP: string;
    add_By: string;
    recipeType: string,
    isRecipeEnable: boolean,
    sgName: string,
    subGrpType: string,
    activate: string
}
export interface IAddItemFormPayload {
    row_Id: number,
    sgCode: string,
    itemName: string,
    itemShort: string,
    activate: string;
    add_By: string;
    add_Comp_IP: string;
    itemType: string,
    isRecipeEnable: boolean,
    recipeType: string
}
export interface IItemCreateResponse extends IGeneralResponse {
    result: IItemGroup;
}
export interface IItemDeleteResponse extends IGeneralResponse { }
export interface ItemGetById {
    row_Id: number,
    sgCode: string,
    itemCode: string,
    itemName: string,
    itemShort: string,
    itemType: string,
    add_Comp_IP: string;
    add_By: string;
    recipeType: string,
    isRecipeEnable: boolean,
    sgName: string,
    subGrpType: string,
    activate: string
}
export interface IDeleteItemFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item Master ///////////////////////////////
//////////////////////////////// Item Price Master //////////////////////////////
export interface IMasterItemPricePayload {
    getAllType: string;
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemPriceGroupResponse extends IGeneralResponse {
    result: IItemPriceGroup[];
}
export interface IItemPriceGroupPayload extends IMasterItemPricePayload { }
export interface IItemPriceGroup {
    row_Id: number,
    costPrice: number,
    rate: number,
    wef: string,
    wet: null,
    add_Comp_IP: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    hall_Name: string,
    hall_Id: number,
    itemName: number,
    item_Id: number,
    uomName: number,
    uomShort: number,
    uom_Id: number,
    activate: string
}
export interface IAddItemPriceFormPayload {
    row_Id: number,
    item_Id: number,
    caterer_Id: number,
    hall_Id: number,
    itemCode: string,
    itemName: string,
    uom_Id: number,
    rate: number,
    costPrice: number,
    wef: string,
    wet: null,
    add_Comp_IP: string,
    add_By: string
}
export interface IItemPriceCreateResponse extends IGeneralResponse {
    result: IItemPriceGroup;
}
export interface IItemPriceDeleteResponse extends IGeneralResponse { }
export interface ItemPriceGetById {
    row_Id: number,
    costPrice: number,
    rate: number,
    wef: string,
    wet: null,
    add_Comp_IP: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    hall_Name: string,
    hall_Id: number,
    itemName: string,
    item_Id: number,
    uomName: string,
    uomShort: string,
    uom_Id: number,
    activate: string
    itemCode: string
}
export interface IDeleteItemPriceFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item Price Master ///////////////////////////////
//////////////////////////////// Item Offer Master //////////////////////////////
export interface IMasterItemOfferPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemOfferGroupResponse extends IGeneralResponse {
    result: IItemOfferGroup[];
}
export interface IItemOfferGroupPayload extends IMasterItemOfferPayload { }
export interface IItemOfferGroup {
    row_Id: number,
    charge_Qty: number,
    free_Qty: number,
    offerType: string,
    wef: string,
    wet: string,
    sun: boolean,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    priceDiscType: string,
    price_Disc_Rate: number,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    itemCode: string,
    itemName: string,
    item_Id: number,
    uomName: string,
    uomShort: string,
    uom_Id: number
}
export interface IAddItemOfferFormPayload {
    row_Id: number,
    caterer_Id: number,
    item_Id: number,
    uom_Id: number,
    charge_Qty: number,
    free_Qty: number,
    offerType: string,
    wef: string,
    wet: string,
    sun: boolean,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    priceDiscType: string,
    price_Disc_Rate: number,
    add_By: string,
    add_Comp_IP: string
}
export interface IItemOfferCreateResponse extends IGeneralResponse {
    result: IItemOfferGroup;
}
export interface IItemOfferDeleteResponse extends IGeneralResponse { }
export interface ItemOfferGetById {
    row_Id: number,
    charge_Qty: number,
    free_Qty: number,
    offerType: string,
    wef: string,
    wet: string,
    sun: boolean,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    priceDiscType: string,
    price_Disc_Rate: number,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    itemCode: string,
    itemName: string,
    item_Id: number,
    uomName: string,
    uomShort: string,
    uom_Id: number
}
export interface IDeleteItemOfferFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Item Offer Master ///////////////////////////////
//////////////////////////////// Other Item Group  //////////////////////////////
export interface IMasterOtherItemPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IOtherItemGroupResponse extends IGeneralResponse {
    result: IOtherItemGroup[];
}
export interface IOtherItemGroupPayload extends IMasterOtherItemPayload { }
export interface IOtherItemGroup {
    grouP_CODE: number,
    grouP_NAME: string,
    itemType: string,
    isResturantItem: boolean,
    isLiquorItem: boolean,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddOtherItemFormPayload {
    grouP_CODE: number,
    grouP_NAME: string,
    itemType: string,
    isResturantItem: boolean,
    isLiquorItem: boolean,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IOtherItemCreateResponse extends IGeneralResponse {
    result: IOtherItemGroup;
}
export interface IOtherItemDeleteResponse extends IGeneralResponse { }
export interface OtherItemGetById {
    grouP_CODE: number,
    grouP_NAME: string,
    itemType: string,
    isResturantItem: boolean,
    isLiquorItem: boolean,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteOtherItemFormPayload {
    grouP_CODE: number;
}
//////////////////////////////////////// End Of Other Item Group ///////////////////////////////
//////////////////////////////// Godown Item Master  //////////////////////////////
export interface IMasterGodownItemPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IGodownItemGroupResponse extends IGeneralResponse {
    result: IGodownItemGroup[];
}
export interface IGodownItemGroupPayload extends IMasterGodownItemPayload { }
export interface IGodownItemGroup {
    roW_ID: number,
    iteM_NAME: string,
    iteM_CODE: string,
    grouP_CODE: number,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    reS_ITEM_ID: number,
    itemName: string,
    itemCode: string,
    itemShort: string,
    grouP_NAME: string,
    isLiquorItem: boolean,
    isResturantItem: boolean,
    itemType: string,
    isConversionToMl: boolean,
}
export interface IAddGodownItemFormPayload {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    grouP_CODE: number,
    reS_ITEM_ID: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    isConversionToMl: true,
    uom_Id: number,
}
// export interface IEditGodownItemFormPayload {
//     code: string;
//     name: string;
//     group: string;
//     type: string;
//     item: string;
//     app: boolean;
//     rest: boolean;
//     liq: boolean;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IGodownItemEditResponse {
//     code: string;
//     name: string;
//     group: string;
//     type: string;
//     item: string;
//     app: boolean;
//     rest: boolean;
//     liq: boolean;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IGodownItemCreateResponse extends IGeneralResponse {
    result: IGodownItemGroup;
}
// export interface IGodownItemUpdateResponse extends IGeneralResponse {
//     result: IGodownItemEditResponse;
// }
export interface IGodownItemDeleteResponse extends IGeneralResponse { }
export interface GodownItemGetById {
    roW_ID: number,
    iteM_NAME: string,
    iteM_CODE: string,
    grouP_CODE: number,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    reS_ITEM_ID: number,
    itemName: string,
    itemCode: string,
    itemShort: string,
    grouP_NAME: string,
    isLiquorItem: boolean,
    isResturantItem: boolean,
    itemType: string,
    isConversionToMl: boolean,
}
export interface IDeleteGodownItemFormPayload {
    roW_ID: number;
}
//////////////////////////////////////// End Of Godown Item Master ///////////////////////////////
//////////////////////////////// Canteen Item & UOM Mapping  //////////////////////////////
export interface IMasterCanteenUomItemPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICanteenUomItemGroupResponse extends IGeneralResponse {
    result: ICanteenUomItemGroup[];
}
export interface ICanteenUomItemGroupPayload extends IMasterCanteenUomItemPayload { }
export interface ICanteenUomItemGroup {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    grouP_CODE: number,
    activate: string,
    add_Comp_IP: string,
    uom_Id: number,
    grouP_NAME: string,
    itemType: string,
    uomName: string,
    uomShort: string,
}
// export interface IAddCanteenUomItemFormPayload {
//     code: string;
//     name: string;
//     group: string;
//     type: string;
//     uom: string;
//     map: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IEditCanteenUomItemFormPayload {
    iteM_CODE: string,
    uom_Id: number,
    add_By: string,
    add_Comp_IP: string
}
export interface ICanteenUomItemEditResponse {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    grouP_CODE: number,
    activate: string,
    add_Comp_IP: string,
    uom_Id: number,
    grouP_NAME: string,
    itemType: string,
    uomName: string,
    uomShort: string,
}
// export interface ICanteenUomItemCreateResponse extends IGeneralResponse {
//     result: ICanteenUomItemGroup;
// }
export interface ICanteenUomItemUpdateResponse extends IGeneralResponse {
    result: ICanteenUomItemEditResponse;
}
// export interface ICanteenUomItemDeleteResponse extends IGeneralResponse { }
export interface CanteenUomItemGetById {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    grouP_CODE: number,
    activate: string,
    add_Comp_IP: string,
    uom_Id: number,
    grouP_NAME: string,
    itemType: string,
    uomName: string,
    uomShort: string,
}
// export interface IDeleteCanteenUomItemFormPayload {
//     CatererId: number;
// }
//////////////////////////////////////// End Of Canteen Item & UOM Mapping ///////////////////////////////
//////////////////////////////// Offshop Offer Master  //////////////////////////////
export interface IMasterOffshopOfferPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IOffshopOfferGroupResponse extends IGeneralResponse {
    result: IOffshopOfferGroup[];
}
export interface IOffshopOfferGroupPayload extends IMasterOffshopOfferPayload { }
export interface IOffshopOfferGroup {
    row_Id: number,
    appQty: number,
    discAmt: number,
    wef: string,
    wet: string,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    itemName: string,
    item_Id: number,
    itemCode: string,
    uomName: string,
    uomShort: string,
    uom_Id: number
}
export interface IAddOffshopOfferFormPayload {
    row_Id: number,
    caterer_Id: number,
    item_Id: number,
    uom_Id: number,
    wef: string,
    wet: string,
    appQty: number,
    discAmt: number,
    add_By: string,
    add_Comp_IP: string
}
// export interface IEditOffshopOfferFormPayload {
//     caterer: string;
//     item: string;
//     name: string;
//     uom: string;
//     wef: string;
//     wet: string;
//     qty: number;
//     amt: number;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IOffshopOfferEditResponse {
//     caterer: string;
//     item: string;
//     name: string;
//     uom: string;
//     wef: string;
//     wet: string;
//     qty: number;
//     amt: number;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IOffshopOfferCreateResponse extends IGeneralResponse {
    result: IOffshopOfferGroup;
}
// export interface IOffshopOfferUpdateResponse extends IGeneralResponse {
//     result: IOffshopOfferEditResponse;
// }
export interface IOffshopOfferDeleteResponse extends IGeneralResponse { }
export interface OffshopOfferGetById {
    row_Id: number,
    appQty: number,
    discAmt: number,
    wef: string,
    wet: string,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    catererName: string,
    caterer_Id: number,
    itemName: string,
    item_Id: number,
    itemCode: string,
    uomName: string,
    uomShort: string,
    uom_Id: number
}
export interface IDeleteOffshopOfferFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Offshop Offer Master ///////////////////////////////
//////////////////////////////// Identity Proof Master  //////////////////////////////
export interface IMasterIdentityPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IIdentityGroupResponse extends IGeneralResponse {
    result: IIdentityGroup[];
}
export interface IIdentityGroupPayload extends IMasterIdentityPayload { }
export interface IIdentityGroup {
    row_Id: number,
    iD_Name: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: null,
    edit_Time: null,
    add_Comp_IP: string,
    edit_Comp_IP: null
}
export interface IAddIdentityFormPayload {
    row_Id: number,
    iD_Name: string,
    add_By: string,
    add_Comp_I: string,
}
// export interface IEditIdentityFormPayload {
//     type: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IIdentityEditResponse {
//     type: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IIdentityCreateResponse extends IGeneralResponse {
    result: IIdentityGroup;
}
// export interface IIdentityUpdateResponse extends IGeneralResponse {
//     result: IIdentityEditResponse;
// }
export interface IIdentityDeleteResponse extends IGeneralResponse { }
export interface IdentityGetById {
    row_Id: number,
    iD_Name: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteIdentityFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Identity Proof Master ///////////////////////////////
//////////////////////////////// Member Type Master  //////////////////////////////
export interface IMasterMemberTypePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemberTypeGroupResponse extends IGeneralResponse {
    result: IMemberTypeGroup[];
}
export interface IMemberTypeGroupPayload extends IMasterMemberTypePayload { }
export interface IMemberTypeGroup {
    row_Id: number,
    memberType: string,
    subscriptionApp: boolean,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    donationApp: boolean
}
export interface IAddMemberTypeFormPayload {
    row_Id: number,
    memberType: string,
    subscriptionApp: boolean,
    activate: string,
    add_By: string
}
export interface IMemberTypeCreateResponse extends IGeneralResponse {
    result: IMemberTypeGroup;
}
export interface IMemberTypeDeleteResponse extends IGeneralResponse { }
export interface MemberTypeGetById {
    row_Id: number,
    memberType: string,
    subscriptionApp: boolean,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    donationApp: boolean
}
export interface IDeleteMemberTypeFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Member Type Master ///////////////////////////////
//////////////////////////////// Member Type Subscription Master  //////////////////////////////
export interface IMasterMemberTypeSubPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemberTypeSubGroupResponse extends IGeneralResponse {
    result: IMemberTypeSubGroup[];
}
export interface IMemberTypeSubGroupPayload extends IMasterMemberTypeSubPayload { }
export interface IMemberTypeSubGroup {
    row_Id: number,
    subsType: string,
    subsAmt: number,
    servTaxPerc: number,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    memberType: string,
    mem_Type_Id: number
}
export interface IAddMemberTypeSubFormPayload {
    row_Id: number,
    mem_Type_Id: number,
    subsType: string,
    subsAmt: number,
    servTaxPerc: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IMemberTypeSubCreateResponse extends IGeneralResponse {
    result: IMemberTypeSubGroup;
}
export interface IMemberTypeSubDeleteResponse extends IGeneralResponse { }
export interface MemberTypeSubGetById {
    row_Id: number,
    subsType: string,
    subsAmt: number,
    servTaxPerc: number,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    memberType: string,
    mem_Type_Id: number
}
export interface IDeleteMemberTypeSubFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Member Type Subscription Master ///////////////////////////////
//////////////////////////////// Bank Master  //////////////////////////////
export interface IMasterBankPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IBankGroupResponse extends IGeneralResponse {
    result: IBankGroup[];
}
export interface IBankGroupPayload extends IMasterBankPayload { }
export interface IBankGroup {
    row_Id: number,
    bankCode: string,
    bankName: string,
    bankAlias: string,
    cardLength: number,
    bankAcNo: string,
    activate: string,
    add_By: string,
    add_Time: any,
    add_Comp_IP: string,
    edit_By: string,
    edit_Time: any,
    edit_Comp_IP: string
}
export interface IAddBankFormPayload {
    row_Id: number,
    bankCode: string,
    bankName: string,
    bankAlias: string,
    cardLength: number,
    bankAcNo: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IBankCreateResponse extends IGeneralResponse {
    result: IBankGroup;
}
export interface IBankDeleteResponse extends IGeneralResponse { }
export interface BankGetById {
    row_Id: number,
    bankCode: string,
    bankName: string,
    bankAlias: string,
    cardLength: number,
    bankAcNo: string,
    activate: string,
    add_By: string,
    add_Time: any,
    add_Comp_IP: string,
    edit_By: string,
    edit_Time: any,
    edit_Comp_IP: string
}
export interface IDeleteBankFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Bank Master ///////////////////////////////
/////////////////////////////// Member Wise Locker Details  //////////////////////////////
export interface IMasterMemWiseLockerPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    mem_Id: number,
    locker_Id: number,
    status: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IMemWiseLockerGroupResponse extends IGeneralResponse {
    result: IMemWiseLockerGroup[];
}
export interface IMemWiseLockerGroupPayload extends IMasterMemWiseLockerPayload { }
export interface IMemWiseLockerGroup {
    row_Id: number,
    locker_Tran_Date: string,
    remarks: string,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    mem_Id: number,
    locker_Id: number,
    mem_Code: string,
    memCode: boolean,
    locNo: boolean,
    stat: boolean,
    fNm: string,
    sNm: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    loc_Code: string,
    loc_Location_Name: string,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    memberName: string
}
export interface IAddMemWiseLockerFormPayload {
    row_Id: number,
    locker_Tran_Date: string,
    primary_Mem_Id: number,
    mem_Id: number,
    locker_Id: number,
    activate: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
// export interface IEditMemWiseLockerFormPayload {
//     date: string;
//     pricode: string;
//     memcode: string;
//     name: string;
//     locCode: string;
//     locType: string;
//     location: string;
//     rent: string;
//     tax: number;
//     stat: string;
//     remarks: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IMemWiseLockerEditResponse {
//     date: string;
//     pricode: string;
//     memcode: string;
//     name: string;
//     locCode: string;
//     locType: string;
//     location: string;
//     rent: string;
//     tax: number;
//     stat: string;
//     remarks: string;
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IMemWiseLockerCreateResponse extends IGeneralResponse {
    result: IMemWiseLockerGroup;
}
// export interface IMemWiseLockerUpdateResponse extends IGeneralResponse {
//     result: IMemWiseLockerEditResponse;
// }
export interface IMemWiseLockerDeleteResponse extends IGeneralResponse { }
export interface MemWiseLockerGetById {
    row_Id: number,
    locker_Tran_Date: string,
    remarks: string,
    add_Comp_IP: string,
    activate: string,
    add_By: string,
    mem_Id: number,
    memCode: boolean,
    locNo: boolean,
    stat: boolean,
    locker_Id: number,
    mem_Code: string,
    fNm: string,
    sNm: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    loc_Code: string,
    loc_Location_Name: string,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    memberName: string,
    oldNo: string
}
export interface IDeleteMemWiseLockerFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Member Wise Locker Details ///////////////////////////////
////////////////////////////////  Member Opening Balance Master  //////////////////////////////
export interface IMasterMemBalancePayload {
    session: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemBalanceGroupResponse extends IGeneralResponse {
    result: IMemBalanceGroup[];
}
export interface IMemBalancePayload extends IMasterMemBalancePayload { }
export interface IMemBalanceGroup {
    session: string,
    activate: string,
    row_Id: string,
    mem_Id: number,
    obAmt: number,
    add_By: string,
    add_Comp_IP: string,
    mem_Code: string,
    memberName: string
}
export interface IAddMemBalanceFormPayload {
    row_Id: string,
    session: string,
    mem_Id: number,
    obAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    memberName: string
}
// export interface IEditMemBalanceFormPayload {
//     sBs: number,
//     SlNo: number,
//     session: string,
//     mcode: number,
//     mName: string,
//     obAm: number,
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
// export interface IMemBalanceEditResponse {
//     sBs: number,
//     SlNo: number,
//     session: string,
//     mcode: number,
//     mName: string,
//     obAm: number,
//     addBy: number;
//     addTime: any;
//     editBy: number;
//     editTime: any;
//     companyCode: string;
//     activate: string;
// }
export interface IMemBalanceCreateResponse extends IGeneralResponse {
    result: IMemBalanceGroup;
}
// export interface IMemBalanceUpdateResponse extends IGeneralResponse {
//     result: IMemBalanceEditResponse;
// }
export interface IMemBalanceDeleteResponse extends IGeneralResponse { }
export interface MemBalanceGetById {
    session: string,
    activate: string,
    row_Id: string,
    mem_Id: number,
    obAmt: number,
    add_By: string,
    add_Comp_IP: string,
    mem_Code: string,
    memberName: string
}
export interface IDeleteMemBalanceFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Member Opening Balance Master ///////////////////////////////
//////////////////////////////// Payment Head Master  //////////////////////////////
export interface IMasterPaymentPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IPaymentGroupResponse extends IGeneralResponse {
    result: IPaymentGroup[];
}
export interface IPaymentPayload extends IMasterPaymentPayload { }
export interface IPaymentGroup {
    row_Id: number,
    payHead: string,
    payAmt: number,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddPaymentFormPayload {
    row_Id: number,
    payHead: string,
    payAmt: number,
    add_By: string,
    add_Comp_IP: string
}
export interface IPaymentCreateResponse extends IGeneralResponse {
    result: IPaymentGroup;
}
export interface IPaymentDeleteResponse extends IGeneralResponse { }
export interface PaymentGetById {
    row_Id: number,
    payHead: string,
    payAmt: number,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeletePaymentFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Payment Head Master ///////////////////////////////
////////////////////////////////  Subscription Remarks Master  //////////////////////////////
export interface IMasterSubscriptionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ISubscriptionGroupResponse extends IGeneralResponse {
    result: ISubscriptionGroup[];
}
export interface ISubscriptionPayload extends IMasterSubscriptionPayload { }
export interface ISubscriptionGroup {
    row_Id: number,
    subsRemarks: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    payHead: string,
    pay_Head_Id: number
}
export interface IAddSubscriptionFormPayload {
    row_Id: number,
    subsRemarks: string,
    pay_Head_Id: number,
    add_By: string,
    add_Comp_IP: string
}
export interface ISubscriptionCreateResponse extends IGeneralResponse {
    result: ISubscriptionGroup;
}
export interface ISubscriptionDeleteResponse extends IGeneralResponse { }
export interface SubscriptionGetById {
    row_Id: number,
    subsRemarks: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    payHead: string,
    pay_Head_Id: number
}
export interface IDeleteSubscriptionFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Subscription Remarks Master ///////////////////////////////
//////////////////////////////// Reason Master  //////////////////////////////
export interface IMasterReasonMPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IReasonMGroupResponse extends IGeneralResponse {
    result: IReasonMGroup[];
}
export interface IReasonMGroupPayload extends IMasterReasonMPayload { }
export interface IReasonMGroup {
    row_Id: number,
    reason: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    reasonType: string,
    reasonType_Id: number
}
export interface IAddReasonMFormPayload {
    row_Id: number,
    reason: string,
    reasonType_Id: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IReasonMCreateResponse extends IGeneralResponse {
    result: IReasonMGroup;
}
export interface IReasonMDeleteResponse extends IGeneralResponse { }
export interface ReasonGetById {
    row_Id: number,
    reason: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    reasonType: string,
    reasonType_Id: number
}
export interface IDeleteReasonMFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Reason Master ///////////////////////////////
//////////////////////////////// Reason Type Master  //////////////////////////////
export interface IMasterReasonTypePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IReasonTypeGroupResponse extends IGeneralResponse {
    result: IReasonTypeGroup[];
}
export interface IReasonTypeGroupPayload extends IMasterReasonTypePayload { }
export interface IReasonTypeGroup {
    row_Id: number,
    reasonType: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddReasonTypeFormPayload {
    row_Id: number,
    reasonType: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IReasonTypeCreateResponse extends IGeneralResponse {
    result: IReasonTypeGroup;
}
export interface IReasonTypeDeleteResponse extends IGeneralResponse { }
export interface ReasonTypeGetById {
    row_Id: number,
    reasonType: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteReasonTypeFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Reason Type Master ///////////////////////////////
//////////////////////////////// RelationShip Master  //////////////////////////////
export interface IMasterRelationPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IRelationGroupResponse extends IGeneralResponse {
    result: IRelationGroup[];
}
export interface IRelationGroupPayload extends IMasterRelationPayload { }
export interface IRelationGroup {
    row_Id: number,
    relation_Name: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddRelationFormPayload {
    row_Id: number,
    relation_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IRelationCreateResponse extends IGeneralResponse {
    result: IRelationGroup;
}
export interface IRelationDeleteResponse extends IGeneralResponse { }
export interface RelationGetById {
    row_Id: number,
    relation_Name: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteRelationFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of RelationShip Master ///////////////////////////////
//////////////////////////////// Party Master  //////////////////////////////
export interface IMasterPartyPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IPartyGroupResponse extends IGeneralResponse {
    result: IPartyGroup[];
}
export interface IPartyGroupPayload extends IMasterPartyPayload { }
export interface IPartyGroup {
    roW_ID: number,
    partY_CODE: string,
    partY_NAME: string,
    address: string,
    phone_No: string,
    tin: string,
    pan: string,
    sT_NO: string,
    email: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddPartynFormPayload {
    roW_ID: number,
    partY_CODE: string,
    partY_NAME: string,
    address: string,
    phone_No: string,
    tin: string,
    pan: string,
    sT_NO: string,
    email: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IPartyCreateResponse extends IGeneralResponse {
    result: IPartyGroup;
}
export interface IPartyDeleteResponse extends IGeneralResponse { }
export interface PartyGetById {
    roW_ID: number,
    partY_CODE: string,
    partY_NAME: string,
    address: string,
    phone_No: string,
    tin: string,
    pan: string,
    sT_NO: string,
    email: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeletePartyFormPayload {
    roW_ID: number;
}
//////////////////////////////////////// End Of Party Master ///////////////////////////////
//////////////////////////////// Item Link Head Master  //////////////////////////////
export interface IMasterLinkHeadPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILinkHeadGroupResponse extends IGeneralResponse {
    result: ILinkHeadGroup[];
}
export interface ILinkHeadPayload extends IMasterLinkHeadPayload { }
export interface ILinkHeadGroup {
    nLinkId: number,
    itemId: number,
    itemCode: string,
    itemName: string,
    bevItemName: string,
    nItemCode: string,
    gtin: string,
    wef: Date,
    add_By: string
    activate: string
    add_Comp_IP: string
}
export interface IAddEditLinkHeadtFormPayload {
    nLinkId: number,
    itemId: number,
    nItemCode: string,
    wef: string,
    add_By: string
    add_Comp_IP: string
}
export interface ILinkHeadCreateResponse extends IGeneralResponse {
    result: ILinkHeadGroup;
}
export interface LinkHeadGetById {
    nLinkId: number,
    itemId: number,
    itemCode: string,
    itemName: string,
    bevItemName: string,
    nItemCode: string,
    gtin: string,
    wef: any,
    add_By: string,
    activate: string,
    add_Comp_IP: string
}
export interface IDeleteLinkHeadFormPayload {
    nLinkId: number;
}
export interface ILinkHeadDeleteResponse extends IGeneralResponse { }
//////////////////////////////////////// End Of Item Link Head Master ///////////////////////////////
//////////////////////////////// Other Charges Master  //////////////////////////////
export interface IMasterChargesPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IChargesGroupResponse extends IGeneralResponse {
    result: IChargesGroup[];
}
export interface IChargesGroupPayload extends IMasterChargesPayload { }
export interface IChargesGroup {
    row_Id: number,
    chargeDescription: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddChargesFormPayload {
    chargeDescription: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditChargesFormPayload {
    row_Id: number,
    chargeDescription: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface IChargesEditResponse {
    row_Id: number,
    chargeDescription: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IChargesCreateResponse extends IGeneralResponse {
    result: IChargesGroup;
}
export interface IChargesUpdateResponse extends IGeneralResponse {
    result: IChargesEditResponse;
}
export interface IChargesDeleteResponse extends IGeneralResponse { }
export interface ChargesGetById {
    row_Id: number,
    chargeDescription: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteChargesFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Other Charges Master ///////////////////////////////
//////////////////////////////// Other Charges Rate Master  //////////////////////////////
export interface IMasterChargesRatePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IChargesRateGroupResponse extends IGeneralResponse {
    result: IChargesRateGroup[];
}
export interface IChargesRateGroupPayload extends IMasterChargesRatePayload { }
export interface IChargesRateGroup {
    row_Id: number,
    chargeId: number,
    rate: number,
    cgst: number,
    sgst: number,
    igst: number,
    wef: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    chargeDescription: string
}
export interface IAddChargesRateFormPayload {
    chargeId: number,
    rate: number,
    cgst: number,
    sgst: number,
    igst: number,
    wef: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditChargesRateFormPayload {
    row_Id: number,
    chargeId: number,
    rate: number,
    cgst: number,
    sgst: number,
    igst: number,
    wef: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface IChargesRateEditResponse {
    row_Id: number,
    chargeId: number,
    rate: number,
    cgst: number,
    sgst: number,
    igst: number,
    wef: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    chargeDescription: string
}
export interface IChargesRateCreateResponse extends IGeneralResponse {
    result: IChargesRateGroup;
}
export interface IChargesRateUpdateResponse extends IGeneralResponse {
    result: IChargesRateEditResponse;
}
export interface IChargesRateDeleteResponse extends IGeneralResponse { }
export interface ChargesRateGetById {
    row_Id: number,
    chargeId: number,
    rate: number,
    cgst: number,
    sgst: number,
    igst: number,
    wef: string,
    add_Comp_IP: string,
    add_By: string,
    activate: string,
    chargeDescription: string
}
export interface IDeleteChargesRateFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Other Charges Rate Master ///////////////////////////////
////////////////////////////////  Seasonal Swimmer Master  //////////////////////////////
export interface IMasterSwimmerPayload {
    finYear: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IDocumentPayload {
    filename: string,
    formNo: string,
    finYear: string,
    MimeType: string
}
export interface ISwimmerGroupResponse extends IGeneralResponse {
    result: ISwimmerGroup[];
}
export interface ISwimmerPayload extends IMasterSwimmerPayload { }
export interface ISwimmerGroup {
    name: string,
    fathersName: string,
    phoneNo: string,
    email: string,
    formCatId: number,
    formNo: string,
    recptNo: string,
    recptDt: string,
    recptTm: string,
    dob: string,
    ageDay: number,
    ageYear: number,
    ageMonth: number,
    finYear: string,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: string,
    form_Name: string,
    form_Code: string,
    swimBookId: number,
    batchTimeId: number,
    receiptNo: string,
    receiptDt: string,
    receiptTm: string,
    category: string,
    sex: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    cardNo: string,
    address: string,
    pin: string,
    nomName: string,
    nomRel: string,
    swimSince: string,
    docName: string,
    docRegNo: string,
    studentOrNot: string,
    occupation: string,
    institution: string,
    class: string,
    description: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    swim_Pic: string,
    batchTime: string
}
export interface IAddSwimmerFormPayload {
    sName: string,
    sSex: string,
    sdob: string,
    scategory: string,
    sNomineeName: string,
    sNomineeRel: string,
    sAddress: string,
    sContact: string,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    finYear: string,
    memberCarNo: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditSwimmerFormPayload {
    row_Id: number,
    sName: string,
    sSex: string,
    sdob: string,
    scategory: string,
    sNomineeName: string,
    sNomineeRel: string,
    sAddress: string,
    sContact: string,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    finYear: string,
    memberCarNo: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface ISwimmerEditResponse {
    row_Id: number,
    sName: string,
    sSex: string,
    sdob: string,
    scategory: string,
    sNomineeName: string,
    sNomineeRel: string,
    sAddress: string,
    sContact: string,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    finYear: string,
    memberCarNo: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface ISwimmerCreateResponse extends IGeneralResponse {
    result: ISwimmerGroup;
}
export interface ISwimmerUpdateResponse extends IGeneralResponse {
    result: ISwimmerEditResponse;
}
export interface ISwimmerDeleteResponse extends IGeneralResponse { }
export interface SwimmerGetById {
    name: string,
    fathersName: string,
    phoneNo: string,
    email: string,
    formCatId: number,
    formNo: string,
    recptNo: string,
    recptDt: string,
    recptTm: string,
    dob: string,
    ageDay: number,
    ageYear: number,
    ageMonth: number,
    finYear: string,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: string,
    form_Name: string,
    form_Code: string,
    swimBookId: number,
    batchTimeId: number,
    receiptNo: string,
    receiptDt: string,
    receiptTm: string,
    category: string,
    sex: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    cardNo: string,
    address: string,
    pin: string,
    nomName: string,
    nomRel: string,
    swimSince: string,
    docName: string,
    docRegNo: string,
    studentOrNot: string,
    occupation: string,
    institution: string,
    class: string,
    description: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    swim_Pic: string,
    batchTime: string,
    mimeType: string,
    filename: string
}
export interface IDeleteSwimmerFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Seasonal Swimmer Master ///////////////////////////////
/////////////////////// Hall Membership Mapping For Card Recharge //////////////////////////////
export interface IMasterHallMembershipPayload {
    // recordStatus: string;
    // pagingParameters: {
    //     pageNumber: number;
    //     pageSize: number;
    // };
    // searchString?: string;
    memTypeId: number
}
export interface IHallMembershipGroupResponse extends IGeneralResponse {
    result: IHallMembershipGroup[];
}
export interface IHallMembershipGroupPayload extends IMasterHallMembershipPayload { }
export interface IHallMembershipGroup {
    hallId: number;
    hallAlias: string,
    hallName: string,
    hallType: string,
    isMapped: boolean
}
export interface IAddHallMembershipFormPayload {
    memTypeId: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    halls: any,
}
export interface IHallMembershipCreateResponse extends IGeneralResponse {
    result: IHallMembershipGroup;
}
export interface IHallMembershipDeleteResponse extends IGeneralResponse { }
export interface IDeleteHallMembershipFormPayload {
    CatererId: number;
}
export interface HallMembershipGetById {
    hall_Alias: string,
    hall_Name: string,
    hallType: string,
    isMapped: boolean
}
//////////////////////////////////////// End Of Hall Membership Mapping For Card Recharge ///////////////////////////////
////////////////////////////////  Locker Status Other Than Member  //////////////////////////////
export interface IMasterLockerStatusPayload {
    lockerStatus: string,
    lockerLocationId: number,
    lockerTypeId: number,
    statusDate: boolean,
    fromDt: string,
    toDt: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILockerStatusGroupResponse extends IGeneralResponse {
    result: ILockerStatusGroup[];
}
export interface ILockerStatusPayload extends IMasterLockerStatusPayload { }
export interface ILockerStatusGroup {
    loc_Code: string,
    activate: string,
    row_Id: number,
    loc_Status: string,
    status_Date: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string,
    lockerTypeId: number,
    loc_Type: string,
    loc_Location_Alias: string,
    loc_Location_Name: string,
    lockerLocationId: number
}
export interface IAddLockerStatusFormPayload {
    loc_Code: string,
    status_Date: string,
    loc_Status: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
export interface ILockerStatusCreateResponse extends IGeneralResponse {
    result: ILockerStatusGroup;
}
export interface ILockerStatusDeleteResponse extends IGeneralResponse { }
export interface LockerStatusGetById {
    loc_Code: string,
    activate: string,
    row_Id: number,
    loc_Status: string,
    status_Date: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string,
    lockerTypeId: number,
    loc_Type: string,
    loc_Location_Alias: string,
    loc_Location_Name: string,
    lockerLocationId: number
}
export interface IDeleteLockerStatusFormPayload {
    row_Id: number;
}
//////////////////////////////////////// End Of Locker Status Other Than Member ///////////////////////////////
////////////////////////////////  Recipe Member  //////////////////////////////
export interface IMasterRecipePayload {
    recipeType: string,
    caterer_Id: number,
    item_Id: number,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IRecipeGroupResponse extends IGeneralResponse {
    result: IRecipeGroup[];
}
export interface IRecipePayload extends IMasterRecipePayload { }
export interface IRecipeGroup {
    row_Id: number,
    activate: string,
    recipeType: string,
    item_Id: number,
    uom_Id: number,
    caterer_Id: number,
    remarks: string,
    itemName: string,
    itemType: string,
    itemShort: string,
    uomName: string,
    uomShort: string,
    catererName: string,
    catererType: string,
    items: any
    qty: number,
    itemCode: string
}
export interface IAddRecipeFormPayload {
    row_Id: number,
    item_Id: number,
    uom_Id: number,
    caterer_Id: number,
    recipeType: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string,
    items: any
}
export interface IRecipeCreateResponse extends IGeneralResponse {
    result: IRecipeGroup;
}
export interface IGetByIdRecipeFormPayload {
    item_Id: number,
    uom_Id: number,
    caterer_Id: number
}
export interface IGetByIdRecipeCreateResponse extends IGeneralResponse {
    result: any;
}
export interface IRecipeDeleteResponse extends IGeneralResponse { }
export interface RecipeGetById {
    row_Id: number,
    activate: string,
    recipeType: string,
    item_Id: number,
    uom_Id: number,
    caterer_Id: number,
    remarks: string,
    itemName: string,
    itemType: string,
    itemShort: string,
    uomName: string,
    uomShort: string,
    catererName: string,
    catererType: string,
    qty: number,
    itemCode: string
}
export interface IDeleteRecipeFormPayload {
    row_Id: number;
}
////////////////////////////////////Number Of Members/////////////////////////////////////////////////////
// Assuming IAddRecipeFormPayload is already defined, you might need to adjust it for your payload structure
export interface IMemberHelpNumberPayload {
    primary_Mem_Code: string;
    mem_Suffix: string;
    row_Id: number
}
export interface IHelpNumberResponse {
    result: number;
}
//////////////////////////////////// Number Of Primary Members////////////////////////////////////////////
export interface IPMemberHelpNumberPayload {
    primaryMemInitial: string
}
export interface IHelpPNumberResponse {
    result: number;
}
//////////////////////////////////////// End Of Recipe Master /////////////////////////////////////////////////////////////
/////////////////////// Member Registration //////////////////////////////
export interface IMasterMemberRegistrationPayload {
    searchWithDateRange: boolean,
    newEntry: boolean,
    modify: boolean,
    critaria: string,
    fromDt: string,
    toDt: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
    // Add these fields for sorting
    sortField?: string;       // Field to sort by (e.g., 'name', 'primary', etc.)
    sortDirection?: string;   // Sorting direction ('asc' or 'desc')
}
export interface IMemberRegistrationGroupResponse extends IGeneralResponse {
    result: IMemberRegistrationGroup[];
}
export interface IMemberRegistrationGroupPayload extends IMasterMemberRegistrationPayload { }
export interface IMemberRegistrationGroup {
    row_Id: number
    primary_Mem_Code: string
    mem_Type: string
    mem_Suffix: string
    main_Mem: string
    memberName: string
    cardNo: number
    presentAmt: number
    main_Mem_Id: number
    ref_Mem_Id: number
    issueYr: string
    firstIssueYr: string
    issueDate: string
    reIssueRemarks: string
    salutation: string
    fNm: string
    sNm: string
    address_Res: string
    address_Off: string
    location: string
    pinCode: string
    sex: string
    dob: string
    contact: string
    bloodGrp: string
    emailId: string
    uiNo: string
    idProof_Id: number
    idNo: string
    occu: string
    mobNo: string
    landNo: string
    mem_Pic_Path: string
    mem_Pic_Folder: string
    mem_Pic_Name: string
    // mem_Pic: string
    dPic: string
    picEntryDt: string
    picEntryType: string
    mem_Sig_Path: string
    mem_Sig_Folder: string
    mem_Sig_Name: string
    // mem_Sig: string
    dSig: string
    sigEntryDt: string
    sigEntryType: string
    active: string
    activity_Remarks: string
    add_By: string
    inActiveType: string
    add_Comp_IP: string
    mem_Code: string
    primary_Mem_Id: number,
    pMemCode: string,
    pMemName: string,
    refMemCode: string,
    refMemName: string,
    memberType: string,
    memLockerDetail: any,
    locker_Tran_Date: string,
    loc_Code: string,
    activate: string,
    remarks: string,
    loc_Location_Name: string,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    oldNo: string
}
export interface IAddMemberRegistrationFormPayload {
    row_Id: number
    primary_Mem_Code: string
    cardNo: number
    presentAmt: number
    mem_Type: string
    mem_Suffix: string
    main_Mem: string
    main_Mem_Id: number
    ref_Mem_Id: number
    issueYr: string
    firstIssueYr: string
    issueDate: string
    reIssueRemarks: string
    salutation: string
    fNm: string
    sNm: string
    address_Res: string
    address_Off: string
    location: string
    pinCode: string
    sex: string
    dob: string
    contact: string
    bloodGrp: string
    emailId: string
    uiNo: string
    idProof_Id: number
    idNo: string
    occu: string
    mobNo: string
    landNo: string
    mem_Pic_Path: string
    mem_Pic_Folder: string
    mem_Pic_Name: string
    mem_Pic: string
    dPic: string
    picEntryDt: string
    picEntryType: string
    mem_Sig_Path: string
    mem_Sig_Folder: string
    mem_Sig_Name: string
    mem_Sig: string
    dSig: string
    sigEntryDt: string
    sigEntryType: string
    active: string
    activity_Remarks: string
    add_By: string
    inActiveType: string
    add_Comp_IP: string
    mem_Code: string
    pMemCode: string,
    pMemName: string,
    memLockerDetail: any
}
export interface IMemberRegistrationCreateResponse extends IGeneralResponse {
    result: IMemberRegistrationGroup;
}
export interface MemberRegistrationGetById {
    row_Id: number
    primary_Mem_Code: string
    mem_Type: string
    mem_Suffix: string
    main_Mem: string
    cardNo: number
    presentAmt: number
    main_Mem_Id: number
    ref_Mem_Id: number
    issueYr: string
    firstIssueYr: string
    issueDate: string
    reIssueRemarks: string
    salutation: string
    fNm: string
    sNm: string
    address_Res: string
    address_Off: string
    location: string
    pinCode: string
    sex: string
    dob: string
    contact: string
    bloodGrp: string
    emailId: string
    uiNo: string
    idProof_Id: number
    idNo: string
    occu: string
    mobNo: string
    landNo: string
    mem_Pic_Path: string
    mem_Pic_Folder: string
    mem_Pic_Name: string
    mem_Pic: string
    dPic: string
    picEntryDt: string
    picEntryType: string
    mem_Sig_Path: string
    mem_Sig_Folder: string
    mem_Sig_Name: string
    mem_Sig: string
    dSig: string
    sigEntryDt: string
    sigEntryType: string
    active: string
    activity_Remarks: string
    add_By: string
    inActiveType: string
    add_Comp_IP: string
    mem_Code: string
    primary_Mem_Id: number,
    pMemCode: string,
    pMemName: string,
    refMemCode: string,
    refMemName: string,
    memberType: string,
    memLockerDetail: any,
    locker_Tran_Date: string,
    loc_Code: string,
    activate: string,
    remarks: string,
    loc_Location_Name: string,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    oldNo: string
    // Add these properties for previews
    photoPreview?: string; // Optional
    signaturePreview?: string; // Optional
}
//////////////////////////////////////// End Of Locker Location Master ///////////////////////////////
////////////////////////////////  Change Primary Member  //////////////////////////////
export interface IChangePrimaryMemberDeleteResponse extends IGeneralResponse { }
export interface IDeleteChangePrimaryMemberFormPayload {
    modi_Dt: string,
    primary_Mem_Id_Prev: number,
    primary_Mem_Id_Cur: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////// End Of Change Primary Member //////////////////////////////////////////
//////////////////////////////// SWIMMER BATCH TIMING LIST  //////////////////////////////
export interface IMasterBatchTimeListPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IBatchTimeListGroupResponse extends IGeneralResponse {
    result: IBatchTimeListGroup[];
}
export interface IBatchTimeListGroupPayload extends IMasterBatchTimeListPayload { }
export interface IBatchTimeListGroup {
    batchTimeId: number,
    formCatId: number,
    form_Name: string,
    session: string,
    batch_Code: string,
    batch_Frm_Tm: string,
    batch_To_Tm: string,
    day: string,
    ageLimit_Frm: number,
    ageLimit_To: number,
    ageLimit: string,
    batchFor: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IAddBatchTimeListFormPayload {
    formCatId: number,
    session: string,
    batch_Code: string,
    batch_Frm_Tm: string,
    batch_To_Tm: string,
    day: string,
    ageLimit_Frm: number,
    ageLimit_To: number,
    batchFor: string,
    add_By: string,
    add_Comp_IP: string,
    remarks: string
}
export interface IEditBatchTimeListFormPayload {
    batchTimeId: number,
    formCatId: number,
    session: string,
    batch_Code: string,
    batch_Frm_Tm: string,
    batch_To_Tm: string,
    day: string,
    ageLimit_Frm: number,
    ageLimit_To: number,
    batchFor: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface IBatchTimeListEditResponse {
    batchTimeId: number,
    formCatId: number,
    form_Name: string,
    session: string,
    batch_Code: string,
    batch_Frm_Tm: string,
    batch_To_Tm: string,
    day: string,
    ageLimit_Frm: number,
    ageLimit_To: number,
    ageLimit: string,
    batchFor: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IBatchTimeListCreateResponse extends IGeneralResponse {
    result: IBatchTimeListGroup;
}
export interface IBatchTimeListUpdateResponse extends IGeneralResponse {
    result: IBatchTimeListEditResponse;
}
export interface IBatchTimeListDeleteResponse extends IGeneralResponse { }
export interface BatchTimeListGetById {
    batchTimeId: number,
    formCatId: number,
    form_Name: string,
    session: string,
    batch_Code: string,
    batch_Frm_Tm: string,
    batch_To_Tm: string,
    day: string,
    ageLimit_Frm: number,
    ageLimit_To: number,
    ageLimit: string,
    batchFor: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IDeleteBatchTimeListFormPayload {
    batchTimeId: number;
}
//////////////////////////////////////// SWIMMER BATCH TIMING  ///////////////////////////////
//////////////////////////////// SWIMMER BOOKING RANGE  //////////////////////////////
export interface IMasterBookingRngPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IBookingRngGroupResponse extends IGeneralResponse {
    result: IBookingRngGroup[];
}
export interface IBookingRngGroupPayload extends IMasterBookingRngPayload { }
export interface IBookingRngGroup {
    bookingRngId: number,
    booking_Range: number,
    formCatId: number,
    form_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IAddBookingRngFormPayload {
    formCatId: number,
    booking_Range: number,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditBookingRngFormPayload {
    bookingRngId: number,
    formCatId: number,
    booking_Range: number,
    edit_By: string,
    edit_Comp_IP: string
}
export interface IBookingRngEditResponse {
    bookingRngId: number,
    booking_Range: number,
    formCatId: number,
    form_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IBookingRngCreateResponse extends IGeneralResponse {
    result: IBookingRngGroup;
}
export interface IBookingRngUpdateResponse extends IGeneralResponse {
    result: IBookingRngEditResponse;
}
export interface IBookingRngDeleteResponse extends IGeneralResponse { }
export interface BookingRngGetById {
    bookingRngId: number,
    booking_Range: number,
    formCatId: number,
    form_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IDeleteBookingRngFormPayload {
    bookingRngId: number;
}
//////////////////////////////////////// SWIMMER  BOOKING RANGE  ///////////////////////////////
//////////////////////////////// SWIMMER FORM CATEGORY  //////////////////////////////
export interface IMasterSwimCatPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimCatGroupResponse extends IGeneralResponse {
    result: ISwimCatGroup[];
}
export interface ISwimCatGroupPayload extends IMasterSwimCatPayload { }
export interface ISwimCatGroup {
    formCatId: number,
    form_Code: string,
    form_Name: string,
    wef_Dt: string,
    basic_Amt: number,
    form_Prefix: string,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    activate: string,
    add_By: string,
    add_Time: Date,
    edit_By: string,
    edit_Time: Date,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddSwimCatFormPayload {
    form_Code: string,
    form_Name: string,
    wef_Dt: string,
    basic_Amt: number,
    form_Prefix: string,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditSwimCatFormPayload {
    formCatId: number,
    form_Code: string,
    form_Name: string,
    wef_Dt: string,
    basic_Amt: number,
    form_Prefix: string,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    edit_By: string,
    edit_Comp_IP: string
}
export interface ISwimCatEditResponse {
    formCatId: number,
    form_Code: string,
    form_Name: string,
    wef_Dt: string,
    basic_Amt: number,
    form_Prefix: string,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    activate: string,
    add_By: string,
    add_Time: Date,
    edit_By: string,
    edit_Time: Date,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface ISwimCatCreateResponse extends IGeneralResponse {
    result: ISwimCatGroup;
}
export interface ISwimCatUpdateResponse extends IGeneralResponse {
    result: ISwimCatEditResponse;
}
export interface ISwimCatDeleteResponse extends IGeneralResponse { }
export interface SwimCatGetById {
    formCatId: number,
    form_Code: string,
    form_Name: string,
    wef_Dt: string,
    basic_Amt: number,
    form_Prefix: string,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    activate: string,
    add_By: string,
    add_Time: Date,
    edit_By: string,
    edit_Time: Date,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteSwimCatFormPayload {
    formCatId: number;
}
//////////////////////////////////////// SWIMMER FORM CATEGORY ///////////////////////////////
//////////////////////////////// SWIMMER MEMBER TYPE  //////////////////////////////
export interface IMasterSwimMemTypePayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimMemTypeGroupResponse extends IGeneralResponse {
    result: ISwimMemTypeGroup[];
}
export interface ISwimMemTypeGroupPayload extends IMasterSwimMemTypePayload { }
export interface ISwimMemTypeGroup {
    swim_Mem_Id: number,
    member_Type: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddSwimMemTypeFormPayload {
    member_Type: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditSwimMemTypeFormPayload {
    swim_Mem_Id: number,
    member_Type: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface ISwimMemTypeEditResponse {
    swim_Mem_Id: number,
    member_Type: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface ISwimMemTypeCreateResponse extends IGeneralResponse {
    result: ISwimMemTypeGroup;
}
export interface ISwimMemTypeUpdateResponse extends IGeneralResponse {
    result: ISwimMemTypeEditResponse;
}
export interface ISwimMemTypeDeleteResponse extends IGeneralResponse { }
export interface SwimMemTypeGetById {
    swim_Mem_Id: number,
    member_Type: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteSwimMemTypeFormPayload {
    swim_Mem_Id: number;
}
//////////////////////////////////////// SWIMMER MEMBER TYPE ///////////////////////////////
//////////////////////////////// SWIMMER SESSION TYPE  //////////////////////////////
export interface IMasterSwimSessionPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimSessionGroupResponse extends IGeneralResponse {
    result: ISwimSessionGroup[];
}
export interface ISwimSessionGroupPayload extends IMasterSwimSessionPayload { }
export interface ISwimSessionGroup {
    swim_Session_Type_Id: number,
    session_Code: string,
    session_Desc: string,
    session_Start: string,
    session_End: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IAddSwimSessionFormPayload {
    session_Code: string,
    session_Desc: string,
    session_Start: string,
    session_End: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditSwimSessionFormPayload {
    swim_Session_Type_Id: number,
    session_Code: string,
    session_Desc: string,
    session_Start: string,
    session_End: string,
    edit_By: string,
    edit_Comp_IP: string
}
export interface ISwimSessionEditResponse {
    swim_Session_Type_Id: number,
    session_Code: string,
    session_Desc: string,
    session_Start: string,
    session_End: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface ISwimSessionCreateResponse extends IGeneralResponse {
    result: ISwimSessionGroup;
}
export interface ISwimSessionUpdateResponse extends IGeneralResponse {
    result: ISwimSessionEditResponse;
}
export interface ISwimSessionDeleteResponse extends IGeneralResponse { }
export interface SwimSessionGetById {
    swim_Session_Type_Id: number,
    session_Code: string,
    session_Desc: string,
    session_Start: string,
    session_End: string,
    activate: string,
    add_By: string,
    add_Time: any,
    edit_By: string,
    edit_Time: any,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IDeleteSwimSessionFormPayload {
    swim_Session_Type_Id: number;
}
//////////////////////////////////////// SWIMMER SESSION TYPE  ///////////////////////////////
/////////////////////// Member Payment Purpose //////////////////////////////
export interface IMasterMemberPaymentPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemberPaymentGroupResponse extends IGeneralResponse {
    result: IMemberPaymentGroup[];
}
export interface IMemberPaymentGroupPayload extends IMasterMemberPaymentPayload { }
export interface IMemberPaymentGroup {
    rowId: number,
    edit_By: string,
    edit_Comp_IP: string
    purpose: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IAddMemberPaymentFormPayload {
    purpose: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IMemberPaymentCreateResponse extends IGeneralResponse {
    result: IMemberPaymentGroup;
}
export interface IMemberPaymentDeleteResponse extends IGeneralResponse { }
export interface MemberPaymentGetById {
    rowId: number,
    edit_By: string,
    edit_Comp_IP: string,
    purpose: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IDeleteMemberPaymentFormPayload {
    rowId: number;
}
//////////////////////////////////////// End Of Member Payment Purpose ///////////////////////////////