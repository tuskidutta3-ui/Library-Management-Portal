import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IOtherItemGroupResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-other-item-search',
  standalone: true,
  imports: [
    MatTableModule,
    NgbPaginationModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './other-item-search.component.html',
  styleUrl: './other-item-search.component.scss',
})
export class OtherItemSearchComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<OtherItemSearchComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterItemData: IAutoSuggestionPayload = {
    recordStatus: '',
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10,
    },
    searchString: '',
  };
  constructor() {}
  ngOnInit(): void {
    this.GetHelpOtherItem();
  }
  public GetHelpOtherItem(): void {
    const tableRecords$ = lastValueFrom(
      this.commonService.GetHelpOtherItem(this.masterItemData)
    );
    tableRecords$
      .then((response: IOtherItemGroupResponse) => {
        const menuDataFromResponse =
          'success' === response.status ? response.result : [];
        this.dataSource = menuDataFromResponse;
        this.collectionSize = response.pagingDetails.totalCount;
      })
      .catch((_) => {
        this.dataSource = [];
        this.toastrService.error(
          this.apiErrorMessage,
          'error',
          environment.toastrConfig
        );
      });
  }
  public searchResult(): void {
    this.masterItemData['searchString'] = this.searchString;
    this.GetHelpOtherItem();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetHelpOtherItem();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
