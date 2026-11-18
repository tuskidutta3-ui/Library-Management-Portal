import { Injectable } from '@angular/core';
import { AuthStoreService } from './auth.store.service';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private auth: AuthStoreService) { }
  getUserId(): any {
    let userId: number = 0;
    this.auth.userProfile.subscribe((data) => {
      userId = data?.BaseNo as number;
    })
    return userId;
  }
  getUserGrpId(): any {
    let userGrpId: number = 0;
    this.auth.userProfile.subscribe((data) => {
      userGrpId = data?.UserGrpId as number;
    })
    return userGrpId;
  }
  getUserName(): string {
    let userName: string = '';
    this.auth.userProfile.subscribe((data) => {
      userName = data?.BaseName as string;
    })
    return userName;
  }
  getFinYear(): any {
    let finyear: string = '';
    this.auth.userProfile.subscribe((data) => {
      finyear = data?.FinYear as string;
    })
    return finyear;
  }
  getUserCode(): any {
    let usercode: string = '';
    this.auth.userProfile.subscribe((data) => {
      usercode = data?.UserCode as string;
    })
    return usercode;
  }
  getOffShop_CatererId(): any {
    let offShop_CatererId: number = 0;
    this.auth.userProfile.subscribe((data) => {
      offShop_CatererId = data?.OffShop_CatererId as number;
    })
    return offShop_CatererId;
  }
  getVAT_No(): any {
    let VAT_No: number = 0;
    this.auth.userProfile.subscribe((data) => {
      VAT_No = data?.VAT_No as number;
    })
    return VAT_No;
  }
  getST_NO(): any {
    let ST_NO: number = 0;
    this.auth.userProfile.subscribe((data) => {
      ST_NO = data?.ST_NO as number;
    })
    return ST_NO;
  }
  getClub_Name(): any {
    let clubName: string = '';
    this.auth.userProfile.subscribe((data) => {
      clubName = data?.Club_Name as string;
    })
    return clubName;
  }
  getClub_Add1(): any {
    let clubAdd1: string = '';
    this.auth.userProfile.subscribe((data) => {
      clubAdd1 = data?.Club_Add1 as string;
    })
    return clubAdd1;
  }
  getClub_Add2(): any {
    let clubAdd2: string = '';
    this.auth.userProfile.subscribe((data) => {
      clubAdd2 = data?.Club_Add2 as string;
    })
    return clubAdd2;
  }
  getPhone_No(): any {
    let phoneNo: number = 0;
    this.auth.userProfile.subscribe((data) => {
      phoneNo = data?.Phone_No as number;
    })
    return phoneNo;
  }
  getClub_Address(): any {
    let clubAddress: string = '';
    this.auth.userProfile.subscribe((data) => {
      clubAddress = data?.Club_Address as string;
    })
    return clubAddress;
  }
  getEmail(): any {
    let userEmail: string = '';
    this.auth.userProfile.subscribe((data) => {
      userEmail = data?.UserEmail as string;
    })
    return userEmail;
  }
  getWebSite(): any {
    let web_Site: string = '';
    this.auth.userProfile.subscribe((data) => {
      web_Site = data?.WebSite as string;
    })
    return web_Site;
  }
  getECess(): any {
    let e_cess: number = 0;
    this.auth.userProfile.subscribe((data) => {
      e_cess = data?.ECess as number;
    })
    return e_cess;
  }
  getHeCess(): any {
    let h_cess: number = 0;
    this.auth.userProfile.subscribe((data) => {
      h_cess = data?.HeCess as number;
    })
    return h_cess;
  }
  getFine_FirstHalf_May(): any {
    let fine_May: number = 0;
    this.auth.userProfile.subscribe((data) => {
      fine_May = data?.Fine_FirstHalf_May as number;
    })
    return fine_May;
  }
  getFine_FirstHalf_June(): any {
    let fine_June: number = 0;
    this.auth.userProfile.subscribe((data) => {
      fine_June = data?.Fine_FirstHalf_June as number;
    })
    return fine_June;
  }
  getFine_SecHalf_October(): any {
    let fine_2ndH_Oct: number = 0;
    this.auth.userProfile.subscribe((data) => {
      fine_2ndH_Oct = data?.Fine_SecHalf_October as number;
    })
    return fine_2ndH_Oct;
  }
  getFine_SecHalf_November(): any {
    let fine_2ndH_Nov: number = 0;
    this.auth.userProfile.subscribe((data) => {
      fine_2ndH_Nov = data?.Fine_SecHalf_November as number;
    })
    return fine_2ndH_Nov;
  }
  getFine_JA_Dup_Card(): any {
    let fine_JA_Dup_Card: number = 0;
    this.auth.userProfile.subscribe((data) => {
      fine_JA_Dup_Card = data?.Fine_JA_Dup_Card as number;
    })
    return fine_JA_Dup_Card;
  }
  getAdd_Comp_IP(): any {
    let add_CompIp: string = '';
    this.auth.userProfile.subscribe((data) => {
      add_CompIp = data?.Add_Comp_IP as string;
    })
    return add_CompIp;
  }
  getJA_Code(): any {
    let ja_Code: number = 0;
    this.auth.userProfile.subscribe((data) => {
      ja_Code = data?.JA_Code as number;
    })
    return ja_Code;
  }
  getAnnualMemCode(): any {
    let annualMemCode: number = 0;
    this.auth.userProfile.subscribe((data) => {
      annualMemCode = data?.AnnualMemCode as number;
    })
    return annualMemCode;
  }
  getLadyAssociateCode(): any {
    let ladyAssoCode: number = 0;
    this.auth.userProfile.subscribe((data) => {
      ladyAssoCode = data?.LadyAssociateCode as number;
    })
    return ladyAssoCode;
  }
  getPayHeadId_MemFees(): any {
    let payHeadIdMemFee: number = 0;
    this.auth.userProfile.subscribe((data) => {
      payHeadIdMemFee = data?.PayHeadId_MemFees as number;
    })
    return payHeadIdMemFee;
  }
  getLiquorTaxRate(): any {
    let liqTaxRate: number = 0;
    this.auth.userProfile.subscribe((data) => {
      liqTaxRate = data?.LiquorTaxRate as number;
    })
    return liqTaxRate;
  }
  getCanteen_CatererId(): any {
    let canteenCatId: number = 0;
    this.auth.userProfile.subscribe((data) => {
      canteenCatId = data?.Canteen_CatererId as number;
    })
    return canteenCatId;
  }
  getRole(): any {
    let role: string = ''
    this.auth.userProfile.subscribe((data) => {
      role = data?.Role as string;
    })
    return role;
  }
  // getCompanyCode(): any {
  //   let companyCode: string = '';
  //   this.auth.userProfile.subscribe((data) => {
  //     companyCode = data?.CompanyCode as string;
  //   })
  //   return companyCode;
  // }
  // getPsMonth(): any {
  //   let psmomnth: number = 0;
  //   this.auth.userProfile.subscribe((data) => {
  //     psmomnth = data?.PsMonth as number;
  //   })
  //   return psmomnth;
  // }
  // getPsYear(): any {
  //   let psYear: number = 0;
  //   this.auth.userProfile.subscribe((data) => {
  //     psYear = data?.PsMonth as number;
  //   })
  //   return psYear;
  // }
  // getRole(): string {
  //   let role: string = '';
  //   this.auth.userProfile.subscribe((data) => {
  //     role = data?.Role as string;
  //   })
  //   return role;
  // }
  // getFromDate(): Date {
  //   let frmDate: Date = new Date;
  //   this.auth.userProfile.subscribe((data) => {
  //     frmDate = data?.FromDate as Date;
  //   })
  //   return frmDate;
  // }
  // getToDate(): Date {
  //   let toDate: Date = new Date;
  //   this.auth.userProfile.subscribe((data) => {
  //     toDate = data?.ToDate as Date;
  //   })
  //   return toDate;
  // }
  // getEmpName(): string {
  //   let EmpName: string = '';
  //   this.auth.userProfile.subscribe((data) => {
  //     EmpName = data?.EmpName as string;
  //   })
  //   return EmpName;
  // }
  // getEmpId(): any {
  //   let EmpId: number = 0;
  //   this.auth.userProfile.subscribe((data) => {
  //     EmpId = data?.EmpId as number;
  //   })
  //   return EmpId;
  // }
  // getMonthNumber(): any {
  //   let Month: number = 0;
  //   this.auth.userProfile.subscribe((data) => {
  //     Month = data?.Month as number;
  //   })
  //   return Month;
  // }
  // getYearNumber(): any {
  //   let Year: number = 0;
  //   this.auth.userProfile.subscribe((data) => {
  //     Year = data?.Year as number;
  //   })
  //   return Year;
  // }
}
