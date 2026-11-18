import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, Inject, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject, lastValueFrom, debounceTime } from 'rxjs';
import { IKOTItemApiFormPayload, IAllMembersResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoadingComponent } from "../loading/loading.component";
import { LoadingService } from '../../../core/services/loading.service';
interface AllMembers {
  select: boolean,
  row_Id: number,
  mem_Code: string,
  memName: string,
  primary_Mem_Code: string,
  primary_Mem_Id: number,
  primaryMemCode: string
}
// Define a type for filters, ensuring keys match the properties of EarningDeduction
type FilterKeys = keyof AllMembers;
type Filters = {
  [key in FilterKeys]?: string;
};
@Component({
  selector: 'app-all-members-search',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatCheckboxModule, LoadingComponent],
  templateUrl: './all-members-search.component.html',
  styleUrl: './all-members-search.component.scss'
})
export class AllMembersSearchComponent {
  dataSource = new MatTableDataSource<AllMembers>([]);
  displayedColumns: string[] = ['select', 'Code', 'Name', 'pMemCode'];
  public dialogRef = inject(MatDialogRef<AllMembersSearchComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private loadService = inject(LoadingService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
    if(this.data == 'A'){
      this.GetHelpAllMembers();
    }
    else{
      this.GetHelpAllSwimingMembers()
    }
    // Customize filter to include all fields in the filter logic
    this.dataSource.filterPredicate = (
      data: AllMembers,
      filter: string
    ) => {
      const filters: Filters = JSON.parse(filter);
      const matchFilter = [];
      matchFilter.push(
        data.mem_Code
          .trim()
          .toLowerCase()
          .includes(filters.mem_Code || '')
      );
      matchFilter.push(
        data.memName
          .trim()
          .toLowerCase()
          .includes(filters.memName || '')
      );
      matchFilter.push(
        data.primaryMemCode
          .trim()
          .toLowerCase()
          .includes(filters.primaryMemCode || '')
      );
      return matchFilter.every(Boolean);
    };
  }
  toggleSelection1(row: AllMembers) {
    row.select = !row.select;
  }
  applyFilter(column: FilterKeys, event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    const filters = this.getFilters();
    filters[column] = filterValue;
    this.dataSource.filter = JSON.stringify(filters);
  }
  getFilters(): Filters {
    const filterValues = this.dataSource.filter
      ? JSON.parse(this.dataSource.filter)
      : {};
    return {
      mem_Code: filterValues.mem_Code || '',
      memName: filterValues.memName || '',
      primaryMemCode: filterValues.primaryMemCode || '',
    };
  }
  public GetHelpAllMembers(): void {
    this.loadService.loadingOn()
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpAllMembers({}));
    tableRecords$.then((response: IAllMembersResponse) => {
      if (response.status === 'success') {
        this.dataSource.data = response.result;
      } else {
        this.dataSource.data = [];
        this.toastrService.error('Failed to fetch items', 'Error');
      }
    }).catch(_ => {
      this.dataSource.data = [];
      this.toastrService.error('Failed to fetch items', 'Error');
    })
      .finally(() => {
        this.loadService.loadingOff()
      });
  }
  public GetHelpAllSwimingMembers(): void {
    this.loadService.loadingOn()
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpAllSwimingMembers({}));
    tableRecords$.then((response: IAllMembersResponse) => {
      if (response.status === 'success') {
        this.dataSource.data = response.result;
      } else {
        this.dataSource.data = [];
        this.toastrService.error('Failed to fetch items', 'Error');
      }
    }).catch(_ => {
      this.dataSource.data = [];
      this.toastrService.error('Failed to fetch items', 'Error');
    })
      .finally(() => {
        this.loadService.loadingOff()
      });
  }
  okDialog() {
    let filterMEMCode = this.dataSource.data
      .filter((res: any) => res.select === true) // Filter based on the condition
      .map((mem) => ({ row_Id: mem.row_Id, mem_Code: mem.mem_Code })); // Map to extract the required key-value pairs
    console.log(filterMEMCode);
    this.dialogRef.close(filterMEMCode);
  }
}
