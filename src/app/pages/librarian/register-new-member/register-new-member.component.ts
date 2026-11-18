import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { AddRegisterNewMemberComponent } from './add-register-new-member/add-register-new-member.component';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { LoadingService } from '../../../core/services/loading.service';
import { LibrarianService } from '../service/librarian.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { ManageMembersGetById } from '../interface/librarian-interface';
import { PrintAllMembersDetailsExcel } from '../../reports/PrintAllMembersDetailsExcel';
@Component({
  selector: 'app-register-new-member',
  standalone: false,
  templateUrl: './register-new-member.component.html',
  styleUrl: './register-new-member.component.scss',
})
export class RegisterNewMemberComponent {
  public editManageNewBooksInfo!: FormGroup;
  public searchString = '';
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
    excelResult: any
  excelDataSource: any
  excelDataJson: any
  private readonly apiErrorMessage = 'Request failed to execute';
  displayedColumns: string[] = [
    'name',
    'phone',
    'email',
    'view',
    'Edit',
    'Status',
  ];
  public editById: any = {
    userName: '',
    phoneNo: '',
    userEmail: '',
    userId: 0,
    activate: 'A',
  };
  public masterDepartmentData: any = {
    recordStatus: '',
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10,
    },
    searchString: '',
  };
  public permissions = {
    //
    isDelete: false,
    isEdit: false,
    isAdd: false,
  };
  public librarianDashboardService = inject(LibrarianDashboardService);
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authStoreService: AuthStoreService,
    private router: Router,
    private LibrarianService: LibrarianService,
    private userProfileservice: UserProfileService,
    private loadService: LoadingService
  ) {}
  ngOnInit(): void {
    this.GetAll();
    this.GivePermission();
  }
  goBack() {
    this.librarianDashboardService.isHeroVisible = true; // Show hero section
    this.router
      .navigate(['/librarian-dasboard'], { queryParams: { showHero: true } })
      .then(() => {
        window.scrollTo(0, 0); // Scroll to the top
      });
  }
  editManageNewBooksFormInitialize() {
    this.editManageNewBooksInfo = this.fb.group({
      userName: [''],
      phoneNo: [''],
      userEmail: [''],
      userId: [0],
      activate: ['A'],
    });
  }
  viewData(row: ManageMembersGetById) {
    if (row.userId > 0) {
      this.editById = {
        userName: row.userName,
        phoneNo: row.phoneNo,
        userEmail: row.userEmail,
        userId: row.userId,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'VIEW');
    }
  }
  edit(row: ManageMembersGetById) {
    if (this.permissions.isEdit == false) {
      //
      alert('You have no permission');
      return;
    }
    if (row.userId > 0) {
      if (row.activate.toString().toLowerCase() == 'i') {
        alert("Can't edit inactive record");
        return;
      }
      this.editById = {
        userName: row.userName,
        phoneNo: row.phoneNo,
        userEmail: row.userEmail,
        userId: row.userId,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'EDIT');
    }
  }
  public GetAll(): void {
    const tableRecords$ = lastValueFrom(
      this.LibrarianService.getMembersData(this.masterDepartmentData)
    );
    tableRecords$
      .then((response: any) => {
        console.log('📥 API Raw Response:', response);
        const menuDataFromResponse =
          response.status === 'success' ? response.result : [];
        console.log(
          '📚 Parsed Result (menuDataFromResponse):',
          menuDataFromResponse
        );
        this.dataSource = menuDataFromResponse;
        // Safe optional chaining for pagingDetails
        this.collectionSize =
          response.pagingDetails?.totalCount ?? menuDataFromResponse.length;
        console.log('📊 Collection Size:', this.collectionSize);
      })
      .catch((err: any) => {
        console.error('❌ API Error in GetAll:', err);
        this.dataSource = [];
        this.toastrService.error(
          this.apiErrorMessage,
          'error',
          environment.toastrConfig
        );
      });
  }
  addDepartmentMaster() {
    if (this.permissions.isAdd == false) {
      //
      alert('You have no permission');
      return;
    }
    this.editById = {
      userName: '',
      phoneNo: '',
      userEmail: '',
      userId: 0,
      activate: 'A',
    };
    this.openDialog(this.editById, 'ADD');
  }
  // openDialog(form: any, additionalData: any) {
  //   const isMobile =
  //     isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
  //   const isIpadMini =
  //     isPlatformBrowser(this.platformId) &&
  //     window.innerWidth >= 768 &&
  //     window.innerWidth < 769;
  //   const width = isMobile ? '100vw' : isIpadMini ? '60vw' : '40vw';
  //   const height = isMobile ? '40vh' : isIpadMini ? '27vh' : '39vh';
  //   let dialogRef = this.dialog.open(AddRegisterNewMemberComponent, {
  //     data: {
  //       form: form,
  //       additionalData: additionalData,
  //     },
  //     width: width,
  //     height: height, // Full width for mobile, 80% for desktop
  //     maxWidth: '100vw', // Max width to ensure full width
  //     disableClose: true,
  //     // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.editManageNewBooksFormInitialize();
  //     if (result == true) {
  //       this.GetAll();
  //     }
  //   });
  // }
  openDialog(form: any, additionalData: any) {
    // Console log the form and additional data
    console.log('=== openDialog Form Data ===');
    console.log('Form:', form);
    console.log('Form Value:', form?.value);
    console.log('Form Raw Value:', form?.getRawValue ? form.getRawValue() : 'No getRawValue method');
    console.log('=== openDialog Additional Data ===');
    console.log('Additional Data:', additionalData);
    console.log('Additional Data Type:', typeof additionalData);
    if (additionalData && typeof additionalData === 'object') {
        console.log('Additional Data Keys:', Object.keys(additionalData));
    }
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '60vw' : '40vw';
    const height = isMobile ? '40vh' : isIpadMini ? '27vh' : '39vh';
    console.log('=== Dialog Configuration ===');
    console.log('isMobile:', isMobile);
    console.log('isIpadMini:', isIpadMini);
    console.log('Width:', width);
    console.log('Height:', height);
    let dialogRef = this.dialog.open(AddRegisterNewMemberComponent, {
      data: {
        form: form,
        additionalData: additionalData,
      },
      width: width,
      height: height,
      maxWidth: '100vw',
      disableClose: true,
    });
    console.log('=== Dialog Opened ===');
    console.log('Dialog Reference:', dialogRef);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('=== Dialog Closed ===');
      console.log('Close Result:', result);
      this.editManageNewBooksFormInitialize();
      if (result == true) {
        console.log('Dialog closed with true result, calling GetAll()');
        this.GetAll();
      } else {
        console.log('Dialog closed with false or undefined result');
      }
    });
  }
  public searchResult(): void {
    this.masterDepartmentData['searchString'] = this.searchString;
    this.GetAll();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterDepartmentData.pagingParameters.pageNumber = pageNumber;
    this.GetAll();
  }
  public onToggleData(data: any) {
    if (this.permissions.isDelete == false) {
      //
      alert('You have no permission');
      return;
    }
    if (confirm('Are you sure to change status?')) {
      const DepartmentdeletePayload: any = { userId: data.userId };
      const DepartmentDelResponse =
        this.LibrarianService.ManageMemeberstatusData(DepartmentdeletePayload);
      lastValueFrom(DepartmentDelResponse)
        .then((resp: any) => {
          this.GetAll();
          this.toastrService.success(
            resp.message,
            'Success',
            environment.toastrConfig
          );
        })
        .catch(() => {
          this.toastrService.error(
            this.apiErrorMessage,
            'error',
            environment.toastrConfig
          );
        });
    }
  }
    generateDataForExcel() {
       this.loadService.loadingOn();
       const pdfResult$ = lastValueFrom(
         this.LibrarianService.PrintAllMemberDetails({})
       );
       pdfResult$
         .then((response: any) => {
           if (response.status === 'error') {
             this.toastrService.error(response.message || 'Something went wrong', 'Error', environment.toastrConfig);
             return;
           }
           if (response.status === 'success') {
             const parsedResult = response.result;
             if (parsedResult && parsedResult.length > 0) {
               this.excelResult = parsedResult;
               this.excelDataSource = this.excelResult;
               console.log('Excel Data Source:', this.excelDataSource);
               const annex = new PrintAllMembersDetailsExcel();
               annex.exportToExcel(this.excelDataSource);
             } else {
               // ✅ Handle empty Table case
               this.toastrService.info('No data found', 'Info', environment.toastrConfig);
             }
           } else {
             this.toastrService.error('Unexpected response status', 'Error', environment.toastrConfig);
           }
         })
         .catch(() => {
           this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
         })
         .finally(() => {
           this.loadService.loadingOff();
         });
     }
  GivePermission(): void {
    //
    const payload = {
      formId: 9,
      userGrpId: parseInt(this.userProfileservice.getUserGrpId()),
    };
    this.authStoreService.GetPermission(payload).subscribe({
      next: (data: ResponseApi) => {
        this.permissions = 'success' === data.status ? data.result : {};
      },
    });
  }
}
