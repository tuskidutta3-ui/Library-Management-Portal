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
//////////////////////////// Bill Register (Hall Wise) ////////////////////////////////////////////////
export interface IBillRegisterPayload {
    fromDt: string,
    toDt: string,
    which_Criteria: string,
    which_Criteria_GR: string,
    checkFood: boolean,
    checkLiquor: boolean,
    checkMisc: boolean,
    selectHall: boolean,
    hall_Id: number,
    selectCaterar: boolean,
    caterar_Id: number
}
export interface IBillRegisterGroupResponse extends IGeneralResponse {
    result: IBillRegisterGroup[];
}
export interface IBillRegisterGroup {
    Basic_Liquor: number,
    Basic_NonTaxable: number,
    Basic_Taxable: number,
    BillDate: string,
    BillNo: string,
    CovChgAmt: number,
    Hall_Id: number,
    Hall_Name: string,
    OrderDate: string,
    OrderNo: string,
    RO_Amt: number,
    ServTaxAmt: number,
    Total_Value: number,
    VAT_Amt: number
}
////////////////////////////////////////////// Item Wise Sale (Canteen) /////////////////////////////////////////////////////
export interface IItemWiseSalePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IItemWiseSaleGroupResponse extends IGeneralResponse {
    result: IItemWiseSaleGroup[];
}
export interface IItemWiseSaleGroup {
    from: string,
    to: string,
}
////////////////////////////////////////////// Canteen Void Bill Register /////////////////////////////////////////////////////
export interface ICanteenVoidBillRegisterPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICanteenVoidBillRegisterGroupResponse extends IGeneralResponse {
    result: ICanteenVoidBillRegisterGroup[];
}
export interface ICanteenVoidBillRegisterGroup {
    from: string,
    to: string,
    choice: string
}
////////////////////////////////////////////// Subscription From Junior Associate /////////////////////////////////////////////////////
export interface ISubscriptionFromJAPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ISubscriptionFromJAGroupResponse extends IGeneralResponse {
    result: ISubscriptionFromJAGroup[];
}
export interface ISubscriptionFromJAGroup {
    choice: string,
    from: string,
    to: string,
    session: string,
    collection: string,
}
////////////////////////////////////////////// Subscription From Members /////////////////////////////////////////////////////
export interface ISubscriptionFromMembersPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ISubscriptionFromMembersGroupResponse extends IGeneralResponse {
    result: ISubscriptionFromMembersGroup[];
}
export interface ISubscriptionFromMembersGroup {
    session: string,
    choice: string,
}
////////////////////////////////////////////// Misc. Collection From Members  /////////////////////////////////////////////////////
export interface IMiscFromMemberPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMiscFromMemberGroupResponse extends IGeneralResponse {
    result: IMiscFromMemberGroup[];
}
export interface IMiscFromMemberGroup {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    searchString: string,
    wise: string,
    choice: string
}
////////////////////////////////////////////// Members TopUp Records  /////////////////////////////////////////////////////
export interface IMemberTopUpRecordPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemberTopUpRecordGroupResponse extends IGeneralResponse {
    result: IMemberTopUpRecordGroup[];
}
export interface IMemberTopUpRecordGroup {
    choice: string,
    critaria: string,
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    pMemCode: string,
    paymode: string,
    wise: string,
}
////////////////////////////////////////////// Members Card Balance  /////////////////////////////////////////////////////
export interface IMembersCardBalancePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMembersCardBalanceGroupResponse extends IGeneralResponse {
    result: IMembersCardBalanceGroup[];
}
export interface IMembersCardBalanceGroup {
    choice: string,
    pMemCode: string,
    pMemName: string,
    session: string,
    date: boolean,
    from: string,
    to: string,
    report: string
}
////////////////////////////////////////////// Caution Deposit For Temporary Card  /////////////////////////////////////////////////////
export interface ICautionMoneyCollectionGroupResponse extends IGeneralResponse {
    result: ICautionMoneyCollectionGroup[];
}
export interface ICautionMoneyCollectionGroup {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    pMemCode: string,
    mem: boolean,
}
////////////////////////////////////////////// Caution Money Refund For Membership Card  /////////////////////////////////////////////////////
export interface ICautionMoneyRefundGroupResponse extends IGeneralResponse {
    result: ICautionMoneyRefundGroup[];
}
export interface ICautionMoneyRefundGroup {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    pMemCode: string,
    mem: boolean,
}
////////////////////////////////////////////// Fine Collect For Membership Card /////////////////////////////////////////////////////
export interface IFineFromCardGroupResponse extends IGeneralResponse {
    result: IFineFromCardGroup[];
}
export interface IFineFromCardGroup {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    pMemCode: string,
    mem: boolean,
}
////////////////////////////////////////////// Collection Report /////////////////////////////////////////////////////
export interface ICollectionReportPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICollectionReportGroupResponse extends IGeneralResponse {
    result: ICollectionReportGroup[];
}
export interface ICollectionReportGroup {
    collection: string,
    session: string,
    fromDt: string,
    toDt: string,
    date: string,
    card: boolean,
    misc: boolean,
    salesum: boolean,
    type: string,
    fromTime: string, // Set initial value
    toTime: string // Set initial value
}
////////////////////////////////////////////// Daily Collection From Canteen /////////////////////////////////////////////////////
export interface ICollectionCanteenPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICollectionCanteenGroupResponse extends IGeneralResponse {
    result: ICollectionCanteenGroup[];
}
export interface ICollectionCanteenGroup {
    collection: string,
    session: string,
    fromDt: string,
    toDt: string,
    date: string,
    type: string,
    fromTime: string, // Set initial value
    toTime: string // Set initial value
}
////////////////////////////////////////////// Collection Report /////////////////////////////////////////////////////
export interface IDailyCollectionReportPayload {
    which_Criteria: string;
    sub_Criteria: string;
    session: string;
    fromDate: string;
    toDate: string;
    collectionDate: string;
    fromTm: string;
    toTm: string;
    withTopUp: boolean;
    withMiscCol: boolean;
    incSaleSum: boolean;
}
///////////////////////////////////////////// Daily Collection From Canteen /////////////////////////////////////////////////////
export interface IDailyCollectionCanteenReportPayload {
    which_Criteria: string;
    sub_Criteria: string;
    session: string;
    fromDate: string;
    toDate: string;
    collectionDate: string;
    fromTm: string;
    toTm: string;
}
////////////////////////////Swimmer Bill Register (Hall Wise) ////////////////////////////////////////////////
export interface ISwimBillRegisterPayload {
    fromDt: string,
    toDt: string,
    which_Criteria: string,
    which_Criteria_GR: string,
    checkFood: boolean,
    checkLiquor: boolean,
    checkMisc: boolean,
    selectHall: boolean,
    hall_Id: number,
    selectCaterar: boolean,
    caterar_Id: number
}
export interface ISwimBillRegisterGroupResponse extends IGeneralResponse {
    result: ISwimBillRegisterGroup[];
}
export interface ISwimBillRegisterGroup {
    Basic_Liquor: number,
    Basic_NonTaxable: number,
    Basic_Taxable: number,
    BillDate: string,
    BillNo: string,
    CovChgAmt: number,
    Hall_Id: number,
    Hall_Name: string,
    OrderDate: string,
    OrderNo: string,
    RO_Amt: number,
    ServTaxAmt: number,
    Total_Value: number,
    VAT_Amt: number
}
/////////////////////////////////// Daily Collection Othern Charges ////////////////////////////////////////////
export interface IDailyCollectionOthChargesReportPayload {
    sub_Criteria: string,
    session: string,
    fromDate: string,
    toDate: string
}
///////////////////////////////// Member TopUp Records(COMMON)  //////////////////////////////////////
export interface IMemberTopUpComSumRecordPayload {
    machine_Or_All: string,
    machineName: string,
    searchWithDateRange: false,
    startDt: string,
    endDt: string,
    mem_Code: string,
    paymentMode: string,
    which_Criteria: string
}
export interface IMemberTopUpCommonRecordGroupResponse extends IGeneralResponse {
    result: IMemberTopUpCommonRecordGroup[];
}
export interface IMemberTopUpCommonRecordGroup {
    add_Comp_Ip: string,
    topUpDt: string,
    pmtType: string,
    paymentTypeCode: string,
    payModeDesc: string,
    rcptNo: string,
    cardNo: string,
    mem_Id: number,
    mem_Code: string,
    memName: string,
    topUpAmt: number,
    activate: string
}
//////////////////////////SUMMERY////////////////////
export interface IMemberTopSummeryUpRecordGroupResponse extends IGeneralResponse {
    result: IMemberTopUpSummeryRecordGroup[];
}
export interface IMemberTopUpSummeryRecordGroup {
    add_Comp_Ip: string,
    pmtType: string,
    paymentTypeCode: string,
    topUpAmt: number
}
////////////////OFF SHOP BILL REGISTER//////////////////////
export interface IReportsOffShopBillRegPayload {
    fromDt: string,
    toDt: string,
    which_Criteria: string
}
export interface IOffShopBillRegGroupResponse extends IGeneralResponse {
    result: IOffShopBillRegGroup[];
}
export interface IOffShopBillRegGroup {
    billNo: string,
    billDate: string,
    hall_Id: number,
    hall_Name: string,
    mem_Id: number,
    mem_Code: string,
    mem_Name: string,
    totalItemValue: number,
    roundOff: number,
    totalNet_AfterRo: number,
    delvStatus: string,
    item_Id: number,
    item_Code: string,
    item_Name: string,
    uom_Id: number,
    uomShort: string,
    rate: number,
    totalQty: number,
    itemValue: number,
    discount: number,
    itemValue_AfterDisc: number,
    totalItemValue_AfterDisc: number
}
/////////////////////////OFF SHOP BILL REGISTER////////////////////
//////////////////////////// SUBSCRIPTION FROM JA ////////////////////////////////////////////////
export interface ISubJAPayload {
    which_Criteria: string,
    sub_Criteria: string,
    session: string,
    fromDt: string,
    toDt: string
}
export interface ISubJAGroupResponse extends IGeneralResponse {
    result: ISubJAGroup[];
}
export interface ISubJAGroup {
    form_Date: string,
    jCardNo: string,
    formNo: string,
    jA_Name: string,
    refName: string,
    refCode: string,
    totAge: string,
    sex: string,
    session: string,
    rcptNo: string,
    rcptDt: string,
    amt: number,
    serviceTax: number,
    fineAmt: number,
    netAmt: number,
    cardNo_Collection: string,
    pmtType: string,
    bankName: string
}
//////////////////////////////////////
//////////////////////////// Member Subscription Status ////////////////////////////////////////////////
export interface ISubStatusPayload {
    which_Criteria: string
    session: string
}
export interface ISubStatusGroupResponse extends IGeneralResponse {
    result: ISubStatusGroup[];
}
export interface ISubStatusGroup {
    primary_Mem_Code: string,
    mem_Code: string
    mem_Name: string
    amt: number,
    pmtType: string
}
///////////////CATERER AND ITEM WISE SALE WITH COST PRICE //////////////////////
export interface IReportsCatWiseSalePayload {
    fromDt: string,
    toDt: string,
    which_Criteria: string,
    is_Caterar: boolean,
    caterer_Id: number
}
export interface IMemberCardGroupPayload extends IReportsCatWiseSalePayload { }
/////////////////////////CATERER AND ITEM WISE SALE WITH COST PRICE ////////////////////
//////////////BILL WISE KOT REPORT //////////////////////
export interface IReportsBillWiseKotPayload {
    fromDt: string,
    toDt: string,
    is_Hall: boolean,
    hall_Id: number
}
export interface IBillWiseKotGroupResponse extends IGeneralResponse {
    result: IBillWiseKotGroup[];
}
export interface IMemberCardGroupPayload extends IReportsBillWiseKotPayload { }
export interface IBillWiseKotGroup {
    mem_Code: string,
    mem_Name: string,
    expr1: string,
    expr2: string,
    expr3: string,
    expr4: number,
    itemCode: string,
    itemName: string,
    expr5: number,
    catererName: string,
    expr6: number,
    uomShort: string,
    expr7: number,
    waiterName: string,
    expr8: number,
    hall_Name: string,
    expr9: number,
    expr10: string,
    expr11: string,
    aliasName: string,
    expr12: number,
    mem_Id: number,
    billNo: string,
    billDate: string,
    hall_Id: number,
    kotNo: string,
    item_Id: number,
    caterer_Id: number,
    uom_Id: number,
    waiter_Row_Id: number,
    qty: number,
    activate: string,
    reason: string
}
/////////////////////////BILL WISE KOT REPORT ////////////////////
//////////////VOID BILL REGISTER//////////////////////
export interface IReportsVoidBillRegPayload {
    fromDt: string,
    toDt: string,
    orderBy: string
}
export interface IVoidBillRegGroupResponse extends IGeneralResponse {
    result: IVoidBillRegGroup[];
}
export interface IVoidBillRegGroup {
    hall_Id: number,
    hall_Name: string,
    billNo: string,
    billDate: string,
    totalBasic_AfterDisc: number,
    mem_Id: number,
    mem_Code: string,
    covChgAmt: number,
    mem_Name: string,
    vat: number,
    stAmt: number,
    roundOff: number,
    totalNet_AfterRo: number,
    void_Reason_Id: number,
    user_Name: string,
    void_User_Code: string,
    reason: string
}
/////////////////////////VOID BILL REGISTER////////////////////
//////////////ITEM WISE SALE(RESTAURANT) //////////////////////
export interface IReportsItemWiseSaleRestPayload {
    fromDt: string,
    toDt: string
}
export interface IItemWiseSaleRestGroupResponse extends IGeneralResponse {
    result: IItemWiseSaleRestGroup[];
}
export interface IMemberCardGroupPayload extends IReportsItemWiseSaleRestPayload { }
export interface IItemWiseSaleRestGroup {
    item_Id: number,
    itemName: string,
    sgCode: string,
    sgName: string,
    grpType: string,
    caterer_Id: number,
    catererName: string,
    uom_Id: number,
    uomShort: string,
    qty: number,
    itemValue: number
}
///////////////////////// END OF ITEM WISE SALE(RESTAURANT) ////////////////////
//////////////OFF SHOP VOID BILL REGISTER//////////////////////
export interface IReportsOffShopVoidBillRegPayload {
    fromDt: string,
    toDt: string,
    orderBy: string
}
export interface IOffShopVoidBillRegGroupResponse extends IGeneralResponse {
    result: IOffShopVoidBillRegGroup[];
}
export interface IOffShopVoidBillRegGroup {
    hall_Id: number,
    hall_Name: string,
    billNo: string,
    billDate: string,
    mem_Id: number,
    mem_Code: string,
    mem_Name: string,
    totalItemValue: number,
    roundOff: number,
    totalNet_AfterRo: number,
    void_Reason_Id: number,
    user_Name: string,
    void_User_Code: string,
    reason: string
}
/////////////////////////OFF SHOP VOID BILL REGISTER////////////////////
//////////////ITEM WISE SALE(OFF SHOP) //////////////////////
export interface IReportsItemWiseSaleOffShopPayload {
    fromDt: string,
    toDt: string
}
export interface IItemWiseSaleOffShopGroupResponse extends IGeneralResponse {
    result: IItemWiseSaleOffShopGroup[];
}
export interface IMemberCardGroupPayload extends IReportsItemWiseSaleOffShopPayload { }
export interface IItemWiseSaleOffShopGroup {
    item_Id: number,
    itemName: string,
    sgCode: number,
    sgName: string,
    grpType: string,
    caterer_Id: number,
    catererName: string,
    uom_Id: number,
    uomShort: string,
    qty: number,
    itemValue: number
}
///////////////////////// END OF ITEM WISE SALE(OFF SHOP) ////////////////////
///////////////////////CARD RECHARGE REGISTER //////////////////////////////
export interface IReportsCardRechRegPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICardRechRegGroupResponse extends IGeneralResponse {
    result: ICardRechRegGroup[];
}
export interface ICardRechRegGroupPayload extends IReportsCardRechRegPayload { }
export interface ICardRechRegGroup {
    from: string,
    to: string,
    dateRng: boolean,
    hall: boolean,
    selectH: string,
    member: boolean,
    mem_Code: string,
    memberName: string,
    inActive: boolean,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
//////////////////////////////////END OF CARD RECHARGE REGISTER ///////////////////////////
//////////////////////////// CARD RECHARGE REGISTER ////////////////////////////////////////////////
export interface ICardRechargeRegisterPayload {
    fromDate: string,
    toDate: string,
    with_Date_Range: boolean,
    with_Hall: boolean,
    hall_Id: number,
    with_Member: boolean,
    mem_Code: string,
    with_Inactive_Record: boolean,
}
export interface ICardRechargeRegisterGroupResponse extends IGeneralResponse {
    result: ICardRechargeRegisterGroup[];
}
export interface ICardRechargeRegisterGroup {
    result: any
}
//////////////////////////// ITEM MASTER REPORT ////////////////////////////////////////////////
export interface IItemMasterPayload {
    subGrpType: string,
    sgCode: string
}
export interface IItemMasterGroupResponse extends IGeneralResponse {
    result: IItemMasterGroup[];
}
export interface IItemMasterGroup {
    result: any
}
//////////////////////////// ITEM MASTER REPORT ////////////////////////////////////////////////
export interface IItemOfferPayload {
    caterer_Id: number,
    with_Item: boolean,
    item_Id: number,
    with_Date_Range: boolean,
    fromDt: string,
    toDt: string,
    reportType: string
}
//////////////////////////// MEMBER REGISTER (WITH PIC) MEMBER CODE RANGE REPORT ////////////////////////////////////////////////
export interface IMemRegPicPayload {
    issueFromDate: string,
    issueToDate: string,
    searchWithinMemIssueDateRange: boolean,
    new_Entry: boolean,
    modify: boolean,
    fromDate: string,
    toDate: string,
    searchWithinMemPicDateRange: boolean,
    searchCriteria: string,
    searchString: string,
    mem_Type: number,
    mem_Code_From: string
    mem_Code_To: string
}
export interface IMemRegPicGroupResponse extends IGeneralResponse {
    result: IMemRegPicGroup[];
}
export interface IMemRegPicGroup {
    result: any
}
//////////////////////////// LABEL PRINTING ////////////////////////////////////////////////
export interface ILabelPrintingPayload {
    sortBy: string
}
export interface ILabelPrintingGroupResponse extends IGeneralResponse {
    result: ILabelPrintingGroup[];
}
export interface ILabelPrintingGroup {
    result: any
}
//////////////////////LOCKER RENT RECIEVED FROM MEMBERS //////////////////////////////
export interface IReportsLockerRentRecMemPayload {
    which_Criteria: string,
    session: string,
    fromDt: string,
    toDt: string
}
export interface ILockerRentRecMemGroupResponse extends IGeneralResponse {
    result: ILockerRentRecMemGroup[];
}
export interface ILockerRentRecMemGroupPayload extends IReportsLockerRentRecMemPayload { }
export interface ILockerRentRecMemGroup {
    recptNo: string,
    recptDt: string,
    session: string,
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Name: string,
    loc_Code: string,
    loc_Location_Name: string,
    netAmt: number,
    cardNo_Collection: string
}
//////////////////////////////////END OF LOCKER RENT RECIEVED FROM MEMBERS ///////////////////////////
///////////////////////LOCKER RENT OUTSTANDING //////////////////////////////
export interface IReportsLockerRentOtstandPayload {
    session: string
}
export interface ILockerRentOtstandGroupResponse extends IGeneralResponse {
    result: ILockerRentOtstandGroup[];
}
export interface ILockerRentOtstandGroupPayload extends IReportsLockerRentOtstandPayload { }
export interface ILockerRentOtstandGroup {
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Name: string,
    amt: number,
    locker: string
}
//////////////////////////////////END OF LOCKER RENT OUTSTANDING ///////////////////////////
///////////////////////DONATION RECIEVED FROM MEMBERS //////////////////////////////
export interface IReportsDonationRecvMemPayload {
    which_Criteria: string,
    session: string,
    fromDt: string,
    toDt: string
}
export interface IDonationRecvMemGroupResponse extends IGeneralResponse {
    result: IDonationRecvMemGroup[];
}
export interface IDonationRecvMemGroupPayload extends IReportsDonationRecvMemPayload { }
export interface IDonationRecvMemGroup {
    recptNo: string,
    recptDt: string,
    session: string,
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Name: string,
    loc_Code: string,
    loc_Location_Name: string,
    netAmt: number,
    cardNo_Collection: string
}
//////////////////////////////////END OF DONATION RECIEVED FROM MEMBERS ///////////////////////////
///////////////////////DONATION OUTSTANDING //////////////////////////////
export interface IReportsDonationOtstandPayload {
    session: string
}
export interface IDonationOtstandGroupResponse extends IGeneralResponse {
    result: IDonationOtstandGroup[];
}
export interface IDonationOtstandGroupPayload extends IReportsDonationOtstandPayload { }
export interface IDonationOtstandGroup {
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Name: string,
    amt: number,
    locker: string
}
//////////////////////////////////END OF DONATION OUTSTANDING ///////////////////////////
///////////////////////MEMBER CARD BALANCE RETURN //////////////////////////////
export interface IReportsMemCardBalRetPayload {
    which_Criteria: string,
    session: string,
    fromDate: string,
    toDate: string,
    mem_Code: string,
    with_Member: boolean,
    with_Inactive_Record: boolean
}
export interface IMemCardBalRetGroupResponse extends IGeneralResponse {
    result: IMemCardBalRetGroup[];
}
export interface IMemCardBalRetGroupPayload extends IReportsMemCardBalRetPayload { }
export interface IMemCardBalRetGroup {
    resultQuery: any,
    resultQuery2: any
}
//////////////////////////////////END OF MEMBER CARD BALANCE RETURN ///////////////////////////
///////////////////////MEMBER NEGATIVE BALANCE //////////////////////////////
export interface IReportsMemNegBalPayload {
    which_Criteria: string,
    session: string,
    mem_Code: string,
    with_Member: boolean
}
export interface IMemNegBalGroupResponse extends IGeneralResponse {
    result: IMemNegBalGroup[];
}
export interface IMemNegBalGroupPayload extends IReportsMemNegBalPayload { }
export interface IMemNegBalGroup {
    row_Id: number,
    mem_Code: string,
    mem_Type: number,
    memberType: string,
    memName: string,
    cardNo: string,
    cardType: string,
    emailId: string,
    sex: string,
    contactNo: string,
    active: string,
    balance: number
}
//////////////////////////////////END OF MEMBER NEGATIVE BALANCE ///////////////////////////
///////////////////////PAY MODE WISE CARD RECHARGE SUMMARY //////////////////////////////
export interface IReportsPayModeCardRechPayload {
    which_Critaria: string,
    fromDate: string,
    toDate: string,
    with_Hall: boolean,
    hall_Id: number
}
//////////////////////////////////END OF PAY MODE WISE CARD RECHARGE SUMMARY ///////////////////////////
////////////////////////////////// Members Card Balance  ///////////////////////////////////////////
export interface IMembersCardBalancePayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMembersCardBalanceGroupResponse extends IGeneralResponse {
    result: IMembersCardBalanceGroup[];
}
export interface IMembersCardBalanceGroup {
    choice: string,
    pMemCode: string,
    pMemName: string,
    session: string,
    date: boolean,
    from: string,
    to: string,
    report: string
}
////////////////////////////////////////////// Caution Deposit For Temporary Card  /////////////////////////////////////////////////////
export interface ICautionMoneyCollectionPayload {
    with_Date_Range: boolean,
    fromDate: string,
    toDate: string,
    with_Member: boolean,
    mem_Id: number
}
export interface ICautionMoneyCollectionGroupResponse extends IGeneralResponse {
    result: ICautionMoneyCollectionGroup[];
}
export interface ICautionMoneyCollectionGroup {
    session: string
    mem_Id: number,
    mem_Code: string
    memName: string
    issueDt: string
    issueType: string
    issueTypeDesc: string,
    cardNo: string
    cardType: string
    cautionMoney: number,
    fineAmt: number,
    recvAmt: number,
    cautMoneyRefunded: boolean,
    tranType: string
    prevCardNo: string
    isReturnedPrevCard: boolean,
    recpNo: string
    recpNo_FN: string
    remarks: string
    activate: string
    receivedBy: string
}
////////////////////////////////////////////// Caution Money Refund For Membership Card  /////////////////////////////////////////////////////
export interface ICautionMoneyRefundPayload {
    with_Date_Range: boolean,
    fromDate: string,
    toDate: string,
    with_Member: boolean,
    mem_Id: number
}
export interface ICautionMoneyRefundGroupResponse extends IGeneralResponse {
    result: ICautionMoneyRefundGroup[];
}
export interface ICautionMoneyRefundGroup {
    session: string,
    mem_Id: number,
    mem_Code: string,
    memName: string,
    issueDt: string,
    issueType: string,
    issueTypeDesc: string,
    cardNo: string,
    cardType: string,
    cautionMoney: number,
    fineAmt: number,
    recvAmt: number,
    cautMoneyRefunded: boolean,
    tranType: string,
    prevCardNo: string,
    isReturnedPrevCard: boolean,
    recpNo: string,
    recpNo_FN: string,
    remarks: string,
    activate: string,
    receivedBy: string
}
////////////////////////////////////////////// Fine Collect For Membership Card /////////////////////////////////////////////////////
export interface IFineFromCardPayload {
    with_Date_Range: boolean,
    fromDate: string,
    toDate: string,
    with_Member: boolean,
    mem_Id: number
}
////////////////////////////Status Wise Locker Report ////////////////////////////////////////////////
export interface IStatusWiseLockerPayload {
    loc_Type_Id: number,
    loc_Location_Id: number,
    locker_Activate: string,
    locker_Status: string
}
export interface IStatusWiseLockerGroupResponse extends IGeneralResponse {
    result: IStatusWiseLockerGroup[];
}
export interface IStatusWiseLockerGroup {
    row_Id: number,
    loc_Code: string,
    loc_Location_Name: string,
    loc_Location_Id: number,
    loc_Type: string,
    loc_Type_Id: number,
    activate: string,
    loc_Status: string,
    loc_StatusT: string,
    loc_Rent_Per_Yr: number,
    servTaxPerc: number,
    mem_Code: string,
    mem_Name: string,
    primary_Mem_Code: string,
    oldNo: string
}
////////////////////////////Locker Movement Report ////////////////////////////////////////////////
export interface ILockerMovementPayload {
    with_Date_Range: boolean,
    fromDt: string,
    toDt: string,
    loc_Codes: string
}
export interface ILockerMovementGroupResponse extends IGeneralResponse {
    result: ILockerMovementGroup[];
}
export interface ILockerMovementGroup {
    loc_Code: string,
    status_Date: string,
    loc_Status: string,
    locStatus: string,
    loc_Location_Name: string,
    loc_Type: string,
    mem_Code: string,
    mem_Name: string,
    primary_Mem_Code: string,
    primary_Mem_Name: string,
    remarks: string
}
////////////////////////////Member Wise Locker Report ////////////////////////////////////////////////
export interface IMemWiseLockerPayload {
    with_Date_Range: boolean,
    fromDt: string,
    toDt: string,
    which_Criatria: string,
    mem_Code: string
}
export interface IMemWiseLockerGroupResponse extends IGeneralResponse {
    result: IMemWiseLockerGroup[];
}
export interface IMemWiseLockerGroup {
    loc_Code: string,
    status_Date: string,
    loc_Status: string,
    locStatus: string,
    loc_Location_Name: string,
    loc_Type: string,
    mem_Code: string,
    mem_Name: string,
    primary_Mem_Code: string,
    primary_Mem_Name: string,
    remarks: string
}
////////////////////////////Item Price Report ////////////////////////////////////////////////
export interface IItemPriceReportPayload {
    caterer_Id: number,
    with_Item: boolean,
    item_Id: number,
    price_As_On_Dt: string,
    which_Criatria: string
}
export interface IItemPriceReportGroupResponse extends IGeneralResponse {
    result: IItemPriceReportGroup[];
}
export interface IItemPriceReportGroup {
    item_Id: number,
    itemCode: string,
    itemName: string,
    itemShort: string,
    uom_Id: number,
    uomName: string,
    caterer_Id: number,
    catererName: string,
    rate: number,
    miP_WEF: string,
    miP_WET: string,
    activate: string,
    hall_Id: number,
    hall_Name: string,
    hall_Alias: string,
    miS_WEF: string,
    miS_WET: string,
    gsT_Perc: number
}
////////////////////////////Member Register (Without Pic)////////////////////////////////////////////////
export interface IMemRegWthtPicReportPayload {
    searchWithinDateRange: boolean,
    new_Entry: boolean,
    modify: boolean,
    fromDate: string,
    toDate: string,
    searchCriteria: string,
    searchString: string,
    mem_Type: number
}
export interface IMemRegWthtPicReportGroupResponse extends IGeneralResponse {
    result: IMemRegWthtPicReportGroup[];
}
export interface IMemRegWthtPicReportGroup {
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Type: number,
    memberType: string,
    issueYr: string,
    firstIssueYr: string,
    issueDate: string,
    issueDateS: string,
    memName: string,
    salutation: string,
    fNm: string,
    sNm: string,
    address: string,
    sex: string,
    bloodGrp: string,
    cardNo: string,
    cardType: string,
    contact: string,
    mem_Pic: string,
    mem_Sig: string,
    active: string,
    add_Time: string,
    edit_Time: string,
    add_TimeS: string,
    edit_TimeS: string,
    picEntryType: string,
    picEntryDt: string,
    emailId: string,
    location: string,
    pinCode: string
}
////////////////////////////Contact no. Wise Member Details////////////////////////////////////////////////
export interface IContacttNoWiseReportPayload {
    searchCriteria1: string,
    searchCriteria2: string,
    searchString: string,
    mem_Type: number,
    searchWithinDateRange: boolean,
    which_Date_Type: string,
    fromDate: string,
    toDate: string,
    order_By_Which: string
}
export interface IContacttNoWiseReportGroupResponse extends IGeneralResponse {
    result: IContacttNoWiseReportGroup[];
}
export interface IContacttNoWiseReportGroup {
    row_Id: number,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    mem_Code: string,
    mem_Type: number,
    memberType: string,
    mem_Suffix: string,
    mem_Suffix_slno: number,
    relationNo: string,
    main_Mem: boolean,
    main_Mem_Id: number,
    ref_Mem_Id: number,
    issueYr: string,
    firstIssueYr: string,
    issueDate: string,
    salutation: string,
    fNm: string,
    sNm: string,
    address_Res: string,
    address_Off: string,
    location: string,
    pinCode: string,
    sex: string,
    dob: string,
    ageYr: number,
    ageMth: number,
    ageDy: number,
    totAge: string,
    contact: string,
    bloodGrp: string,
    cardNo: string,
    cardType: string,
    presentAmt: number,
    emailId: string,
    uiNo: string,
    idProof_Id: number,
    idNo: string,
    occu: string
    mobNo: string,
    landNo: string,
    mem_Pic_Path: string,
    mem_Pic_Folder: string,
    mem_Pic_Name: string,
    mem_Pic: string,
    dPic: string,
    picEntryDt: string,
    picEntryType: string,
    mem_Sig_Path: string,
    mem_Sig_Folder: string,
    mem_Sig_Name: string,
    mem_Sig: string,
    dSig: string,
    sigEntryDt: string,
    sigEntryType: string,
    active: string,
    activity_Remarks: string,
    inActiveType: string,
    add_Time: string,
    edit_Time: string,
    memName: string,
    refMemName: string,
    refPrimaryMemCode: string
}
////////////////////////////MEMBER LIST FOR CARD PRINT////////////////
export interface IMemListForCardPrintReportPayload {
    memberType: string,
    mem_Type: number,
    searchWithinDateRange: boolean,
    which_Date_Type: string,
    fromDate: string,
    toDate: string
}
export interface IMemListForCardPrintReportGroupResponse extends IGeneralResponse {
    result: IMemListForCardPrintReportGroup[];
}
export interface IMemListForCardPrintReportGroup {
    active: string;
    activity_Remarks: string;
    add_Time: string;
    address_Off: string;
    address_Res: string;
    ageDy: number;
    ageMth: number;
    ageYr: number;
    bloodGrp: string;
    cardNo: string;
    cardType: string;
    contact: string;
    dPic: string;
    dSig: string;
    dob: string;
    edit_Time: string;
    emailId: string;
    fNm: string;
    firstIssueYr: string;
    idNo: string;
    idProof_Id: number;
    inActiveType: string;
    issueDate: string;
    issueYr: string;
    landNo: string;
    location: string;
    main_Mem: boolean;
    main_Mem_Id: number;
    memName: string;
    mem_Code: string;
    mem_Pic: string;
    mem_Pic_Folder: string;
    mem_Pic_Name: string;
    mem_Pic_Path: string;
    mem_Sig: string;
    mem_Sig_Folder: string;
    mem_Sig_Name: string;
    mem_Sig_Path: string;
    mem_Suffix: string;
    mem_Suffix_slno: number;
    mem_Type: number;
    memberType: string;
    mobNo: string;
    occu: string;
    picEntryDt: string;
}
////////////////////////////JUNIOR ASSOCIATE SESIION WISE////////////////
export interface IJuniorAssoSessionReportPayload {
    session: string
}
export interface IJuniorAssoSessionReportGroupResponse extends IGeneralResponse {
    result: IJuniorAssoSessionReportGroup[];
}
export interface IJuniorAssoSessionReportGroup {
    form_Date: string;
    jCardNo: string;
    formNo: string;
    jA_Name: string;
    refName: string;
    refCode: string;
    totAge: string;
    sex: string;
    session: string;
    rcptNo: string;
    rcptDt: string;
    amt: number;
    serviceTax: number;
    fineAmt: number;
    netAmt: number;
    cardNo_Collection: string;
    pmtType: string | null;
    bankName: string | null;
}
////////////////////////////REFFERED CODE WISE JA////////////////
export interface IRefferdCodeWiseJAReportPayload {
    jaName: string,
    memCode: string,
    jaType: string
}
export interface IRefferdCodeWiseJAReportGroupResponse extends IGeneralResponse {
    result: IRefferdCodeWiseJAReportGroup[];
}
export interface IRefferdCodeWiseJAReportGroup {
    form_Date: string,
    formNo: string,
    jCardNo: string,
    jA_Name: string,
    totAge: string,
    sex: string,
    refName: string,
    refCode: string,
    session: string
}
///////////////////////////SERVICE TAX REGISTER////////////////
export interface IServTaxRegReportPayload {
    fromDt: string,
    toDt: string,
    which_Critaria: string,
    summary_Or_Not: string
}
////////////////////////////Swimmer Memebr Card Balance  ////////////////////////////////////////////////
export interface ISwimMemCardBalPayload {
    which_Criteria: string,
    session: string,
    withDateRange: boolean,
    fromDate: string,
    toDate: string,
    mem_Code: string
}
///////////////LIST OF CANTEEN ITEM OB REPORT//////////////////////
export interface IReportsListOfCantItemOBPayload {
    session: string,
}
export interface IListOfCantItemOBGroupResponse extends IGeneralResponse {
    result: IListOfCantItemOBGroup[];
}
export interface IListOfCantItemOBGroup {
    itemcode: string,
    itemname: string,
    uom: string,
    opbal: number
}
///////////////GOODS RECEIPT NOTE REPORT//////////////////////
export interface IReportsGoodsRcptnOTEPayload {
    byDateRange: boolean,
    fromDt: string,
    toDt: string,
    byParty: boolean,
    partyCode: string
}
export interface IGoodsRcptnOTEGroupResponse extends IGeneralResponse {
    result: IGoodsRcptnOTEGroup[];
}
export interface IGoodsRcptnOTEGroup {
    roW_ID: number,
    grN_DATE: string,
    grndate: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    grN_NO: string,
    partY_CODE: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    remarks: string,
    partY_NAME: string
}
////////////////////////GOODS RECEIPT NOTE REPORT///////////////////
///////////////GOODS RECEIPT REGISTER REPORT//////////////////////
export interface IReportsGoodsRcptRegPayload {
    which_Criteria: string,
    fromDt: string,
    toDt: string,
    party_Code: string,
    iteM_ID: number
}
export interface IGoodsRcptRegGroupResponse extends IGeneralResponse {
    result: IGoodsRcptRegGroup[];
}
export interface IGoodsRcptRegGroup {
    roW_ID: number,
    grN_DATE: string,
    grndate: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    grN_NO: string,
    partY_CODE: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    remarks: string,
    partY_NAME: string
}
////////////////////////GOODS RECEIPT REGISTER REPORT///////////////////
///////////////ISSUE REG CANTEEN MATERIALS//////////////////////
export interface IReportsIssueRegCantMatPayload {
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Id: number
}
export interface IIssueRegCantMatGroupResponse extends IGeneralResponse {
    result: IIssueRegCantMatGroup[];
}
export interface IIssueRegCantMatGroup {
    issueNo: string,
    issueDt: string,
    row_Id: string,
    item_Id: number,
    item_Code: string,
    item_Name: string,
    issueQty: number,
    remarks: string,
    uom_Id: number,
    uomShort: string,
    activate: string
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////CANTEEN VOID BILL REGISTER//////////////////////
export interface IReportsCanteenVoidBillRegPayload {
    fromDt: string,
    toDt: string,
}
export interface ICanteenVoidBillRegGroupResponse extends IGeneralResponse {
    result: ICanteenVoidBillRegGroup[];
}
export interface ICanteenVoidBillRegGroup {
    hall_Id: number
    hall_Name: string
    billNo: string
    billDate: string
    mem_Id: number
    mem_Code: string
    mem_Name: string
    totalItemValue: number
    roundOff: number
    totalNet_AfterRo: number
    void_Reason_Id: number
    user_Name: string
    void_User_Code: string
    reason: string
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////ITEM WISE SALE(CANTEEN)//////////////////////
export interface IReportsItemWiseSaleCanteenPayload {
    fromDt: string,
    toDt: string,
}
export interface IItemWiseSaleCanteenGroupResponse extends IGeneralResponse {
    result: IItemWiseSaleCanteenGroup[];
}
export interface IItemWiseSaleCanteenGroup {
    item_Id: number
    itemName: string
    sgCode: string
    sgName: string
    grpType: string
    caterer_Id: number
    catererName: string
    uom_Id: number
    uomShort: string
    qty: number
    itemValue: number
    basicAmt: number
    taxAmt: number
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////ISSUE REG CANTEEN MATERIALS//////////////////////
export interface IReportsIssueRegCantMatPayload {
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Id: number
}
export interface IIssueRegCantMatGroupResponse extends IGeneralResponse {
    result: IIssueRegCantMatGroup[];
}
export interface IIssueRegCantMatGroup {
    issueNo: string,
    issueDt: string,
    row_Id: string,
    item_Id: number,
    item_Code: string,
    item_Name: string,
    issueQty: number,
    remarks: string,
    uom_Id: number,
    uomShort: string,
    activate: string
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////FOC SALE CANTEEN REPORT//////////////////////
export interface IReportsFocSaleCanteenPayload {
    fromDt: string,
    toDt: string,
}
export interface IFocSaleCanteenGroupResponse extends IGeneralResponse {
    result: IFocSaleCanteenGroup[];
}
export interface IFocSaleCanteenGroup {
    billNo: string,
    billDate: string,
    mem_Id: number,
    mem_Code: string,
    mem_Name: string,
    item_Id: number,
    itemCode: string,
    itemName: string,
    uom_Id: number,
    uomShort: string,
    rate_Original: number,
    totalQty: number,
    itemValue: number,
}
/////////////////////////End of FOC SALE CANTEEN REPORT////////////////////
///////////////CANTEEN STOCK REGISTER REPORT//////////////////////
export interface IReportsCanteenStockRegPayload {
    session: string,
    forBreakPeriod: boolean,
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Code: string,
    with_Item_Group: boolean,
    group_Name: string,
    which_Criteria: string
}
export interface ICanteenStockRegGroupResponse extends IGeneralResponse {
    result: ICanteenStockRegGroup[];
}
export interface ICanteenStockRegGroup {
    GROUP_NAME: string
    ITEM_ID: number
    ITEM_CODE: string
    ITEM_NAME: string
    UOM_Id: number
    UomShort: string
    OB_QTY: number
    Recd_QTY: number
    Issue_QTY: number
    Canteen_Sale: number
    AdjAtCanteen: number
    WastageAtHall: number
    SaleFromHall: number
    CBQTY: number
}
/////////////////////////CANTEEN STOCK REGISTER REPORT////////////////////
///////////////RECIPE LISTING REPORT//////////////////////
export interface IReportsRecipeListPayload {
    which_Critaria: string,
    with_Caterar: boolean,
    recipeForItem_Id: number,
    recipeForCaterer_Id: number
}
export interface IRecipeListGroupResponse extends IGeneralResponse {
    result: IRecipeListGroup[];
}
export interface IRecipeListGroup {
    recipeType: string,
    remarks: string,
    recipeForItem_Id: number,
    itemCode_RF: string,
    itemName_RF: string,
    recipeForUom_Id: number,
    uomShort_RF: string,
    recipeForCaterer_Id: number,
    catererName: string,
    recipeItem_Id: number,
    itemCode_R: string,
    itemName_R: string,
    recipeUom_Id: number,
    uomShort_R: string,
    qty: number
}
///////////////////////RECIPE LISTING REPORT////////////////////
///////////////GOODS RECEIPT NOTE REPORT(GODOWN REPORT)//////////////////////
export interface IReportsGoodsRcptnOTEgdnPayload {
    with_Date_Range: boolean,
    fromDt: string,
    toDt: string,
    with_Party: boolean,
    party_Code: string
}
export interface IGoodsRcptnOTEgdnGroupResponse extends IGeneralResponse {
    result: IGoodsRcptnOTEgdnGroup[];
}
export interface IGoodsRcptnOTEgdnGroup {
    roW_ID: number,
    grN_DATE: string,
    grndate: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    grN_NO: string,
    partY_CODE: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    remarks: string,
    partY_NAME: string,
    mrp: number
}
////////////////////////GOODS RECEIPT NOTE REPORT(GODOWN REPORT)///////////////////
///////////////ADJUSTMENT OF CANTEEN ITEM OB REPORT//////////////////////
export interface IReportsAdjCantItemOBPayload {
    session: string,
}
export interface IAdjCantItemOBGroupResponse extends IGeneralResponse {
    result: IAdjCantItemOBGroup[];
}
export interface IAdjCantItemOBGroup {
    row_Id: string,
    adjDt: string,
    itemCode: string,
    itemName: string,
    uom: string,
    adjQty: number,
    reason: string,
    remarks: string
}
////////////////////////ADJUSTMENT OF CANTEEN ITEM OB REPORT///////////////////
//////////////GOODS RECEIPT REGISTER REPORT(GODOWN REPORT)//////////////////////
export interface IReportsGoodsRcptREGgdnPayload {
    fromDt: string,
    toDt: string,
    which_Critaria: string,
    party_Code: string,
    iteM_ID: number
}
export interface IGoodsRcptREGgdnGroupResponse extends IGeneralResponse {
    result: IGoodsRcptREGgdnGroup[];
}
export interface IGoodsRcptREGgdnGroup {
    roW_ID: number,
    grN_DATE: string,
    grndate: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    grN_NO: string,
    partY_CODE: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    remarks: string,
    partY_NAME: string,
    mrp: number
}
////////////////////////GOODS RECEIPT REGISTER REPORT(GODOWN REPORT)///////////////////
//////////////ISSUE NOTE OF REST MATERIALS//////////////////////
export interface IReportsIssueNoteRestMatPayload {
    fromDt: string,
    toDt: string,
    byHall: boolean,
    hall_Id: number,
    byCaterer: boolean,
    cat_Row_Id: number,
    byResItem: boolean,
    reS_ITEM_ID: number,
    byGdnItem: boolean,
    iteM_ID: number
}
export interface IIssueNoteRestMatGroupResponse extends IGeneralResponse {
    result: IIssueNoteRestMatGroup[];
}
export interface IIssueNoteRestMatGroup {
    issuE_NO: string,
    issuE_DATE: string,
    hall_Id: number,
    hall_Name: string,
    cat_Row_Id: number,
    catererName: string,
    reS_ITEM_ID: number,
    itemName: string,
    iteM_ID: number,
    iteM_NAME: string,
    uomName: string,
    uoM_ID: number,
    qty: number,
    qtY_IN_ML: number,
    session: string,
    reQ_NO: string,
    purRate_IN_ML: number,
    rate_IN_ML_Pur: number,
    oB_SOURCE: string
}
/////////////////////////ISSUE NOTE OF REST MATERIALS///////////////////
//////////////ISSUE REGISTER OF REST MATERIALS//////////////////////
export interface IReportsIssueRegRestMatPayload {
    fromDt: string,
    toDt: string,
    hall_Id: number,
    cat_Row_Id: number
}
export interface IIssueRegRestMatGroupResponse extends IGeneralResponse {
    result: IIssueRegRestMatGroup[];
}
export interface IIssueRegRestMatGroup {
    issuE_DATE: string,
    issuE_NO: string,
    hall_Name: string,
    catererName: string,
    reQ_NO: string,
    itemType: string,
    grouP_NAME: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uomShort: string,
    qty: number,
    qtY_IN_ML: number,
    purRate_IN_ML: number,
    rate_IN_ML_Pur: number,
    oB_SOURCE: string,
    hall_Id: number,
    cat_Row_Id: number
}
////////////////////////ISSUE REGISTER OF REST MATERIALS///////////////////
//////////////ISSUE NOTE OF OTHER MATERIALS//////////////////////
export interface IReportsIssueNoteOthMatPayload {
    fromDt: string,
    toDt: string,
    withItem: boolean,
    item_Id: number
}
export interface IIssueNoteOthMatGroupResponse extends IGeneralResponse {
    result: IIssueNoteOthMatGroup[];
}
export interface IIssueNoteOthMatGroup {
    uom_Id: number,
    qty: number,
    issue_No: string,
    issue_Date: string,
    issueFor: string,
    iteM_CODE: string,
    iteM_NAME: string,
    oB_Source: string,
    item_Id: number,
    uomShort: string
}
////////////////////////ISSUE NOTE OF OTHER MATERIALS///////////////////
//////////////ISSUE REGISTER OF OTHER MATERIALS//////////////////////
export interface IReportsIssueRegOthMatPayload {
    fromDt: string,
    toDt: string,
    withItem: boolean,
    item_Id: number
}
export interface IIssueRegOthMatGroupResponse extends IGeneralResponse {
    result: IIssueRegOthMatGroup[];
}
export interface IIssueRegOthMatGroup {
    uom_Id: number,
    qty: number,
    issue_No: string,
    issue_Date: string,
    issueFor: string,
    iteM_CODE: string,
    iteM_NAME: string,
    oB_Source: string,
    item_Id: number,
    uomShort: string
}
//////////////////////ISSUE REGISTER OF OTHER MATERIALS//////////////////
//////////////GODOWN STOCK LEDGER AND SUMMARY REPORT//////////////////////
export interface IReportsStockLedgSummPayload {
    session: string,
    forBreakPeriod: boolean,
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Code: string,
    with_Item_Grp_type: boolean,
    group_Type: string,
    with_Item_Group: boolean,
    group_Name: string,
    which_Criteria: string
}
//////////////////////GODOWN STOCK LEDGER AND SUMMARY REPORT/////////////////
//////////////GODOWN STOCK SUMMARY WITH VALUE REPORT//////////////////////
export interface IReportsGdwnStkSumValPayload {
    session: string,
    forBreakPeriod: boolean,
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Code: string,
    with_Item_Grp_type: boolean,
    group_Type: string,
    with_Item_Group: boolean,
    group_Name: string
}
//////////////////////GODOWN STOCK SUMMARY WITH VALUE MATERIALS//////////////////
//////////////STOCK TAKE WORKSHEET REPORT//////////////////////
export interface IReportsStkTakeWrkstPayload {
    session: string,
    date: string,
    with_Item: boolean,
    item_Code: string,
    with_Item_Grp_type: boolean,
    group_Type: string,
    with_Item_Group: boolean,
    group_Name: string
}
//////////////////////STOCK TAKE WORKSHEET MATERIALS//////////////////
//////////////GODOWN WASTAGE REPORT/////////////////////
export interface IReportsGdwnWastagePayload {
    fromDt: string,
    toDt: string,
    with_Reason: boolean,
    reason_Id: number
}
export interface IGdwnWastageGroupResponse extends IGeneralResponse {
    result: IGdwnWastageGroup[];
}
export interface IGdwnWastageGroup {
    wastagE_DOC_NO: string,
    wastagE_DATE: string,
    iteM_CODE: string,
    iteM_NAME: string,
    uomShort: string,
    qty: number,
    qtY_IN_ML: number,
    reason_Row_Id: number,
    reason: string,
    remarks: string
}
//////////////////////GODOWN WASTAGE REPORT//////////////////
//////////////GOODS RETURN NOTE////////////////////
export interface IReportsGdsRtrnNoteReportPayload {
    fromDt: string,
    toDt: string,
    party_Wise: boolean,
    partY_CODE: string
}
export interface IGdsRtrnNoteReportGroupResponse extends IGeneralResponse {
    result: IGdsRtrnNoteReportGroup[];
}
export interface IGdsRtrnNoteReportGroup {
    return_No: string,
    return_Date: string,
    partY_CODE: string,
    partY_NAME: string,
    iteM_CODE: string,
    iteM_NAME: string,
    qty: number,
    qtY_IN_ML: number,
    uomShort: string,
    iteM_ID: number
}
//////////////////////GODOWN WASTAGE REPORT//////////////////
//////////////GOODS RETURN REGISTER////////////////////
export interface IReportsGdsRtrnRegReportPayload {
    fromDt: string,
    toDt: string,
    with_Item: boolean,
    item_Id: number
}
export interface IGdsRtrnRegReportGroupResponse extends IGeneralResponse {
    result: IGdsRtrnRegReportGroup[];
}
export interface IGdsRtrnRegReportGroup {
    return_No: string,
    return_Date: string,
    partY_CODE: string,
    partY_NAME: string,
    iteM_CODE: string,
    iteM_NAME: string,
    qty: number,
    qtY_IN_ML: number,
    uomShort: string,
    iteM_ID: number
}
//////////////////////GODOWN WASTAGE REPORT//////////////////
//////////////LIQUOR STOCK REPORT//////////////////////
export interface ILiquorStockReportPayload {
    session: string,
    with_Date_Range: boolean,
    fromDt: string,
    toDt: string,
    with_Hall: boolean,
    hall_Id: string,
    with_Caterar: boolean,
    caterer_Id: string,
    with_Item: boolean,
    item_Code: string,
    report_Type: string
}
//////////////LIQUOR WAST REG//////////////////////
export interface ILiquorWastRegReportPayload {
    fromDt: string,
    toDt: string,
    with_Hall: boolean,
    hall_Id: number
}
//////////////Suspence Report//////////////////////
export interface ISuspenceReportPayload {
    report_Period: boolean,
    fromDt: string,
    toDt: string,
    which_Criteria: string
}
////////////////CANTEEN BILL REGISTER//////////////////////
export interface IReportsCanteenBillRegPayload {
    fromDt: string,
    toDt: string,
    which_Criteria: string
}
export interface ICanteenBillRegGroupResponse extends IGeneralResponse {
    result: ICanteenBillRegGroup[];
}
export interface ICanteenBillRegGroup {
    billNo: string
    billDate: string
    hall_Id: number
    hall_Name: string
    mem_Id: number
    mem_Code: string
    mem_Name: string
    totalItemValue: number
    roundOff: number
    totalNet_AfterRo: number
    item_Id: number
    item_Code: string
    item_Name: string
    uom_Id: number
    uomShort: string
    rate: number
    totalQty: number
    itemValue: number
    billFor: string
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////CANTEEN VOID BILL REGISTER//////////////////////
export interface IReportsCanteenVoidBillRegPayload {
    fromDt: string,
    toDt: string,
}
export interface ICanteenVoidBillRegGroupResponse extends IGeneralResponse {
    result: ICanteenVoidBillRegGroup[];
}
export interface ICanteenVoidBillRegGroup {
    hall_Id: number
    hall_Name: string
    billNo: string
    billDate: string
    mem_Id: number
    mem_Code: string
    mem_Name: string
    totalItemValue: number
    roundOff: number
    totalNet_AfterRo: number
    void_Reason_Id: number
    user_Name: string
    void_User_Code: string
    reason: string
}
/////////////////////////End of Canteen Bill REGISTER////////////////////
///////////////ITEM WISE SALE(CANTEEN)//////////////////////
export interface IReportsItemWiseSaleCanteenPayload {
    fromDt: string,
    toDt: string,
}
export interface IItemWiseSaleCanteenGroupResponse extends IGeneralResponse {
    result: IItemWiseSaleCanteenGroup[];
}
export interface IItemWiseSaleCanteenGroup {
    item_Id: number
    itemName: string
    sgCode: string
    sgName: string
    grpType: string
    caterer_Id: number
    catererName: string
    uom_Id: number
    uomShort: string
    qty: number
    itemValue: number
    basicAmt: number
    taxAmt: number
}
/////////////////////////End of Item Wise Sale Canteen////////////////////
///////////////CATEGORY WISE MEMBER LIST//////////////////////
export interface IReportsCatWiseMemListPayload {
    formCatId: number,
    finYear: string
}
export interface ICatWiseMemListGroupResponse extends IGeneralResponse {
    result: ICatWiseMemListGroup[];
}
export interface ICatWiseMemListGroup {
    form_Code: string,
    form_Name: string,
    cardNo: string,
    name: string,
    phoneNo: string,
    email: string,
    slot: string
}
/////////////////////////End of CATEGORY WISE MEMBER LIST////////////////////
//////////////INSURANCE DETAILS//////////////////////
export interface IReportsInsuranceDtlsPayload {
    finYear: string
}
export interface IInsuranceDtlsGroupResponse extends IGeneralResponse {
    result: IInsuranceDtlsGroup[];
}
export interface IInsuranceDtlsGroup {
    cardNo: string,
    name: string,
    dob: string,
    nomName: string,
    nomRel: string,
    phoneNo: string,
    category: string
}
/////////////////////////End of INSURANCE DETAILS////////////////////
//////////////MONEY RECEIPT COLLECTION PAYMODEWISE//////////////////////
export interface IReportsMnyRcptpaymodePayload {
    fromDt: string,
    toDt: string,
    reportName: string,
    reportType: string
}