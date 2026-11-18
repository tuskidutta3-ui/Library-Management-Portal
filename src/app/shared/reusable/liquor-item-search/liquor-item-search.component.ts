import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IItemForGrnResponse, ILiqureItemResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
@Component({
  selector: 'app-liquor-item-search',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './liquor-item-search.component.html',
  styleUrl: './liquor-item-search.component.scss'
})
export class LiquorItemSearchComponent {
dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName','Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<LiquorItemSearchComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
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
    this.GetHelpItemForGrn();
  }
  public GetHelpItemForGrn(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpLiqureItem(this.masterItemData));
    tableRecords$.then((response: ILiqureItemResponse) => {
      const DataResponse = 'success' === response.status ? response.result : [];
      this.dataSource = DataResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.masterItemData['searchString'] = this.searchString;
    this.GetHelpItemForGrn();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItemForGrn();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
