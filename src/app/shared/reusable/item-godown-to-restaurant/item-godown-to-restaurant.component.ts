import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IItemForIssueToRestAutoSuggestionPayload, IItemForIssueToRestResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UtilService } from '../../../core/services/util.service';
@Component({
  selector: 'app-item-godown-to-restaurant',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-godown-to-restaurant.component.html',
  styleUrl: './item-godown-to-restaurant.component.scss'
})
export class ItemGodownToRestaurantComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'date', 'grnNo', 'uom', 'qty', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemGodownToRestaurantComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
   private util = inject(UtilService);
  public masterItemData: IItemForIssueToRestAutoSuggestionPayload = {
    session: "",
    businessDate: "",
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: ""
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.masterItemData.session = data.session; // Access directly
    this.masterItemData.businessDate = this.util.dateApptoDB(data.businessDate); // Access directly
  }
  ngOnInit(): void {
    this.GetHelpItemForIssueToRest();
  }
  public GetHelpItemForIssueToRest(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItemForIssueToRest(this.masterItemData));
    tableRecords$.then((response: IItemForIssueToRestResponse) => {
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
    this.GetHelpItemForIssueToRest();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItemForIssueToRest();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
