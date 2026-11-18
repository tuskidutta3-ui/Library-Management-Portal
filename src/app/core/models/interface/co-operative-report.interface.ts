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
export interface IPDFResult {
    memberId: number,
    sailEmpNo: string,
    empNo: string,
    memberName: string,
    memberShipNo: string,
    month: number,
    year: number,
    activate: string,
    unitId: number,
    finYear: string,
    sanctionAmt: number,
    previousLoanAmt: number,
    netLoanPay: number,
    com: any
}
export interface IPDFResultResponse extends IGeneralResponse {
    result: IPDFResult[];
}