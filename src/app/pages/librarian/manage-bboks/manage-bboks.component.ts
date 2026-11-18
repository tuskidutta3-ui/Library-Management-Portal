import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { LoadingService } from '../../../core/services/loading.service';
import { Router } from '@angular/router';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { AddManageBooksComponent } from './add-manage-books/add-manage-books.component'; 
import {  IDeleteManageBooksFormPayload, IManageBooksDeleteResponse, IManageBooksResponse, IMasterManageBooksPayload, ManageBooksGetById } from '../interface/librarian-interface';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { LibrarianService } from '../service/librarian.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { PrintBookDetailsExcel } from '../../reports/PrintBookDetailsExcel';
@Component({
  selector: 'app-manage-bboks',
  standalone: false,
  templateUrl: './manage-bboks.component.html',
  styleUrl: './manage-bboks.component.scss'
})
export class ManageBboksComponent {
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
  displayedColumns: string[] = [ 'slNo','bookCode', 'bookName','authName', 'view', 'Edit', 'Status'];
  public editById: ManageBooksGetById = {
    masterBookId: 0,
    mastBookDescription: '',
    mastBookName: '',
    mastBookAuthPubName: '',
    activate: '',
    mastBookCode: '',
    catEBookId: 0,
    ebookCatName: '',
    eBookSlno: 0,
    ebookCode: ''
  }
  public masterDepartmentData: IMasterManageBooksPayload = {
    recordStatus: '',
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: ''
  }
  public permissions = {//
    isDelete: true,
    isEdit: true,
    isAdd: true
  }
  public librarianDashboardService = inject(LibrarianDashboardService)
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
  ) { }
  ngOnInit(): void {
    this.GetAll();
    this.GivePermission()
  }
  goBack() {
    this.librarianDashboardService.isHeroVisible = true; // Show hero section
    this.router.navigate(['/librarian-dasboard'], { queryParams: { showHero: true } }).then(() => {
      window.scrollTo(0, 0); // Scroll to the top
    });
  }
  editManageNewBooksFormInitialize() {
    this.editManageNewBooksInfo = this.fb.group({
      masterBookId: [0],
      mastBookDescription: [''],
      mastBookName: [''],
      mastBookAuthPubName: [''],
      activate: ['A'],
      mastBookCode: [''],
      catEBookId: [0],
      ebookCatName: [''],
      eBookSlno: [0],
      ebookCode: ['0']
    })
  }
  addNewBooks() {
    if (this.permissions.isAdd == false) {//
      alert("You have no permission");
      return
    }
    this.editById = {
      masterBookId: 0,
      mastBookDescription: '',
      mastBookName: '',
      mastBookAuthPubName: '',
      activate: 'A',
      mastBookCode: '',
      catEBookId: 0,
      ebookCatName: '',
      eBookSlno: 0,
      ebookCode: '0'
    }
    this.openDialog(this.editById, 'ADD')
  }
  openDialog(form: any, additionalData: any) {
    const isMobile = isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini = isPlatformBrowser(this.platformId) && window.innerWidth >= 768 && window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '60vw' : '50vw';
    const height = isMobile ? '40vh' : isIpadMini ? '27vh' : '55vh';
    let dialogRef = this.dialog.open(AddManageBooksComponent, {
      data: {
        form: form,
        additionalData: additionalData
      },
      width: width,
      height: height, // Full width for mobile, 80% for desktop
      maxWidth: '100vw',                  // Max width to ensure full width
      disableClose: true,
      // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.editGdwnWasteDetFormInitialize();
      if (result == true) {
        this.GetAll();
      }
    });
  }
  viewData(row: ManageBooksGetById) {
    if (row.masterBookId > 0) {
      this.editById = {
        masterBookId: row.masterBookId,
        mastBookDescription: row.mastBookDescription,
        mastBookName: row.mastBookName,
        mastBookAuthPubName: row.mastBookAuthPubName,
        activate: row.activate,
        mastBookCode: row.mastBookCode,
        catEBookId: row.catEBookId,
        ebookCatName: row.ebookCatName,
        eBookSlno: row.eBookSlno,
        ebookCode: row.ebookCode,
      }
      this.openDialog(this.editById, 'VIEW')
    }
  }
 public GetAll(): void {
  const tableRecords$ = lastValueFrom(
    this.LibrarianService.getManageBooksData(this.masterDepartmentData)
  );
  tableRecords$
    .then((response: IManageBooksResponse) => {
      console.log('📥 API Raw Response:', response);
      const menuDataFromResponse =
        response.status === 'success' ? response.result : [];
      console.log('📚 Parsed Result (menuDataFromResponse):', menuDataFromResponse);
      this.dataSource = menuDataFromResponse;
      // Safe optional chaining for pagingDetails
      this.collectionSize = response.pagingDetails?.totalCount ?? menuDataFromResponse.length;
      console.log('📊 Collection Size:', this.collectionSize);
    })
    .catch((err) => {
      console.error('❌ API Error in GetAll:', err);
      this.dataSource = [];
      this.toastrService.error(
        this.apiErrorMessage,
        'error',
        environment.toastrConfig
      );
    });
}
  edit(row: ManageBooksGetById) {
    if (this.permissions.isEdit == false) {//
      alert("You have no permission");
      return
    }
    if (row.masterBookId > 0) {
      if (row.activate.toString().toLowerCase() == "i") {
        alert("Can't edit inactive record")
        return;
      }
      this.editById = {
        masterBookId: row.masterBookId,
        mastBookDescription: row.mastBookDescription,
        mastBookName: row.mastBookName,
        mastBookAuthPubName: row.mastBookAuthPubName,
        activate: row.activate,
        mastBookCode: row.mastBookCode,
        catEBookId: row.catEBookId,
        ebookCatName: row.ebookCatName,
        eBookSlno: row.eBookSlno,
        ebookCode: row.ebookCode,
      }
      this.openDialog(this.editById, 'EDIT')
    }
  }
  public onToggleData(data: any) {
    if (this.permissions.isDelete == false) {//
      alert("You have no permission");
      return
    }
    if (confirm('Are you sure to change status?')) {
      const DepartmentdeletePayload: IDeleteManageBooksFormPayload = { masterBookId: data.masterBookId };
      const DepartmentDelResponse = this.LibrarianService.ManageBooksstatusData(DepartmentdeletePayload);
      lastValueFrom(DepartmentDelResponse).then(
        (resp: IManageBooksDeleteResponse) => {
          this.GetAll();
          this.toastrService.success(resp.message, 'Success', environment.toastrConfig);
        }
      ).catch(() => {
        this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
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
  generateDataForExcel() {
     this.loadService.loadingOn();
     const pdfResult$ = lastValueFrom(
       this.LibrarianService.PrintBookDetails({})
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
             const annex = new PrintBookDetailsExcel();
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
  GivePermission(): void {//
    const payload = {
      "formId": 9,
      "userGrpId": parseInt(this.userProfileservice.getUserGrpId())
    }
    this.authStoreService.GetPermission(payload).subscribe({
      next: (data: ResponseApi) => {
        this.permissions = ('success' === data.status) ? data.result : {};
      },
    })
  }
}
