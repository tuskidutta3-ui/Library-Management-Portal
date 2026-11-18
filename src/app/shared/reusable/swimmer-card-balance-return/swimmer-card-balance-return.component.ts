import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IAutoSuggestionPayloadPayloadSwimMemForCardBalReturn, ISwimMemForCardBalReturnResponse } from '../../../core/models/interface/common.interface';
import { environment } from '../../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-swimmer-card-balance-return',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './swimmer-card-balance-return.component.html',
  styleUrl: './swimmer-card-balance-return.component.scss'
})
export class SwimmerCardBalanceReturnComponent {
  dataSource: any;
  displayedColumns: string[] = ['mem_Code', 'memName','Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<SwimmerCardBalanceReturnComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterLockerData: IAutoSuggestionPayloadPayloadSwimMemForCardBalReturn = {
    finYear: '',
    recordStatus: '',
    pagingParameters: {
        pageNumber: 1,
        pageSize: 10
    },
    searchString: ''
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { additionalData: IAutoSuggestionPayloadPayloadSwimMemForCardBalReturn }
  ) {
    // Use the additionalData directly
    this.masterLockerData = this.data.additionalData;
  }
  ngOnInit(): void {
    this.GetHelpSwimMemForCardBalReturn();
  }
  public GetHelpSwimMemForCardBalReturn(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpSwimMemForCardBalReturn(this.masterLockerData));
    tableRecords$.then((response: ISwimMemForCardBalReturnResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.masterLockerData['searchString'] = this.searchString;
    this.GetHelpSwimMemForCardBalReturn();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterLockerData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpSwimMemForCardBalReturn();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
