import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IMemberLockerAutoSuggestionPayload, IIMemberLockerResponse, ISwimmerMemberAutoSuggestionPayload, IMemberSwimmerResponse, IJAAutoSuggestionPayload } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { MemberSearchHelperComponent } from '../member-search-helper/member-search-helper.component';
@Component({
  selector: 'app-swimmer-member-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './swimmer-member-search-helper.component.html',
  styleUrl: './swimmer-member-search-helper.component.scss'
})
export class SwimmerMemberSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['mem_Code', 'primary_Mem_Code', 'memberName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<SwimmerMemberSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterData: ISwimmerMemberAutoSuggestionPayload = {
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
    session: ""
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { additionalData: ISwimmerMemberAutoSuggestionPayload }) {
    // Use the additionalData directly
    this.masterData = this.data.additionalData;
  }
  ngOnInit(): void {
    this.GetMemberDetails();
  }
  public GetMemberDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetMemberSwimmerDetails(this.masterData));
    tableRecords$.then((response: IMemberSwimmerResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.masterData['searchString'] = this.searchString;
    this.GetMemberDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterData.pagingParameters.pageNumber = pageNumber;
    this.GetMemberDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
