export interface IGeneralResponse {
    message: string;
    pagingDetails: {
        pageNumber: number;
        pageSize: number;
        totalCount: number;
    };
    status: string;
}
export interface IGeneralPayload {
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    }
    searchString: string
}
export interface IGroupNameCreatePayload {
    uGrp_Name: string;
    add_By: number;
}
export interface IGroupNameCreateResponse extends IGeneralResponse { }
export interface IGroupNameUpdatePayload {
    uGrp_ID: number;
    uGrp_Name: string;
    add_By: number;
}
export interface IGroupNameUpdateResponse extends IGeneralResponse { }
export interface IGroupNamePermissionAddPayload {
    userGrpId: number;  //ID
    moduleName: string;
    type: string;
    companyCode: string;
    addBy: string;
    details: any;
}
//============== Start User  ====================//
export interface IUserItem {
    userId: number;
    unitId: number;
    userGrpId: number;
    userName: string;
    userPw: string;
    rePassword: string;
    userEmail: string;
    addBy: number;
    editBy: number;
    activate: string;
}
export interface IUserResponse extends IGeneralResponse {
    result: IUserItem[];
}
export interface IUserCreatePayload {
    userId: number;
    unitId: number;
    userGrpId: number;
    userName: string;
    userPw: string;
    rePassword: string;
    userEmail: string;
    addBy: number;
    editBy: number;
    activate: string;
}
export interface IUserCreateResponse extends IGeneralResponse {
    result: IUserItem;
}
export interface IUserUpdatePayload {
    userId: number;
    unitId: number;
    userGrpId: number;
    userName: string;
    userPw: string;
    rePassword: string;
    userEmail: string;
    addBy: number;
    editBy: number;
    activate: string;
}
export interface UserGetById {
    userId: number;
    unitId: number;
    userGrpId: number;
    userName: string;
    userPw: string;
    rePassword: string;
    userEmail: string;
    addBy: number;
    editBy: number;
    activate: string;
}
export interface IUserUpdateResponse extends IGeneralResponse {
    result: IUserItem;
}
export interface IUserStatusChangePayload {
    userId: number;
}
export interface IUserStatusChangeResponse extends IGeneralResponse { }
//============== End  User Section  ====================//
// ================================ OB_TRANSFER ==========================================
export interface IObTransfer {
    success: number
}
export interface IObTransferPayload {//Ob Transfer Payload
    finYear: string
    unitId: number
}
export interface IObTransferResponse extends IGeneralResponse {//Ob Transfer Response
    result: IObTransfer;
}