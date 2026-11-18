import { DatePipe } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseApi } from '../../../core/models/class/ResponseApi';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { IlssReportsService } from '../../../core/services/ilss-reports.service';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
import { LoadingService } from '../../../core/services/loading.service';
import { UtilService } from '../../../core/services/util.service';
@Component({
  selector: 'app-overdue-books',
  standalone: false, 
  templateUrl: './overdue-books.component.html',
  styleUrl: './overdue-books.component.scss'
})
export class OverdueBooksComponent {
  public editCanteenBillRegInfo!: FormGroup;
  dataSource: any;
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  public pdfResult: any;
  // Lazily inject the services
  private fb = inject(FormBuilder);
  private dialog = inject(MatDialog);
  private IlssReportsService = inject(IlssReportsService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  private authStoreService = inject(AuthStoreService);
  private util = inject(UtilService);
  private loadService = inject(LoadingService);
  // public masterReportsData: IReportsCanteenBillRegPayload = {
  //   fromDt: '',
  //   toDt: '',
  //   which_Criteria: ''
  // }
  public permissions = {//
    isDelete: false,
    isEdit: false,
    isAdd: false
  }
   public librarianDashboardService = inject(LibrarianDashboardService)
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    ) { }
  ngOnInit(): void {
    this.GivePermission();
    this.editCanteenBillRegFormInitialize();
    var datePipe = new DatePipe('en-US')
    const currentDate = new Date();
    this.editCanteenBillRegInfo.controls['fromDt'].setValue(datePipe.transform(currentDate, 'dd-MM-yyyy'));
    this.editCanteenBillRegInfo.controls['toDt'].setValue(datePipe.transform(currentDate, 'dd-MM-yyyy'));
  }
  editCanteenBillRegFormInitialize() {
    this.editCanteenBillRegInfo = this.fb.group({
      fromDt: [''],
      toDt: [''],
      which_Criteria: ['SUM'],
      billNo: [''],
      billDate: [''],
      hall_Id: [0],
      hall_Name: [''],
      mem_Id: [0],
      mem_Code: [''],
      mem_Name: [''],
      totalItemValue: [0],
      roundOff: [0],
      totalNet_AfterRo: [0],
      item_Id: [0],
      item_Code: [''],
      item_Name: [''],
      uom_Id: [0],
      uomShort: [''],
      rate: [0],
      totalQty: [0],
      itemValue: [0],
      billFor: [''],  //extra , not exist in Off Shop Bill Register
    })
  }
  goBack() {
    this.librarianDashboardService.isHeroVisible = true; // Show hero section
    this.router.navigate(['/librarian-dasboard'], { queryParams: { showHero: true } }).then(() => {
      window.scrollTo(0, 0); // Scroll to the top
    });
  }
  GivePermission(): void {//
    const payload = {
      "formId": 113,
      "userGrpId": parseInt(this.userProfileservice.getUserGrpId())
    }
    this.authStoreService.GetPermission(payload).subscribe({
      next: (data: ResponseApi) => {
        this.permissions = ('success' === data.status) ? data.result : {};
      },
    })
  }
}
