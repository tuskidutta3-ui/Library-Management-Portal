import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { LoadingService } from '../../../core/services/loading.service';
import { LibrarianService } from '../service/librarian.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { isPlatformBrowser } from '@angular/common';
import { ApproveRejectRequestComponent } from '../Issue-books/approve-reject-request/approve-reject-request.component';
import { AddPendingRenewalReqComponent } from './add-pending-renewal-req/add-pending-renewal-req.component';
@Component({
  selector: 'app-pending-renewal-req',
  standalone: false,
  templateUrl: './pending-renewal-req.component.html',
  styleUrl: './pending-renewal-req.component.scss',
})
export class PendingRenewalReqComponent {
  public editIssueNewBooksInfo!: FormGroup;
  public searchString = '';
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  displayedColumns: string[] = [
    'StudentCode',
    'Name',
    'catName',
    'bookName',
    'publicherName',
    'extendedDays',
    'approveOrRejected',
  ];
  public editById: any = {
    reqBookId: 0,
    studentId: 0,
    userName: '',
    categoryId: 0,
    ebookCode: '',
    ebookCatName: '',
    currentDueDt: '',
    extentedDays: 0,
    bookId: 0,
    mastBookCode: '',
    mastBookName: '',
    mastBookAuthPubName: '',
    mastBookDescription: '',
    adminRenewReqStatus: '',
    adminRenewReqRemarks: '',
    rejectApproveStatus: '',
    renewalStatus: '',
    remarks: '',
    renewalRemarks: '',
    requestDt: '',
    reqStatus: '',
    activate: '',
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
    private loadService: LoadingService,
    private LibrarianService: LibrarianService,
    private userProfileservice: UserProfileService,
  ) {}
  ngOnInit(): void {
    this.GetAll(); 
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
        reqBookId: 0,
    studentId: 0,
    userName: '',
    categoryId: 0,
    ebookCode: '',
    ebookCatName: '',
    currentDueDt: '',
    extentedDays: 0,
    bookId: 0,
    mastBookCode: '',
    mastBookName: '',
    mastBookAuthPubName: '',
    mastBookDescription: '',
    adminRenewReqStatus: '',
    adminRenewReqRemarks: '',
    rejectApproveStatus: '',
    renewalStatus: '',
    remarks: '',
    renewalRemarks: '',
    requestDt: '',
    reqStatus: '',
    activate: '',
    });
  }
  
  public GetAll(): void {
    const tableRecords$ = lastValueFrom(
      this.LibrarianService.GetAllPendingRenewalRquest(
        this.masterDepartmentData,
      ),
    );
    tableRecords$
      .then((response: any) => {
        const menuDataFromResponse =
          'success' === response.status ? response.result : [];
        this.dataSource = menuDataFromResponse;
        this.collectionSize = response.pagingDetails.totalCount;
      })
      .catch((_) => {
        this.dataSource = [];
        this.toastrService.error(
          this.apiErrorMessage,
          'error',
          environment.toastrConfig,
        );
      });
  }
  rejectApprove(row: any) {
    // if (this.permissions.isEdit == false) {
    //   //
    //   alert('You have no permission');
    //   return;
    // }
    if (row.reqBookId > 0) {
      if (row.activate.toString().toLowerCase() == 'i') {
        alert("Can't edit inactive record");
        return;
      }
      this.editById = {
        reqBookId:row.reqBookId,
studentId:row.studentId,
userName:row.userName,
categoryId:row.categoryId,
ebookCode:row.ebookCode,
ebookCatName:row.ebookCatName,
currentDueDt:row.currentDueDt,
extentedDays:row.extentedDays,
bookId:row.bookId,
mastBookCode:row.mastBookCode,
mastBookName:row.mastBookName,
mastBookAuthPubName:row.mastBookAuthPubName,
mastBookDescription:row.mastBookDescription,
adminRenewReqStatus:'A',
adminRenewReqRemarks:row.adminRenewReqRemarks,
rejectApproveStatus:row.rejectApproveStatus,
renewalStatus:row.renewalStatus,
remarks:row.remarks,
renewalRemarks:row.renewalRemarks,
requestDt:row.requestDt,
reqStatus:row.reqStatus,
activate:row.activate,
      };
      this.openDialog(this.editById, 'EDIT')
    }
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
     let dialogRef = this.dialog.open(AddPendingRenewalReqComponent, {
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
  
}
