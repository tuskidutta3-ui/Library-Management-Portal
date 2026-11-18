export interface IGeneralResponse {
    message: string;
    pagingDetails: {
        pageNumber: number;
        pageSize: number;
        totalCount: number;
    };
    status: string;
}
export interface IMasterUnitPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    }
    searchString?: string;
}
export interface IMasterUnitItem {
    unitAlias: string,
    unitCode: string,
    unitName: string,
    userUnit: false
}
export interface IMasterUnitResponse extends IGeneralResponse {
    return: IMasterUnitItem[];
}
export interface IGstDocumentTypeItem {
    gstDocTypeId: number;
    doc_Type_Code: string;
    doc_Type_Desc: string;
}
export interface ICommonAutoSuggestionPayload {
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    },
    searchString?: string;
}
export interface IGstDocumentTypeResponse extends IGeneralResponse {
    return: IGstDocumentTypeItem[];
}
export interface ITaxMasterPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    }
    searchString?: string;
}
export interface IStateMaster {
    state_Id: number;
    state_Code: string;
    state_Name: string;
    abbreviation: string;
    activate: string;
    adD_BY: number;
    adD_TIME: string;
    adD_BY_COMPUTER: string;
    ediT_BY: number;
    ediT_TIME: string
}
export interface IStateMasterResponse extends IGeneralResponse {
    result: IStateMaster[];
}
export interface IEligibility {
    gstDocTypeId: number;
    doc_Type_Code: string;
    doc_Type_Desc: string;
}
export interface IEligibilityResponse extends IGeneralResponse {
    result: IEligibility[];
}
export interface IUOM {
    uomId: number;
    uoM_Code: string;
    uom: string;
    financiaL_YEAR: string;
    activate: string;
    adD_BY: number;
    adD_TIME: string;
    adD_BY_COMPUTER: string | null;
    ediT_BY: number;
    ediT_TIME: string;
    ediT_BY_COMPUTER: string | null;
}
export interface IUOMResponse extends IGeneralResponse {
    result: IUOM[];
}
export interface IHSNItem {
    hsnId: number;
    hsN_Code: string;
}
export interface IHSNItemponse extends IGeneralResponse {
    result: IHSNItem[];
}
export interface IPlantMastertem {
    plantId: number;
    unitId: string | null;
    unitAlias: string;
    plant_code: string;
    link_Name: string;
    plant_name: string;
    acc_Code_RM: string;
    acc_Code_IPT: string;
    acc_Code_OT: string;
    acc_Code_OT_GST: string;
    opening_balance: number;
    partY_ID: number;
    partY_CODE: string;
    designation: string;
    department: string;
    signatory: string;
    link_Id: number;
    address: string;
    remarks: string;
    activate: string;
    adD_BY: number;
    adD_TIME: string;
    ediT_BY: number;
}
export interface IPlantMasterResponse extends IGeneralResponse {
    result: IPlantMastertem[];
}
export interface ILinkCodetem {
    linkId: number;
    linK_NAME: string;
    activate: string;
    adD_BY: number;
    adD_TIME: string;
    adD_BY_COMPUTER: string | null;
    ediT_BY: number;
    ediT_TIME: string | null;
    ediT_BY_COMPUTER: string | null;
}
export interface ILinkCodetemResponse extends IGeneralResponse {
    result: ILinkCodetem[];
}
export interface IProductListItem {
    oreId: number;
    orE_DESC: string;
}
export interface IProductListItemResponse extends IGeneralResponse {
    result: IProductListItem[];
}
export interface IAgainstBudgetRateItem {
    rate: number;
    wef: string;
    trnsferPriceId: number;
}
export interface IAgainstBudgetRateItemResponse extends IGeneralResponse {
    result: IAgainstBudgetRateItem[];
}
export interface IGeneralPayload {
    unitAlias: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
export interface IGeneralTransactionPayload {
    type: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    }
    searchString?: string;
}
export interface ITransactionTypeItem {
    acC_CODE: string;
    activate: string;
    adD_BY: number;
    adD_BY_COMPUTER: string;
    adD_TIME: string;
    allowInPmtVchType: string;
    bankAcNo: string;
    bankBranch: string;
    bankName: string;
    bank_Ac_Type: string;
    defaultForFinal: false
    ediT_BY: number;
    ediT_BY_COMPUTER: string;
    ediT_TIME: string;
    hideAtGeneralVch: false
    monthlySingleEntry: false
    notCheckPrevVoucherDate: false
    traN_CODE: string;
    traN_ID: number;
    traN_NAME: string;
    type: string;
    unitAlias: string;
    vchCanReverse: false
    vchIsEditable: false
}
export interface IwithUnitResponse extends IGeneralTransactionPayload {
    result: ITransactionTypeItem[];
}
export interface IMinesItem {
    minesId: number;
    minesName: string;
    minesCode: string;
}
export interface IMinesItemResponse extends IGeneralResponse {
    result: IMinesItem[];
}
///alloteeList
export interface IAlloteeList {
    id: 0,
    description: "",
    allotName: "",
    allotteeCode: 0
}
export interface IAlloteeListResponse extends IGeneralResponse {
    result: IAlloteeList[];
}
///companyList
export interface ICompanyList {
    id: number;
    compCode: string;
    compName: string;
}
export interface ICompanyListResponse extends IGeneralResponse {
    result: ICompanyList[];
}
///copyToList
export interface ICopyToList {
    masterCopyId: number;
    description: string;
    address: string;
    department: string;
}
export interface ICopyToListResponse extends IGeneralResponse {
    result: ICopyToList[];
}
///paymentAdviceList
export interface IPaymentAdviceList {
    bslNo: string;
    billNo: string;
    billDt: string;
    sourceId: number;
    sname: string;
    source: string;
    loadDt: string;
    claimValue: number;
    passedValue: number;
    select: boolean
}
export interface IPaymentAdviceListResponse extends IGeneralResponse {
    result: IPaymentAdviceList[];
}
///calculationRESULT
export interface ICalculation {
    libFirst: number;
}
export interface ICalculationResponse extends IGeneralResponse {
    result: ICalculation[];
}
///paymentAdviceList
export interface IPaymentSummaryList {
    coCode: string
    coName: string;
    destCode: string;
    destPlant: string;
    tranColblReportId: number;
    reportSlNo: string;
    claimValue: number;
    passedValue: number;
    reportDetails: any;
}
export interface IPaymentSummaryResponse extends IGeneralResponse {
    result: IPaymentSummaryList[];
}
///urpassBillList
export interface IURDetailsList {
    despSlNo: string
    sname: string;
    loadDate: string;
    rrNo: string;
    rrDate: number;
    rrQty: string;
}
export interface IURDetailsResponse extends IGeneralResponse {
    result: IURDetailsList[];
}
///pbrpassBillList
export interface IPBRDetailsList {
    gradeCodeOrAsh: string
    passedGradeOrAsh: string;
    bslNo: string;
    plantName: string;
    sname: string;
    coalDesc: string;
    rrNo: string;
    loadDt: string;
    claimQty: number;
    passQty: number;
    claimBaseRate: number;
    passedBaseRate: number;
    claimValue: number;
    passedValue: number;
}
export interface IPBRDetailsResponse extends IGeneralResponse {
    result: IPBRDetailsList[];
}
///ubrpassBillList
export interface IUBRDetailsList {
    despSlNo: string
    sname: string;
    loadDate: string;
    rrNo: string;
    rrDate: number;
    rrQty: string;
}
export interface IUBRDetailsResponse extends IGeneralResponse {
    result: IUBRDetailsList[];
}
///BslNoBillWiseRepist
export interface IBSLNoBillWiseDtlDetailsList {
    despSlNo: string
    sname: string;
    loadDate: string;
    rrNo: string;
    rrDate: number;
    rrQty: string;
}
export interface IBSLNoBillWiseDtlResponse extends IGeneralResponse {
    result: IBSLNoBillWiseDtlDetailsList[];
}
///billWise Detail List
export interface IBillWiseDetailsList {
    billReceptId: number;
    description: string
    bslNo: string;
    billNo: string;
    billDt: string;
    loadDt: string;
    coName: string;
    sname: string;
    coalDesc: string;
    rrNo: string;
    rrDate: string;
    plantName: string;
    claimQty: [];
    clmVal: [];
    passVal: [];
    clmSuppVal: [];
    prssSuppVal: []
}
export interface IBillWiseDetailsResponse extends IGeneralResponse {
    result: IBillWiseDetailsList[];
}
///LiabilityList
export interface ILiabilityDetailsList {
    bslNo: string
    plantName: string;
    coName: string;
    sname: string;
    coalDesc: string;
    rrNo: string;
    rrDate: string;
    rrWt: number,
    cgst: number,
    sgst: number,
    igst: number,
    daAmount: number,
    averageAmount: number
}
export interface ILiabilityDetailsResponse extends IGeneralResponse {
    result: ILiabilityDetailsList[];
}
///AdviceList
export interface IAdviceDetailsList {
    coalCompId: string
    coName: string;
    destinationId: string;
    plantName: string;
    coalDesc: number;
    coalTypeId: string;
    reportDetails: any;
}
export interface IAdviceDetailsResponse extends IGeneralResponse {
    result: IAdviceDetailsList[];
}
///sourceList
export interface ISourceList {
    id: number;
    sourceCode: string;
    sourceName: string;
}
export interface ISourceListResponse extends IGeneralResponse {
    result: ISourceList[];
}
///sourceList another
export interface ISourceListAnother {
    id: number;
    sourceCode: string;
    sourceName: string;
}
export interface ISourceListAnotherResponse extends IGeneralResponse {
    result: ISourceListAnother[];
}
///destinationList
export interface IDestinationList {
    id: number;
    destCode: string;
    plant: string;
}
export interface IDestinationListResponse extends IGeneralResponse {
    result: IDestinationList[];
}
///coalList
export interface ICoalList {
    id: number;
    coalCode: string;
    coalDesc: string;
}
export interface ICoalListResponse extends IGeneralResponse {
    result: ICoalList[];
}
///billList
export interface IBillList {
    id: number,
    bslNo: string,
    sourceCode: string,
    destiCode: string,
    compCode: string,
    loadDate: any,
    claimedQty: number,
    claimedAmount: number
}
export interface IBillListResponse extends IGeneralResponse {
    result: IBillList[];
}
///despSlNoList
export interface IDespSlNoList {
    description: string;
}
export interface IDespSlNoListResponse extends IGeneralResponse {
    result: IDespSlNoList[];
}
///billSlNoList
export interface IBillSlNoList {
    description: string,
}
export interface IBillSlNoListResponse extends IGeneralResponse {
    result: IBillSlNoList[];
}
///billSlNoCalValList
export interface IBillSlNoCalValList {
    id: number,
    bslNo: string,
    compName: string,
    billNo: string,
    billDt: string,
    claimedQty: number,
    claimedAmount: number
}
export interface IBillSlNoCalValListResponse extends IGeneralResponse {
    result: IBillSlNoCalValList[];
}
///billSlNoSupList
export interface IBillSlNoSupList {
    id: number,
    bslNo: string,
    compName: string,
    billNo: string,
    billDt: string,
    claimedQty: number,
    claimedAmount: number
}
export interface IBillSlNoSupListResponse extends IGeneralResponse {
    result: IBillSlNoSupList[];
}
///billSlNoCalValSupList
export interface IBillSlNoCalValSupList {
    id: number,
    bslNoSupple: string,
    compName: string,
    billNo: string,
    billDt: string,
    claimedQty: number,
    claimedAmount: number,
    coalCompId: number,
    coalTypeId: number,
    sourceId: number
}
export interface IBillSlNoCalValSupListResponse extends IGeneralResponse {
    result: IBillSlNoCalValSupList[];
}
///WagonList
export interface IWagonList {
    wagonDtId: number,
    slNo: string,
    rlys: string,
    wagenNo: string,
    wagenType: string,
    cc: string,
    chWt: number,
    grossWt: number,
    tareWt: number,
    actualWt: number
}
export interface IWagonListResponse extends IGeneralResponse {
    result: IWagonList[];
}
///claimCodeList
export interface IClaimCodeList {
    id: number,
    description: string,
    claimCode: string,
    claimDesc: string,
    admissibleRate: number,
    claimRate: number,
    claimValue: number,
    supplBslNo: string
}
export interface IClaimCodeListResponse extends IGeneralResponse {
    result: IClaimCodeList[];
}
///claimCodeSupList
export interface IClaimCodeSupList {
    id: number,
    description: string,
    claimCode: string,
    claimDesc: string,
    admissibleRate: number,
    claimRate: number,
    claimValue: number,
    supplBslNo: string
}
export interface IClaimCodeListSupResponse extends IGeneralResponse {
    result: IClaimCodeSupList[];
}
///claimCodeSupBillPassList
export interface IClaimCodeSupBillPassList {
    id: number,
    description: string,
    claimCode: string,
    claimDesc: string,
    admissibleRate: number,
    claimRate: number,
    claimValue: number,
    supplBslNo: string
}
export interface IClaimCodeListSupBillPassResponse extends IGeneralResponse {
    result: IClaimCodeSupBillPassList[];
}
///subSourceList
export interface ISubSourceList {
    id: number;
    description: string,
    subScode: string,
    subSname: string
}
export interface ISubSourceListResponse extends IGeneralResponse {
    result: ISubSourceList[];
}
///qtysubSourceList
export interface IQtySubSourceList {
    id: number;
    description: string,
    subScode: string,
    subSname: string
}
export interface IQtySubSourceListResponse extends IGeneralResponse {
    result: IQtySubSourceList[];
}
/////EngHourRateList
export interface IEngRateItem {
    id: number;
    quater: string;
    engHoursAdpRate: number;
}
export interface IEngRateItemResponse extends IGeneralResponse {
    result: IEngRateItem[];
}
//ta advance
export interface IAdvance {
    unitAlias: string,
    advNo: string,
    advDt: string,
    emp_Code: string,
    place: string,
    sectionCode: string,
    advAmt: number,
    fromDt: string,
    toDt: string,
    purposeOrDept: string,
    project_Code: string,
    head_Code: string,
    grade_Code: string,
    remarks: string,
    financial_YEAR: string,
    taAdvAcCode: string,
    taAdjAcCode: string,
    finVchNo: string,
    finVchDt: string,
    processNo: string,
}
export interface IAdvanceResponse extends IGeneralResponse {
    result: IAdvance[];
}
//DA rate
export interface IDaRate {
    DaRateFor: number,
    grade_Code: string,
}
export interface IDaRateResponse extends IGeneralResponse {
    result: IDaRate[];
}
//hotel rate
export interface IHotelRate {
    HotelRate: number,
    grade_Code: string,
}
export interface IHotelRateResponse extends IGeneralResponse {
    result: IHotelRate[];
}
///gradeList
export interface IGradeList {
    id: number;
    description: string,
    gradeCode: string,
    gradeDesc: string
}
export interface IGradeListResponse extends IGeneralResponse {
    result: IGradeList[];
}
///qtygradeList
export interface IQtyGradeList {
    id: number;
    description: string,
    // gradeCode: string,
    // gradeDesc: string
}
export interface IQtyGradeListResponse extends IGeneralResponse {
    result: IQtyGradeList[];
}
///initialgradeList
export interface IInitialGradeList {
    id: number;
    description: string,
    gradeType: string,
}
export interface IInitialGradeListResponse extends IGeneralResponse {
    result: IInitialGradeList[];
}
///////////Bill Sl No Cooking quality
export interface IBSLCode {
    description: string,
    satatusNo: number
}
export interface IBSLCodeResponse extends IGeneralResponse {
    result: IBSLCode[];
}
///////////Bill Sl No Processing
export interface IBSLProsCode {
    description: string,
}
export interface IBSLCodeProsesponse extends IGeneralResponse {
    result: IBSLProsCode[];
}
///////////Bill Sl No Adjustment
export interface IBSLCodeAJ {
    id: number,
    description: string,
    bslNo: string,
    billReceptId: number,
    coalCompId: number,
    coCode: string,
    coName: string,
    sourceId: number,
    scode: string,
    sname: string,
    coalTypeId: number,
    coalCode: string,
    coalDesc: string,
    destinationId: number,
    destCode: string,
    destName: string,
    loadDt: string
}
export interface IBSLCodeAJResponse extends IGeneralResponse {
    result: IBSLCodeAJ[];
}
///////////Wagon List Cooking quality
export interface IWagonListCooking {
    slNo: string,
    rrNo: string,
    rrDate: string,
    wagenNo: string,
    actualWt: number
}
export interface IWagonListCookingResponse extends IGeneralResponse {
    result: IWagonListCooking[];
}
export interface IFringeBenefitItem {
    fbTypeId: number;
    fB_Type_Code: string;
    fB_Type_Desc: string;
}
export interface IFringeBenefitResponse extends IGeneralResponse {
    result: IFringeBenefitItem[];
}
export interface IGSTRegistrationTypeItem {
    regTypeId: number;
    regType: string;
    regRemarks: string;
}
export interface IGSTRegistrationTypeResponse extends IGeneralResponse {
    result: IGSTRegistrationTypeItem[];
}
export interface INaturePayeeItem {
    payeeType_ID: number;
    co_NoCo: string | null;
    payee_Type: string;
}
export interface INaturePayeeItemResponse extends IGeneralResponse {
    result: INaturePayeeItem[];
}
export interface IStateItem {
    state_Id: number;
    state_Code: string | null;
    state_Name: string;
    abbreviation: string;
}
export interface IStateItemResponse extends IGeneralResponse {
    result: IStateItem[];
}
//////////new/////////////////////////
export interface IModuleItem {
    id: number;
    description: string;
}
export interface IModuleItemResponse extends IGeneralResponse {
    result: IModuleItem[];
}
export interface IUserGroupItem {
    id: number;
    description: string;
}
export interface IUserGroupItemResponse extends IGeneralResponse {
    result: IUserGroupItem[];
}
export interface IUnitName {
    unitId: number,
    unitName: string,
    unitCode: string,
    shortName: string,
    description: string
}
export interface IUnitNameResponse extends IGeneralResponse {
    result: IUnitName[];
}
export interface IDepartmentCode {
    departmentId: number,
    deptCode: string,
    deptDescription: string,
    description: string
}
export interface IDepartmentCodeResponse extends IGeneralResponse {
    result: IDepartmentCode[];
}
export interface IGradeCode {
    gradeId: number,
    gradeCode: string,
    gradeDescription: string,
    description: string
}
export interface IGradeCodeResponse extends IGeneralResponse {
    result: IGradeCode[];
}
//////////// Search helpers ///////////
export interface IMasterAutoSuggestionPayload {
    unitId: number,
    role: string,
    finYear: string,
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
export interface IMasterMonthlyTranAutoSuggestionPayload {
    unitId: number,
    role: string,
    finYear: string
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
export interface IGeneralAutoSuggest {
    currentPage: number;
    records?: any[];
    displayMoreLink?: boolean;
    fieldName?: string;
}
//////////new/////////////////////////
export interface IConsumerItem {
    consumerType_Id: number;
    consumerType: string;
}
export interface IConsumerItemResponse extends IGeneralResponse {
    result: IConsumerItem[];
}
export interface IOwnerItem {
    ownerType_Id: number;
    ownerType: string;
}
export interface IOwnerItemResponse extends IGeneralResponse {
    result: IOwnerItem[];
}
export interface ICastItem {
    castType_Id: number;
    castType: string;
}
export interface ICastResponse extends IGeneralResponse {
    result: ICastItem[];
}
export interface IUnitItem {
    unitAlias: string;
    unitCode: string;
}
export interface IUnitItemResponse extends IGeneralResponse {
    result: IUnitItem[];
}
export interface IOrderItem {
    recNo: string,
    orderPrefix: string,
    orderNo: number,
    orderNumber: string,
    orderDt: string,
    poType: string,
    nameOfWork: string,
    order_Amt: number,
    recDt: string,
    category: string,
    eligible_Itc: number,
    section_Code_NR: number,
    sectioN_CODE: number,
    sectioN_DESC: string,
    secDesc: string,
    dep_Id: number,
    deptId: number,
    depT_DESC: string
}
export interface IOrderItemResponse extends IGeneralResponse {
    result: IOrderItem[];
}
export interface ISectionItem {
    id: number;
    description: string;
    sectioN_CODE: string;
    sectioN_DESC: string;
}
export interface ISectionItemResponse extends IGeneralResponse {
    result: ISectionItem[];
}
export interface IDepartmentItem {
    deptId: number;
    depT_DESC: string;
}
export interface IDepartmentItemResponse extends IGeneralResponse {
    result: IDepartmentItem[];
}
export interface IUserGroupItem {
    uGrp_Id: number;
    uGrp_Name: string;
}
export interface IUserGroupResponse extends IGeneralResponse {
    result: IUserGroupItem[];
}
export interface IUserParentPayload {
    form_Id: number;
    uGrp_ID: number;
}
export interface IChildMenu {
    form_Id: number;
    parent_Id: number;
    form_Name: string;
    menu_Name: string;
    menu_Caption: string;
    menu_URL: string;
    activate: string;
    isADD: number;
    isEdit: number;
    isView: number;
    isInactive: number;
    add_By: number;
    edit_By: number;
    edit_Time: null
}
export interface IModuleAccessData {
    form_Id: number;
    uGrpId: number;
    isAdd: number;
    isEdit: number;
    isView: number;
    isInactive: number;
    add_By: number;
    childmenuform: IChildMenu[];
}
export interface IModuleResponse extends IGeneralPayload {
    result: IModuleAccessData[];
}
export interface ILeftMenuPayload {
    uGrp_Id: number;
}
export interface IGetPayeeTypeByPartyPayload {
    party_Code: string;
}
export interface IGetPayeeTypeByPartyCodeData {
    partY_CODE: string;
    partY_NAME: string;
    payee_Type: string;
    payee_Type_Id: number;
    coNoCo: string | null;
}
export interface IGetPayeeTypeByPartyCodeResponse extends IGeneralPayload {
    result: IGetPayeeTypeByPartyCodeData[];
}
export interface IGetByIdAcMainGrp {
    maiN_GROUP_ID: number;
    maiN_GROUP_CODE: string;
    maiN_GROUP_DESC: string;
    maiN_GROUP_TYPE: string
    adD_BY: number;
    ediT_BY: string;
}
//////////master helper interface///////
export interface ITaxName {
    taxCode: number;
    taxName: string;
}
export interface ITaxNameResponse extends IGeneralResponse {
    result: ITaxName[];
}
export interface IReportGroup {
    maingrpCode: number;
    maingrpName: string;
}
export interface IReportGroupResponse extends IGeneralResponse {
    result: IReportGroup[];
}
export interface IReportSubGroup {
    subgrpCode: number;
    subgrpName: string;
}
export interface IReportSubGroupResponse extends IGeneralResponse {
    result: IReportSubGroup[];
}
export interface IMainGrpCode {
    main_GROUP_CODE: number;
    mainGroupDescription: string;
}
export interface IMainGrpCodeResponse extends IGeneralResponse {
    result: IMainGrpCode[];
}
export interface IReportName {
    reportCode: number;
    reportName: string;
    reportDesc: string;
    report_TYPE: string;
}
export interface IReportNameResponse extends IGeneralResponse {
    result: IReportName[];
}
export interface IPayldReportGrp {
    groupCode: string;
}
export interface IPayldReportGrpResponse extends IGeneralResponse {
    result: IPayldReportGrp[];
}
export interface ISection {
    sectionCode: number;
    sectionName: string;
}
export interface ISectionResponse extends IGeneralResponse {
    result: ISection[];
}
export interface ICoalCompany {
    compCode: number;
    compName: string;
}
export interface ICoalCompanyResponse extends IGeneralResponse {
    result: ICoalCompany[];
}
export interface ISource {
    sourceCode: number;
    sourceName: string;
}
export interface ISourceResponse extends IGeneralResponse {
    result: ISource[];
}
export interface ICoalType {
    coalCode: number;
    coalName: string;
}
export interface ICoalTypeResponse extends IGeneralResponse {
    result: ICoalType[];
}
export interface ILocation {
    locationCode: number;
    locationName: string;
}
export interface ILocationResponse extends IGeneralResponse {
    result: ILocation[];
}
export interface IGrade {
    gradeCode: number;
    gradeName: string;
}
export interface IGradeResponse extends IGeneralResponse {
    result: IGrade[];
}
export interface IPlant {
    plantCode: number;
    plantName: string;
}
export interface IPlantResponse extends IGeneralResponse {
    result: IPlant[];
}
export interface ISubSource {
    destCode: number;
    plantName: string;
}
export interface ISubSourceResponse extends IGeneralResponse {
    result: ISubSource[];
}
export interface IDestination {
    destCode: number;
}
export interface IDestinationResponse extends IGeneralResponse {
    result: IDestination[];
}
export interface IClaimType {
    claimCode: string;
}
export interface IClaimTypeResponse extends IGeneralResponse {
    result: IClaimType[];
}
//////////master helper interface///////
///////// Helpers Interface //////////
export interface IBSLCode {
    claimCode: number;
    claimDesc: string;
}
export interface IBSLCodeResponse extends IGeneralResponse {
    result: IBSLCode[];
}
export interface ICoalCompany {
    compCode: number;
    compName: string;
}
export interface ICoalCompanyResponse extends IGeneralResponse {
    result: ICoalCompany[];
}
export interface ISource {
    sourceCode: number;
    sourceName: string;
}
export interface ISourceResponse extends IGeneralResponse {
    result: ISource[];
}
export interface ICoalType {
    coalCode: number;
    coalName: string;
}
export interface ICoalTypeResponse extends IGeneralResponse {
    result: ICoalType[];
}
export interface IDestination {
    destCode: number;
}
export interface IDestinationResponse extends IGeneralResponse {
    result: IDestination[];
}
export interface IClaimType {
    claimCode: string;
}
export interface IClaimTypeResponse extends IGeneralResponse {
    result: IClaimType[];
}
///////// Helpers Interface //////////
export interface IGroup {
    group: string;
}
export interface IGroupResponse extends IGeneralResponse {
    result: IGroup[];
}
// acc para type helper
export interface IParaTypeItem {
    para_Id: number;
    description: string;
}
export interface IParaTypeItemResponse extends IGeneralResponse {
    result: IParaTypeItem[];
}
export interface Istate {
    group: string;
}
export interface IstateResponse extends IGeneralResponse {
    result: Istate[];
}
export interface Imine {
    group: string;
}
export interface ImineResponse extends IGeneralResponse {
    result: Imine[];
}
export interface Igrade {
    group: string;
}
export interface IgradeResponse extends IGeneralResponse {
    result: Igrade[];
}
export interface Ireg {
    group: string;
}
export interface IregResponse extends IGeneralResponse {
    result: Ireg[];
}
export interface Iproduct {
    group: string;
}
export interface IproductResponse extends IGeneralResponse {
    result: Iproduct[];
}
export interface Isubproduct {
    group: string;
}
export interface IsubproductResponse extends IGeneralResponse {
    result: Isubproduct[];
}
export interface Iuom {
    group: string;
}
export interface IuomResponse extends IGeneralResponse {
    result: Iuom[];
}
// auc grade
export interface IAucGradeItem {
    row_Id: number,
    grade_Code: string
}
export interface IAucGradeItemResponse extends IGeneralResponse {
    result: IAucGradeItem[];
}
// uom
export interface IUomItem {
    uom: string,
    uomId: number,
    uoM_Code: string
}
export interface IUomItemResponse extends IGeneralResponse {
    result: IUomItem[];
}
// einv doc type
export interface IDocTypeItem {
    einvDocId: number,
    einvDocParticulars: string,
    einvDocExpt: string
}
export interface IDocTypeItemResponse extends IGeneralResponse {
    result: IDocTypeItem[];
}
// einv supply type
export interface ISupplyTypeItem {
    einvSuppId: number,
    suppTypePartixulars: string,
    suppTypeExpt: string
}
export interface ISupplyTypeItemResponse extends IGeneralResponse {
    result: ISupplyTypeItem[];
}
// einv sub supply type
export interface ISubSupplyTypeItem {
    einvSubSuppId: number,
    subSuppParticulars: string,
    subSuppExpt: string
}
export interface ISubSupplyTypeItemResponse extends IGeneralResponse {
    result: ISubSupplyTypeItem[];
}
// einv transport type
export interface ITransportTypeItem {
    einvTranportId: number,
    einvTranportParticulars: string,
    einvTranportExpt: string
}
export interface ITransportTypeItemResponse extends IGeneralResponse {
    result: ITransportTypeItem[];
}
// einv vehicle type
export interface IVehicleTypeItem {
    einvVehId: number,
    einvVehParticulars: string,
    einvVehExpt: string
}
export interface IVehicleTypeItemResponse extends IGeneralResponse {
    result: IVehicleTypeItem[];
}
//einv document category
export interface IDocCatItem {
    einvDocCatId: number,
    einvDocCatParticulars: string,
    einvDocCatExpt: string
}
export interface IDocCatItemResponse extends IGeneralResponse {
    result: IDocCatItem[];
}
//einv tran type
export interface ITranTypeItem {
    einTranId: number,
    einTranParticulars: string,
    einTranExpt: string
}
export interface ITranTypeItemResponse extends IGeneralResponse {
    result: ITranTypeItem[];
}
export interface IFlagResponse {
    crId: number,
    einvCrParticulars: string,
}
export interface IFlagResponse extends IGeneralResponse {
    result: IFlagResponse[];
}
export interface IAutoResponse {
    crId: number,
    einvCrParticulars: string,
}
export interface IAutoResponse extends IGeneralResponse {
    result: IAutoResponse[];
}
export interface IsubsupplyResponse {
    einvSubSuppId: number,
    subSuppParticulars: string,
}
export interface IsubsupplyResponse extends IGeneralResponse {
    result: IsubsupplyResponse[];
}
export interface IdocumentcategoryResponse {
    einvDocCatId: number,
    einvDocCatParticulars: string,
}
export interface IdocumentcategoryResponse extends IGeneralResponse {
    result: IdocumentcategoryResponse[];
}
export interface IndicatorResponse {
    csId: number,
    einvCsiParticulars: string,
}
export interface IndicatorResponse extends IGeneralResponse {
    result: IndicatorResponse[];
}
export interface IGSTResponse {
    crdrId: number,
    einvCrdrParticulars: string,
}
export interface IGSTResponse extends IGeneralResponse {
    result: IGSTResponse[];
}
export interface ITypeResponse {
    supId: number,
    einvSupplierParticulars: string,
}
export interface ITypeResponse extends IGeneralResponse {
    result: ITypeResponse[];
}
export interface IITCResponse {
    itcId: number,
    einvItcParticulars: string,
}
export interface IITCResponse extends IGeneralResponse {
    result: IITCResponse[];
}
export interface ICountryResponse {
    ecnId: number,
    einvCnParticulars: string,
}
export interface ICountryResponse extends IGeneralResponse {
    result: ICountryResponse[];
}
export interface ICurrencyResponse {
    curId: number,
    einvCurrParticulars: string,
}
export interface ICurrencyResponse extends IGeneralResponse {
    result: ICurrencyResponse[];
}
export interface ISupplyResponse {
    einvSuppId: number,
    suppTypePartixulars: string,
}
export interface ISupplyResponse extends IGeneralResponse {
    result: ISupplyResponse[];
}
export interface IDocumentResponse {
    einvDocId: number,
    einvDocParticulars: string,
}
export interface IDocumentResponse extends IGeneralResponse {
    result: IDocumentResponse[];
}
export interface IportResponse {
    mdId: number,
    einvDocParticulars: string,
}
export interface IportResponse extends IGeneralResponse {
    result: IportResponse[];
}
export interface IgstregtypeResponse {
    regTypeId: number,
    regType: string,
}
export interface IgstregtypeResponse extends IGeneralResponse {
    result: IgstregtypeResponse[];
}
export interface IgrouptypeResponse {
    groupTypeId: number,
    groupTypeName: string,
}
export interface IgrouptypeResponse extends IGeneralResponse {
    result: IgrouptypeResponse[];
}
export interface IselectResponse {
    billTypeId: number,
    typeName: string,
}
export interface IselectResponse extends IGeneralResponse {
    result: IselectResponse[];
}
export interface IeligibleResponse {
    lev2_Id: number,
    lev2_Desc2: string,
    lev2_Desc1: string,
}
export interface IeligibleResponse extends IGeneralResponse {
    result: IeligibleResponse[];
}
export interface IFinYearItem {
    id: number;
    description: string;
    financiaL_YEAR: string;
}
export interface IFinYearItemResponse extends IGeneralResponse {
    result: IFinYearItem[];
}
export interface IWB {
    wbCode: string;
    wbDesc: string;
}
export interface IWBResponse extends IGeneralResponse {
    result: IWB[];
}
export interface ITransporter {
    transpCode: string;
    transpDesc: string;
}
export interface ITransporterResponse extends IGeneralResponse {
    result: ITransporter[];
}
export interface IPartyList {
    row_Id: number,
    partY_CODE: string,
    partY_NAME: string
}
export interface IIPartyListResponse extends IGeneralResponse {
    result: IPartyList[];
}
export interface IReasonForEmptyTruck {
    emty_R_Code: string;
    emty_R_Desc: string;
}
export interface IReasonForEmptyTruckResponse extends IGeneralResponse {
    result: IReasonForEmptyTruck[];
}
export interface IDoNumberList {
    doNo: string,
    doNo_Manual: string,
    qtyInKG: number,
    partY_CODE: string,
    partY_NAME: string,
    prodCode: string,
    prodDesc: string
}
export interface IDoNumberListResponse extends IGeneralResponse {
    result: IDoNumberList[];
}
export interface IProduct {
    prodCode: string;
    prodDesc: string;
}
export interface IProductResponse extends IGeneralResponse {
    result: IProduct[];
}
export interface ILoading {
    row_Id: number;
    loading_Type: string;
}
export interface ILoadingResponse extends IGeneralResponse {
    result: ILoading[];
}
export interface IGivePermission {
    isDelete: boolean,
    isEdit: boolean,
    isAdd: boolean
}
export interface IGivePermissionResponse extends IGeneralResponse {
    result: IGivePermission[];
}
/////////////////////////////////////////////
////////////////////  ----- ACCOUNT CODE HELPER -----          /////////////////////////
export interface Iacccode {
    accCode: string;
    accDesc: string;
}
export interface IacccodeResponse extends IGeneralResponse {
    result: Iacccode[];
}
////////////////////  ----- COMPANY CODE HELPER -----  /////////////////////////
export interface IcompCode {
    compCodeNo: string;
}
export interface IcompCodeResponse extends IGeneralResponse {
    result: IcompCode[];
}
////////////////////  ----- DEPARTMENT HELPER -----  /////////////////////////
export interface IdeptCode {
    deptCodeNo: string;
}
export interface IdeptCodeResponse extends IGeneralResponse {
    result: IdeptCode[];
}
////////////////////  ----- DESIGNATION HELPER -----  /////////////////////////
export interface IdesgCode {
    desgCodeNo: string;
}
export interface IdesgCodeResponse extends IGeneralResponse {
    result: IdesgCode[];
}
////////////////////  ----- LOCATION HELPER -----  /////////////////////////
export interface IlocationCode {
    locationCodeNo: string;
}
export interface IlocationCodeResponse extends IGeneralResponse {
    result: IlocationCode[];
}
////////////////////  ----- INACTIVE REASON HELPER -----  /////////////////////////
export interface IINACTIVEREASON {
    INACTIVEREASONNo: string;
}
export interface IInactiveReasonResponse extends IGeneralResponse {
    result: IINACTIVEREASON[];
}
////////////////////  ----- PAYMENT MODE HELPER -----  /////////////////////////
export interface IpayModCode {
    payModCodeNo: string;
}
export interface IpayModCodeResponse extends IGeneralResponse {
    result: IpayModCode[];
}
////////////////////  ----- EARNING DEDUCTION CODE HELPER -----  /////////////////////////
export interface IearnDeductCode {
    earnDeductCodeNo: string;
}
export interface IearnDeductCodeResponse extends IGeneralResponse {
    result: IearnDeductCode[];
}
////////////////////  ----- SECTION  HELPER -----  /////////////////////////
export interface IUnderSection {
    UnderSectionNo: string;
}
export interface IUnderSectionResponse extends IGeneralResponse {
    result: IUnderSection[];
}
////////////////////  ----- Account Code  HELPER -----  /////////////////////////
export interface IAccountCode {
    AccountCodeNo: string;
}
export interface IAccountCodeResponse extends IGeneralResponse {
    result: IAccountCode[];
}
////////////////////  ----- RELATION HELPER -----  /////////////////////////
export interface IRelationCode {
    relationCodeNo: string;
}
export interface IRelationResponse extends IGeneralResponse {
    result: IRelationCode[];
}
////////////////////////////////////////////////////////////////////
export interface Isection {
    sectionId: number;
    sectionCode: string;
}
export interface IsectionResponse extends IGeneralResponse {
    result: Isection[];
}
///////////////////////////////////////////////////////////
export interface Istatemaster {
    stateId: number;
    stateCode: string;
    stateName: string;
}
export interface IstatemasterResponse extends IGeneralResponse {
    result: Istatemaster[];
}
///////////////////////////////////////////////////////////
export interface Ifinyear {
    fin_Id: number;
    fianacial_Year: string;
}
export interface IfinyearResponse extends IGeneralResponse {
    result: Ifinyear[];
}
/////////////////////////////////////////
export interface Iearning {
    earnDeductCode: string;
    earnDeductDesc: string;
}
export interface IearningResponse extends IGeneralResponse {
    result: Iearning[];
}
////////////////////  ----- Pay Month  HELPER -----  /////////////////////////
export interface IPayMonth {
    PayMonthNo: string;
}
export interface IPayMonthResponse extends IGeneralResponse {
    result: IPayMonth[];
}
export interface Itaxsaving {
    taxsaving: number;
    taxSavingCode: string;
    taxSavingDesc: string;
}
export interface ItaxsavingResponse extends IGeneralResponse {
    result: Itaxsaving[];
}
/////////////////////////////////////////
export interface ILeave {
    leaveId: number;
    leaveCode: string;
    leaveDesc: string;
}
export interface ILeaveResponse extends IGeneralResponse {
    result: ILeave[];
}
////////////////////  ----- Outside Income HELPER -----  /////////////////////////
export interface IOutsideCode {
    OutsideCodeNo: string;
}
export interface IOutsideIncomeCodeResponse extends IGeneralResponse {
    result: IOutsideCode[];
}
///////////////////////// Outside Saving Code//////////////////////////////////
export interface IOutsideSaving {
    OutsideSavingCodeNo: string;
}
export interface IOutsideSavingResponse extends IGeneralResponse {
    result: IOutsideSaving[];
}
///////////////////////// Leave Opening Balance//////////////////////////////////
export interface ILeaveOpening {
    LeaveOpeningNo: string;
}
export interface ILeaveOpeningResponse extends IGeneralResponse {
    result: ILeaveOpening[];
}
/////////////////////////////////////////////////////////////
export interface ISanctionalCal {
    sanctionAmt: number,
    netLoanPay: number,
    maxSanctionAmt: number,
    maxTimes: number
}
export interface ISanctionalCalResponse extends IGeneralResponse {
    result: ISanctionalCal;
}
export interface IUserGroupItem {
    id: number;
    description: string;
}
export interface IUserGroupItemResponse extends IGeneralResponse {
    result: IUserGroupItem[];
}
export interface IUnitName {
    unitId: number,
    unitName: string,
    unitCode: string,
    shortName: string,
    description: string
}
export interface IUnitNameResponse extends IGeneralResponse {
    result: IUnitName[];
}
export interface IModuleItem {
    id: number;
    description: string;
}
export interface IModuleItemResponse extends IGeneralResponse {
    result: IModuleItem[];
}
export interface IUserGroupItem {
    uGrp_Id: number;
    uGrp_Name: string;
}
export interface IUserGroupResponse extends IGeneralResponse {
    result: IUserGroupItem[];
}
export interface ILocationName {
    id: number,
    lockerLocation: string,
    lockerAlias: string
}
export interface ILocationNameResponse extends IGeneralResponse {
    result: ILocationName[];
}
export interface ILockerTypeName {
    id: number,
    lockerType: string,
    ratePerYear: number,
    serviceTax: number,
}
export interface ILockerTypeNameResponse extends IGeneralResponse {
    result: ILockerTypeName[];
}
export interface ITaxGroupName {
    id: number,
    taxGroup: string,
}
export interface ITaxGroupNameResponse extends IGeneralResponse {
    result: ITaxGroupName[];
}
///////////////////////////Item Sub Group GST Rate//////////////////////////////////
export interface IItemGroupGSTRate {
    id: number,
    sgCode: string,
    sgName: string,
    subGrpType: string
}
export interface IItemGroupGSTRateResponse extends IGeneralResponse {
    result: IItemGroupGSTRate;
}
///////////////////////////Pay Head //////////////////////////////////
export interface IPayHead {
    id: number,
    payHead: string,
    payAmt: number
}
export interface IPayHeadResponse extends IGeneralResponse {
    result: IPayHead;
}
///////////////////////////Member Type //////////////////////////////////
export interface IMemberType {
    id: number,
    memberType: string,
    subscriptionApp: boolean
}
export interface IMemberTypeResponse extends IGeneralResponse {
    result: IMemberType;
}
/////////////////////////// Relation Helper //////////////////////////////////
export interface IRelation {
    id: number,
    relation_Name: string
}
export interface IRelationHelperResponse extends IGeneralResponse {
    result: IRelation[];
}
/////////////////////////// Pay Head Helper //////////////////////////////////
export interface IPayHead {
    id: number,
    payHead: string,
    payAmt: number
}
export interface IPayHeadHelperResponse extends IGeneralResponse {
    result: IPayHead[];
}
///////////////////////////Id Proof //////////////////////////////////
export interface IIdProof {
    id: number,
    iD_Name: string
}
export interface IIdProofResponse extends IGeneralResponse {
    result: IIdProof;
}
///////////////////////////Issue Type //////////////////////////////////
export interface IIssueType {
    ind: number,
    issueType: string,
    issueTypeValue: string
}
export interface IIssueTypeResponse extends IGeneralResponse {
    result: IIssueType;
}
/////////////////////////// Received By //////////////////////////////////
export interface IRecptTypePayload {
    fromName: string
}
export interface IRecptType {
    recvByVal: string,
    recvByTxt: string
}
export interface IRecptTypeResponse extends IGeneralResponse {
    result: IRecptType;
}
/////////////////////////// Bank  //////////////////////////////////
export interface IBankType {
    id: number,
    bankName: string,
    bankCode: string,
    bankAlias: string,
    bankAcNo: string
}
export interface IBankTypeResponse extends IGeneralResponse {
    result: IBankType;
}
///////////////////////////Issue Type //////////////////////////////////
export interface IIssueType {
    ind: number,
    issueType: string,
    issueTypeValue: string
}
export interface IIssueTypeResponse extends IGeneralResponse {
    result: IIssueType;
}
///////////////////////////UOM //////////////////////////////////
export interface IUom {
    id: number,
    uomName: string,
    uomShort: string
}
export interface IUomResponse extends IGeneralResponse {
    result: IUom;
}
///////////////////////////Group Name//////////////////////////////////
export interface IGroupName {
    id: number,
    sgCode: string,
    sgName: string,
    subGrpType: string
}
export interface IGroupNameResponse extends IGeneralResponse {
    result: IGroupName[];
}
///////////////////////////Item Helper//////////////////////////////////
export interface IItemName {
    row_Id: number,
    itemCode: string,
    itemName: string,
    itemShort: string,
    itemType: string,
    activate: string,
}
export interface IItemNameResponse extends IGeneralResponse {
    result: IItemName[];
}
///////////////////////////Reason Helper//////////////////////////////////
export interface IReason {
    id: number,
    reason: string
}
export interface IIReasonResponse extends IGeneralResponse {
    result: IReason[];
}
/////////////////////////// Primary Member Helper //////////////////////////////////
export interface IMemberName {
    row_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    address_Res: string,
    pinCode: string,
    location: string,
    landNo: string,
    sNm: string,
    fNm: string
}
export interface IMemberNameResponse extends IGeneralResponse {
    result: IMemberName[];
}
/////////////////////////// Member Helper For Issue Card //////////////////////////////////
export interface IAutoSuggestionPayloadForCardIssue {
    critaria: string
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
export interface IIssueCardGroupPayload extends IAutoSuggestionPayloadForCardIssue {
}
export interface ICardIssueMemberName {
    row_Id: number,
    mem_Code: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: string,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: number
}
export interface ICardIssueMemberNameResponse extends IGeneralResponse {
    result: ICardIssueMemberName[];
}
///////////////////////////JA Member Helper//////////////////////////////////
export interface IJAMemberName {
    row_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    sNm: string,
    address_Res: string,
    pinCode: string,
    landNo: string,
    mobNo: string
}
export interface IJAMemberNameResponse extends IGeneralResponse {
    result: IJAMemberName[];
}
///////////////////////////JA Member Search Helper//////////////////////////////////
export interface IJAMemberDetails {
    row_Id: number,
    formNo: string,
    jCardNo: string,
    session: string,
    jCardSlno: number,
    jfNm: string,
    jlNm: string,
    memberName: string,
    dob: string,
    ageYr: number,
    ageMth: number,
    ageDy: number,
    totAge: string,
    sex: string,
    swimCat: string,
    swimCatText: string,
    swimmingSince: string,
    timeSlot: string,
    address_Res: string,
    pinCode: string,
    nomineeNm: string,
    nomRel_Id: number,
    mobNo: string,
    landNo: string,
    studOrNot: string,
    occupation: string,
    institution: string,
    class: string,
    docNm: string,
    docRNo: string,
    remarks: string,
    rcptNo: string,
    active: string,
    inActive_Remarks: string,
    add_By: string,
    add_Time: string,
    edit_Time: string,
    form_Date: string,
    primary_Mem_Code: string,
    primaryMemberName: string,
    ref_Mem_Id: number,
    refMemCode: string
}
export interface IJAMemberDetailsResponse extends IGeneralResponse {
    result: IJAMemberDetails[];
}
///////////////////////////Item Recipe Helper//////////////////////////////////
export interface IItemRecipeName {
    row_Id: number,
    itemCode: string,
    sgName: string,
    itemName: string,
    activate: string,
    itemType: string,
    isDiscAllowed: boolean,
    isRecipeEnable: boolean,
    recipeType: string,
    discAllow: string,
    recipeEnable: string,
    unit: number
}
export interface IItemRecipeNameResponse extends IGeneralResponse {
    result: IItemRecipeName[];
}
///////////////////////////Charge Helper//////////////////////////////////
export interface IChargeName {
    id: number,
    chargeDescription: string
}
export interface IChargeNameResponse extends IGeneralResponse {
    result: IChargeName[];
}
///////////////////////////Caterer Helper//////////////////////////////////
export interface ICatererName {
    id: number,
    catererName: string,
    catererType: string,
    aliasName: string
}
export interface ICatererNameResponse extends IGeneralResponse {
    result: ICatererName;
}
///////////////////////////Hall Helper//////////////////////////////////
export interface IHallName {
    id: number,
    hallAlias: string,
    hallName: string,
    hall_Type: string
}
export interface IHallNameResponse extends IGeneralResponse {
    result: IHallName;
}
///////////////////////////Uom Helper//////////////////////////////////
export interface IUomName {
    id: number,
    uomName: string,
    uomShort: string
}
export interface IUomNameResponse extends IGeneralResponse {
    result: IUomName;
}
/////////////////////////// Item Search Helper//////////////////////////////////
export interface IAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
/////////////////////////// JA MEMBER Search Helper//////////////////////////////////
export interface IJAAutoSuggestionPayload {
    session: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
/////////////////////////// Item Recipe Search Helper//////////////////////////////////
export interface IAutoSuggestionPayloadItemRecipe {
    recipeType: string,
    caterer_Id: number,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////Locker Status Helper//////////////////////////////////
export interface ILocStatusName {
    lockerStatus: string
}
export interface ILocStatusNameResponse extends IGeneralResponse {
    result: ILocStatusName;
}
/////////////////////////// Locker Search Helper//////////////////////////////////
export interface ILockerMasterAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////Locker Helper//////////////////////////////////
export interface ILockerName {
    loc_Code: String,
    activate: string,
    row_Id: number,
    oldNo: string,
    lockerTypeId: number,
    loc_Type: string,
    loc_Location_Alias: string,
    loc_Location_Name: string,
    loc_Status: string,
    lockerLocationId: number
}
export interface ILockerNameResponse extends IGeneralResponse {
    result: ILockerName[];
}
//////////////////////////////////////////////// Reason Type //////////////////////////////////////////////////////////////////
export interface IReasonType {
    id: number,
    reasonType: string,
}
export interface IReasonTypeResponse extends IGeneralResponse {
    result: IReasonType;
}
//////CLUB PARAMETER///////
export interface IClubMemberType {
    id: number,
    memberType: string,
    subscriptionApp: boolean
}
export interface IMemberTypeResponse extends IGeneralResponse {
    result: IClubMemberType;
}
export interface IMemPayHead {
    id: number,
    payHead: string,
    payAmt: number
}
export interface IMemPayHeadResponse extends IGeneralResponse {
    result: IMemPayHead[];
}
export interface IUomLiq {
    id: number,
    uomName: string,
    uomShort: string
}
export interface IIUomLiqResponse extends IGeneralResponse {
    result: IUomLiq[];
}
export interface ICaterer {
    id: number,
    catererName: string,
    catererType: string,
    aliasName: string
}
export interface ICatererResponse extends IGeneralResponse {
    result: ICaterer[];
}
export interface ICanteenCat {
    id: number,
    catererName: string,
    catererType: string,
    aliasName: string
}
export interface ICanteenCatResponse extends IGeneralResponse {
    result: ICanteenCat[];
}
export interface ISusMemCode {
    row_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    address_Res: string,
    pinCode: string,
    location: string,
    landNo: string,
    sNm: string
}
export interface ISusMemCodeResponse extends IGeneralResponse {
    result: ISusMemCode[];
}
/////////////////////////////CLUB PARAMETER//////////////////////////////
///////////////////////////Member Helper//////////////////////////////////
export interface IMemberLocker {
    row_Id: number,
    mem_Code: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    mem_Type: number,
    memberName: string,
    memberType: string
}
export interface IIMemberLockerResponse extends IGeneralResponse {
    result: IMemberLocker[];
}
///////////////////////////Swimmer Member Helper//////////////////////////////////
export interface IMemberSwimmer {
    row_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    address_Res: string,
    pinCode: string,
    location: string,
    landNo: string,
    sNm: string
}
export interface IMemberSwimmerResponse extends IGeneralResponse {
    result: IMemberSwimmer[];
}
/////////////////////////// Member Search Helper//////////////////////////////////
export interface IMemberLockerAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
/////////////////////////// Swimmer Member Search Helper//////////////////////////////////
export interface ISwimmerMemberAutoSuggestionPayload {
    session: string;
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////Member Locker Member Search Helper//////////////////////////////////
export interface ILockerMemMasterAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////Member Locker Member Helper//////////////////////////////////
export interface ILockerMember {
    row_Id: number,
    loc_Code: string,
    loc_Location_Name: string,
    loc_Type: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    // oldNo: string,
}
export interface ILockerMemberResponse extends IGeneralResponse {
    result: ILockerMember[];
}
///////////////////////////Member Opening Balance Helper//////////////////////////////////
export interface IMemOpenBal {
    row_Id: number,
    mem_Code: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: string,
    address_Res: string,
    mobNo: string,
    cautionMoney: number
}
export interface IMemOpenBalResponse extends IGeneralResponse {
    result: IMemOpenBal[];
}
/////////////////////////// Member Opening Balance Search Helper//////////////////////////////////
export interface IMemberOpeningBalAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////Member Master Image Generate//////////////////////////////////
// Define the payload interface for the API call
export interface IImagePayload {
    mem_Id: number;
}
// Define the response interface for the API call
export interface IImageResponse {
    result: {
        mem_Picture: string;
        mem_Sig: string;
    };
}
///////////////////////////Admission Of Junior Associate Image Generate//////////////////////////////////
// Define the payload interface for the API call
export interface IJAImagePayload {
    jaMem_Id: number;
}
// Define the response interface for the API call
export interface IJAImageResponse {
    result: {
        jaMem_Picture: string
    };
}
///////////////////// ADMISSION FORM PIC //////////////////
// Define the payload interface for the API call
export interface IADMImagePayload {
    swimBookId: number;
}
// Define the response interface for the API call
export interface IADMImageResponse {
    result: {
        jaMem_Picture: string
    };
}
///////////////////////////Subscription Helper//////////////////////////////////
export interface ISubscription {
    subsAmt: number,
    servTaxPerc: number,
    eCess: number,
    heCess: number,
    netAmnt: number
}
export interface ISubscriptionResponse extends IGeneralResponse {
    result: ISubscription[];
}
///////////////////////////Receipt Helper//////////////////////////////////
export interface IReceiptDate {
    bDay: string
}
export interface IReceiptDateResponse extends IGeneralResponse {
    result: IReceiptDate;
}
/////////////////////////////PRIMARY MEMBER CODE//////////////
export interface IPrimaryMemCodeFormPayload {
    session: string,
    primary_Mem_Code: string
}
export interface IPrimaryMemCode {
    cardNo: string,
    fineAmount: number,
    memDetails: any,
    subsChk: number,
    session: string,
    mem_Id: number,
    instNo: 1,
    locker_Id: number,
    loc_Code: string,
    instAmt: string,
    fineAmt: number,
    lineRemarks: string,
    servTaxPerc: string,
    servTaxAmt: string,
    ecPerc: number,
    ecAmt: string,
    hecPerc: number,
    hecAmt: string,
    servTaxPerTotal: string,
    servTaxAmtTotal: string,
    netInstAmt: string,
    bal_Due: string,
    relationNo: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    memberType: number,
    payHead_Id: number,
    payHead: string,
    memberTypeT: string,
    mem_Type: number,
    mem_Name: string,
    couple_Mem_Id: number,
    couple_MemCode: string,
    couple_MemName: string
}
export interface IPrimaryMemCodeResponse extends IGeneralResponse {
    result: IPrimaryMemCode;
}
////////////////////////////////// MEMBER DONATION PRIMARY MEMBER CODE //////////////////////////////////
export interface IMemDonPrimaryMemCodeFormPayload {
    session: string,
    primary_Mem_Code: string
}
export interface IMemDonPrimaryMemCode {
    fineAmount: number,
    memDetails: any,
    subsChk: number,
    row_Id: string,
    session: string,
    mem_Id: number,
    instNo: number,
    locker_Id: number,
    loc_Code: string,
    instAmt: number,
    fineAmt: number,
    lineRemarks: string,
    servTaxPerc: number,
    servTaxAmt: number,
    ecPerc: number,
    ecAmt: number,
    hecPerc: number,
    hecAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    recd_Amt: number,
    bal_Due: number,
    relationNo: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    cardNo: string,
    memberType: number,
    payHead_Id: number,
    payHead: string,
    memberTypeT: string,
    mem_Type: number,
    mem_Name: string,
    couple_Mem_Id: number,
    couple_MemCode: string,
    couple_MemName: string,
    active: string
}
export interface IMemDonPrimaryMemCodeResponse extends IGeneralResponse {
    result: IMemDonPrimaryMemCode;
}
///////////////////////////////////////////////////// HALL NAME FROM API //////////////////////////////////
export interface IHallNameApiFormPayload {
    compName: string
}
export interface IHallNameApi {
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
export interface IHallNameApiResponse extends IGeneralResponse {
    result: IHallNameApi;
}
///////////////////////////////////////////////////// CATERER HELPER FOR KOT ENTRY //////////////////////////////////
export interface ICatererKotEntryFormPayload {
    row_Id: number
}
export interface ICatererKotEntry {
    id: number,
    catererName: string,
    catererType: string,
    aliasName: string
}
export interface ICatererKotEntryResponse extends IGeneralResponse {
    result: ICatererKotEntry[];
}
/////////////////////////////////////// Waiter Helper /////////////////////////////////////////////////
export interface IWaiter {
    id: number,
    waiterName: string,
    category: string
}
export interface IWaiterResponse extends IGeneralResponse {
    result: IWaiter[];
}
///////////////////////////////////////////////////// KOT MEMBER DETAILS FROM CARD NUMBER //////////////////////////////////
export interface IMemDltFromCardNoFormPayload {
    cardNo: string;
    session: string;
}
export interface IMemDltFromCardNo {
    firstData: IMemData[];
    memberBalance: IMemberBalance;
}
export interface IMemDltFromCardNoResponse extends IGeneralResponse {
    result: IMemDltFromCardNo;
}
export interface IMemData {
    primary_Mem_Id: number;
    mem_ID: number;
    row_Id: number
    primary_Mem_Code: string;
    mem_Code: string;
    memberType: string;
    mem_Type: number;
    salutation: string;
    fNm: string;
    sNm: string;
    name: string,
    address_Res: string;
    address_Off: string;
    location: string;
    pinCode: string;
    sex: string;
    dob: string; // Could be Date type depending on how you process it
    ageYr: number;
    ageMth: number;
    ageDy: number;
    totAge: string;
    contact: string;
    bloodGrp: string;
    cardNo: string;
    cardType: string;
    presentAmt: number;
    emailId: string;
    uiNo: string;
    idProof_Id: number;
    idNo: string;
    occu: string;
    mobNo: string;
    landNo: string;
    mem_Pic_Path: string;
    mem_Pic_Folder: string;
    mem_Pic_Name: string;
    dPic: string;
    picEntryDt: string; // Could be Date type
    picEntryType: string;
    mem_Sig_Path: string;
    mem_Sig_Folder: string;
    mem_Sig_Name: string;
    dSig: string;
    sigEntryDt: string; // Could be Date type
    sigEntryType: string;
    active: string;
    activity_Remarks: string;
    inActiveType: string;
    add_Time: string; // Could be Date type
    edit_Time: string; // Could be Date type
    memName: string;
    status_: string;
    issueDate: string; // Could be Date type
    issueYr: string;
}
export interface IMemberBalance {
    balance: number;
}
///////////////////////////////////////////////////// UNSETTLED BILL FORMARRAY SHOW DATA INTERFACE //////////////////////////////////////
export interface IUnsettledBillApiFormPayload {
    hallId: number,
    memCode: string,
    location: string
}
export interface IUnsettledBillApi {
    mem_Code: string,
    name: string,
    orderNo: string,
    waiterName: string,
    totalNet_AfterRo: number,
    waiter_Row_Id: number,
    memCardCb: number,
    hall_Id: number,
    hall_Name: string,
}
export interface IUnsettledBillApiResponse extends IGeneralResponse {
    result: IUnsettledBillApi[];
}
///////////////////////////////////////////////////// KOT NO GENERATE //////////////////////////////////////
export interface IKOTApiFormPayload {
    catererAlias: string,
    kotPrefix1: string,
    kotPrefix2: string
}
export interface IKOTApi {
    result: any
}
export interface IKOTApiResponse extends IGeneralResponse {
    result: IKOTApi;
}
///////////////////////////////////////////////////// KOT BILL DISPLAY //////////////////////////////////////
export interface IKOTBillDisplayFormPayload {
    hallId: number,
    businessDate: string
}
export interface IKOTBillDisplay {
    mem_Code: string,
    name: string,
    billNo: string,
    orderNo: string,
    waiterName: string,
    totalNet_AfterRo: number,
    cancel: string
}
export interface IKOTBillDisplayResponse extends IGeneralResponse {
    result: IKOTBillDisplay[];
}
///////////////////////////////////////////////////// OTHER  BILLING KOT  DISPLAY //////////////////////////////////////
export interface IKOTOTHERBillDisplayFormPayload {
    hallId: number,
    businessDate: string
    memId: 0
}
export interface IKOTOTHERBillDisplay {
    mem_Code: string,
    name: string,
    billNo: string,
    orderNo: string,
    waiterName: string,
    totalNet_AfterRo: number,
    cancel: string,
    billDate: string,
    orderDate: string,
}
export interface IKOTOTHERBillDisplayResponse extends IGeneralResponse {
    result: IKOTOTHERBillDisplay[];
}
///////////////////////////////////////////////////// CANCEL KOT BILL VOID //////////////////////////////////////
export interface IKOTBillVoidFormPayload {
    orderNo: string,
    billNo: string,
    voidReason: number,
    voidUser: string,
    add_By: string,
    add_Comp_IP: string,
    isRestaurantOnly: boolean,
    voidUserPwd: string,
}
export interface IKOTBillVoid {
    result: any
}
export interface IKOTBillVoidResponse extends IGeneralResponse {
    result: IKOTBillVoid;
}
///////////////////////////////////////////////////// CANCEL KOT BILL Regenerate //////////////////////////////////////
export interface IKOTBillRegenFormPayload {
    orderDate: string,
    billNo: string,
    voidReason: number,
    voidUser: string,
    add_By: string,
    add_Comp_IP: string,
    isRestaurantOnly: boolean
    voidUserPwd: string,
}
export interface IKOTBillRegen {
    result: any
}
export interface IKOTBillRegenResponse extends IGeneralResponse {
    result: IKOTBillRegen;
}
///////////////////////////////////////////////////// KOT ITEM SEARCH HELPER //////////////////////////////////////
export interface IKOTItemApiFormPayload {
    catererId: number,
    hallId: number,
    itemId: number,
    businessDate: string,
    uomId: number
}
export interface IKOTItemApi {
    item_Id: number,
    itemName: string,
    itemCode: string,
    isRecipeEnable: boolean,
    recipeType: string,
    uomShort: string,
    measureInMl: number,
    isRestaurantOnly: boolean,
    uom_Id: number,
    caterer_Id: number,
    rate: number,
    tax_Code: string,
    taxRate: number,
    subGrpType: string,
    isTaxable: boolean,
    offerRowId: number,
    charge_Qty: number,
    free_Qty: number,
    offerType: string,
    price_Disc_Rate: number,
    priceDiscType: string,
    offerConfirm: boolean
}
export interface IKOTItemApiResponse extends IGeneralResponse {
    result: IKOTItemApi[];
}
///////////////////////////GetHelpHallByComputer//////////////////////////
export interface IHallByComputerFormPayload {
    compName: string
}
export interface IHallByComputer {
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
export interface IHallByComputerResponse extends IGeneralResponse {
    result: IHallByComputer;
}
///////////////////////////////////////////////////// KOT ITEM SEARCH HELPER For Other Billing //////////////////////////////////////
export interface IKOTOTHERItemApi {
    item_id: number,
    itemName: string,
    uomShort: string,
    uom_Id: number,
    rate: number,
    isTaxable: boolean,
    taxRate: number,
    sgst: number
}
export interface IKOTOTHERItemApiResponse extends IGeneralResponse {
    result: IKOTOTHERItemApi[];
}
//////////////////////////////////////////// USER CHECK //////////////////////////////
export interface IUserCheckFormPayload {
    userName: string,
    userPW: string
}
export interface IUserCheck {
    result: any
}
export interface IUserCheckResponse extends IGeneralResponse {
    result: IUserCheck;
}
/////////////////////////////PRIMARY MEMBER CODE(RUNNING MEMBER SUBSCRIPTION)//////////////////////////
export interface IRunPrimaryMemCodeFormPayload {
    session: string,
    primary_Mem_Code: string
}
export interface IRunPrimaryMemCode {
    primary_Mem_Id: number,
    cardNo: string,
    fineAmount: number,
    memDetails: any,
    subsChk: number,
    row_Id: string,
    session: string,
    mem_Id: number,
    instNo: number,
    locker_Id: number,
    loc_Code: string,
    instAmt: number,
    fineAmt: number,
    lineRemarks: string,
    servTaxPerc: number,
    servTaxAmt: number,
    ecPerc: number,
    ecAmt: number,
    hecPerc: number,
    hecAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    recd_Amt: number,
    bal_Due: number,
    relationNo: string,
    primary_Mem_Code: string,
    mem_Code: string,
    memberType: number,
    payHead_Id: number,
    payHead: string,
    memberTypeT: string,
    mem_Type: number,
    mem_Name: string,
    couple_Mem_Id: number,
    couple_MemCode: string,
    couple_MemName: string,
    active: string
}
export interface IRunPrimaryMemCodeResponse extends IGeneralResponse {
    result: IRunPrimaryMemCode;
}
//////////////////////////////PAYMENT TYPE//////////////
export interface IPaymentTypeFormPayload {
    fromName: string
}
export interface IPaymentType {
    recvByVal: string,
    recvByTxt: string
}
export interface IPaymentTypeResponse extends IGeneralResponse {
    result: IPaymentType;
}
/////////////////////////////GetHelpValidateSuspNo(RUNNING MEMBER SUBSCRIPTION)//////////////////////////
export interface IRunValidateSuspNoFormPayload {
    cardNo: string,
}
/////////////////////////// GetHelpMemberForCardBalReturn Search Helper//////////////////////////////////
export interface IGetHelpMemberForCardBalReturnAutoSuggestionPayload {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IGetHelpMemberForCardBalReturn {
    rowId: number,
    memCode: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: string,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: number
}
export interface IGetHelpMemberForCardBalReturnResponse extends IGeneralResponse {
    result: IGetHelpMemberForCardBalReturn[];
}
///////////////////////////GetHelpMemInfoFrmCardNoForBalReturn//////////////////////////
export interface IMemInfoFrmCardNoForBalReturnFormPayload {
    cardNo: string
}
export interface IMemInfoFrmCardNoForBalReturn {
    rowId: number,
    memCode: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: string,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: number
}
export interface IMemInfoFrmCardNoForBalReturnResponse extends IGeneralResponse {
    result: IMemInfoFrmCardNoForBalReturn;
}
///////////////////////////GetHelpMemDtlFromCardNo//////////////////////////
export interface IMemDtlFromCardNoFormPayload {
    cardNo: string,
    session: string
}
export interface IMemDtlFromCardNo {
    firstData: any,
    memberBalance: {
        balance: number
    }
}
export interface IMemDtlFromCardNoResponse extends IGeneralResponse {
    result: IMemDtlFromCardNo;
}
////////////////////////////RECEIPT NO(GetHelpTranInstallCollectionSuspence)//////////////////////////
export interface ITransInstColSusFormPayload {
    recptNo: string
}
export interface ITransInstColSus {
    mainData: any,
    detailData: any,
    paymentDetails: any,
}
export interface ITransInstColSusResponse extends IGeneralResponse {
    result: ITransInstColSus;
}
///////////////////////////GetHelpSuspenceMemDtl//////////////////////////
export interface ISuspenseMemDetail {
    suspenseMemId: number,
    suspMemberName: string,
    suspMem_Code: string
}
export interface ISuspenseMemDetailResponse extends IGeneralResponse {
    result: ISuspenseMemDetail;
}
///////////////////////////GetHelpSwimmerDtlFromCardNoCardTopUp//////////////////////////
export interface ISwimmerDtlFromCardNoFormPayload {
    cardNo: string,
    session: string
}
export interface ISwimmerDtlFromCardNo {
    firstData: any,
    memberBalance: {
        balance: number
    }
}
export interface ISwimmerDtlFromCardNoResponse extends IGeneralResponse {
    result: ISwimmerDtlFromCardNo;
}
///////////////////////////GetHelpSwimMemForCardBalReturn SEARCH HELPER//////////////////////////
export interface IAutoSuggestionPayloadPayloadSwimMemForCardBalReturn {
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimMemForCardBalReturnGroupPayload extends IAutoSuggestionPayloadPayloadSwimMemForCardBalReturn {
}
export interface ISwimMemForCardBalReturn {
    row_Id: number,
    mem_Code: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: number,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: string
}
export interface ISwimMemForCardBalReturnResponse extends IGeneralResponse {
    result: ISwimMemForCardBalReturn[];
}
///////////////////////////GetHelpSwimMemInfoFrmCardNoForBalReturn//////////////////////////
export interface ISwimMemInfoFrmCardNoForBalReturnFormPayload {
    cardNo: string,
    finYear: string
}
export interface ISwimMemInfoFrmCardNoForBalReturn {
    row_Id: number,
    mem_Code: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: number,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: string
}
export interface ISwimMemInfoFrmCardNoForBalReturnResponse extends IGeneralResponse {
    result: ISwimMemInfoFrmCardNoForBalReturn;
}
///////////////////////////GetHelpIssueTypeSwimmer//////////////////////////
export interface IIssueTypeSwimmer {
    ind: number,
    issueType: string,
    issueTypeValue: string
}
export interface IIssueTypeSwimmerResponse extends IGeneralResponse {
    result: IIssueTypeSwimmer;
}
/////////////////////////// Member Helper For Issue Card (SEASONAL SWIMMER)//////////////////////////////////
export interface IAutoSuggestionPayloadForCardIssueSwimmer {
    critaria: string,
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IIssueCardSwimmerGroupPayload extends IAutoSuggestionPayloadForCardIssueSwimmer {
}
export interface ICardIssueSwimmerMemberName {
    row_Id: number,
    mem_Code: string,
    memName: string,
    cardNo: string,
    sex: string,
    totAge: number,
    address_Res: string,
    mobNo: string,
    cautionMoney: number,
    memberType: string,
    mem_Type: string
}
export interface ICardIssueSwimmerMemberNameResponse extends IGeneralResponse {
    result: ICardIssueSwimmerMemberName[];
}
///////////////// Cancel Issue ////////////////////////
export interface IPendingIssueByBillNoIssuePayload {
    billNo: string
}
///////////////// Cancel Issue ////////////////////////
export interface ICancelIssueHelperPayload {
    recptDt: Date
}
///////////////// Cancel Issue ////////////////////////
export interface IPendingIssueByBillNoIssuePayload {
    billNo: string
}
///////////////////////////////Reason///////////////////////////////
export interface IReason {
    id: number,
    reason: string,
}
export interface IReasonResponse extends IGeneralResponse {
    result: IReason;
}
///////////////////////////Item For Bevco Helper//////////////////////////////////
export interface IItemForBevco {
    row_Id: number,
    itemCode: string,
    itemName: string
}
export interface IItemForBevcoResponse extends IGeneralResponse {
    result: IItemForBevco[];
}
///////////////////////////Bevco Item Helper//////////////////////////////////
export interface IBevcoItem {
    item_code: string,
    item_name: string
    gtin: string,
}
export interface IBevcoItemResponse extends IGeneralResponse {
    result: IBevcoItem[];
}
///////////////////////////Hall Master Helper//////////////////////////////////
export interface IMemberHall {
    id: number,
    hallAlias: string,
    hallName: string,
    hall_Type: string
}
export interface IMemberHallResponse extends IGeneralResponse {
    result: IMemberHall[];
}
//////////////////////////////CHANGE PRIMARY MEMBER////////////
export interface IChangePrimaryMemFormPayload {
    primary_Mem_Code: string,
}
export interface IChangePrimaryMem {
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    row_Id: number,
    mem_Code: string,
    memberName: string,
    memberType: string,
    main_Mem: string,
    main_Mem_Id: number,
    active: string,
    mem_Type: number
}
export interface IChangePrimaryMemResponse extends IGeneralResponse {
    result: IChangePrimaryMem;
}
/////////////////////////////////////////////GetHelpMachine//////////////////////////
export interface IMachineApi {
    machine: string,
}
export interface IMachineApiResponse extends IGeneralResponse {
    result: IMachineApi[];
}
/////////////////////////////////////////////GetHelpAllMembers/GetHelpAllSwimingMembers//////////////////////////
export interface IAllMembers {
    select: boolean,
    row_Id: number,
    mem_Code: string,
    memName: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    primaryMemCode: string
}
export interface IAllMembersResponse extends IGeneralResponse {
    result: IAllMembers[];
}
////////////////////////////// Item Sub Group          ////////////
export interface IItemSubGroupFormPayload {
    subGrpType: string,
}
export interface IItemSubGroup {
    id: number,
    sgCode: string,
    sgName: string,
    subGrpType: string
}
export interface IItemSubGroupResponse extends IGeneralResponse {
    result: IItemSubGroup;
}
////////////////////////////////////////////////////GetHelpSwimMemCatagory/////////////////////////////
export interface ISwimMemCatagory {
    row_Id: number,
    category: string,
}
export interface ISwimMemCatagoryResponse extends IGeneralResponse {
    result: ISwimMemCatagory;
}
////////////////////////////////////////////////////GetHelpSwimMemNominee/////////////////////////////
export interface ISwimMemNominee {
    row_Id: number,
    nomineeRel: string,
}
export interface ISwimMemNomineeResponse extends IGeneralResponse {
    result: ISwimMemNominee;
}
///////////////////////////Item Sub Group GST Rate//////////////////////////////////
export interface IItemSubGroupGroupGSTRate {
    sgCode: string,
    sgName: string,
}
export interface IItemSubGroupGSTRateResponse extends IGeneralResponse {
    result: IItemSubGroupGroupGSTRate;
}
////////////////////////////////GetHelpMember///////////////////////////////
export interface IAutoSuggestionPayloadMember {
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IHelpMemberGroupPayload extends IAutoSuggestionPayloadMember {
}
export interface IHelpMember {
    row_Id: number,
    mem_Code: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    mem_Type: number,
    memberName: string,
    memberType: string,
    emailId: string,
    mobNo: string,
}
export interface IHelpMemberResponse extends IGeneralResponse {
    result: IHelpMember[];
}
//////////////////////////// GetHelpLockerListForMovementRpt//////////////////
export interface ILockerMovement {
    select: boolean,
    loc_Code: string,
    loc_Location_Name: string,
    loc_Type: string
}
export interface ILockerMovementResponse extends IGeneralResponse {
    result: ILockerMovement[];
}
/////////////////////////// GetHelpOnlyPrimaryMember Search Helper//////////////////////////////////
export interface IOnlyPrimaryMemAutoSuggestionPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string
}
///////////////////////////GetHelpOnlyPrimaryMember//////////////////////////////////
export interface IOnlyPrimaryMem {
    row_Id: number,
    mem_Code: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    mem_Type: number,
    memberName: string
}
export interface IOnlyPrimaryMemResponse extends IGeneralResponse {
    result: IOnlyPrimaryMem[];
}
///////////////////////////GetHelpSwimFormColor//////////////////////////////////
export interface ISwimFormColor {
    id: number,
    form_Name: string,
    form_Code: string
}
export interface ISwimFormColorResponse extends IGeneralResponse {
    result: ISwimFormColor[];
}
////////////////////////////////////GetHelpSwimTimeSlot//////////////
export interface ITimeSlot {
    batchTimeId: number;
    formCatId: number;
    batchTimeing: string;
}
export interface ITimeSlotResponse extends IGeneralResponse {
    result: ITimeSlot;
}
//////////////////////////////GetHelpAgeWiseFormCat////////////
export interface IAgeWiseFormCatFormPayload {
    ageYear: number,
}
export interface IAgeWiseFormCat {
    id: number,
    form_Name: string,
    form_Code: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
    form_Prefix: string
}
export interface IAgeWiseFormCatResponse extends IGeneralResponse {
    result: IAgeWiseFormCat;
}
//////////////////////////////GetHelpSwimForm////////////
export interface ISwimFormPayload {
    finYear: string
    formNo: string,
}
export interface ISwimFormFindPayload {
    finYear: string
    formNo: string,
    BDate: string,
}
export interface ISwimForm {
    formNo: string,
    recptNo: string,
    recptDt: string,
    recptTm: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    finYear: string,
    amount: number,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    form_Name: string,
    form_Code: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number
}
export interface ISwimFormResponse extends IGeneralResponse {
    result: ISwimForm;
}
////////////////////////////////////GetHelpSwimFinYear//////////////
export interface IFinYear {
    finYear: string
}
export interface IIFinYearResponse extends IGeneralResponse {
    result: IFinYear;
}
//////////////////////////////GetHelpSwimForTimeSlot////////////
export interface ISwimForTimeSlotPayload {
    formNo: string;
    finYear: string;
}
export interface ISwimForTimeSlot {
    formNo: string;
    recptNo: string;
    recptDt: string;
    recptTm: string;
    finYear: string;
    dob: string;
    ageYear: number;
    ageMonth: number;
    ageDay: number;
    name: string;
    phoneNo: string;
    fathersName: string;
    email: string;
    formCatId: number;
    form_Name: string;
    form_Code: string;
    basic_Amt: number;
    gst_Per: number;
    gst_Amt: number;
    round_Off: number;
    total_Amt: number;
}
export interface ISwimForTimeSlotResponse extends IGeneralResponse {
    result: ISwimForTimeSlot;
}
////////////////////////////////////GetHelpSwimFinYear//////////////
export interface IFinYear {
    finYear: string
}
export interface IIFinYearResponse extends IGeneralResponse {
    result: IFinYear;
}
////////////////////////////////////GetHelpSwimFinYear//////////////
export interface IFinYear {
    finYear: string
}
export interface IIFinYearResponse extends IGeneralResponse {
    result: IFinYear;
}
///////////////////////////GetHelpSwimFormAmt//////////////////////////////////
export interface ISwimFormAmt {
    result: number
}
export interface ISwimFormAmtResponse extends IGeneralResponse {
    result: ISwimFormAmt[];
}
//////////////////////////////////////////GetHelpCanteenGrnItem/////////////////////////////
export interface ICanteenGrnItem {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uom_Id: number,
    uomShort: string,
    itemType: string
}
export interface ICanteenGrnItemResponse extends IGeneralResponse {
    result: ICanteenGrnItem[];
}
////////////////////////////////////GetHelpItemForGrn//////////////
export interface IItemForGrn {
    rowId: number,
    itemCode: string,
    itemName: string,
    groupCode: number,
    groupName: string,
    resItemName: string,
    activate: string,
    isConversionToMl: boolean,
    itemType: string,
    itemTypeShort: string
}
export interface IItemForGrnResponse extends IGeneralResponse {
    result: IItemForGrn[];
}
////////////////////////////////////GetHelpGodownParty//////////////
export interface IGodownParty {
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
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string
}
export interface IGodownPartyResponse extends IGeneralResponse {
    result: IGodownParty;
}
/////////////////////////// GetHelpItemForGdRtrnNote Search Helper//////////////////////////////////
export interface IItemForGdRtrnNoteAutoSuggestionPayload {
    session: string,
    businessDate: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemForGdRtrnNote {
    roW_ID: number,
    iteM_ID: number,
    grN_Detail_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    reS_ITEM_ID: number,
    grN_DATE: string,
    grN_NO: string,
    uomShort: string,
    cB_QTY: number,
    oB_SOURCE: string,
    qtY_IN_ML: number,
    isConversionToMl: true,
    uoM_id: number,
    uomName: string,
    measureInMl: number,
    per_Ml_Rate: number
}
export interface IItemForGdRtrnNoteResponse extends IGeneralResponse {
    result: IItemForGdRtrnNote[];
}
//////////////////////////////////////////GetHelpItemOtrMatlIssue/////////////////////////////
export interface IItemOtrMatlIssueAutoSuggestionPayload {
    session: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemOtrMatlIssue {
    iteM_ID: number,
    grN_Detail_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    grN_DATE: string,
    grN_NO: string,
    uoM_ID: number,
    uomShort: string,
    cB_QTY: number,
    oB_SOURCE: string
}
export interface IItemOtrMatlIssueResponse extends IGeneralResponse {
    result: IItemOtrMatlIssue[];
}
////////////////////////////////////GetHelpItemForResturantOb//////////////
export interface IItemForResturantOb {
    row_Id: number,
    itemName: string,
    sgCode: string,
    subGrpType: string,
    subGrpTypeT: string
}
export interface IItemForResturantObResponse extends IGeneralResponse {
    result: IItemForResturantOb;
}
//////////////////////////////////////////GetHelpItemPriceForLqr/////////////////////////////
export interface IItemPriceForLqrAutoSuggestionPayload {
    hall_Id: number
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemPriceForLqr {
    row_Id: number,
    item_Id: number,
    itemCode: string,
    itemName: string,
    uom_Id: number,
    uomShort: string,
    catererName: string,
    caterer_Id: number,
    subGrpType: string
}
export interface IItemPriceForLqrResponse extends IGeneralResponse {
    result: IItemPriceForLqr[];
}
//////////////////////////////////////////GetHelpAdjNature/////////////////////////////
export interface IAdjNature {
    adjValueMem: string,
    adjDispMem: string
}
export interface IAdjNatureResponse extends IGeneralResponse {
    result: IAdjNature;
}
/////////////////////////// GetHelpItmPriceSubGrp Search Helper//////////////////////////////////
export interface IGetHelpItmPriceSubGrp {
    row_Id: number,
    item_Id: number,
    itemCode: string,
    itemName: string,
    uom_Id: number,
    uomShort: string,
    catererName: string,
    caterer_Id: number,
    cancel: string,
    subGrpType: string
}
export interface IGetHelpItmPriceSubGrpResponse extends IGeneralResponse {
    result: IGetHelpItmPriceSubGrp[];
}
/////////////////////////// GetHelpItemForIssueToRest Search Helper//////////////////////////////////
export interface IItemForIssueToRestAutoSuggestionPayload {
    session: string,
    businessDate: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemForIssueToRest {
    roW_ID: number,
    iteM_ID: number,
    grN_Detail_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    reS_ITEM_ID: number,
    itemName: string,
    grN_DATE: string,
    grN_NO: string,
    uoM_id: number,
    uomShort: string,
    cB_QTY: number,
    oB_SOURCE: string,
    qtY_IN_ML: number,
    per_Ml_Rate: number,
    per_Ml_Rate_Purchase: number,
    isConversionToMl: boolean,
    measureInMl: number,
}
export interface IItemForIssueToRestResponse extends IGeneralResponse {
    result: IItemForIssueToRest[];
}
/////////////////////////////GetHelpMrpPerMl//////////////
export interface IMrpPerMlFormPayload {
    item_Id: number,
    caterer_Id: number,
    hall_Id: number,
    incDate: string
}
export interface IMrpPerMl {
    billNo: string,
    billDate: string,
    session: string,
    hall_Id: number,
    caterer_Id: number,
    item_Id: number,
    purRateInMl: number,
    mrpPerMlSl: number
}
export interface IMrpPerMlResponse extends IGeneralResponse {
    result: IMrpPerMl;
}
/////////////////////////// GetHelpGodownItem//////////////////////////////////
export interface IGodownItemGroup {
    roW_ID: number,
    itemCode: string,
    itemName: string
}
export interface IGodownItemGroupResponse extends IGeneralResponse {
    result: IGodownItemGroup[];
}
/////////////////////////// GetHelpGDNItemAndGroup Search Helper//////////////////////////////////
export interface IGDNItemAndGroup {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string
}
export interface IGDNItemAndGroupResponse extends IGeneralResponse {
    result: IGDNItemAndGroup[];
}
/////////////////////////// GetHelpGowdownItemGroup//////////////////////////////////
export interface IGowdownItemGroup {
    grouP_CODE: number,
    grouP_NAME: string,
    itemType: string,
    isResturantItem: boolean,
    isLiquorItem: boolean
}
export interface IGowdownItemGroupResponse extends IGeneralResponse {
    result: IGowdownItemGroup[];
}
/////////////////////////// GetHelpRecipeItm//////////////////////////////////
export interface IRecipeItmGroup {
    item_Id: number,
    item: string
}
export interface IRecipeItmGroupResponse extends IGeneralResponse {
    result: IRecipeItmGroup[];
}
/////////////////////////// GetHelpOtherItem//////////////////////////////////
export interface IOtherItemGroup {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string
}
export interface IOtherItemGroupResponse extends IGeneralResponse {
    result: IOtherItemGroup[];
}
//////////////////////////////////////////GetHelpLiqureItem/////////////////////////////
export interface ILiqureItem {
    row_Id: number,
    itemCode: string,
    itemName: string
}
export interface ILiqureItemResponse extends IGeneralResponse {
    result: ILiqureItem[];
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////GetHelpConfigEbooks////////////////////////
export interface IGetHelpConfigEbook {
    ebookCatName: string,
    ebookCode: string,
    eBookSlno: number,
    activate: string
catEBookId:string,
}
export interface IGetHelpConfigEbookResponse extends IGeneralResponse {
    result: IGetHelpConfigEbook[];
}