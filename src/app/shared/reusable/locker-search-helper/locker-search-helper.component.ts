import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, ILockerMasterAutoSuggestionPayload, ILockerNameResponse } from '../../../core/models/interface/common.interface';
import { IItemGroupResponse } from '../../../core/models/interface/ilss-master.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { ItemSearchHelperComponent } from '../item-search-helper/item-search-helper.component';
@Component({
  selector: 'app-locker-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './locker-search-helper.component.html',
  styleUrl: './locker-search-helper.component.scss'
})
export class LockerSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['loc_Code', 'loc_Type', 'loc_Location_Name', 'loc_Location_Alias', 'oldNo', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterLockerData: ILockerMasterAutoSuggestionPayload = {
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor() { }
  ngOnInit(): void {
    this.GetLockerDetails();
  }
  public GetLockerDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetLockerDetails(this.masterLockerData));
    tableRecords$.then((response: ILockerNameResponse) => {
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
    this.GetLockerDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterLockerData.pagingParameters.pageNumber = pageNumber;
    this.GetLockerDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
