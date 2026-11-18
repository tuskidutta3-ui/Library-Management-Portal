import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { LoadingService } from '../../../core/services/loading.service';
import { IMasterManageBooksPayload } from '../../librarian/interface/librarian-interface';
import { AddRequestBooksComponent } from '../request-books/add-request-books/add-request-books.component';
import { LibrarianService } from '../../librarian/service/librarian.service';
import { AddRenewBooksComponent } from './add-renew-books/add-renew-books.component';
import { MemberDashboardService } from '../../../core/services/member-dashboard.service';
import { MemberService } from '../member.service';
import { IRenewBookReqPayload, RenewBookReqGetById } from '../member-interface';
import { UtilService } from '../../../core/services/util.service';
@Component({
  selector: 'app-renew-books',
  standalone: false,
  templateUrl: './renew-books.component.html',
  styleUrl: './renew-books.component.scss',
})
export class RenewBooksComponent {
  public editRenewBooksInfo!: FormGroup;
  public searchString = '';
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  displayedColumns: string[] = [
    'categoryName',
    'bookName',
    'authName',
    'issueDate',
    'currentDueDate',
    'reqExt',
    'issueStat',
    'Edit',
    'renewalstatus'
  ];
  public editById: RenewBookReqGetById = {
    reqBookId: 0,
    studentId: 0,
    userName: '',
    categoryId: 0,
    ebookCode: '',
    ebookCatName: '',
    currentDueDt: '',
    bookId: 0,
    extentedDays: 0,
    mastBookCode: '',
    mastBookName: '',
    mastBookAuthPubName: '',
    mastBookDescription: '',
    rejectApproveStatus: '',
    renewalStatus: '',
    remarks: '',
    renewalRemarks: '', 
    requestDt: '',
    reqStatus: '',
    activate: '',
  };
  public masterDepartmentData: IRenewBookReqPayload = {
    userId: this.userProfileservice.getUserId(),
    recordStatus: '',
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10,
    },
    searchString: '',
  };
  public permissions = {
    //
    isDelete: true,
    isEdit: true,
    isAdd: true,
  };
  public MemberDashboardService = inject(MemberDashboardService);
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authStoreService: AuthStoreService,
    private router: Router,
    private MemberService: MemberService,
    private userProfileservice: UserProfileService,
    private loadService: LoadingService,
    private util: UtilService,
  ) {}
  ngOnInit(): void {
    this.GetAll();
    this.GivePermission();
  }
  goBack() {
    this.MemberDashboardService.isHeroVisible = true; // Show hero section
    this.router
      .navigate(['/member-dasboard'], { queryParams: { showHero: true } })
      .then(() => {
        window.scrollTo(0, 0); // Scroll to the top
      });
  }
  editRenewBooksFormInitialize() {
    this.editRenewBooksInfo = this.fb.group({
      reqBookId: [0],
      studentId: [0],
      userName: [''],
      extentedDays: [0],
      categoryId: [0],
      ebookCode: [''],
      ebookCatName: [''],
      currentDueDt: [''],
      bookId: [0],
      mastBookCode: [''],
      mastBookName: [''],
      mastBookAuthPubName: [''],
      mastBookDescription: [''],
      rejectApproveStatus: [''],
      renewalStatus: [''],
      remarks: [''],
      renewalRemarks: [''],
      requestDt: [''],
      reqStatus: [''],
      activate: ['A'],
    });
  }
  addNewBooks() {
    if (this.permissions.isAdd == false) {
      //
      alert('You have no permission');
      return;
    }
    this.editById = {
      reqBookId: 0,
      studentId: 0,
      userName: '',
      extentedDays: 0,
      categoryId: 0,
      ebookCode: '',
      ebookCatName: '',
      currentDueDt: '',
      bookId: 0,
      mastBookCode: '',
      mastBookName: '',
      mastBookAuthPubName: '',
      mastBookDescription: '',
      rejectApproveStatus: '',
      renewalStatus: 'A',
      remarks: '',
  renewalRemarks:'',
      requestDt: '',
      reqStatus: '',
      activate: 'A',
    };
    this.openDialog(this.editById, 'ADD');
  }
  openDialog(form: any, additionalData: any) {
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '60vw' : '50vw';
    const height = isMobile ? '40vh' : isIpadMini ? '27vh' : '55vh';
    let dialogRef = this.dialog.open(AddRenewBooksComponent, {
      data: {
        form: form,
        additionalData: additionalData,
      },
      width: width,
      // height: height, // Full width for mobile, 80% for desktop
      maxWidth: '100vw', // Max width to ensure full width
      disableClose: true,
      // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.editGdwnWasteDetFormInitialize();
      if (result == true) {
        this.GetAll();
      }
    });
  }
  public GetAll(): void {
    const tableRecords$ = lastValueFrom(
      this.MemberService.getRenewBookReqadata(this.masterDepartmentData),
    );
    tableRecords$
      .then((response: any) => {
        console.log('📥 API Raw Response:', response);
        const menuDataFromResponse =
          response.status === 'success' ? response.result : [];
        console.log(
          '📚 Parsed Result (menuDataFromResponse):',
          menuDataFromResponse,
        );
        this.dataSource = menuDataFromResponse;
        // Safe optional chaining for pagingDetails
        this.collectionSize =
          response.pagingDetails?.totalCount ?? menuDataFromResponse.length;
        console.log('📊 Collection Size:', this.collectionSize);
      })
      .catch((err) => {
        console.error('❌ API Error in GetAll:', err);
        this.dataSource = [];
        this.toastrService.error(
          this.apiErrorMessage,
          'error',
          environment.toastrConfig,
        );
      });
  }
  renew(row: RenewBookReqGetById) {
    if (this.permissions.isEdit == false) {
      //
      alert('You have no permission');
      return;
    }
    if (row.reqBookId > 0) {
      if (row.activate.toString().toLowerCase() == 'i') {
        alert("Can't edit inactive record");
        return;
      }
      this.editById = {
        reqBookId: row.reqBookId,
        studentId: row.studentId,
        extentedDays: (row.extentedDays==null || row.extentedDays==0)?0:row.extentedDays,
        userName: row.userName,
        categoryId: row.categoryId,
        ebookCode: row.ebookCode,
        ebookCatName: row.ebookCatName,
        currentDueDt:
          row.currentDueDt == null
            ? ''
            : this.util.dateDBtoApp(row.currentDueDt),
        bookId: row.bookId,
        mastBookCode: row.mastBookCode,
        mastBookName: row.mastBookName,
        mastBookAuthPubName: row.mastBookAuthPubName,
        mastBookDescription: row.mastBookDescription,
        rejectApproveStatus:
          row.rejectApproveStatus == null ? 'A' : row.rejectApproveStatus,
        renewalStatus: row.renewalStatus == null || row.renewalStatus == ''
    ? 'A'
    : row.renewalStatus,
        remarks: row.remarks,
        renewalRemarks:row.renewalRemarks,
        requestDt: row.requestDt,
        reqStatus: row.reqStatus,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'EDIT');
    }
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
