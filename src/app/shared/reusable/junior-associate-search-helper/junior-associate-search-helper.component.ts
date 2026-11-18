import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IAutoSuggestionPayloadForCardIssue, IJAAutoSuggestionPayload, IJAMemberDetailsResponse, IJAMemberNameResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { JaMemberSearchHelperComponent } from '../ja-member-search-helper/ja-member-search-helper.component';
@Component({
  selector: 'app-junior-associate-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './junior-associate-search-helper.component.html',
  styleUrl: './junior-associate-search-helper.component.scss'
})
export class JuniorAssociateSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['primary_Mem_Code', 'jCardNo', 'memberName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<JuniorAssociateSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public JAMemberData: IJAAutoSuggestionPayload = {
    session: "",
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { additionalData: IJAAutoSuggestionPayload }
  ) {
    // Use the additionalData directly
    this.JAMemberData = this.data.additionalData;
  }
  ngOnInit(): void {
    this.GetMemberDetails();
  }
  public GetMemberDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetJADetails(this.JAMemberData));
    tableRecords$.then((response: IJAMemberDetailsResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.JAMemberData['searchString'] = this.searchString;
    this.GetMemberDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.JAMemberData.pagingParameters.pageNumber = pageNumber;
    this.GetMemberDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}