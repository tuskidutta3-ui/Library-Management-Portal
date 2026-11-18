import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IJAMemberNameResponse, IMemberNameResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { ItemSearchHelperComponent } from '../item-search-helper/item-search-helper.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-ja-member-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './ja-member-search-helper.component.html',
  styleUrl: './ja-member-search-helper.component.scss'
})
export class JaMemberSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['primary_Mem_Code', 'mem_Code', 'memName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<JaMemberSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public JAMemberData: IAutoSuggestionPayload = {
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor() { }
  ngOnInit(): void {
    this.GetJAMemberDetails();
  }
  public GetJAMemberDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetJAMemberDetails(this.JAMemberData));
    tableRecords$.then((response: IJAMemberNameResponse) => {
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
    this.GetJAMemberDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.JAMemberData.pagingParameters.pageNumber = pageNumber;
    this.GetJAMemberDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
