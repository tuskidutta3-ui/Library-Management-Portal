import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IItemNameResponse, IMasterMonthlyTranAutoSuggestionPayload } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { IItemGroupResponse, IMasterItemPayload } from '../../../core/models/interface/ilss-master.interface';
@Component({
  selector: 'app-item-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-search-helper.component.html',
  styleUrl: './item-search-helper.component.scss'
})
export class ItemSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'itemShort', 'itemType', 'Action'];
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
  public masterItemData: IAutoSuggestionPayload = {
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor() { }
  ngOnInit(): void {
    this.GetItemDetails();
  }
  public GetItemDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetItemDetails(this.masterItemData));
    tableRecords$.then((response: IItemNameResponse) => {
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
    this.GetItemDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetItemDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
