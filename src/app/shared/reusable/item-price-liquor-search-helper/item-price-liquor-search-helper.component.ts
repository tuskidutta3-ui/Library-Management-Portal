import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IItemPriceForLqrAutoSuggestionPayload, IItemPriceForLqrResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service'; 
@Component({
  selector: 'app-item-price-liquor-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-price-liquor-search-helper.component.html',
  styleUrl: './item-price-liquor-search-helper.component.scss'
})
export class ItemPriceLiquorSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'catererName', 'uomName', 'subgrpTyp', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemPriceLiquorSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterItemData: IItemPriceForLqrAutoSuggestionPayload = {
    hall_Id: 0,
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.masterItemData.hall_Id = data.hall_Id; // Access directly
  }
  ngOnInit(): void {
    this.GetHelpItemPriceForLqr();
  }
  public GetHelpItemPriceForLqr(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItemPriceForLqr(this.masterItemData));
    tableRecords$.then((response: IItemPriceForLqrResponse) => {
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
    this.GetHelpItemPriceForLqr();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItemPriceForLqr();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
