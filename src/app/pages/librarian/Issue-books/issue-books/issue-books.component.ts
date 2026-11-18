import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStoreService } from '../../../../core/services/auth.store.service';
import { LibrarianDashboardService } from '../../../../core/services/librarian-dashboard.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { AddRequestBooksComponent } from '../../../member/request-books/add-request-books/add-request-books.component';
import { ApproveRejectRequestComponent } from '../approve-reject-request/approve-reject-request.component';
import {
  IIssueBooksPayload,
  IssueBooksGetById,
} from '../../interface/librarian-interface';
import { LibrarianService } from '../../service/librarian.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserProfileService } from '../../../../core/services/get-user-profile.service';
import { ResponseApi } from '../../../../core/models/class/ResponseApi';
import { UtilService } from '../../../../core/services/util.service';
@Component({
  selector: 'app-issue-books',
  standalone: false,
  templateUrl: './issue-books.component.html',
  styleUrl: './issue-books.component.scss',
})
export class IssueBooksComponent {
  public editIssueNewBooksInfo!: FormGroup;
  public searchString = '';
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  displayedColumns: string[] = [
    'StudentId',
    'Name',
    'catCode',
    'catName',
    'approveOrRejected',
    // 'dueDate',
  ];
  public editById: IssueBooksGetById = {
    reqBookId: 0,
    studentId: 0,
    userName: '',
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
    renewalStatus: '', 
    remarks: '',
    requestDt: '',
    reqStatus: '',
    activate: '',
  };
  public masterDepartmentData: IIssueBooksPayload = {
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
    private loadService: LoadingService,
    private util: UtilService,
  ) {}
  ngOnInit(): void {
    this.GetAll();
    // this.GivePermission()
  }
  goBack() {
    this.librarianDashboardService.isHeroVisible = true; // Show hero section
    this.router
      .navigate(['/librarian-dasboard'], { queryParams: { showHero: true } })
      .then(() => {
        window.scrollTo(0, 0); // Scroll to the top
      });
  }
  editIssueNewBooksFormInitialize() {
    this.editIssueNewBooksInfo = this.fb.group({
      reqBookId: [0],
      studentId: [0],
      userName: [''],
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
      requestDt: [''],
      reqStatus: [''],
      activate: ['A'],
    });
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
    let dialogRef = this.dialog.open(ApproveRejectRequestComponent, {
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
  rejectApprove(row: IssueBooksGetById) {
    if (row.reqBookId > 0) {
      this.editById = {
        reqBookId: row.reqBookId,
        studentId: row.studentId,
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
        renewalStatus: row.renewalStatus,
        remarks: row.remarks,
        requestDt: row.requestDt,
        reqStatus: row.reqStatus,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'EDIT');
    }
  }
  public GetAll(): void {
    this.loadService.loadingOn();
    const tableRecords$ = lastValueFrom(
      this.LibrarianService.GetAllIssueBooksDetailsForAdmin(
        this.masterDepartmentData,
      ),
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
      })
      .finally(() => {
        this.loadService.loadingOff(); // stop loader
      });
  }
  // edit(row: BalanceShtGrpGetById) {
  //   if (this.permissions.isEdit == false) {//
  //     alert("You have no permission");
  //     return
  //   }
  //   if (row.row_Id > 0) {
  //     if (row.activate.toString().toLowerCase() == "i") {
  //       alert("Can't edit inactive record")
  //       return;
  //     }
  //     this.editById = {
  //       row_Id: row.row_Id,
  //       code: row.code,
  //       desc: row.desc,
  //       companyCode: row.companyCode,
  //       addBy: row.addBy,
  //       addTime: row.addTime,
  //       addByComputer: row.addByComputer,
  //       editBy: row.editBy,
  //       editTime: row.editTime,
  //       editByComputer: row.editByComputer,
  //       activate: row.activate,
  //       unitId: row.unitId,
  //     }
  //     this.openDialog(this.editById, 'EDIT')
  //   }
  // }
  // public onToggleData(data: any) {
  //   if (this.permissions.isDelete == false) {//
  //     alert("You have no permission");
  //     return
  //   }
  //   if (confirm('Are you sure to change status?')) {
  //     const DepartmentdeletePayload: IDeleteBalanceShtGrpFormPayload = { row_Id: data.row_Id };
  //     const DepartmentDelResponse = this.coOperativeMasterService.BalanceShtGrpstatusData(DepartmentdeletePayload);
  //     lastValueFrom(DepartmentDelResponse).then(
  //       (resp: IBalanceShtGrpDeleteResponse) => {
  //         this.GetAll();
  //         this.toastrService.success(resp.message, 'Success', environment.toastrConfig);
  //       }
  //     ).catch(() => {
  //       this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
  //     });
  //   }
  // }
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
