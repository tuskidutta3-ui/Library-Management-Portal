export interface IlssUtilityInterface {
}
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
export interface IUtilityUpdatedNewDayPayload {
    add_By: string,
    add_Comp_IP: string,
    listOfDays: any,
}
//================================== Member User ==============================
export interface IMemberUserPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface IMemberUserResponse extends IGeneralResponse {
    result: IMemberUserGroup[];
}
export interface IMemberUserGroup {
    userId: number,
    userName: string,
    userPw: string,
    member_Id: number,
    userEmail: string,
    userPhoneNo: string,
    activate: string
}
export interface IAddMemberUserFormPayload {
    member_Id: number,
    userName: string,
    userPw: string,
    userEmail: string,
    userPhoneNo: string
}
export interface IMemberUserCreateResponse extends IGeneralResponse {
    result: IMemberUserGroup;
}
export interface IEditMemberUserFormPayload {
    userId: number,
    member_Id: number,
    userGrpId: number,
    userName: string,
    userPw: string,
    userEmail: string,
    userPhoneNo: string
}
export interface IMemberUserUpdateResponse extends IGeneralResponse {
    result: IMemberUserGroup;
}
export interface IMemberUserDeleteResponse extends IGeneralResponse { }
export interface MemberUserGetById {
    userId: number,
    member_Id: number,
    mem_Code: string,
    memberName: string,
    userGrpId: number,
    userName: string,
    userPw: string,
    userEmail: string,
    userPhoneNo: string,
    activate: string
}
export interface IDeleteMemberUserFormPayload {
    userId: number;
}