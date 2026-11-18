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
/////////////////////// ADMISSION OF JUNIOR ASSOCIATES //////////////////////////////
export interface ITransactionAdmissonJuniorPayload {
    searchWithDateRange: boolean,
    newEntry: boolean,
    modify: boolean,
    fromDt: string,
    toDt: string,
    orderbyLandNo: boolean,
    orderbyMobNo: boolean,
    critaria: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IAdmissonJuniorGroupResponse extends IGeneralResponse {
    result: IAdmissonJuniorGroup[];
}
export interface IAdmissonJuniorGroupPayload extends ITransactionAdmissonJuniorPayload { }
export interface IAdmissonJuniorGroup {
    row_Id: number,
    jCardNo: string
    session: string
    jaMemberName: string
    jfNm: string
    jlNm: string
    ref_Mem_Id: number,
    mem_Code: string
    refMemName: string
    formNo: string
    swimCat: string
    swimmingSince: string
    timeSlot: string
    printCount: number,
    dob: string
    form_Date: string
    rcptNo: string
    totAge: string
    address_Res: string
    pinCode: string
    landNo: string
    mobNo: string
    nomineeNm: string
    nomRel_Id: number,
    docNm: string
    docRNo: string
    studOrNot: string
    institution: string
    class: string
    occupation: string
    remarks: string
    ja_Pic_Path: null,
    ja_Pic_Folder: null,
    ja_Pic_Name: null,
    dPic: string
    inActive_Remarks: string
    active: string
    add_By: string
    add_Comp_IP: string,
    primary_Mem_Code: string,
    // Add these properties for previews
    photoPreview?: string; // Optional
}
export interface IAddAdmissonJuniorFormPayload {
    row_Id: number,
    session: string,
    formNo: string,
    form_Date: string,
    ref_Mem_Id: number,
    jaMemberName: string,
    jfNm: string,
    jlNm: string,
    dob: string,
    ageYr: number,
    ageMth: number,
    ageDy: number,
    totAge: string,
    sex: string,
    swimCat: string,
    swimmingSince: string,
    timeSlot: string,
    address_Res: string,
    pinCode: string,
    nomineeNm: string,
    nomRel_Id: number,
    landNo: string,
    mobNo: string,
    studOrNot: string,
    occupation: string,
    institution: string,
    class: string,
    docNm: string,
    docRNo: string,
    remarks: string,
    ja_Pic_Path: string,
    ja_Pic_Folder: string,
    ja_Pic_Name: string,
    jPic: string,
    dPic: string,
    rcptNo: string,
    active: string,
    inActive_Remarks: string,
    add_By: string,
    add_Comp_IP: string,
    jCardNo: string,
}
export interface IAdmissonJuniorCreateResponse extends IGeneralResponse {
    result: IAdmissonJuniorGroup;
}
export interface IAdmissonJuniorDeleteResponse extends IGeneralResponse { }
export interface AdmissonJuniorGetById {
    row_Id: number,
    jCardNo: string,
    session: string,
    jaMemberName: string,
    jfNm: string,
    jlNm: string,
    ref_Mem_Id: number,
    mem_Code: string,
    refMemName: string,
    formNo: string,
    swimCat: string,
    swimmingSince: string,
    timeSlot: string,
    printCount: number,
    dob: string,
    form_Date: string,
    rcptNo: string,
    totAge: string,
    address_Res: string,
    pinCode: string,
    landNo: string,
    mobNo: string,
    nomineeNm: string,
    nomRel_Id: number,
    docNm: string,
    docRNo: string,
    studOrNot: boolean,
    institution: string,
    class: string,
    occupation: string,
    remarks: string,
    ja_Pic_Path: string,
    ja_Pic_Folder: string,
    ja_Pic_Name: string,
    dPic: string,
    inActive_Remarks: string,
    active: string,
    add_By: string,
    add_Comp_IP: string,
    jPic: string,
    primary_Mem_Code: string,
    // Add these properties for previews
    photoPreview?: string; // Optional
}
export interface IDeleteAdmissonJuniorFormPayload {
    row_Id: number,
    inActive_Remarks: string,
    edit_By: string,
    edit_Comp_IP: string
}
//////////////////////////////////////// ADMISSION OF JUNIOR ASSOCIATES///////////////////////////////
/////////////////////// CARD TOP UP //////////////////////////////
export interface ITransactionCardTopUpPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ICardTopUpGroupResponse extends IGeneralResponse {
    result: ICardTopUpGroup[];
}
export interface ICardTopUpTopUpGroupPayload extends ITransactionCardTopUpPayload { }
export interface ICardTopUpGroup {
    tid: number,
    row_Id: string,
    topUpDt: string,
    rcptNo: string,
    rcptSlno: number,
    session: string,
    cardNo: string,
    topUpAmt: number,
    mem_Id: number,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    hall_Id: number,
    hall_Name: string,
    hall_Alias: string,
    mem_Code: string,
    primary_Mem_Code: string,
    memberName: string,
    sex: string,
    mem_Type: number,
    mobNo: string,
    address_Res: string,
    totAge: string,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string
}
export interface IAddCardTopUpFormPayload {
    row_Id: string,
    rcptNo: string,
    session: string,
    mem_Id: number,
    cardNo: string,
    topUpDt: string,
    topUpAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    hall_Id: number
}
export interface ICardTopUpCreateResponse extends IGeneralResponse {
    result: ICardTopUpGroup;
}
export interface ICardTopUpDeleteResponse extends IGeneralResponse { }
export interface CardTopUpGetById {
    tid: number,
    row_Id: string,
    topUpDt: string,
    rcptNo: string,
    rcptSlno: number,
    session: string,
    cardNo: string,
    cardNo_N: string,
    topUpAmt: number,
    mem_Id: number,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    hall_Id: number,
    hall_Name: string,
    hall_Alias: string,
    mem_Code: string,
    primary_Mem_Code: string,
    memberName: string,
    sex: string,
    mem_Type: number,
    mobNo: string,
    address_Res: string,
    totAge: string,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    mem_Pic: string
}
export interface IDeleteCardTopUpFormPayload {
    row_Id: string,
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////START OF GetPrintMemCardBalReturn////////////////////
export interface IPrintCardTopUpFormPayload {
    row_Id: string
}
export interface IPrintCardTopUp {
    row_Id: string,
    rcptNo: string,
    session: string,
    cardNo: string,
    topUpDt: string,
    topUpAmt: number,
    add_Time: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    mem_Code: string,
    pmtType: string,
    memName: string,
    mem_Id: number,
    receivedBy: string,
    hall_Id: number,
    hall_Name: string,
    activate: string,
    add_Comp_IP: string,
    pmtSrl: number,
    add_By: string,
    user_Name: string
}
export interface IPrintCardTopUpResponse extends IGeneralResponse {
    result: IPrintCardTopUp;
}
//////////////////////////////////////// END OF CARD TOP UP///////////////////////////////
/////////////////////// ISSUE OF MEMBER CARD //////////////////////////////
export interface ITransactionIssueMemberCardPayload {
    searchWithDateRange: boolean,
    critaria: string,
    fromDt: string,
    toDt: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IIssueMemberCardGroupResponse extends IGeneralResponse {
    result: IIssueMemberCardGroup[];
}
export interface IIssueMemberCardGroupPayload extends ITransactionIssueMemberCardPayload { }
export interface IIssueMemberCardGroup {
    row_Id: string,
    issueType: string,
    mem_Code: string,
    memberName: string,
    sex: string,
    totAge: string,
    mobNo: string,
    address_Res: string,
    issueDt: string,
    cautionMoney: number,
    session: string,
    cautMoneyRefunded: boolean,
    cautMoneyRefundRow_Id: string,
    paymentTypeCode: string,
    cardNo: string,
    fineAmt: number,
    bankCode: string,
    bankName: string,
    prevCardNo: string,
    tenderedAmt: number,
    isReturnedPrevCard: boolean,
    recvAmt: number,
    remarks: string,
    remarks_Others: string,
    cardNo_Collection: string,
    add_By: string,
    add_Comp_IP: string
    mem_Id: number,
    cardType: string,
    recpNo: string,
    recpNo_FN: string,
    activate: string,
    printCount: number,
    cardEncodedCount: number,
}
export interface IAddIssueMemberCardFormPayload {
    mem_Code: string,
    session: string,
    mem_Id: number,
    issueDt: string,
    issueType: string,
    issueTypeTag: string,
    cardNo: string,
    cardType: string,
    cautionMoney: number,
    cautMoneyRefunded: boolean,
    fineAmt: number,
    tranType: string,
    prevCardNo: string,
    isReturnedPrevCard: boolean,
    remarks: string,
    remarks_Others: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string
}
export interface IIssueMemberCardCreateResponse extends IGeneralResponse {
    result: IIssueMemberCardGroup;
}
export interface IssueMemberCardGetById {
    row_Id: string,
    issueType: string,
    mem_Code: string,
    memberName: string,
    sex: string,
    totAge: string,
    mobNo: string,
    address_Res: string,
    issueDt: string,
    cautionMoney: number,
    session: string,
    cautMoneyRefunded: boolean,
    cautMoneyRefundRow_Id: string,
    paymentTypeCode: string,
    cardNo: string,
    fineAmt: number,
    bankCode: string,
    bankName: string,
    prevCardNo: string,
    tenderedAmt: number,
    isReturnedPrevCard: boolean,
    recvAmt: number,
    remarks: string,
    remarks_Others: string,
    cardNo_Collection: string,
    add_By: string,
    add_Comp_IP: string
    mem_Id: number,
    cardType: string,
    recpNo: string,
    recpNo_FN: string,
    activate: string,
    printCount: number
    cardEncodedCount: number,
    mem_Pic: string
}
export interface IUpdateCardEncoCountResponse extends IGeneralResponse { }
export interface IUpdateCardEncoCountFormPayload {
    row_Id: string;
}
//////////////////////////////////////// ISSUE OF MEMBER CARD  ///////////////////////////////
/////////////////////// FEES COLLECTION FROM JUNIOR ASSOCIATES //////////////////////////////
export interface ITransactionfeesCollectionPayload {
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
}
export interface IfeesCollectionGroupResponse extends IGeneralResponse {
    result: IfeesCollectionGroup[];
}
export interface IFeesCollectionGroupPayload extends ITransactionfeesCollectionPayload { }
export interface IfeesCollectionGroup {
    row_Id: number,
    jCardNo: string,
    jaMem_Id: number,
    session: string,
    jaMemberName: string,
    formNo: string,
    form_Date: string,
    mem_Code: string,
    refMemName: string,
    sex: string,
    totAge: string,
    mobNo: string,
    address_Res: string,
    rcptNo: string,
    rcptDt: string,
    amt: number,
    servTaxPer: number,
    servTaxAmt: number,
    ecPer: number,
    ecAmt: number,
    hecPer: number,
    hecAmt: number,
    taxPer: number,
    taxAmt: number,
    fineAmt: number,
    roundOff: number,
    narration: string,
    netAmt: number,
    tenderedAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    paymetDetail: any,
    bankName: string,
    pmtAmt: number,
    refMemCode: string,
    add_Time: any,
    dob: string
}
export interface IAddfeesCollectionFormPayload {
    row_Id: number,
    jaMem_Id: number,
    rcptNo: string,
    rcptDt: string,
    jCardNo: string,
    session: string,
    amt: number,
    servTaxPer: number,
    servTaxAmt: number,
    ecPer: number,
    ecAmt: number,
    hecPer: number,
    hecAmt: number,
    taxPer: number,
    taxAmt: number,
    fineAmt: number,
    roundOff: number,
    netAmt: number,
    narration: string,
    printCounter: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    paymetDetail: any,
    pmtType: string,
    bankName: string,
    pmtAmt: number
}
export interface IfeesCollectionCreateResponse extends IGeneralResponse {
    result: IfeesCollectionGroup;
}
export interface IfeesCollectionDeleteResponse extends IGeneralResponse { }
export interface feesCollectionGetById {
    row_Id: number,
    jaMem_Id: number,
    jCardNo: string,
    session: string,
    jaMemberName: string,
    formNo: string,
    form_Date: string,
    mem_Code: string,
    refMemName: string,
    sex: string,
    totAge: string,
    mobNo: string,
    address_Res: string,
    rcptNo: string,
    rcptDt: string,
    amt: number,
    servTaxPer: number,
    servTaxAmt: number,
    ecPer: number,
    ecAmt: number,
    hecPer: number,
    hecAmt: number,
    taxPer: number,
    taxAmt: number,
    fineAmt: number,
    roundOff: number,
    narration: string,
    netAmt: number,
    tenderedAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    paymetDetail: any,
    bankName: string,
    pmtAmt: number,
    jPic: string,
    refMemCode: string,
    ja_Pic_Path: string,
    ja_Pic_Folder: string,
    ja_Pic_Name: string,
    add_Time: any
    dob: string
}
export interface IDeletefeesCollectionFormPayload {
    rcptNo: string,
    inactiveRem: string,
    jCardNo: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
////////////////////////////////////////FEES COLLECTION FROM JUNIOR ASSOCIATES///////////////////////////////
/////////////////////// NEW MEMBERS SUBSCRIPTION //////////////////////////////
export interface ITransactionNewMemSubPayload {
    searchWithDateRange: boolean,
    fromDt: string
    toDt: string
    critaria: string,
    recordStatus: string
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface INewMemSubGroupResponse extends IGeneralResponse {
    result: INewMemSubGroup[];
}
export interface INewMemSubGroupPayload extends ITransactionNewMemSubPayload { }
export interface INewMemSubGroup {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    memCardNo: string,
    paymetDetail: any,
    memberDetail: any,
    add_Time: string,
}
export interface IAddNewMemSubFormPayload {
    recptNo: string,
    recptDt: string,
    primary_Mem_Id: number,
    memCardNo: string,
    session: string,
    totalBasicAmt: number,
    totalFineAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    entry_Type: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    subsOrMiscCollection: string,
    paymetDetail: any,
    memberDetail: any,
}
export interface INewMemSubCreateResponse extends IGeneralResponse {
    result: any;
}
export interface INewMemSubbDeleteResponse extends IGeneralResponse { }
export interface NewMemSubGetById {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    memCardNo: string,
    paymetDetail: any,
    memberDetail: any,
    add_Time: string,
}
export interface IDeleteNewMemSubFormPayload {
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////////////////START OF NEW MEMBER SUBSCRIPTION PRINT//////////////////
export interface ITransNewMemSubsPrintsFormPayload {
    recptNo: string,
}
export interface ITransNewMemSubsPrints {
    subscriptions: any,
    taxDetail: any
}
export interface ITransNewMemSubsPrintsResponse extends IGeneralResponse {
    result: ITransNewMemSubsPrints;
}
// //////////////////////////////////////// NEW MEMBERS SUBSCRIPTION ///////////////////////////////
/////////////////////// RUNNING MEMBERS DONATION //////////////////////////////
export interface ITransactionRunMemDonPayload {
    searchWithDateRange: boolean,
    fromDt: string
    toDt: string
    critaria: string,
    recordStatus: string
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IRunMemDonGroupResponse extends IGeneralResponse {
    result: IRunMemDonGroup[];
}
export interface IRunMemDonGroupPayload extends ITransactionRunMemDonPayload { }
export interface IRunMemDonGroup {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    memCardNo: string,
    paymetDetail: any,
    remarks: string
}
export interface IAddRunMemDonFormPayload {
    recptNo: string,
    recptDt: string,
    primary_Mem_Id: number,
    memCardNo: string,
    session: string,
    totalBasicAmt: number,
    totalFineAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    entry_Type: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    donationOrMiscCollection: string,
    paymetDetail: any,
    instalmentDetail: any
}
export interface IEditRunMemDonFormPayload {
    session: string,
    primary_Mem_Code: string,
    recptNo: string
}
export interface IRunMemDonEditResponse {
    subsChk: number,
    row_Id: string,
    session: string,
    recptNo: string,
    recptDt: string,
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
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    remarks: string,
    entry_Type: string
}
export interface IRunMemDonCreateResponse extends IGeneralResponse {
    result: IRunMemDonGroup;
}
export interface IRunMemDonUpdateResponse extends IGeneralResponse {
    result: IRunMemDonEditResponse;
}
export interface IRunMemDonDeleteResponse extends IGeneralResponse { }
export interface RunMemDonGetById {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    memCardNo: string,
    paymetDetail: any,
    remarks: string,
}
export interface IDeleteRunMemDonFormPayload {
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////////////////// RUNNING MEMBERS DONATION ///////////////////////////////
/////////////////////// MISCELLANEOUS COLLECTION //////////////////////////////
export interface ITransactionMiscCollecPayload {
    searchWithDateRange: boolean,
    fromDt: string
    toDt: string
    critaria: string,
    recordStatus: string
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IMiscCollecGroupResponse extends IGeneralResponse {
    result: IMiscCollecGroup[];
}
export interface IMiscCollecGroupPayload extends ITransactionMiscCollecPayload { }
export interface IMiscCollecGroup {
    searchD: boolean,
    from: string,
    to: string,
    sCrit: string,
    RctD: string,
    RctN: string,
    session: string,
    memN: string,
    memCode: string,
    netAmt: number,
    netPAmt: number,
    print: string,
    rcvD: string,
    rcvBy: string,
    bnk: string,
    chqN: string,
    amt: number,
    cash: number,
    other: number,
    total: number,
    tender: number,
    change: number,
    totPAmt: number,
    rem: string,
    details: any,
    details2: any,
    pHead: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddMiscCollecFormPayload {
    recptNo: string,
    recptDt: string,
    mem_Id: number,
    session: string,
    totalBasicAmt: number,
    totalFineAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    entry_Type: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    subsOrMiscCollection: string,
    paymetDetail: any,
    miscCollectionDetail: any,
}
export interface IEditMiscCollecFormPayload {
    recptNo: string,
    activate: string
}
export interface IMiscCollecEditResponse {
    row_Id: number,
    payHead: string,
    payAmt: number
}
export interface IMiscCollecCreateResponse extends IGeneralResponse {
    result: IMiscCollecGroup;
}
export interface IMiscCollecUpdateResponse extends IGeneralResponse {
    result: IMiscCollecEditResponse;
}
export interface IMiscCollecbDeleteResponse extends IGeneralResponse { }
export interface MiscCollecGetById {
    // searchD: boolean,
    // from: string,
    // to: string,
    // sCrit: string,
    // RctD: string,
    // RctN: string,
    // session: string,
    // memN: string,
    // memCode: string,
    // netAmt: number,
    // netPAmt: number,
    // print: string,
    // rcvD: string,
    // rcvBy: string,
    // bnk: string,
    // chqN: string,
    // amt: number,
    // cash: number,
    // other: number,
    // total: number,
    // tender: number,
    // change: number,
    // totPAmt: number,
    // rem: string,
    // details: any,
    // details2: any,
    // pHead: string,
    // addBy: number;
    // addTime: any;
    // editBy: number;
    // editTime: any;
    // companyCode: string;
    // activate: string;
}
export interface IDeleteMiscCollecFormPayload {
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////////////////// MISCELLANEOUS COLLECTION ///////////////////////////////
/////////////////////// POS //////////////////////////////
export interface IPosGroup {
    mem_Code: string,
    name: string,
    orderNo: string,
    waiterName: string,
    totalNet_AfterRo: number,
    waiter_Row_Id: number,
    memCardCb: number,
    hall_Id: number,
    hall_Name: string
}
export interface IPosFormAddPayload {
    session: string,
    orderDate: string,
    hallId: number,
    mem_Id: number,
    bill_Kot_TempBill: string,
    waiter: number,
    catererId: number,
    add_By: string,
    add_Comp_IP: string,
    pax: string,
    addEdit: string,
    orderNo: string,
    billNo: string,
    computerName: string,
    ItemDetail: any
    unsettledBill: any
}
export interface IPosCreateResponse extends IGeneralResponse {
    result: IPosGroup;
}
///////////////////////////////////////////////////// KOT EDIT API  //////////////////////////////////////
export interface IKOTEDITApiFormPayload {
    orderNo: string,
    isFoc: boolean
}
export interface IKOTEDITApi {
    mem_Id: number,
    mem_Code: string,
    cardNo: string,
    iteM_ID: number,
    itemCode: string,
    itemName: string,
    catererId: number,
    uoM_ID: number,
    totalQty: number,
    qtyB: number,
    rate: number,
    total_Amt: number,
    offer_Id: number,
    offerType: string,
    priceDiscType: string,
    price_Disc_Rate: number,
    discAmt: number,
    uomShort: string,
    basicAmt_AfterDisc: number,
    tax_Code: string,
    taxRate: number,
    taxAmt: number,
    itemValue: number,
    itemSubGrpType: string,
    qtyInMlPerUom: number,
    totalQtyInMl: number,
    isRecipeEnable: boolean,
    recipeType: string,
    activate: string,
    kot: string,
    isTaxable: boolean,
    inactive_Reason_Id: number,
    inactiveByUser: string,
    isFoc: boolean,
    rate_Original: number,
    cat_Alias: string,
    koT_Prefix_1: string,
    koT_Prefix_2: string,
    koT_Srl: string,
    catererName: string,
    waiter: string
}
export interface IKOTEDITApiApiResponse extends IGeneralResponse {
    result: IKOTEDITApi[];
}
/////////////////////////////////////////////// CANCEL ORDER ///////////////////////////////////////////
export interface IKOTCANCELApiFormPayload {
    orderNo: string,
    add_By: string,
    add_Comp_IP: string,
    isRestaurantOnly: boolean
}
export interface IKOTCANCELApi {
    result: any
}
export interface IKOTCANCELApiApiResponse extends IGeneralResponse {
    result: IKOTCANCELApi[];
}
/////////////////////////////////////////////// KOT PRINT TEMP BILL ///////////////////////////////////////////
export interface IKOTTEMPBILLApiFormPayload {
    orderNo: string,
    isSettled: boolean,
    memCardOb: number,
    memCardCb: number,
    reportName: string
}
export interface IKOTTEMPBILLApi {
    orderNo: string,
    mem_Code: string,
    name: string,
    billNo: string,
    orderDate: string,
    hall_Name: string,
    itemShort: string,
    totalQty: number,
    rate: number,
    basicAmt_AfterDisc: number,
    subGrpType: string,
    uomShort: string,
    offer_Free_Qty: false,
    totalBasic_AfterDisc: number,
    totalTaxAmt: number,
    toatlStAmt: number,
    totalItemValue: number,
    covChgAmt: number,
    totalNet: number,
    roundOff: number,
    totalNet_AfterRo: number,
    waiterName: string,
    memCardOb: number,
    memCardCb: number,
    pmtType: string,
    a_TIME: string,
    totalStPerOnCovChg: number,
    totalStOnCovChg: number,
    lastTopUpAmt: number
}
export interface IKOTTEMPBILLApiApiResponse extends IGeneralResponse {
    result: IKOTTEMPBILLApi[];
}
////////////////////////////////////////// CARD MINI STATEMENT ////////////////////////////////////////////
/////////////////////////////////////////////// KOT PRINT TEMP BILL ///////////////////////////////////////////
export interface ICardMiniApiFormPayload {
    fromDate: string,
    toDate: string,
    session: string,
    memeId: number,
    rptType: string
}
export interface ICardMiniApi {
    result: any
}
export interface ICardMiniApiApiResponse extends IGeneralResponse {
    result: ICardMiniApi;
}
/////////////////////////////////////////////// TOP UP UPDATE ///////////////////////////////////////////
export interface ITopUpApiFormPayload {
    orderNo: string,
    cardOb: number,
    cardCb: number
}
export interface ITopUpApi {
    result: any
}
export interface ITopUpApiApiResponse extends IGeneralResponse {
    result: ITopUpApi;
}
////////////////////////////// OFFSHOP KOT ///////////////////////////////////////////////
/////////////////////// POS //////////////////////////////
export interface IOffShopKotGroup {
    mem_Code: string,
    name: string,
    orderNo: string,
    waiterName: string,
    totalNet_AfterRo: number,
    waiter_Row_Id: number,
    memCardCb: number,
    hall_Id: number,
    hall_Name: string
}
export interface IOffShopKotFormAddPayload {
    session: string,
    billNo: string,
    billDate: string,
    hallId: number,
    mem_Id: number,
    totalItemValue: number,
    totalDiscount: number,
    totalItemValue_AfterDisc: number,
    table: any,
    add_By: string,
    add_Comp_IP: string,
    memName: string
}
export interface IOffShopKotCreateResponse extends IGeneralResponse {
    result: IOffShopKotGroup;
}
////////////////////////////////////////  OTHER BILLING KOT ///////////////////////////////////////////
export interface IOTHERKotGroup {
    result: any
}
export interface IOTHERKotFormAddPayload {
    session: string,
    orderDate: string,
    hallId: number,
    mem_Id: number,
    add_By: string,
    add_Comp_IP: string,
    pax: string,
    Table: any
    orderNo: string,
    billNo: string,
    computerName: string,
}
export interface IOTHERKotCreateResponse extends IGeneralResponse {
    result: IOTHERKotGroup;
}
/////////////////////// RUNNING MEMBERS SUBSCRIPTION //////////////////////////////
export interface ITransactionRunMemSubPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    }
    searchString: string
}
export interface IRunMemSubGroupResponse extends IGeneralResponse {
    result: IRunMemSubGroup[];
}
export interface IRunMemSubGroupPayload extends ITransactionRunMemSubPayload { }
export interface IRunMemSubGroup {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    cardNo: string,
    paymetDetail: any
}
export interface IAddRunMemSubFormPayload {
    recptNo: string,
    recptDt: string,
    primary_Mem_Id: number,
    memCardNo: string,
    session: string,
    totalBasicAmt: number,
    totalFineAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    entry_Type: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    subsOrMiscCollection: string,
    paymetDetail: any,
    instalmentDetail: any
}
export interface IRunMemSubCreateResponse extends IGeneralResponse {
    result: any;
}
export interface IRunMemSubDeleteResponse extends IGeneralResponse { }
export interface IRunMemSubGetByIdFormPayload {
    session: string,
    primary_Mem_Code: string,
    recptNo: string
}
export interface IRunMemSubGetByIdResult {
    subsChk: number,
    row_Id: string,
    session: string,
    recptNo: string,
    recptDt: string,
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
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    remarks: string,
    entry_Type: string
}
export interface IRunMemSubGetByIdResponse extends IGeneralResponse {
    result: IRunMemSubGetByIdResult[];
}
export interface RunMemSubGetById {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inActivateRemarks: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    cardNo: string,
    paymetDetail: any
}
export interface IDeleteRunMemSubFormPayload {
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////////////////START OF RUNNING MEMBER SUBSCRIPTION PRINT//////////////////
export interface ITransRunMemSubsPrintsFormPayload {
    recptNo: string,
}
export interface ITransRunMemSubsPrints {
    subscriptions: any,
    taxDetail: any
}
export interface ITransRunMemSubsPrintsResponse extends IGeneralResponse {
    result: ITransRunMemSubsPrints;
}
//////////////////////////////////////// RUNNING MEMBERS SUBSCRIPTION ///////////////////////////////
/////////////////////// CHECK MEMBER CARD //////////////////////////////
export interface ITransactionCheckMemberCardPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICheckMemberCardGroupResponse extends IGeneralResponse {
    result: ICheckMemberCardGroup[];
}
export interface ICheckMemberCardGroupPayload extends ITransactionCheckMemberCardPayload { }
export interface ICheckMemberCardGroup {
    cardno: string,
    mCode: string,
    status1: string,
    mType: string,
    issuD: string,
    issueY: string,
    cardBal: string,
    addr: string,
    resiNo: string,
    mobileN: number,
    emailId: string,
    bloodG: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddCheckMemberCardFormPayload {
    cardno: string,
    mCode: string,
    status1: string,
    mType: string,
    issuD: string,
    issueY: string,
    cardBal: string,
    addr: string,
    resiNo: string,
    mobileN: number,
    emailId: string,
    bloodG: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IEditCheckMemberCardFormPayload {
    cardno: string,
    mCode: string,
    status1: string,
    mType: string,
    issuD: string,
    issueY: string,
    cardBal: string,
    addr: string,
    resiNo: string,
    mobileN: number,
    emailId: string,
    bloodG: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ICheckMemberCardEditResponse {
    cardno: string,
    mCode: string,
    status1: string,
    mType: string,
    issuD: string,
    issueY: string,
    cardBal: string,
    addr: string,
    resiNo: string,
    mobileN: number,
    emailId: string,
    bloodG: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ICheckMemberCardCreateResponse extends IGeneralResponse {
    result: ICheckMemberCardGroup;
}
export interface ICheckMemberCardUpdateResponse extends IGeneralResponse {
    result: ICheckMemberCardEditResponse;
}
export interface ICheckMemberCardDeleteResponse extends IGeneralResponse { }
export interface CheckMemberCardGetById {
    cardno: string,
    mCode: string,
    status1: string,
    mType: string,
    issuD: string,
    issueY: string,
    cardBal: string,
    addr: string,
    resiNo: string,
    mobileN: number,
    emailId: string,
    bloodG: string,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteCheckMemberCardFormPayload {
    CheckMemberCardId: number;
}
//////////////////////////////////////// END OF CHECK MEMBER CARD///////////////////////////////
/////////////////////// MEMBER CARD BALANCE RETURN //////////////////////////////
export interface ITransactionMemberCardBalRetPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IMemberCardBalRetGroupResponse extends IGeneralResponse {
    result: IMemberCardBalRetGroup[];
}
export interface IMemberCardGroupPayload extends ITransactionMemberCardBalRetPayload { }
export interface IMemberCardBalRetGroup {
    row_Id: number,
    recpDate: string,
    recpNo: string,
    session: string,
    mem_Id: number,
    memberName: string,
    mem_Code: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    cardNo: string,
    totAge: string,
    sex: string,
    mobNo: string,
    address_Res: string,
    returnAmt: number,
    remarks: string,
    tenderedAmt: number,
    activate: string,
    add_By: string,
    add_Time: string,
    add_Comp_IP: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number
}
export interface IAddMemberCardBalRetFormPayload {
    row_Id: number,
    recpNo: string,
    recpDate: string,
    session: string,
    mem_Id: number,
    cardNo: string,
    returnAmt: number,
    remarks: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IMemberCardBalRetCreateResponse extends IGeneralResponse {
    result: ICheckMemberCardGroup;
}
export interface IMemberCardBalRetDeleteResponse extends IGeneralResponse { }
export interface MemberCardBalRetGetById {
    row_Id: number,
    recpDate: string,
    recpNo: string,
    session: string,
    mem_Id: number,
    memberName: string,
    mem_Code: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    cardNo: string,
    totAge: string,
    sex: string,
    mobNo: string,
    address_Res: string,
    returnAmt: number,
    remarks: string,
    tenderedAmt: number,
    activate: string,
    add_By: string,
    add_Time: any,
    add_Comp_IP: string,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number
}
export interface IDeleteMemberCardBalRetFormPayload {
    row_Id: number,
    recpNo: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////START OF GetCurrentBalById////////////////////
export interface ICurrentBalByIdeFormPayload {
    mem_Id: number,
    session: string
}
export interface ICurrentBalById {
    balance: number
}
export interface ICurrentBalByIdResponse extends IGeneralResponse {
    result: ICurrentBalById;
}
//////////////////////////START OF GetPrintMemCardBalReturn////////////////////
export interface IPrintMemCardBalReturnFormPayload {
    recpNo: string
}
export interface IPrintMemCardBalReturn {
    row_Id: number,
    recpNo: string,
    session: string,
    cardNo: string,
    recpDate: string,
    add_Time: string,
    returnAmt: number,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    mem_Id: number,
    receivedBy: string,
    user_Name: string,
    add_Comp_IP: string
}
export interface IPrintMemCardBalReturnResponse extends IGeneralResponse {
    result: IPrintMemCardBalReturn;
}
//////////////////////////////////////// END OF MEMBER CARD BALANCE RETURN   ///////////////////////////////
/////////////////////// TRANSFER INSTALLMENT //////////////////////////////
export interface ITransactionTransferInstPayload {
    session: string,
    suspenceDt: boolean,
    startDt: string,
    endDt: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    }
    searchString: string
}
export interface ITransferInstGroupResponse extends IGeneralResponse {
    result: ITransferInstGroup[];
}
export interface ITransferInstGroupPayload extends ITransactionTransferInstPayload { }
export interface ITransferInstGroup {
    row_Id: string,
    suspNo: string,
    suspDt: string,
    recptNo: string,
    recptNo_Adj: string,
    recptDt: string,
    session: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IAddTransferInstFormPayload {
    recptNo: string,
    suspDt: string,
    remarks: string,
    session: string,
    add_By: string,
    add_Comp_IP: string
}
export interface ITransferInstCreateResponse extends IGeneralResponse {
    result: ITransferInstGroup;
}
export interface ITransferInstGetByIdFormPayload {
    suspNo: string
}
export interface ITransferInstGetByIdResult {
    mainData: any,
    detailData: any,
    paymentDetails: any
}
export interface ITransferInstGetByIdResponse extends IGeneralResponse {
    result: ITransferInstGetByIdResult[];
}
export interface TransferInstGetById {
    row_Id: string,
    suspNo: string,
    suspDt: string,
    recptNo: string,
    recptNo_Adj: string,
    recptDt: string,
    session: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number,
    totalTaxAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
    suspenseMemId: number,
    suspMem_Code: string,
    suspMemberName: string,
}
//////////////////////////////////////// TRANSFER INSTALLMENT ///////////////////////////////
/////////////////////// SWIMMER MEMBER CARD TOP UP //////////////////////////////
export interface ITransactionSwimmerCardTopUpPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimmerCardTopUpGroupResponse extends IGeneralResponse {
    result: ISwimmerCardTopUpGroup[];
}
export interface ISwimmerCardTopUpGroupPayload extends ITransactionSwimmerCardTopUpPayload { }
export interface ISwimmerCardTopUpGroup {
    row_Id: string,
    rcptNo: string,
    rcptSlno: number,
    session: string,
    cardNo: string,
    topUpDt: string,
    topUpAmt: number,
    remarks: string,
    mem_Id: number,
    mem_Name: string,
    mem_Code: string,
    sex: string,
    totAge: number,
    mobNo: string,
    address_Res: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    hall_Id: number,
    hall_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string
}
export interface IAddSwimmerCardTopUpFormPayload {
    row_Id: string,
    rcptNo: string,
    session: string,
    mem_Id: number,
    cardNo: string,
    topUpDt: string,
    topUpAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    hall_Id: number
}
export interface ISwimmerCardTopUpCreateResponse extends IGeneralResponse {
    result: ISwimmerCardTopUpGroup;
}
export interface ISwimmerCardTopUpDeleteResponse extends IGeneralResponse { }
export interface SwimmerCardTopUpGetById {
    row_Id: string,
    rcptNo: string,
    rcptSlno: number,
    session: string,
    cardNo: string,
    cardNo_N: string,
    topUpDt: string,
    topUpAmt: number,
    remarks: string,
    mem_Id: number,
    mem_Name: string,
    mem_Code: string,
    sex: string,
    totAge: number,
    mobNo: string,
    address_Res: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    hall_Id: number,
    hall_Name: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    inactiveRem: string
}
export interface IDeleteSwimmerCardTopUpFormPayload {
    row_Id: string,
    rcptNo: string,
    inactiveRem: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////START OF GetPrintSwimMemCardTopUp////////////////////
export interface IPrintSwimMemCardTopUpFormPayload {
    row_Id: string
}
export interface IPrintSwimMemCardTopUp {
    row_Id: string,
    rcptNo: string,
    session: string,
    cardNo: string,
    topUpDt: string,
    topUpAmt: number,
    add_Time: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    mem_Code: string,
    pmtType: string,
    memName: string,
    mem_Id: number,
    receivedBy: string,
    hall_Id: number,
    hall_Name: string,
    activate: string,
    add_Comp_IP: string,
    pmtSrl: number,
    add_By: string,
    user_Name: string
}
export interface IPrintSwimMemCardTopUpResponse extends IGeneralResponse {
    result: IPrintSwimMemCardTopUp;
}
//////////////////////////////////////// END OF SWIMMER MEMBER CARD TOP UP///////////////////////////////
/////////////////////// Swimmer ISSUE CARD  //////////////////////////////
export interface ITransactionIssueCardPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IIssueCardGroupResponse extends IGeneralResponse {
    result: IIssueCardGroup[];
}
export interface IIssueCardGroupPayload extends ITransactionIssueCardPayload { }
export interface IIssueCardGroup {
    row_Id: string,
    mem_Id: number,
    mem_Code: string,
    memName: string,
    sex: string,
    sAddress: string,
    sContact: string,
    address_Res: string,
    mobNo: string,
    totAge: number,
    session: string,
    issueDt: string,
    issueDtTxt: string,
    cardNo: string,
    cautionMoney: number,
    issueTypeVal: string,
    issueType: string,
    cardType: string,
    fineAmt: number,
    prevCardNo: string,
    recpNo: string,
    recpNo_FN: string,
    primary_Mem_Code: string,
    printCount: number,
    cardEncodedCount: number,
    recvAmt: number,
    cautMoneyRefunded: boolean,
    cautMoneyRefundRow_Id: string,
    tranType: string,
    isReturnedPrevCard: boolean,
    recpSlno: number,
    remarks: string,
    remarks_Others: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IAddIssueCardFormPayload {
    mem_Code: string,
    session: string,
    mem_Id: number,
    issueDt: string,
    issueType: string,
    issueTypeTag: string,
    cardNo: string,
    cardType: string,
    cautionMoney: number,
    cautMoneyRefunded: true,
    fineAmt: number,
    tranType: string,
    prevCardNo: string,
    isReturnedPrevCard: true,
    remarks: string,
    remarks_Others: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string
}
export interface IIssueCardCreateResponse extends IGeneralResponse {
    result: IIssueCardGroup;
}
export interface IEncodeIssueCardResponse extends IGeneralResponse { }
export interface IssueCardGetById {
    row_Id: string,
    mem_Id: number,
    mem_Code: string,
    memName: string,
    sex: string,
    sAddress: string,
    sContact: string,
    address_Res: string,
    mobNo: string,
    totAge: number,
    session: string,
    issueDt: string,
    issueDtTxt: string,
    cardNo: string,
    cautionMoney: number,
    issueTypeVal: string,
    issueType: string,
    cardType: string,
    fineAmt: number,
    prevCardNo: string,
    recpNo: string,
    recpNo_FN: string,
    primary_Mem_Code: string,
    printCount: number,
    cardEncodedCount: number,
    recvAmt: number,
    cautMoneyRefunded: boolean,
    cautMoneyRefundRow_Id: string,
    tranType: string,
    isReturnedPrevCard: boolean,
    recpSlno: number,
    remarks: string,
    remarks_Others: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEncodeIssueCardFormPayload {
    row_Id: string
}
///////////////////////////Print////////////////////////////////////
export interface IPrintIssueCardFormPayload {
    row_Id: string
}
export interface IPrintIssueCard {
    row_Id: string,
    session: string,
    issueDt: string,
    add_Time: string,
    issueType: string,
    cardNo: string,
    cardType: string,
    cautionMoneyDtls: string,
    cautionMoney: number,
    fineAmt: number,
    recvAmt: number,
    cautMoneyRefunded: false,
    cautMoneyRefundRow_Id: string,
    tranType: string,
    prevCardNo: string,
    isReturnedPrevCard: false,
    recpNo: string,
    recpNo_FN: string,
    remarks: string,
    remarks_Others: string,
    printCount: number,
    receivedBy: string,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    mem_Id: number
}
export interface IPrintIssueCardResponse extends IGeneralResponse {
    result: IPrintIssueCard;
}
//////////////////////////////////////// END ISSUE CARD ///////////////////////////////
/////////////////////// SWIMMER CARD BALANCE RETURN //////////////////////////////
export interface ITransactionSwimMemberCardBalRetPayload {
    searchWithDateRange: boolean,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ISwimMemberCardBalRetGroupResponse extends IGeneralResponse {
    result: ISwimMemberCardBalRetGroup[];
}
export interface ISwimMemberCardGroupPayload extends ITransactionMemberCardBalRetPayload { }
export interface ISwimMemberCardBalRetGroup {
    row_Id: number,
    recpNo: string,
    slno: number,
    session: string,
    cardNo: string,
    recpDate: string,
    returnAmt: number,
    remarks: string,
    activate: string,
    mem_Id: number,
    mem_Name: string,
    mem_Code: string,
    sex: string,
    totAge: number,
    address_Res: string,
    mobNo: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number
}
export interface IAddSwimMemberCardBalRetFormPayload {
    row_Id: number,
    recpNo: string,
    recpDate: string,
    session: string,
    mem_Id: number,
    cardNo: string,
    returnAmt: number,
    remarks: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface ISwimMemberCardBalRetCreateResponse extends IGeneralResponse {
    result: ISwimMemberCardBalRetGroup;
}
export interface ISwimMMemberCardBalRetDeleteResponse extends IGeneralResponse { }
export interface SwimMMemberCardBalRetGetById {
    row_Id: number,
    recpNo: string,
    slno: number,
    session: string,
    cardNo: string,
    recpDate: string,
    returnAmt: number,
    remarks: string,
    activate: string,
    mem_Id: number,
    mem_Name: string,
    mem_Code: string,
    sex: string,
    totAge: number,
    address_Res: string,
    mobNo: string,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    printCount: number
}
export interface IDeleteSwimMMemberCardBalRetFormPayload {
    row_Id: number,
    recpNo: string,
    add_By: string,
    add_Comp_IP: string
}
//////////////////////////START OF GetSwimCurrentBalById////////////////////
export interface ISwimCurrentBalByIdFormPayload {
    mem_Id: number,
    session: string
}
export interface ISwimCurrentBalById {
    balance: number
}
export interface ISwimCurrentBalByIdResponse extends IGeneralResponse {
    result: ISwimCurrentBalById;
}
//////////////////////////START OF GetPrintSwimMemCardBalReturn////////////////////
export interface IPrintSwimMemCardBalReturnFormPayload {
    recpNo: string
}
export interface IPrintSwimMemCardBalReturn {
    row_Id: number,
    recpNo: string,
    session: string,
    cardNo: string,
    recpDate: string,
    add_Time: string,
    returnAmt: number,
    paymentTypeCode: string,
    tenderedAmt: number,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    mem_Code: string,
    memName: string,
    mem_Id: number,
    receivedBy: string,
    user_Name: string,
    add_Comp_IP: string
}
export interface IPrintSwimMemCardBalReturnResponse extends IGeneralResponse {
    result: IPrintSwimMemCardBalReturn;
}
//////////////////////////////////////// END OF SWIMMER CARD BALANCE RETURN   ///////////////////////////////
/////////////////////// ISSUE OFF SHOP ITEM FROM GODOWN //////////////////////////////
export interface ICancelIssuePayload {
    issueNo: string;
    voidReasonId: number;
    user_Code: string;
    add_By: string;
    add_Comp_IP: string;
}
export interface IIssueOffShopItemFrnGdnPayload {
    billNo: string,
    issueDt: string,
    session: string,
    add_By: string;
    add_Comp_IP: string;
}
//////////////////////////////////END OF ISSUE OFF SHOP ITEM FROM GODOWN///////////////////////////
/////////////////////// GOODS RECEIPTS NOTES //////////////////////////////
export interface ITransactionGoodsRctNotePayload {
    searchWithGRNDate: boolean,
    fromDt: string,
    toDt: string,
    party_Code: string,
    session: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IGoodsRctNoteGroupResponse extends IGeneralResponse {
    result: IGoodsRctNoteGroup[];
}
export interface IGoodsRctNoteGroupPayload extends ITransactionGoodsRctNotePayload { }
export interface IGoodsRctNoteGroup {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    partY_NAME: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    session: string
}
export interface IAddGoodsRctNoteFormPayload {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    addEditInactive: string,
    add_By: string,
    add_Comp_IP: string,
    session: string,
    itemDetails: any
}
export interface IGoodsRctNoteCreateResponse extends IGeneralResponse {
    result: IGoodsRctNoteGroup;
}
export interface IGoodsRctNoteGetByIdPayload {
    grN_NO: string
}
export interface IGoodsRctNoteGetByIdResponse extends IGeneralResponse {
    result: IGoodsRctNoteGetByIdResult[];
}
export interface IGoodsRctNoteGetByIdResult {
    roW_ID: number,
    grN_NO: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomName: string,
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    mrp: number,
    uoM_InMl: number,
    measureInMl: number,
    peR_ML_RATE: number,
    per_Ml_Rate_Purchase: number,
    activate: string
}
export interface GoodsRctNoteGetById {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    partY_NAME: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    session: string
}
//////////////////////////////////////// GOODS RECEIPTS NOTES ///////////////////////////////
/////////////////////// ISSUE FROM GODOWN TO RESTAURANT //////////////////////////////
export interface ITransactionIssueGdnResPayload {
    searchWithIssueDate: boolean,
    fromDt: string,
    toDt: string,
    finYear: string,
    hall_Id: number,
    caterar_Id: number,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IIssueGdnResGroupResponse extends IGeneralResponse {
    result: IIssueGdnResGroup[];
}
export interface IIssueGdnResGroupPayload extends ITransactionIssueGdnResPayload { }
export interface IIssueGdnResGroup {
    roW_ID: number,
    issuE_NO: string,
    issuE_DATE: string,
    hall_Id: number,
    hall_Name: string,
    cat_Row_Id: number,
    catererName: string,
    reQ_NO: string,
    activate: string,
    remarks: string
}
export interface IAddIssueGdnResFormPayload {
    roW_ID: number,
    issuE_NO: string,
    issuE_DATE: string,
    hall_Id: number,
    cat_Row_Id: number,
    reQ_NO: string,
    session: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    remarks: string,
    addEditInactive: string,
    restItemDetails: any
}
export interface IIssueGdnResCreateResponse extends IGeneralResponse {
    result: IIssueGdnResGroup;
}
export interface IIssueGdnResbDeleteResponse extends IGeneralResponse { }
export interface IssueGdnResGetById {
    roW_ID: number,
    issuE_NO: string,
    issuE_DATE: string,
    hall_Id: number,
    hall_Name: string,
    cat_Row_Id: number,
    catererName: string,
    reQ_NO: string,
    activate: string,
    remarks: string
}
export interface IIssueGdnResGetByIdPayload {
    issuE_NO: string
}
export interface IIssueGdnResGetByIdResponse extends IGeneralResponse {
    result: IIssueGdnResGetByIdResult[];
}
export interface IIssueGdnResGetByIdResult {
    grN_NO: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    reS_ITEM_ID: number,
    itemName: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    qtY_IN_ML: number,
    purRate_IN_ML: number,
    grN_Detail_Id: number,
    oB_SOURCE: string,
    rate_IN_ML_Pur: number
}
//////////////////////////////////END OF ISSUE FROM GODOWN TOO RESTAURANT///////////////////////////
/////////////////////// OTHER MATERIALS ISSUE DETAILS //////////////////////////////
export interface ITransactionOtherMatIssueDetPayload {
    searchWithDateRange: boolean,
    finYear: string,
    startDt: string,
    endDt: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IOtherMatIssueDetGroupResponse extends IGeneralResponse {
    result: IOtherMatIssueDetGroup[];
}
export interface IOtherMatIssueDetGroupPayload extends ITransactionOtherMatIssueDetPayload { }
export interface IOtherMatIssueDetGroup {
    row_Id: number,
    issue_No: string,
    issue_Date: string,
    session: string,
    activate: string,
}
export interface IAddOtherMatIssueDetFormPayload {
    session: string,
    issue_No: string,
    issue_Date: number,
    issueFor: string,
    adD_BY: string,
    add_Comp_IP: string,
    str: string,
    itemOthIssueMtrlDtl: any
}
export interface IOtherMatIssueDetCreateResponse extends IGeneralResponse {
    result: IOtherMatIssueDetGroup;
}
export interface IOtherMatIssueDetGetByIdPayload {
    issue_No: string
}
export interface IOtherMatIssueGetByIdResponse extends IGeneralResponse {
    result: IOtherMatIssueGetByIdResult[];
}
export interface IOtherMatIssueGetByIdResult {
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
export interface IOtherMatIssueDetbDeleteResponse extends IGeneralResponse { }
export interface OtherMatIssueDetGetById {
    row_Id: number,
    issue_No: string,
    issue_Date: string,
    session: string,
    activate: string,
}
export interface IDeleteOtherMatIssueDetFormPayload {
    row_Id: number;
}
//////////////////////////////////END OF OTHER MATERIALS ISSUE DETAILS///////////////////////////
/////////////////////// GOODS RETURN NOTE //////////////////////////////
export interface ITransactionGoodsRetNotePayload {
    searchWithGRNDate: boolean,
    fromDt: string,
    toDt: string,
    party_Code: string,
    party_Name: string,
    session: string,
    criteria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IGoodsRetNoteGroupResponse extends IGeneralResponse {
    result: IGoodsRetNoteGroup[];
}
export interface IGoodsRetNoteGroupPayload extends ITransactionGoodsRetNotePayload { }
export interface IGoodsRetNoteGroup {
    roW_ID: number
    return_NO: string
    return_Date: string
    return_DateT: string
    partY_CODE: string
    session: string
    activate: string
    partY_NAME: string,
    add_By: string,
    add_Comp_IP: string,
}
export interface IAddGoodsRetNoteFormPayload {
    roW_ID: number,
    return_NO: string,
    return_Date: string,
    partY_CODE: string,
    session: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    rtrnItemDetails: any
}
export interface IGoodsRetNoteCreateResponse extends IGeneralResponse {
    result: IGoodsRetNoteGroup;
}
export interface IGoodsRetNotebDeleteResponse extends IGeneralResponse { }
export interface GoodsRetNoteGetById {
    roW_ID: number
    return_NO: string
    return_Date: string
    return_DateT: string
    partY_CODE: string
    session: string
    activate: string
    partY_NAME: string
    add_By: string,
    add_Comp_IP: string,
}
export interface IGoodsRetNoteDetGetByIdPayload {
    roW_ID: number,
    return_NO: string,
    return_Date: string,
    session: string
}
export interface IDeleteGoodsRetNoteFormPayload {
    roW_ID: number,
    return_NO: string
    activate: string
    add_By: string
    add_Comp_IP: string
}
//////////////////////////////////END OF GOODS RETURN NOTE///////////////////////////
////////////////////// GOODS ADJUSTMENT AT GODOWN //////////////////////////////
export interface ITransactionGoodsAdjGdwnPayload {
    fromDt: string,
    toDt: string,
    session: string,
    searchWithItem: boolean,
    item_Id: number,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IGoodsAdjGdwnGroupResponse extends IGeneralResponse {
    result: IGoodsAdjGdwnGroup[];
}
export interface IGoodsAdjGdwnGroupPayload extends ITransactionGoodsAdjGdwnPayload { }
export interface IGoodsAdjGdwnGroup {
    wastagE_DATE: string,
    grN_NO: string,
    grN_Detail_Id: number,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    reason_Row_Id: number,
    reason: string,
    remarks: string,
    session: string,
    oB_SOURCE: string,
    add_By: string,
    add_Comp_IP: string,
    qtY_IN_ML: number,
    activate: string,
    roW_ID: number
}
export interface IAddGoodsAdjGdwnFormPayload {
    wastagE_DATE: string,
    grN_Detail_Id: number,
    iteM_ID: number,
    uoM_ID: number,
    qty: number,
    reason_Row_Id: number,
    remarks: string,
    session: string,
    oB_SOURCE: string,
    add_By: string,
    add_Comp_IP: string,
    qtY_IN_ML: number,
    activate: string,
    roW_ID: number
}
export interface IEditGoodsAdjGdwnFormPayload {
    wastagE_DATE: string,
    grN_Detail_Id: number,
    iteM_ID: number,
    uoM_ID: number,
    qty: number,
    reason_Row_Id: number,
    remarks: string,
    session: string,
    oB_SOURCE: string,
    add_By: string,
    add_Comp_IP: string,
    qtY_IN_ML: number,
    activate: string,
    roW_ID: number
}
export interface IGoodsAdjGdwnEditResponse {
    wastagE_DATE: string,
    grN_NO: string,
    grN_Detail_Id: number,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    reason_Row_Id: number,
    reason: string,
    remarks: string,
    session: string,
    oB_SOURCE: string,
    add_By: string,
    add_Comp_IP: string,
    qtY_IN_ML: number,
    activate: string,
    roW_ID: number
}
export interface IGoodsAdjGdwnCreateResponse extends IGeneralResponse {
    result: IGoodsAdjGdwnGroup;
}
export interface IGoodsAdjGdwnUpdateResponse extends IGeneralResponse {
    result: IGoodsAdjGdwnEditResponse;
}
export interface GoodsAdjGdwnGetById {
    wastagE_DATE: string,
    grN_NO: string,
    grN_Detail_Id: number,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    uoM_ID: number,
    uomShort: string,
    qty: number,
    reason_Row_Id: number,
    reason: string,
    remarks: string,
    session: string,
    oB_SOURCE: string,
    add_By: string,
    add_Comp_IP: string,
    qtY_IN_ML: number,
    activate: string,
    roW_ID: number
}
//////////////////////////////////END OF GOODS ADJUSTMENT AT GODOWN///////////////////////////
/////////////////////// ITEM(OTHER) OPENING BALANCE //////////////////////////////
export interface ITransactionItemOtherOpenBalPayload {
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemOtherOpenBalGroupResponse extends IGeneralResponse {
    result: IItemOtherOpenBalGroup[];
}
export interface IItemOtherOpenBalGroupPayload extends ITransactionItemOtherOpenBalPayload { }
export interface IItemOtherOpenBalGroup {
    roW_ID: number,
    itemCode: string,
    itemName: string,
    oB_Value: number,
    activate: string,
    grN_NO: string,
    grN_DATE: string,
    uomShort: string,
    session: string,
    iteM_ID: number,
    uoM_ID: number,
    oB_QTY: number,
    qtY_IN_ML: number,
    oB_RATE: number,
    peR_ML_RATE: number,
    per_Ml_Rate_Purchase: number,
    itemType: string,
    grN_Detail_Id: number
}
export interface IAddItemOtherOpenBalFormPayload {
    roW_ID: number,
    session: string,
    iteM_ID: number,
    uoM_ID: number,
    grN_Detail_Id: number,
    grN_NO: string,
    grN_DATE: string,
    oB_QTY: number,
    qtY_IN_ML: number,
    oB_RATE: number,
    oB_VALUE: number,
    peR_ML_RATE: number,
    per_Ml_Rate_Purchase: number,
    add_By: string,
    add_Comp_IP: string
}
export interface IItemOtherOpenBalCreateResponse extends IGeneralResponse {
    result: IItemOtherOpenBalGroup;
}
export interface IItemOtherOpenBalbDeleteResponse extends IGeneralResponse { }
export interface ItemOtherOpenBalGetById {
    roW_ID: number,
    itemCode: string,
    itemName: string,
    oB_Value: number,
    activate: string,
    grN_NO: string,
    grN_DATE: string,
    uomShort: string,
    session: string,
    iteM_ID: number,
    uoM_ID: number,
    oB_QTY: number,
    qtY_IN_ML: number,
    oB_RATE: number,
    peR_ML_RATE: number,
    per_Ml_Rate_Purchase: number,
    itemType: string,
    grN_Detail_Id: number
}
export interface IDeleteItemOtherOpenBalFormPayload {
    roW_ID: number;
}
//////////////////////////////////END OF ITEM(OTHER) OPENING BALANCE///////////////////////////
/////////////////////// ITEM(RESTAURANT) OPENING BALANCE //////////////////////////////
export interface ITransactionItemRestOpenBalPayload {
    searchWithDateRange: false,
    fromDt: string,
    toDt: string,
    critaria: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IItemRestOpenBalGroupResponse extends IGeneralResponse {
    result: IItemRestOpenBalGroup[];
}
export interface IItemRestOpenBalGroupPayload extends ITransactionItemRestOpenBalPayload { }
export interface IItemRestOpenBalGroup {
    srl: number,
    row_Id: number,
    session: string,
    uomShort: string,
    uom_Id: number,
    item_Id: number,
    itemCode: string,
    itemName: string,
    caterer_Id: number,
    catererName: string,
    activate: string,
    oB_Qty: number,
    qtyInMlPerUom: number,
    oB_QtyInMl: number,
    purRateInMl: number,
    itemSubGrpType: string,
    subGrpTypeTxt: string,
    hall_Id: number,
    hall_Name: string
}
export interface IAddItemRestOpenBalFormPayload {
    row_Id: number,
    session: string,
    item_Id: number,
    caterer_Id: number,
    uom_Id: number,
    hall_Id: number,
    oB_Qty: number,
    itemSubGrpType: string,
    qtyInMlPerUom: number,
    oB_QtyInMl: number,
    purRateInMl: number,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IItemRestOpenBalCreateResponse extends IGeneralResponse {
    result: IItemRestOpenBalGroup;
}
export interface IItemRestOpenBalbDeleteResponse extends IGeneralResponse { }
export interface ItemRestOpenBalGetById {
    srl: number,
    row_Id: number,
    session: string,
    uomShort: string,
    uom_Id: number,
    item_Id: number,
    itemCode: string,
    itemName: string,
    caterer_Id: number,
    catererName: string,
    activate: string,
    oB_Qty: number,
    qtyInMlPerUom: number,
    oB_QtyInMl: number,
    purRateInMl: number,
    itemSubGrpType: string,
    subGrpTypeTxt: string,
    hall_Id: number,
    hall_Name: string
}
export interface IDeleteItemRestOpenBalFormPayload {
    row_Id: number;
}
//////////////////////////////////END OF ITEM(RESTAURANT) OPENING BALANCE///////////////////////////
/////////////////////// LIQUOR STOCK ADJUSTMENT //////////////////////////////
export interface ITransactionLiqStockAdjPayload {
    searchWithINCDate: false,
    fromDt: string,
    toDt: string,
    criteria: string,
    caterer_Id: number,
    item_Id: number,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ILiqStockAdjGroupResponse extends IGeneralResponse {
    result: ILiqStockAdjGroup[];
}
export interface ILiqStockAdjGroupPayload extends ITransactionLiqStockAdjPayload { }
export interface ILiqStockAdjGroup {
    row_Id: string;
    session: string;
    adjDate: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    adjDate_DateVal: string;
    adjQtyGrid: number;
    qtyInMlPerUom: number;
    totalQtyInMl: number;
    subGrpType: string;
    subGrpTypeTxt: string | null;
    reason_Id: number;
    remarks: string;
    hall_Id: number;
    hall_Name: string;
    adjNature: string;
    adjQty: number;
}
export interface IAddLiqStockAdjFormPayload {
    row_Id: string,
    session: string,
    adjDate: string,
    item_Id: number,
    caterer_Id: number,
    uom_Id: number,
    adjNature: string,
    adjQty: number,
    reason_Id: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string,
    subGrpType: string,
    qtyInMlPerUom: number,
    totalQtyInMl: number,
    hall_Id: number
}
export interface ILiqStockAdjCreateResponse extends IGeneralResponse {
    result: ILiqStockAdjGroup;
}
export interface ILiqStockAdjbDeleteResponse extends IGeneralResponse { }
export interface LiqStockAdjGetById {
    row_Id: string;
    session: string;
    adjDate: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    adjDate_DateVal: string;
    adjQtyGrid: number;
    qtyInMlPerUom: number;
    totalQtyInMl: number;
    subGrpType: string;
    subGrpTypeTxt: string | null;
    reason_Id: number;
    remarks: string;
    hall_Id: number;
    hall_Name: string;
    adjNature: string;
    adjQty: number;
}
export interface IDeleteLiqStockAdjFormPayload {
    row_Id: string;
}
//////////////////////////////////END OF LIQUOR STOCK ADJUSTMENT///////////////////////////
/////////////////////// INCREASE BAR STOCK //////////////////////////////
export interface ITransactionIncreseBarStPayload {
    searchWithINCDate: false,
    fromDt: string,
    toDt: string,
    criteria: string,
    caterer_Id: number,
    item_Id: number,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IIncreseBarStGroupResponse extends IGeneralResponse {
    result: IIncreseBarStGroup[];
}
export interface IIncreseBarStGroupPayload extends ITransactionIncreseBarStPayload { }
export interface IIncreseBarStGroup {
    row_Id: number;
    session: string;
    incDate: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    incDate_DateVal: string;
    incQtyGrid: number;
    qtyInMlPerUom: number;
    totalQtyInMl: number;
    itemSubGrpType: string;
    subGrpTypeTxt: string;
    reason_Id: number;
    remarks: string;
    hall_Id: number;
    hall_Name: string;
    incQty: number;
    user_Name: string;
    mrpPerMl: number;
}
export interface IAddIncreseBarStFormPayload {
    row_Id: number,
    session: string,
    incDate: string,
    item_Id: number,
    caterer_Id: number,
    uom_Id: number,
    hall_Id: number,
    incQty: number,
    itemSubGrpType: string,
    qtyInMlPerUom: number,
    totalQtyInMl: number,
    mrpPerMl: number,
    inc_User: string,
    inc_User_Pw: string,
    inc_User_Name: string,
    reason_Id: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IIncreseBarStCreateResponse extends IGeneralResponse {
    result: IIncreseBarStGroup;
}
export interface IIncreseBarStbDeleteResponse extends IGeneralResponse { }
export interface IncreseBarStGetById {
    row_Id: number;
    session: string;
    incDate: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    incDate_DateVal: string;
    incQtyGrid: number;
    qtyInMlPerUom: number;
    totalQtyInMl: number;
    itemSubGrpType: string;
    subGrpTypeTxt: string;
    reason_Id: number;
    remarks: string;
    hall_Id: number;
    hall_Name: string;
    incQty: number;
    user_Name: string;
    mrpPerMl: number;
}
export interface IDeleteIncreseBarStFormPayload {
    row_Id: number;
}
//////////////////////////////////END OF INCREASE BAR STOCK///////////////////////////
/////////////////////// CANTEEN FOOD WASTAGE AT RESTAURANT //////////////////////////////
export interface ITransactionCanFoodWastePayload {
    searchWithDateRange: false,
    fromDt: string,
    toDt: string,
    critaria: string,
    item_Id: number,
    caterer_Id: number,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ICanFoodWasteGroupResponse extends IGeneralResponse {
    result: ICanFoodWasteGroup[];
}
export interface ICanFoodWasteGroupPayload extends ITransactionCanFoodWastePayload { }
export interface ICanFoodWasteGroup {
    row_Id: string;
    session: string;
    adjDate: string;
    adjNo: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    adjDate_DateVal: string;
    adjQtyGrid: number;
    subGrpType: string;
    adjQty: number;
    hallId: number;
    hall_Name: string;
    reason_Id: number;
    remarks: string;
    subGrpTypeTxt: string | null;
}
export interface IAddCanFoodWasteFormPayload {
    row_Id: string,
    session: string,
    adjNo: string,
    adjDate: string,
    item_Id: number,
    caterer_Id: number,
    uom_Id: number,
    hall_Id: number,
    adjQty: number,
    reason_Id: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string,
    subGrpType: string
}
export interface ICanFoodWasteCreateResponse extends IGeneralResponse {
    result: ICanFoodWasteGroup;
}
export interface ICanFoodWastebDeleteResponse extends IGeneralResponse { }
export interface CanFoodWasteGetById {
    row_Id: string;
    session: string;
    adjDate: string;
    adjNo: string;
    uomShort: string;
    uom_Id: number;
    item_Id: number;
    itemName: string;
    itemCode: string;
    caterer_Id: number;
    catererName: string;
    activate: string;
    adjDate_DateVal: string;
    adjQtyGrid: number;
    subGrpType: string;
    adjQty: number;
    hallId: number;
    hall_Name: string;
    reason_Id: number;
    remarks: string;
    subGrpTypeTxt: string | null;
}
export interface IDeleteCanFoodWasteFormPayload {
    row_Id: string;
}
//////////////////////////////////END OF CANTEEN FOOD WASTAGE AT RESTAURANT///////////////////////////
/////////////////////// CANTEEN RAW MATERIAL OPENING BALANCE //////////////////////////////
export interface ITransactionCanteenRawMatPayload {
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface ICanteenRawMatGroupResponse extends IGeneralResponse {
    result: ICanteenRawMatGroup[];
}
export interface ICanteenRawMatGroupPayload extends ITransactionCanteenRawMatPayload { }
export interface ICanteenRawMatGroup {
    row_Id: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    oB_QTY: string,
    uoM_ID: number,
    uomShort: string,
    activate: string
}
export interface IAddCanteenRawMatFormPayload {
    row_Id: string,
    session: string,
    iteM_ID: number,
    uoM_ID: number,
    oB_QTY: number,
    add_By: string,
    add_Comp_IP: string
}
export interface ICanteenRawMatCreateResponse extends IGeneralResponse {
    result: ICanteenRawMatGroup;
}
export interface ICanteenRawMatbDeleteResponse extends IGeneralResponse { }
export interface CanteenRawMatGetById {
    row_Id: string,
    iteM_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    oB_QTY: string,
    uoM_ID: number,
    uomShort: string,
    activate: string
}
export interface IDeleteCanteenRawMatFormPayload {
    row_Id: string;
}
//////////////////////////////////END OF CANTEEN RAW MATERIAL OPENING BALANCE///////////////////////////
///////////////////////  GRN FOR CANTEEN RAW MATERIALS //////////////////////////////
export interface ITransactionGRNforCanteenPayload {
    searchWithGRNDate: boolean,
    fromDt: string,
    toDt: string,
    party_Code: string,
    session: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IGRNforCanteenGroupResponse extends IGeneralResponse {
    result: IGRNforCanteenGroup[];
}
export interface IGRNforCanteenGroupPayload extends ITransactionGRNforCanteenPayload { }
export interface IGRNforCanteenGroup {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    partY_NAME: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    session: string
}
export interface IAddGRNforCanteenFormPayload {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    addEditInactive: string,
    add_By: string,
    add_Comp_IP: string,
    session: string,
    canteenItemDetails: any
}
export interface IGRNforCanteenCreateResponse extends IGeneralResponse {
    result: IGRNforCanteenGroup;
}
export interface IGRNforCanteenbDeleteResponse extends IGeneralResponse { }
export interface GRNforCanteenGetById {
    roW_ID: number,
    grN_NO: string,
    grN_DATE: string,
    partY_CODE: string,
    partY_NAME: string,
    party_Inv_No: string,
    party_Inv_Date: string,
    basic_Amt: number,
    total_Tax: number,
    rounD_OFF: number,
    net_Amt: number,
    remarks: string,
    activate: string,
    session: string
}
export interface IGRNforCanteenGetByIdPayload {
    grN_NO: string
}
export interface IGRNforCanteenGetByIdResponse extends IGeneralResponse {
    result: IGRNforCanteenGetByIdResult[];
}
export interface IGRNforCanteenGetByIdResult {
    roW_ID: number,
    grN_NO: string
    iteM_ID: number,
    iteM_CODE: string
    iteM_NAME: string
    uoM_ID: number,
    uomName: string
    qty: number,
    rate: number,
    basic: number,
    vat: number,
    rounD_OFF: number,
    total: number,
    activate: string
}
//////////////////////////////////////// END OF GRN FOR CANTEEN RAW MATERIALS ///////////////////////////////
///////////////////////  ADJUSTMENT OF CANTEEEN RAW MATERIALS  //////////////////////////////
export interface ITransactionCanteenRawAdjPayload {
    searchWithDateRange: false,
    session: string,
    fromDt: string,
    toDt: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICanteenRawAdjGroupResponse extends IGeneralResponse {
    result: ICanteenRawAdjGroup[];
}
export interface ICanteenRawAdjGroupPayload extends ITransactionCanteenRawAdjPayload { }
export interface ICanteenRawAdjGroup {
    row_Id: string,
    adjNo: string,
    adjDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    adjQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IAddCanteenRawAdjFormPayload {
    adjNo: string,
    adjDt: string,
    session: string,
    item_Id: number,
    uom_Id: number,
    adjQty: number,
    reason_Id: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
export interface IEditCanteenRawAdjFormPayload {
    adjNo: string,
    adjDt: string,
    session: string,
    item_Id: number,
    uom_Id: number,
    adjQty: number,
    reason_Id: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
export interface ICanteenRawAdjEditResponse {
    adjNo: string,
    adjDt: string,
    session: string,
    item_Id: number,
    uom_Id: number,
    adjQty: number,
    reason_Id: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
}
export interface ICanteenRawAdjCreateResponse extends IGeneralResponse {
    result: ICanteenRawAdjGroup;
}
export interface ICanteenRawAdjUpdateResponse extends IGeneralResponse {
    result: ICanteenRawAdjEditResponse;
}
export interface ICanteenRawAdjbDeleteResponse extends IGeneralResponse { }
export interface CanteenRawAdjGetById {
    row_Id: string,
    adjNo: string,
    adjDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    adjQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IDeleteCanteenRawAdjFormPayload {
    adjNo: string
}
//////////////////////////////////////// END OF ADJUSTMENT OF CANTEEEN RAW MATERIALS ///////////////////////////////
///////////////////////  ISSUE OF CANTEEEN RAW MATERIALS  //////////////////////////////
export interface ITransactionIssueRawMtrlPayload {
    searchWithDateRange: false,
    session: string,
    fromDt: string,
    toDt: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IIssueRawMtrlGroupResponse extends IGeneralResponse {
    result: IIssueRawMtrlGroup[];
}
export interface IIssueRawMtrlGroupPayload extends ITransactionIssueRawMtrlPayload { }
export interface IIssueRawMtrlGroup {
    row_Id: string,
    issueNo: string,
    issueDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    issueQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IAddIssueRawMtrlFormPayload {
    issueNo: string,
    issueDt: string,
    session: string,
    item_Id: number,
    uom_Id: number,
    issueQty: number,
    remarks: string,
    add_By: string,
    add_Comp_IP: string,
}
export interface IEditIssueRawMtrlFormPayload {
    row_Id: string,
    issueNo: string,
    issueDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    issueQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IIssueRawMtrlEditResponse {
    row_Id: string,
    issueNo: string,
    issueDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    issueQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IIssueRawMtrlCreateResponse extends IGeneralResponse {
    result: IIssueRawMtrlGroup;
}
export interface IIssueRawMtrlUpdateResponse extends IGeneralResponse {
    result: IIssueRawMtrlEditResponse;
}
export interface IIssueRawMtrlbDeleteResponse extends IGeneralResponse { }
export interface IssueRawMtrlGetById {
    row_Id: string,
    issueNo: string,
    issueDt: string,
    session: string,
    item_Id: number,
    iteM_CODE: string,
    iteM_NAME: string,
    itemType: string,
    uom_Id: number,
    uomShort: string,
    issueQty: number,
    reason_Id: number,
    reason: string,
    remarks: string,
    add_By: string,
    add_Comp_IP: string
    activate: string
}
export interface IDeleteIssueRawMtrlFormPayload {
    issueNo: string,
}
//////////////////////////////////////// END OF ISSUE OF CANTEEEN RAW MATERIALS ///////////////////////////////
///////////////////////  CANTEEN BILLING  //////////////////////////////
export interface ITransactionCanteenBillPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICanteenBillGroupResponse extends IGeneralResponse {
    result: ICanteenBillGroup[];
}
export interface ICanteenBillGroupPayload extends ITransactionCanteenBillPayload { }
export interface ICanteenBillGroup {
    choice1: string,
    cardno: string,
    memCode: string,
    stat: string,
    memType: string,
    issueD: string,
    issueY: string,
    caterer: string,
    cardAvBal: number,
    currRunB: number,
    otherRunB: number,
    runBal: number,
    print: boolean,
    searchB: string,
    nameB: string,
    uomB: string,
    qtyB: number,
    rateB: number,
    basicAmtB: number,
    taxRtB: number,
    taxAmtB: number,
    itemValB: number,
    freeOfC: false,
    rndOff: number,
    billAmt: number,
    custName: string,
    details: any,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ICanteenBillFormPayload {
    choice1: string,
    cardno: string,
    memCode: string,
    stat: string,
    memType: string,
    issueD: string,
    issueY: string,
    caterer: string,
    cardAvBal: number,
    currRunB: number,
    otherRunB: number,
    runBal: number,
    print: boolean,
    searchB: string,
    nameB: string,
    uomB: string,
    qtyB: number,
    rateB: number,
    basicAmtB: number,
    taxRtB: number,
    taxAmtB: number,
    itemValB: number,
    freeOfC: false,
    rndOff: number,
    billAmt: number,
    custName: string,
    details: any,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IEditCanteenBillFormPayload {
    choice1: string,
    cardno: string,
    memCode: string,
    stat: string,
    memType: string,
    issueD: string,
    issueY: string,
    caterer: string,
    cardAvBal: number,
    currRunB: number,
    otherRunB: number,
    runBal: number,
    print: boolean,
    searchB: string,
    nameB: string,
    uomB: string,
    qtyB: number,
    rateB: number,
    basicAmtB: number,
    taxRtB: number,
    taxAmtB: number,
    itemValB: number,
    freeOfC: false,
    rndOff: number,
    billAmt: number,
    custName: string,
    details: any,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ICanteenBillEditResponse {
    choice1: string,
    cardno: string,
    memCode: string,
    stat: string,
    memType: string,
    issueD: string,
    issueY: string,
    caterer: string,
    cardAvBal: number,
    currRunB: number,
    otherRunB: number,
    runBal: number,
    print: boolean,
    searchB: string,
    nameB: string,
    uomB: string,
    qtyB: number,
    rateB: number,
    basicAmtB: number,
    taxRtB: number,
    taxAmtB: number,
    itemValB: number,
    freeOfC: false,
    rndOff: number,
    billAmt: number,
    custName: string,
    details: any,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ICanteenBillCreateResponse extends IGeneralResponse {
    result: ICanteenBillGroup;
}
export interface ICanteenBillUpdateResponse extends IGeneralResponse {
    result: ICanteenBillEditResponse;
}
export interface ICanteenBillbDeleteResponse extends IGeneralResponse { }
export interface CanteenBillGetById {
    choice1: string,
    cardno: string,
    memCode: string,
    stat: string,
    memType: string,
    issueD: string,
    issueY: string,
    caterer: string,
    cardAvBal: number,
    currRunB: number,
    otherRunB: number,
    runBal: number,
    print: boolean,
    searchB: string,
    nameB: string,
    uomB: string,
    qtyB: number,
    rateB: number,
    basicAmtB: number,
    taxRtB: number,
    taxAmtB: number,
    itemValB: number,
    freeOfC: false,
    rndOff: number,
    billAmt: number,
    custName: string,
    details: any,
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteCanteenBillFormPayload {
    CanteenBillId: number;
}
//////////////////////////////////////// END OF CANTEEN BILLING ///////////////////////////////
//////////////////////////////////Time Slot Book/////////////////////////
export interface ITimeSlotBookFormPayload {
    formNo: string,
    finYear: string,
    batchTimeId: number
}
//////////////////////////////IsTimeSlotFree////////////
export interface IIsTimeSlotFreePayload {
    batchTimeId: number;
    formCatId: number;
    finYear: string;
}
////////////////////////////////// Card Type Change/////////////////////////
export interface ICardTypeChangeFormPayload {
    fCodeChange_Id: number,
    old_FormCatId: number,
    new_FormCatId: number,
    formNo: string,
    finYear: string,
    totalBasicAmt: number,
    gSTper: number,
    gstAmount: number,
    roundOff: number,
    tenderedAmt: number,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    add_By: string,
    add_Comp_IP: string,
    totalNetPaidAmt: number,
    oldBasic: number,
    netPaidAmount: number,
}
export interface ICardTypeChangePayload {
    finYear: string;
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ICardTypeChangeGroupResponse extends IGeneralResponse {
    result: ICardTypeChangeGroup[];
}
export interface ICardTypeChangeGroupPayload extends ICardTypeChangePayload { }
export interface ICardTypeChangeGroup {
    fCodeChange_Id: number,
    old_FormCatId: number,
    new_FormCatId: number,
    formNo: string,
    finYear: string,
    totalBasicAmt: number,
    gSTper: number,
    gstAmount: number,
    roundOff: number,
    netPaidAmt: number,
    tenderedAmt: number,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    add_By: string,
    add_Comp_IP: string,
    wef: string,
    gsTper: number,
    totalNetPaidAmt: number,
    oldBasic: number,
    netPaidAmount: number,
    recptNo: string,
    name: string,
    oldForm_Name: string,
    newForm_Name: string
}
export interface CardTypeChangeGetById {
    fCodeChange_Id: number,
    old_FormCatId: number,
    new_FormCatId: number,
    formNo: string,
    finYear: string,
    totalBasicAmt: number,
    gSTper: number,
    gstAmount: number,
    roundOff: number,
    netPaidAmt: number,
    tenderedAmt: number,
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    add_By: string,
    add_Comp_IP: string,
    wef: string,
    gsTper: number,
    totalNetPaidAmt: number,
    oldBasic: number,
    netPaidAmount: number,
    recptNo: string,
    name: string,
    oldForm_Name: string,
    newForm_Name: string
}
export interface ICardTypeDeleteResponse extends IGeneralResponse { }
export interface IDeleteCardTypeFormPayload {
    fCodeChange_Id: number;
}
//////////////////////////START OF GetPrintAdmissionFeeRecpt////////////////////
export interface IPrintAdmissionFeeRecptFormPayload {
    finYear: string,
    formNo: string
}
export interface IPrintAdmissionFeeRecpt {
    finYear: string,
    formNo: string,
    receiptNo: string,
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
    paymentTypeCode: string,
    dob: string,
    name: string,
    fathersName: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    phoneNo: string,
    email: string,
    formCatId: number,
    form_Name: string
}
export interface IPrintAdmissionFeeRecptResponse extends IGeneralResponse {
    result: IPrintAdmissionFeeRecpt;
}
//////////////////////////////////Time Slot Book/////////////////////////
export interface ITimeSlotBookFormPayload {
    formNo: string,
    finYear: string,
    batchTimeId: number
}
//////////////////////////////////BUY SWIMMER FORM FOR ADMISSION/////////////////////////
export interface IAdmissionFormFormPayload {
    formNo: string,
    swimBookId: number,
    tenderedAmt: number,
    isManual: string,
    swim_Pic: string,
    receiptNo: string,
    receiptDt: string,
    receiptTm: string,
    category: string,
    sex: string,
    totalAmt: number,
    cardNo: string,
    address: string,
    pin: string,
    phoneNo: string,
    mobileNo: string,
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
    finYear: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    cardNo_Collection: string,
    bankCode: string,
    paymentTypeCode: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
}
export interface IAdmFormFormPayload {
    formNo: string,
    years: string
    tenderedAmt: number
    swimBookId: number,
    isManual: string,
    add_By: string,
    add_Comp_IP: string,
    swim_Pic: string,
    receiptNo: string,
    receiptDt: string,
    receiptTm: string,
    category: string,
    sex: string,
    totalAmt: number,
    cardNo: string,
    address: string,
    pin: string,
    phoneNo: string,
    mobileNo: string,
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
    finYear: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    cardNo_Collection: string,
    bankCode: string,
    paymentTypeCode: string,
    basic_Amt: number,
    gst_Per: number,
    gst_Amt: number,
    round_Off: number,
    total_Amt: number,
}
export interface IADMFORMPayload {
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IADMFORMroupResponse extends IGeneralResponse {
    result: IADMFORMGroup[];
}
export interface IADMFORMGroupPayload extends IADMFORMPayload { }
export interface IADMFORMGroup {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    formNo: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
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
    finYear: string,
    description: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    isManual: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    form_Name: string
    years: string
}
export interface IADMFORMFormPayload {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    formNo: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
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
    finYear: string,
    description: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    isManual: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    form_Name: string
    years: string
}
export interface IADMFORMUpdateResponse extends IGeneralResponse {
    result: IADMFORMEditResponse;
}
export interface IADMFORMDeleteResponse extends IGeneralResponse { }
export interface ADMFORMGetById {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    formNo: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
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
    finYear: string,
    description: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    isManual: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    form_Name: string,
    years: string,
    jPic: string
}
export interface IDeleteADMFORMFormPayload {
    swimBookId: number;
}
export interface IADMFORMEditResponse {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    formNo: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    amount: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
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
    finYear: string,
    description: string,
    filename: string,
    fileExtension: string,
    mimeType: string,
    filePath: string,
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    isManual: string,
    activate: string,
    add_By: string,
    add_Time: string,
    edit_By: string,
    edit_Time: string,
    add_Comp_IP: string,
    edit_Comp_IP: string,
    form_Name: string
}
/////////////////////////////////GetAllBougthForms/////////////////////
export interface IBoughtFormPayload {
    finYear: string,
    userId: number
}
//////////////////////////////////BUY SWIMMER FORM FOR ADMISSION/////////////////////////
export interface IBUYFORMPayload {
    finYear: string,
    recordStatus: string,
    pagingParameters: {
        pageNumber: number,
        pageSize: number
    },
    searchString: string
}
export interface IBUYFORMGroupResponse extends IGeneralResponse {
    result: IBUYFORMGroup[];
}
export interface IBUYFORMGroupPayload extends IBUYFORMPayload { }
export interface IBUYFORMGroup {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
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
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    activate: string,
    isManual: string
}
export interface IBuyFormFormPayload {
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
    formNo: string,
    recptNo: string,
    recptDt: string,
    recptTm: string,
    dob: string,
    ageYear: number,
    ageMonth: number,
    ageDay: number,
    finYear: string,
    amount: number
}
export interface IBUYFORMUpdateResponse extends IGeneralResponse {
    result: IBUYFORMEditResponse;
}
export interface IBUYFORMDeleteResponse extends IGeneralResponse { }
export interface BUYFORMGetById {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
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
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    activate: string,
    isManual: string,
    form_Name: string
}
export interface IDeleteBUYFORMFormPayload {
    formBuyId: number;
}
export interface IBUYFORMEditResponse {
    formBuyId: number,
    userId: number,
    sCode: string,
    name: string,
    phoneNo: string,
    fathersName: string,
    email: string,
    formCatId: number,
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
    bankCode: string,
    paymentTypeCode: string,
    cardNo_Collection: string,
    tenderedAmt: number,
    sCardNo: string,
    sCardType: string,
    sPresentAmt: number,
    activate: string,
    isManual: string
}
/////////////////////////////////GetAllBougthForms/////////////////////
export interface IBoughtFormPayload {
    finYear: string,
    userId: number
}
///////////////////////////GetHelpSwimFormAmt//////////////////////////////////
export interface ISwimFormAmt {
    result: number
}
export interface ISwimFormAmtResponse extends IGeneralResponse {
    result: ISwimFormAmt[];
}
/////////////////////////////////////  SUBSCRIPTION GETALL (MEMBER PORTAL) //////////////////////////////////////////
export interface ISubscriptionPayload {
    primary_Mem_Id: string,
    session: string,
    entry_Type: string
}
export interface ISubscriptionGroupResponse extends IGeneralResponse {
    result: ISubscriptionGroup[];
}
export interface ISubscriptionGroupPayload extends ISubscriptionPayload { }
export interface ISubscriptionGroup {
    row_Id: string,
    recptDt: string,
    recptNo: string,
    session: string,
    memberName: string,
    totalBasicAmt: number,
    servTaxAmt: number,
    ecAmt: number,
    hecAmt: number
    totalTaxAmt: number,
    tenderedAmt: number,
    totalFineAmt: number,
    roundOff: number,
    netPaidAmt: number,
    remarks: string,
    activate: string,
    add_By: string,
    add_Time: string,
    add_Comp_IP: string,
    inActivateRemarks: string
    paymentTypeCode: string,
    bankCode: string,
    cardNo_Collection: string,
    primary_Mem_Code: string,
    primary_Mem_Id: number,
    memCardNo: string
}
