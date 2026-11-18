import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { isPlatformBrowser } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { LoadingService } from '../../../core/services/loading.service';
import {
  IMasterManageBooksPayload,
  IManageBooksResponse,
  IDeleteManageBooksFormPayload,
  IManageBooksDeleteResponse,
} from '../../librarian/interface/librarian-interface';
import { AddManageBooksComponent } from '../../librarian/manage-bboks/add-manage-books/add-manage-books.component';
import { LibrarianService } from '../../librarian/service/librarian.service';
import { AddRequestBooksComponent } from './add-request-books/add-request-books.component';
import { MemberDashboardService } from '../../../core/services/member-dashboard.service';
import { IMasterReqBookPayload, ReqBookGetById } from '../member-interface';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-request-books',
  standalone: false,
  templateUrl: './request-books.component.html',
  styleUrl: './request-books.component.scss',
})
export class RequestBooksComponent {
  public editrequestBooksInfo!: FormGroup;
  public searchString = '';
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  displayedColumns: string[] = [
    'bookCode',
    'bookName',
    'authName',
    'issueStatus',
    'reqDate',
    'duedate',
    // 'approveOrReject',
    'rejectreason',
    'view',
    'Edit',
    'Status',
  ];
  public editById: ReqBookGetById = {
    reqBookId: 0,
    categoryId: 0,
    ebookCatName: '',
    bookId: 0,
    mastBookCode: '',
    mastBookName: '',
    mastBookAuthPubName: '',
    mastBookDescription: '',
    requestDt: '',
    currentDueDt: '',
    reqStatus: '',
    studentId: 0,
    activate: '',
  };
  public masterDepartmentData: IMasterReqBookPayload = {
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
  editrequestBooksFormInitialize() {
    this.editrequestBooksInfo = this.fb.group({
      reqBookId: [0],
      categoryId: [0],
      ebookCatName: [''],
      bookId: [0],
      mastBookCode: [''],
      mastBookName: [''],
      mastBookAuthPubName: [''],
      mastBookDescription: [''],
      requestDt: [''],
      // currentDueDt: [''],
      reqStatus: [''],
      studentId: [0],
      activate: [''],
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
      categoryId: 0,
      ebookCatName: '',
      bookId: 0,
      mastBookCode: '',
      mastBookName: '',
      mastBookAuthPubName: '',
      mastBookDescription: '',
      requestDt: '',
      currentDueDt: '',
      reqStatus: 'P',
      studentId: 0,
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
    let dialogRef = this.dialog.open(AddRequestBooksComponent, {
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
  viewData(row: ReqBookGetById) {
    if (row.reqBookId > 0) {
      this.editById = {
        reqBookId: row.reqBookId,
        categoryId: row.categoryId,
        ebookCatName: row.ebookCatName,
        bookId: row.bookId,
        mastBookCode: row.mastBookCode,
        mastBookName: row.mastBookName,
        mastBookAuthPubName: row.mastBookAuthPubName,
        mastBookDescription: row.mastBookDescription,
        requestDt: row.requestDt,
        currentDueDt: row.currentDueDt,
        reqStatus: row.reqStatus,
        studentId: row.studentId,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'VIEW');
    }
  }
  public GetAll(): void {
    this.loadService.loadingOn();
    const tableRecords$ = lastValueFrom(
      this.MemberService.getReqBookFadata(this.masterDepartmentData),
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
  edit(row: ReqBookGetById) {
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
        categoryId: row.categoryId,
        ebookCatName: row.ebookCatName,
        bookId: row.bookId,
        mastBookCode: row.mastBookCode,
        mastBookName: row.mastBookName,
        mastBookAuthPubName: row.mastBookAuthPubName,
        mastBookDescription: row.mastBookDescription,
        requestDt: row.requestDt,
        currentDueDt: row.currentDueDt,
        reqStatus: row.reqStatus,
        studentId: row.studentId,
        activate: row.activate,
      };
      this.openDialog(this.editById, 'EDIT');
    }
  }
  public onToggleData(data: any) {
    if (this.permissions.isDelete == false) {
      //
      alert('You have no permission');
      return;
    }
    if (confirm('Are you sure to change status?')) {
      const DepartmentdeletePayload: any = { reqBookId: data.reqBookId };
      const DepartmentDelResponse = this.MemberService.ReqBookFormstatusData(
        DepartmentdeletePayload,
      );
      lastValueFrom(DepartmentDelResponse)
        .then((resp: any) => {
          this.GetAll();
          this.toastrService.success(
            resp.message,
            'Success',
            environment.toastrConfig,
          );
        })
        .catch(() => {
          this.toastrService.error(
            this.apiErrorMessage,
            'error',
            environment.toastrConfig,
          );
        });
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
