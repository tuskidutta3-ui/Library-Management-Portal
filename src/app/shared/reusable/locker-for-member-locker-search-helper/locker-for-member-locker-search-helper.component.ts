import { Component, inject } from '@angular/core';
import { IAutoSuggestionPayload, ILockerMemberResponse } from '../../../core/models/interface/common.interface';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-locker-for-member-locker-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './locker-for-member-locker-search-helper.component.html',
  styleUrl: './locker-for-member-locker-search-helper.component.scss'
})
export class LockerForMemberLockerSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['loc_Code', 'loc_Location_Name', 'oldNo', 'loc_Type', 'loc_Rent_Per_Yr', 'servTaxPerc', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<LockerForMemberLockerSearchHelperComponent>);
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
    this.GetMemLockerDetails();
  }
  public GetMemLockerDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetMemLockerDetails(this.masterItemData));
    /////////COMMON INTERFACE ER RESPONSE TA BOSBE,MAIN ER NAAAA////////
    tableRecords$.then((response: ILockerMemberResponse) => {
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
    this.GetMemLockerDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetMemLockerDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
