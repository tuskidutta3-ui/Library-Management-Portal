import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { IAutoSuggestionPayload, IItemForBevcoResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-item-for-bevco-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-for-bevco-helper.component.html',
  styleUrl: './item-for-bevco-helper.component.scss'
})
export class ItemForBevcoHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemForBevcoHelperComponent>);
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
    this.GetItemForItemLinkBevco();
  }
  public GetItemForItemLinkBevco(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItemForItemLinkBevco(this.masterItemData));
    tableRecords$.then((response: IItemForBevcoResponse) => {
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
    this.GetItemForItemLinkBevco();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetItemForItemLinkBevco();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
