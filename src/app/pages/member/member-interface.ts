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
/////////////////////// REQUEST BOOKS //////////////////////////////
export interface IMasterReqBookPayload {
  userId: number;
  recordStatus: string;
  pagingParameters: {
    pageNumber: number;
    pageSize: number;
  };
  searchString?: string;
}
export interface IReqBookGroupResponse extends IGeneralResponse {
  result: IReqBookGroup[];
}
export interface IReqBookGroupPayload extends IMasterReqBookPayload {}
export interface IReqBookGroup {
  reqBookId: number;
  categoryId: number;
  ebookCatName: string;
  bookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  requestDt: string;
  currentDueDt: string;
  reqStatus: string;
  studentId: number;
  activate: string;
}
export interface IAddReqBookFormPayload {
  bookId: number;
  categoryId: number;
  requestDt: string;
  // currentDueDt: string;
  reqStatus: string;
  activate: string;
  studentId: number;
}
export interface IEditReqBookFormPayload {
  reqBookId: number;
  bookId: number;
  categoryId: number;
  requestDt: string;
  // currentDueDt: string;
  reqStatus: string;
  activate: string;
  studentId: number;
}
export interface IReqBookCreateResponse extends IGeneralResponse {
  result: IReqBookGroup;
}
export interface IReqBookDeleteResponse extends IGeneralResponse {}
export interface ReqBookGetById {
  reqBookId: number;
  categoryId: number;
  ebookCatName: string;
  bookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  requestDt: string;
  currentDueDt: string;
  reqStatus: string;
  studentId: number;
  activate: string;
}
export interface IDeleteReqBookFormPayload {
  reqBookId: number;
}
//////////////////////////////////////// End Of REQUEST BOOKS ///////////////////////////////
/////////////////////// RENEW BOOKS //////////////////////////////
export interface IRenewBookReqPayload {
  userId: number;
  recordStatus: string;
  pagingParameters: {
    pageNumber: number;
    pageSize: number;
  };
  searchString?: string;
}
export interface IRenewBookReqGroupResponse extends IGeneralResponse {
  result: IRenewBookReqGroup[];
}
export interface IRenewBookReqGroupPayload extends IRenewBookReqPayload {}
export interface IRenewBookReqGroup {
  reqBookId: number;
  studentId: number;
  userName: string;
  categoryId: number;
  ebookCode: string;
  ebookCatName: string;
  currentDueDt: string;
  bookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  rejectApproveStatus: string;
  renewalStatus: string;
  remarks: string;
  renewalRemarks:string,
  extentedDays: number;
  requestDt: string;
  reqStatus: string;
  activate: string;
}
export interface IAddRenewBookReqFormPayload {
  reqBookId: number;
  renewalStatus: string;
  extentedDays: number;
  currentDueDt: string; 
  renewalRemarks: string;
  activate: string;
  editBy: number;
}
export interface IRenewBookReqCreateResponse extends IGeneralResponse {
  result: IRenewBookReqGroup;
}
export interface IRenewBookReqDeleteResponse extends IGeneralResponse {}
export interface RenewBookReqGetById {
  reqBookId: number;
  studentId: number;
  userName: string;
  categoryId: number;
  ebookCode: string;
  ebookCatName: string;
  currentDueDt: string;
  bookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  rejectApproveStatus: string;
  renewalStatus: string;
  extentedDays: number;
  remarks: string;
  renewalRemarks:string, 
  requestDt: string;
  reqStatus: string;
  activate: string;
}
export interface IDeleteRenewBookReqFormPayload {
  RenewBookReqId: number;
}
//////////////////////////////////////// End Of RENEW BOOKS ///////////////////////////////
