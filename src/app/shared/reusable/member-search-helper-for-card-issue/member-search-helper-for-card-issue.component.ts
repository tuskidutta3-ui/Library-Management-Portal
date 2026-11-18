import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IAutoSuggestionPayloadForCardIssue, ICardIssueMemberNameResponse, IMemberNameResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-member-search-helper-for-card-issue',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './member-search-helper-for-card-issue.component.html',
  styleUrl: './member-search-helper-for-card-issue.component.scss'
})
export class MemberSearchHelperForCardIssueComponent {
  dataSource: any;
  displayedColumns: string[] = ['mem_Code', 'memName', 'mem_Type', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<MemberSearchHelperForCardIssueComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public CardIssueMemberData: IAutoSuggestionPayloadForCardIssue = {
    critaria: "",
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { additionalData: IAutoSuggestionPayloadForCardIssue }
  ) {
    // Use the additionalData directly
    this.CardIssueMemberData = this.data.additionalData;
  }
  ngOnInit(): void {
    this.GetMemberDetails();
  }
  public GetMemberDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpMemberForCradIssue(this.CardIssueMemberData));
    tableRecords$.then((response: ICardIssueMemberNameResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.CardIssueMemberData['searchString'] = this.searchString;
    this.GetMemberDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.CardIssueMemberData.pagingParameters.pageNumber = pageNumber;
    this.GetMemberDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
