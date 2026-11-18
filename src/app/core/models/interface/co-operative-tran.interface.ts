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
/////////////////////// Monthly Transaction //////////////////////////////
export interface ITransactionMonthlyTranPayload {
    unitId: number,
    role: string,
    finYear: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMonthlyTranGroupResponse extends IGeneralResponse {
    result: IMonthlyTranGroup[];
}
export interface IMonthlyTranGroupPayload extends ITransactionMonthlyTranPayload { }
export interface IMonthlyTranGroup {
    tranMonthlyId: number,
    month: number,
    year: number,
    membershipAmount: number,
    membershipArrearAmount: number,
    loanAmount: number,
    loanBalance: number,
    loanArearAmount: number,
    interestAmount: number,
    interestArearAmount: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddMonthlyTranFormPayload {
    memberId: number,
    month: number,
    year: number,
    membershipAmount: number,
    membershipArrearAmount: number,
    loanAmount: number,
    loanArearAmount: number,
    loanBalance: number,
    interestAmount: number,
    interestArearAmount: number,
    finYear: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IEditMonthlyTranFormPayload {
    tranMonthlyId: number,
    month: number,
    year: number,
    membershipAmount: number,
    membershipArrearAmount: number,
    loanAmount: number,
    loanBalance: number,
    loanArearAmount: number,
    interestAmount: number,
    interestArearAmount: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IMonthlyTranEditResponse {
    tranMonthlyId: number,
    month: number,
    year: number,
    membershipAmount: number,
    membershipArrearAmount: number,
    loanAmount: number,
    loanBalance: number,
    loanArearAmount: number,
    interestAmount: number,
    interestArearAmount: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IMonthlyTranCreateResponse extends IGeneralResponse {
    result: IMonthlyTranGroup;
}
export interface IMonthlyTranUpdateResponse extends IGeneralResponse {
    result: IMonthlyTranEditResponse;
}
export interface IMonthlyTranDeleteResponse extends IGeneralResponse { }
export interface MonthlyTranGetById {
    tranMonthlyId: number,
    month: number,
    year: number,
    membershipAmount: number,
    membershipArrearAmount: number,
    loanAmount: number,
    loanBalance: number,
    loanArearAmount: number,
    interestAmount: number,
    interestArearAmount: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteMonthlyTranFormPayload {
    tranMonthlyId: number;
}
////////////////////////////////// End Of Monthly Transaction///////////////////////////////
/////////////////////// Share Purchase //////////////////////////////
export interface ITransactionSharePurchasePayload {
    unitId: number,
    role: string,
    finYear: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ISharePurchaseGroupResponse extends IGeneralResponse {
    result: ISharePurchaseGroup[];
}
export interface ISharePurchaseGroupPayload extends ITransactionSharePurchasePayload { }
export interface ISharePurchaseGroup {
    sharePurchaseId: number,
    month: number,
    year: number,
    sharePurchaseAmt: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    tagShare: string,
    dr_Cr: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddSharePurchaseFormPayload {
    sharePurchaseId: number,
    month: number,
    year: number,
    sharePurchaseAmt: number,
    tagShare: string,
    dr_Cr: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IEditSharePurchaseFormPayload {
    sharePurchaseId: number,
    month: number,
    year: number,
    sharePurchaseAmt: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    tagShare: string,
    dr_Cr: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ISharePurchaseEditResponse {
    sharePurchaseId: number,
    month: number,
    year: number,
    sharePurchaseAmt: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    tagShare: string,
    dr_Cr: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ISharePurchaseCreateResponse extends IGeneralResponse {
    result: ISharePurchaseGroup;
}
export interface ISharePurchaseUpdateResponse extends IGeneralResponse {
    result: ISharePurchaseEditResponse;
}
export interface ISharePurchaseDeleteResponse extends IGeneralResponse { }
export interface SharePurchaseGetById {
    sharePurchaseId: number,
    month: number,
    year: number,
    sharePurchaseAmt: number,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    tagShare: string,
    dr_Cr: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteSharePurchaseFormPayload {
    sharePurchaseId: number;
}
////////////////////////////////// End Of Share Purchase ///////////////////////////////
/////////////////////// Loan Application //////////////////////////////
export interface ITransactionLoanApplicationPayload {
    unitId: number,
    role: string,
    finYear: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILoanApplicationGroupResponse extends IGeneralResponse {
    result: ILoanApplicationGroup[];
}
export interface ILoanApplicationGroupPayload extends ITransactionLoanApplicationPayload { }
export interface ILoanApplicationGroup {
    tranLoanDetId: number,
    applicationNo: string,
    applicationDt: string,
    applicationAmount: number,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    noOfEmi: number,
    monthlyEmi: number,
    loanSanctionDt: string,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddLoanApplicationFormPayload {
    applicationDt: string,
    memberId: number,
    applicationAmount: number,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    noOfEmi: number,
    monthlyEmi: number,
    loanSanctionDt: string,
    finYear: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IEditLoanApplicationFormPayload {
    tranLoanDetId: number,
    applicationNo: string,
    applicationDt: string,
    applicationAmount: number,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    noOfEmi: number,
    monthlyEmi: number,
    loanSanctionDt: string,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ILoanApplicationEditResponse {
    tranLoanDetId: number,
    applicationNo: string,
    applicationDt: string,
    applicationAmount: number,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    noOfEmi: number,
    monthlyEmi: number,
    loanSanctionDt: string,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    checkUpload: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface ILoanApplicationCreateResponse extends IGeneralResponse {
    result: ILoanApplicationGroup;
}
export interface ILoanApplicationUpdateResponse extends IGeneralResponse {
    result: ILoanApplicationEditResponse;
}
export interface ILoanApplicationDeleteResponse extends IGeneralResponse { }
export interface LoanApplicationGetById {
    tranLoanDetId: number,
    applicationNo: string,
    applicationDt: string,
    applicationAmount: number,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    noOfEmi: number,
    monthlyEmi: number,
    loanSanctionDt: string,
    finYear: string,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    deptCode: string,
    deptDescription: string,
    gradeCode: string,
    gradeDescription: string,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteLoanApplicationFormPayload {
    tranMonthlyId: number;
}
////////////////////////////////// End Of Loan Application ///////////////////////////////
/////////////////////// Final Settlement //////////////////////////////
export interface ITransactionFinalSettlementPayload {
    unitId: number,
    role: string,
    finYear: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IFinalSettlementGroupResponse extends IGeneralResponse {
    result: IFinalSettlementGroup[];
}
export interface IFinalSettlementGroupPayload extends ITransactionFinalSettlementPayload { }
export interface IFinalSettlementGroup {
    finalSettlementId: number,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    sep_Date: string,
    mcd: number,
    mcdInt: number,
    share: number,
    loanBal: number,
    total: number,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IAddFinalSettlementFormPayload {
    memberId: number,
    mcd: number,
    mcdInt: number,
    loanBal: number,
    total: number,
    share: number,
    unitId: number,
    companyCode: string,
    addBy: number
}
export interface IEditFinalSettlementFormPayload {
    finalSettlementId: number,
    memberId: number,
    mcd: number,
    mcdInt: number,
    loanBal: number,
    total: number,
    share: number,
    unitId: number,
    companyCode: string,
    addBy: number
}
export interface IFinalSettlementEditResponse {
    finalSettlementId: number,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    sep_Date: string,
    mcd: number,
    mcdInt: number,
    share: number,
    loanBal: number,
    total: number,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IFinalSettlementCreateResponse extends IGeneralResponse {
    result: IFinalSettlementGroup;
}
export interface IFinalSettlementUpdateResponse extends IGeneralResponse {
    result: IFinalSettlementEditResponse;
}
export interface IFinalSettlementDeleteResponse extends IGeneralResponse { }
export interface FinalSettlementGetById {
    finalSettlementId: number,
    memberId: number,
    empNo: string,
    sailEmpNo: string,
    memberName: string,
    memberShipNo: string,
    sep_Date: any,
    mcd: number,
    mcdInt: number,
    share: number,
    loanBal: number,
    total: number,
    unitId: number;
    unitCode: string;
    unitName: string;
    shortName: string;
    addBy: number;
    addTime: any;
    editBy: number;
    editTime: any;
    companyCode: string;
    activate: string;
}
export interface IDeleteFinalSettlementFormPayload {
    finalSettlementId: number;
}
export interface IUpdateDailyTranFinalSettlemetPayload {
    memberId: number,
    sep_Date: string,
    mcd: number,
    mcdInt: number,
    loanBal: number,
    share: number,
    total: number,
    finYear: string,
    unitId: number,
    companyCode: string,
    addBy: number
    activate: string;
}
////////////////////////////////// End Of Final Settlement ///////////////////////////////