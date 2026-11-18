import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IItemOtrMatlIssueAutoSuggestionPayload, IItemOtrMatlIssueResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-issue-other-mat-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './issue-other-mat-search-helper.component.html',
  styleUrl: './issue-other-mat-search-helper.component.scss'
})
export class IssueOtherMatSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'uomName', 'ObSource', 'grnId', 'CbQty', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<IssueOtherMatSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterItemData: IItemOtrMatlIssueAutoSuggestionPayload = {
    session: '',
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.masterItemData.session = data.session; // Access directly
  }
  ngOnInit(): void {
    this.GetHelpItemOtrMatlIssue();
  }
  public GetHelpItemOtrMatlIssue(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItemOtrMatlIssue(this.masterItemData));
    tableRecords$.then((response: IItemOtrMatlIssueResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.masterItemData['searchString'] = this.searchString;
    this.GetHelpItemOtrMatlIssue();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItemOtrMatlIssue();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
