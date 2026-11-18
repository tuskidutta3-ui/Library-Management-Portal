import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { LoadingService } from '../../../core/services/loading.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../../shared/reusable/loading/loading.component';
@Component({
  selector: 'app-book-code-search-helper',
  standalone: true, // ✅ Make it standalone
  imports: [
    // ✅ Import everything directly
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgbPaginationModule,
    LoadingComponent,
  ], 
  templateUrl: './book-code-search-helper.component.html',
  styleUrl: './book-code-search-helper.component.scss',
})
export class BookCodeSearchHelperComponent {
  isDataLoaded = false;
  dataSource: any;
  displayedColumns: string[] = [
    'bookCode',
    'mastBookName',
    'mastBookAuthPubName',
    'action',
  ];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  public masterAccountGrpData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BookCodeSearchHelperComponent>,
    private commonService: CommonService,
    private toastrService: ToastrService,
    private loadService: LoadingService,
    private userProfileService: UserProfileService,
  ) {}
  ngOnInit(): void {
    this.masterAccountGrpData = {
      categoryId: Number(this.data.categoryId) || 0,
      pagingParameters: {
        pageNumber: 1,
        pageSize: 10,
      },
      searchString: '',
    };
    this.GetHelpBooks();
  }
  public GetHelpBooks(): void {
    this.isDataLoaded = false; // 🔥 reset before call
    this.loadService.loadingOn();
    const tableRecords$ = lastValueFrom(
      this.commonService.GetHelpBooks(this.masterAccountGrpData),
    );
    tableRecords$
      .then((response: any) => {
        const menuDataFromResponse =
          'success' === response.status ? response.result : [];
        this.dataSource = menuDataFromResponse;
        console.log(this.dataSource);
        this.collectionSize = response.pagingDetails.totalCount;
        this.isDataLoaded = true; // ✅ mark loaded
      })
      .catch((_) => {
        this.dataSource = [];
        this.isDataLoaded = true; // ✅ mark loaded
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
  public searchResult(): void {
    this.masterAccountGrpData['searchString'] = this.searchString;
    this.GetHelpBooks();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterAccountGrpData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpBooks();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
