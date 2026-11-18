import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { CommonService } from '../../../core/services/common.service';
interface Remarks {
  id: number;
  subsRemarks: string;
  selected?: boolean; // Optional property for selection
}
@Component({
  selector: 'app-remarks-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule, MatCheckboxModule],
  templateUrl: './remarks-search-helper.component.html',
  styleUrl: './remarks-search-helper.component.scss'
})
export class RemarksSearchHelperComponent {
  dataSource = new MatTableDataSource<Remarks>([]);
  displayedColumns: string[] = ['select', 'remarks'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<RemarksSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  constructor() { }
  ngOnInit(): void {
    this.GetHelpSubcriptionRemarks();
  }
  toggleSelection1(row: Remarks) {
    row.selected = !row.selected;
  }
  public GetHelpSubcriptionRemarks(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpSubcriptionRemarks({}));
    tableRecords$.then(response => {
      this.dataSource.data = response.result;
    });
  }
  selectRow() {
    let filterRemarks = (this.dataSource?.data || [])
    .filter((res: any) => res.selected == true)
    .map((item: any) => ({ remarks: item.subsRemarks }));
    console.log(filterRemarks);
    this.dialogRef.close(filterRemarks);
  }
}
