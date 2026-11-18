import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IGetHelpItmPriceSubGrpResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { ItemPriceSearchHelperComponent } from '../item-price-search-helper/item-price-search-helper.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-item-price-subgrp-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-price-subgrp-search-helper.component.html',
  styleUrl: './item-price-subgrp-search-helper.component.scss'
})
export class ItemPriceSubgrpSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'catererName', 'uomName', 'subgrpTyp', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemPriceSubgrpSearchHelperComponent>);
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
    this.GetHelpItmPriceSubGrp();
  }
  public GetHelpItmPriceSubGrp(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItmPriceSubGrp(this.masterItemData));
    tableRecords$.then((response: IGetHelpItmPriceSubGrpResponse) => {
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
    this.GetHelpItmPriceSubGrp();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItmPriceSubGrp();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
