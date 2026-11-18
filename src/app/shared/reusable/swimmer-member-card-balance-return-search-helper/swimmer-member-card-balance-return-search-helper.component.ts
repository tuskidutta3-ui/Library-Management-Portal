import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IGetHelpMemberForCardBalReturnAutoSuggestionPayload, IGetHelpMemberForCardBalReturnResponse } from '../../../core/models/interface/common.interface';
import { environment } from '../../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-swimmer-member-card-balance-return-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './swimmer-member-card-balance-return-search-helper.component.html',
  styleUrl: './swimmer-member-card-balance-return-search-helper.component.scss'
})
export class SwimmerMemberCardBalanceReturnSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['memCode', 'memName','Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<SwimmerMemberCardBalanceReturnSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterLockerData: IGetHelpMemberForCardBalReturnAutoSuggestionPayload = {
    recordStatus: '',
    pagingParameters: {
        pageNumber: 1,
        pageSize: 10
    },
    searchString: ''
  }
  constructor() { }
  ngOnInit(): void {
    this.GetHelpMemberForCardBalReturn();
  }
  public GetHelpMemberForCardBalReturn(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpMemberForCardBalReturn(this.masterLockerData));
    tableRecords$.then((response: IGetHelpMemberForCardBalReturnResponse) => {
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
    this.GetHelpMemberForCardBalReturn();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterLockerData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpMemberForCardBalReturn();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
