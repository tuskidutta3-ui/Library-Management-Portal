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
///////////////////ADD SERVICES CATEGORY///////////////////////////
export interface IMasterAddCategoryPayload {
  recordStatus: string;
  pagingParameters: {
    pageNumber: number;
    pageSize: number;
  };
  searchString: string;
}
export interface IMasterCategoryResponse extends IGeneralResponse {
  result: IMasterCategory[];
}
export interface IMasterCategory {
  catEBookId: number;
  ebookCode: string;
  ebookCatName: string;
  activate: string;
  addBy: number;
}
export interface IAddMasterAddCategoryFormPayload {
  catEBookId: number;
  ebookCode: string;
  ebookCatName: string;
  activate: string;
  addBy: number;
}
export interface IMasterAddCategoryCreateResponse extends IGeneralResponse {
  result: IMasterCategory;
}
export interface IMasterAddCategoryDeleteResponse extends IGeneralResponse {}
export interface MasterAddCategoryGetById {
  catEBookId: number;
  ebookCode: string;
  ebookCatName: string;
  activate: string;
  addBy: number;
}
export interface IDeleteMasterAddCategoryFormPayload {
  catEBookId: number;
}
//////////////////////MANAGE BOOK Master//////////////////////////////
export interface IMasterManageBooksPayload {
  recordStatus: string;
  pagingParameters: {
    pageNumber: number;
    pageSize: number;
  };
  searchString: string;
}
export interface IManageBooksResponse extends IGeneralResponse {
  result: IManageBooks[];
}
export interface IManageBooksPayload extends IMasterManageBooksPayload {}
export interface IManageBooks {
  masterBookId: number;
  mastBookDescription: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  activate: string;
  mastBookCode: string;
  catEBookId: number;
  ebookCatName: string;
  eBookSlno: number;
  ebookCode: string;
}
export interface IAddManageBooksFormPayload {
  catEBookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  addBy: number;
}
export interface IEditManageBooksFormPayload {
  masterBookId: number;
  catEBookId: number;
  mastBookCode: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  mastBookDescription: string;
  addBy: number;
}
export interface IManageBooksCreateResponse extends IGeneralResponse {
  result: IManageBooks;
}
export interface IManageBooksDeleteResponse extends IGeneralResponse {}
export interface ManageBooksGetById {
  masterBookId: number;
  mastBookDescription: string;
  mastBookName: string;
  mastBookAuthPubName: string;
  activate: string;
  mastBookCode: string;
  catEBookId: number;
  ebookCatName: string;
  eBookSlno: number;
  ebookCode: string;
}
export interface IDeleteManageBooksFormPayload {
  masterBookId: number;
}
/////////////////////////////////////////////MANAGE MEMBERS//////////////////////////////////////////////////////////
export interface ManageMembersGetById {
  userName: string;
  phoneNo: string;
  userEmail: string;
  userId: number;
  activate: string;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// ISSUE BOOK (A) //////////////////////////////
export interface IIssueBooksPayload {
  recordStatus: string;
  pagingParameters: {
    pageNumber: number;
    pageSize: number;
  };
  searchString?: string;
}
export interface IIssueBooksGroupResponse extends IGeneralResponse {
  result: IIssueBooksGroup[];
}
export interface IIssueBooksGroupPayload extends IIssueBooksPayload {}
export interface IIssueBooksGroup {
      reqBookId: number,
      studentId: number,
      userName: string,
      categoryId: number,
      ebookCode: string,
      ebookCatName:string,
      currentDueDt: string,
      bookId: number,
      mastBookCode: string,
      mastBookName: string,
      mastBookAuthPubName: string,
      mastBookDescription: string,
         rejectApproveStatus:string,
      renewalStatus: string,
      remarks: string,
      requestDt: string,
      reqStatus: string,
      activate: string
}
export interface IssueBooksGetById {
   reqBookId: number,
      studentId: number,
      userName: string,
      categoryId: number,
      ebookCode: string,
      ebookCatName:string,
      currentDueDt: string,
      bookId: number,
      mastBookCode: string,
      mastBookName: string,
      mastBookAuthPubName: string,
      mastBookDescription: string,
      rejectApproveStatus:string,
      renewalStatus: string,
      remarks: string,
      requestDt: string,
      reqStatus: string,
      activate: string
}
