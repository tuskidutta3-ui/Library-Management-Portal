import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IItemForGdRtrnNoteAutoSuggestionPayload, IItemForGdRtrnNoteResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UtilService } from '../../../core/services/util.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-item-goods-return-note-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-goods-return-note-search-helper.component.html',
  styleUrl: './item-goods-return-note-search-helper.component.scss'
})
export class ItemGoodsReturnNoteSearchHelperComponent {
 dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName','Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemGoodsReturnNoteSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
   private util = inject(UtilService);
  public masterItemData: IItemForGdRtrnNoteAutoSuggestionPayload = {
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
    this.GetHelpItemForGdRtrnNote();
  }
  public GetHelpItemForGdRtrnNote(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpItemForGdRtrnNote(this.masterItemData));
    tableRecords$.then((response: IItemForGdRtrnNoteResponse) => {
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
    this.GetHelpItemForGdRtrnNote();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpItemForGdRtrnNote();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
