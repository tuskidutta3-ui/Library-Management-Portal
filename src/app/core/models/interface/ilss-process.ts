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
//////////////////////////Generate Yearly Subscription GetAll///////////////////
export interface IYearlySubProcessPayload {
    session: string,
}
export interface IYearlySubProcessGroupResponse extends IGeneralResponse {
    result: IYearlySubProcessGroup[];
}
export interface IYearlySubProcessGroup {
    collection_Status: string,
    row_Id: string,
    session: string,
    mem_Id: number,
    mem_Code: string,
    name: string,
    memTypeId: number,
    memberType: string,
    payHead_Id: number,
    payHead: string,
    locker_Id: number,
    loc_Code: string,
    instNo: number,
    instAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    relationNo: string
}
//////////////////////////Generate Yearly Subscription Generate Subscription///////////////////
export interface IGenYearlySubProcessPayload {
    session: string,
    add_Comp_IP: string,
    confirm: boolean,
    add_By: string
}
export interface IGenYearlySubProcessGroupResponse extends IGeneralResponse {
    result: IGenYearlySubProcessGroup[];
}
export interface IGenYearlySubProcessGroup {
    result: any
}
//////////////////////////Liquor Consumption ///////////////////
export interface ILiquorConsumptProcessPayload {
    bDate: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ILiquorConsumptProcessGroupResponse extends IGeneralResponse {
    result: ILiquorConsumptProcessGroup[];
}
export interface ILiquorConsumptProcessGroup {
    saleDtlId: string,
    session: string,
    orderNo: string,
    orderDate: string,
    billNo: string,
    billDate: string,
    bDate: string,
    hall_Id: number,
    item_Id: number,
    caterer_Id: number,
    saleQty: number,
    adjQty: number,
    balQty: number,
    itemName: string,
    hall_Name: string,
    catererName: string,
    consumptionSource: string,
    mrpPerMlSl: number,
}
export interface ICreateLiquorConsumptProcessPayload {
    bDate: string,
    add_Comp_IP: string,
    confirm: boolean,
    add_By: string
}
export interface ICreateLiquorConsumptProcessGroupResponse extends IGeneralResponse {
    result: ICreateLiquorConsumptProcessGroup[];
}
export interface ICreateLiquorConsumptProcessGroup {
    result: any
}
///////////////////////////////////////////// Import Member Card Balance /////////////////////////////////////////
export interface IImportMemberCardBalProcessPayload {
    session: string,
}
export interface IImportMemberCardBalProcessGroupResponse extends IGeneralResponse {
    result: IImportMemberCardBalProcessGroup[];
}
export interface IImportMemberCardBalProcessGroup {
    session: string
    obAmt: number,
    activate: string,
    mem_Code: string,
    mem_Id: number,
    memName: string
}
/////////////////////////////GetDonationFind//////////////
export interface IDonationFindPayload {
    session: string;
    primaryMemCode: string;
}
export interface IDonationFind {
    subsChk: number;
    row_Id: string;
    session: string;
    mem_Id: number;
    instNo: number;
    locker_Id: number;
    loc_Code: null;
    instAmt: number;
    fineAmt: number;
    lineRemarks: '';
    servTaxPerc: number;
    servTaxAmt: number;
    ecPerc: number;
    ecAmt: number;
    hecPerc: number;
    hecAmt: number;
    servTaxPerTotal: number;
    servTaxAmtTotal: number;
    netInstAmt: number;
    recd_Amt: number;
    bal_Due: number;
    relationNo: string;
    primary_Mem_Id: number;
    primary_Mem_Code: string;
    mem_Code: string;
    cardNo: string;
    memberType: number;
    payHead_Id: number;
    payHead: string;
    memberTypeT: string;
    mem_Type: number;
    mem_Name: string;
    couple_Mem_Id: number;
    couple_MemCode: string;
    couple_MemName: string;
    active: string;
    donationAmount: number;
}
export interface IDonationFindResponse extends IGeneralResponse {
    result: IDonationFind;
}
/////////////////////////////GetSubscriptionRegerateDataFind//////////////
export interface ISubsRegDataFindPayload {
    session: string;
    primaryMemCode: string;
}
export interface ISubsRegDataFind {
    cardNo: string;
    fineAmount: number;
    memDetails: any;
    subsChk: number;
    session: string;
    mem_Id: number;
    instNo: 1;
    locker_Id: number;
    loc_Code: string;
    instAmt: string;
    fineAmt: number;
    lineRemarks: string;
    servTaxPerc: string;
    servTaxAmt: string;
    ecPerc: number;
    ecAmt: string;
    hecPerc: number;
    hecAmt: string;
    servTaxPerTotal: string;
    servTaxAmtTotal: string;
    netInstAmt: string;
    bal_Due: string;
    relationNo: string;
    primary_Mem_Id: number;
    primary_Mem_Code: string;
    mem_Code: string;
    memberType: number;
    payHead_Id: number;
    payHead: string;
    memberTypeT: string;
    mem_Type: number;
    mem_Name: string;
    couple_Mem_Id: number;
    couple_MemCode: string;
    couple_MemName: string;
}
export interface ISubsRegDataFindResponse extends IGeneralResponse {
    result: ISubsRegDataFind;
}
//////////////////////////Transfer Godown Stock///////////////////
export interface ITransferGodownStockProcessPayload {
    session: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ITransferGodownStockProcessGroupResponse extends IGeneralResponse {
    result: ITransferGodownStockProcessGroup[];
}
export interface ITransferGodownStockProcessGroup {
    roW_ID: number,
    iteM_CODE: string,
    iteM_NAME: string,
    oB_VALUE: number,
    activate: string,
    grN_NO: string,
    grN_DATE: string,
    uomShort: string,
}
export interface ITransferGodownStockPayload {
    session: string,
    add_Comp_IP: string,
    confirm: boolean,
    add_By: string
}
export interface ITransferGodownStockGroupResponse extends IGeneralResponse {
    result: ITransferGodownStockGroup[];
}
export interface ITransferGodownStockGroup {
    result: any
}
//////////////////////////Transfer Bar Stock///////////////////
export interface ITransferBarStockProcessPayload {
    session: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ITransferBarStockProcessGroupResponse extends IGeneralResponse {
    result: ITransferBarStockProcessGroup[];
}
export interface ITransferBarStockProcessGroup {
    row_Id: number,
    session: string,
    uomShort: string,
    uom_Id: number,
    item_Id: number,
    itemName: string,
    caterer_Id: number,
    catererName: string,
    activate: string,
    oB_Qty: number,
    qtyInMlPerUom: number,
    oB_QtyInMl: number,
    purRateInMl: number,
    itemSubGrpType: string,
    hall_Id: number,
    hall_Name: string
}
export interface ITransferBarStockPayload {
    session: string,
    add_Comp_IP: string,
    confirm: boolean,
    add_By: string
}
export interface ITransferBarStockGroupResponse extends IGeneralResponse {
    result: ITransferBarStockGroup[];
}
export interface ITransferBarStockGroup {
    result: any
}
//////////////////////////Transfer Canteen Stock///////////////////
export interface ITransferCanteenStockProcessPayload {
    session: string,
    recordStatus: string;
    pagingParameters: {
        pageNumber: number;
        pageSize: number;
    };
    searchString?: string;
}
export interface ITransferCanteenStockProcessGroupResponse extends IGeneralResponse {
    result: ITransferCanteenStockProcessGroup[];
}
export interface ITransferCanteenStockProcessGroup {
    iteM_ID: number,
    iteM_NAME: string,
    grouP_NAME: string,
    oB_QTY: number,
    uoM_ID: number,
    uomShort: string,
    itemType: string,
    session: string,
    iteM_CODE: string,
}
export interface ITransferCanteenStockPayload {
    session: string,
    add_Comp_IP: string,
    confirm: boolean,
    add_By: string
}
export interface ITransferCanteenStockGroupResponse extends IGeneralResponse {
    result: ITransferCanteenStockGroup[];
}
export interface ITransferCanteenStockGroup {
    result: any
}
/////////////////////////GetAllSubcriptionReminder///////////////////
export interface IAllSubsRemProccessPayload {
    session: string,
    month: string
}
export interface IAllSubsRemProccessGroupResponse extends IGeneralResponse {
    result: IAllSubsRemProccessGroup[];
}
export interface IAllSubsRemProccessGroup {
    subsChk: boolean,
    row_Id: string,
    remin_No: string,
    remin_Dt: string,
    session: string,
    remin_mnth: string,
    letterNo: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    totalInstAmt: number,
    fineAmt: number,
    totalDueAmt: number,
    printCount: number,
    activate: string
}
/////////////////////////GetReminderDetail///////////////////
export interface IReminderDetailProccessPayload {
    reminderNo: string,
}
export interface IReminderDetailProccessGroupResponse extends IGeneralResponse {
    result: IReminderDetailProccessGroup[];
}
export interface IReminderDetailProccessGroup {
    row_Id: string,
    remin_No: string,
    session: string,
    mem_Id: number,
    mem_Code: string,
    instNo: number,
    locker_Id: number,
    instAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    payHead_Id: number,
    mem_Type: number,
    mem_Name: string,
    memberType: string,
    payHead: string,
    loc_Code: string
}
/////////////////////////GetReminderLetterFind///////////////////
export interface IReminderLetterFindPayload {
    month: number,
    session: string
}
export interface IReminderLetterFindGroupResponse extends IGeneralResponse {
    result: IReminderLetterFindGroup[];
}
export interface IReminderLetterFindGroup {
    SubsChk: boolean;
    Row_Id: string;
    Primary_Mem_Id: number;
    Primary_Mem_Code: string;
    Mem_Id: number;
    Mem_Code: string;
    Mem_Name: string;
    Mem_Type: number;
    MemberType: string;
    PayHead_Id: number;
    PayHead: string;
    InstNo: number;
    InstAmt: number;
    ServTaxPerTotal: number;
    ServTaxAmtTotal: number;
    RecdAmt: number;
    Bal_Due: number;
}
/////////////////////////CreateReminder///////////////////
export interface ICreateReminderPayload {
    session: string,
    month: string,
    remin_Dt: string,
    add_By: string,
    add_Comp_IP: string,
    confirm: boolean,
    reminderDetail: any
}
/////////////////////////Get_Print_Subs_Reminder_Print///////////////////
export interface IPrintSubsRemPrintPayload {
    remin_Nos: string
}
export interface IPrintSubsRemPrintGroupResponse extends IGeneralResponse {
    result: IPrintSubsRemPrintGroup[];
}
export interface IPrintSubsRemPrintGroup {
    remin_No: string,
    remin_Dt: string,
    remin_mnth: string,
    session: string,
    primary_Mem_Code: string,
    primary_Mem_Name: string,
    particulars: string,
    instAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number
    totalInstAmt: number
    fineAmt: number
    totalDueAmt: number,
    addrs: string,
    letterNo: number
}
/////////////////////////GetReminderDonationLetterFind///////////////////
export interface IDonationLetterFindPayload {
    session: string
}
export interface IDonationLetterFindGroupResponse extends IGeneralResponse {
    result: IDonationLetterFindGroup[];
}
export interface IDonationLetterFindGroup {
    SubsChk: boolean;
    Primary_Mem_Id: number;
    Primary_Mem_Code: string;
    Mem_Id: number;
    Mem_Code: string;
    Mem_Name: string;
    Mem_Type: number;
    MemberType: string;
    PayHead_Id: number;
    PayHead: string;
    InstAmt: number;
    ServTaxPerTotal: number;
    ServTaxAmtTotal: number;
    RecdAmt: number;
    Bal_Due: number;
}
/////////////////////////CreateReminderDonation///////////////////
export interface IReminderDonationPayload {
    session: string,
    remin_Dt: string,
    add_By: string,
    add_Comp_IP: string,
    confirm: boolean,
    reminderDetail: any
}
/////////////////////////GetAllDonationReminder///////////////////
export interface IAllDonationReminderPayload {
    session: string
}
export interface IAllDonationReminderGroupResponse extends IGeneralResponse {
    result: IAllDonationReminderGroup[];
}
export interface IAllDonationReminderGroup {
    subsChk: boolean,
    row_Id: string,
    remin_No: string,
    remin_Dt: string,
    session: string,
    address_Res: string,
    remin_mnth: null,
    letterNo: string,
    primary_Mem_Id: number,
    primary_Mem_Code: string,
    totalInstAmt: number,
    fineAmt: number,
    member_Pin: string,
    primary_Mem_Name: string,
    totalDueAmt: number,
    printCount: number,
    activate: string
}
/////////////////////////END OF GetAllDonationReminder///////////////////
/////////////////////////GetReminderDetailDonation///////////////////
export interface IReminderDetailDonatioPayload {
    reminderNo: string
}
export interface IReminderDetailDonatioGroupResponse extends IGeneralResponse {
    result: IReminderDetailDonatioGroup[];
}
export interface IReminderDetailDonatioGroup {
    row_Id: string,
    remin_No: string,
    session: string,
    mem_Id: number,
    mem_Code: string,
    instNo: number,
    instAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    payHead_Id: number,
    mem_Type: number,
    mem_Name: string,
    memberType: string,
    payHead: string,
    loc_Code: string
}
/////////////////////////END OF GetReminderDetailDonation///////////////////
/////////////////////////Get_Print_Don_Reminder_Print///////////////////
export interface IDonRemPrintPayload {
    remin_Nos: string
}
export interface IDonRemPrintGroupResponse extends IGeneralResponse {
    result: IDonRemPrintGroup[];
}
export interface IDonRemPrintGroup {
    remin_No: string,
    remin_Dt: string,
    remin_mnth: null,
    session: string,
    primary_Mem_Code: string,
    primary_Mem_Name: string,
    particulars: string,
    instAmt: number,
    servTaxPerTotal: number,
    servTaxAmtTotal: number,
    netInstAmt: number,
    totalInstAmt: number,
    fineAmt: number,
    totalDueAmt: number,
    addrs: string,
    letterNo: number
}
/////////////////////////END OF Get_Print_Don_Reminder_Print///////////////////