import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IMrpPerMlFormPayload, IMrpPerMlResponse } from '../../../core/models/interface/common.interface';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { CustomDateParserFormatter } from '../../../core/services/custom-date-parser-formatter.service';
import { UtilService } from '../../../core/services/util.service';
@Component({
  selector: 'app-mrp-per-ml-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './mrp-per-ml-helper.component.html',
  styleUrl: './mrp-per-ml-helper.component.scss'
})
export class MrpPerMlHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['billNO', 'billDate', 'mrpPerMl', 'salePerMl', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<MrpPerMlHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  private util = inject(UtilService);
  public masterItemData: IMrpPerMlFormPayload = {
    item_Id: 0,
    caterer_Id: 0,
    hall_Id: 0,
    incDate: ''
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.masterItemData.item_Id = data.item_Id;
    this.masterItemData.caterer_Id = data.caterer_Id;
    this.masterItemData.hall_Id = data.hall_Id;
    this.masterItemData.incDate = this.util.dateApptoDB(data.incDate);
  }
  ngOnInit(): void {
    this.GetHelpMrpPerMl();
  }
  public GetHelpMrpPerMl(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpMrpPerMl(this.masterItemData));
    tableRecords$.then((response: IMrpPerMlResponse) => {
      if (response.status === 'success') {
        const menuDataFromResponse = response.result
        this.dataSource = menuDataFromResponse;
        this.collectionSize = response.pagingDetails.totalCount;
      } 
      else if (response.status === 'error') {
        this.toastrService.error(response.message, 'error', environment.toastrConfig);
      }
      else {
        this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
      }
    }).catch(() => {
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
