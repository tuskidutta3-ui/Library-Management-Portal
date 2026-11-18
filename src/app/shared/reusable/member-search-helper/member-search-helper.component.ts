import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { IIMemberLockerResponse, IMemberLockerAutoSuggestionPayload } from '../../../core/models/interface/common.interface';
@Component({
  selector: 'app-member-search-helper',
  standalone: true,
  imports:[MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './member-search-helper.component.html',
  styleUrl: './member-search-helper.component.scss'
})
export class MemberSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['mem_Code', 'primary_Mem_Code', 'mem_Type', 'memberName', 'memberType', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<MemberSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterLockerData: IMemberLockerAutoSuggestionPayload = {
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor() { }
  ngOnInit(): void {
    this.GetMemberLockerDetails();
  }
  public GetMemberLockerDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetMemberLockerDetails(this.masterLockerData));
    tableRecords$.then((response: IIMemberLockerResponse) => {
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
    this.GetMemberLockerDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterLockerData.pagingParameters.pageNumber = pageNumber;
    this.GetMemberLockerDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
