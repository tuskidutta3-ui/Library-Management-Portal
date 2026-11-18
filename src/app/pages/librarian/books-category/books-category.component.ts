import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { AddBooksCategoryComponent } from './add-books-category/add-books-category.component';
import { isPlatformBrowser } from '@angular/common';
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
import {
  ManageBooksGetById,
  IMasterManageBooksPayload,
  IManageBooksResponse,
  IDeleteManageBooksFormPayload,
  IManageBooksDeleteResponse,
  IMasterAddCategoryPayload,
  IMasterCategoryResponse,
  MasterAddCategoryGetById,
  IDeleteMasterAddCategoryFormPayload,
  IMasterAddCategoryDeleteResponse,
} from '../interface/librarian-interface';
import { LibrarianService } from '../service/librarian.service';
import { printEBookCategoryExcel } from '../../reports/printEBookCategoryExcel';
@Component({
  selector: 'app-books-category',
  standalone: false,
  templateUrl: './books-category.component.html',
  styleUrl: './books-category.component.scss',
})
export class BooksCategoryComponent {
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
    'bookCode',
    'bookName',
    'view',
    'Edit',
    'Status',
  ];
  public editById: MasterAddCategoryGetById = {
    catEBookId: 0,
    ebookCode: '',
    ebookCatName: '',
    activate: '',
    addBy: 0,
  };
  public masterDepartmentData: IMasterAddCategoryPayload = {
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
      catEBookId: [0],
      ebookCode: [''],
      ebookCatName: [''],
      activate: [''],
      addBy: [0],
    });
  }
  addCategory() {
    if (this.permissions.isAdd == false) {
      //
      alert('You have no permission');
      return;
    }
    this.editById = {
      catEBookId: 0,
      ebookCode: '',
      ebookCatName: '',
      activate: 'A',
      addBy: 0,
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
    const width = isMobile ? '100vw' : isIpadMini ? '60vw' : '30vw';
    const height = isMobile ? '40vh' : isIpadMini ? '27vh' : '30vh';
    let dialogRef = this.dialog.open(AddBooksCategoryComponent, {
      data: {
        form: form,
        additionalData: additionalData,
      },
      width: width,
      height: height, // Full width for mobile, 80% for desktop
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
  viewData(row: MasterAddCategoryGetById) {
    if (row.catEBookId > 0) {
      this.editById = {
        catEBookId: row.catEBookId,
        ebookCode: row.ebookCode,
        ebookCatName: row.ebookCatName,
        activate: row.activate,
        addBy: row.addBy,
      };
      this.openDialog(this.editById, 'VIEW');
    }
  }
  public GetAll(): void {
    const tableRecords$ = lastValueFrom(
      this.LibrarianService.getCategoryForService(this.masterDepartmentData)
    );
    tableRecords$
      .then((response: IMasterCategoryResponse) => {
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
  edit(row: MasterAddCategoryGetById) {
    if (this.permissions.isEdit == false) {
      //
      alert('You have no permission');
      return;
    }
    if (row.catEBookId > 0) {
      if (row.activate.toString().toLowerCase() == 'i') {
        alert("Can't edit inactive record");
        return;
      }
      this.editById = {
        catEBookId: row.catEBookId,
        ebookCode: row.ebookCode,
        ebookCatName: row.ebookCatName,
        activate: row.activate,
        addBy: row.addBy,
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
      const DepartmentdeletePayload: IDeleteMasterAddCategoryFormPayload = {
        catEBookId: data.catEBookId,
      };
      const DepartmentDelResponse = this.LibrarianService.statusChangeCategory(
        DepartmentdeletePayload
      );
      lastValueFrom(DepartmentDelResponse)
        .then((resp: IMasterAddCategoryDeleteResponse) => {
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
      this.LibrarianService.PrintBookCategory({})
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
            const annex = new printEBookCategoryExcel();
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
