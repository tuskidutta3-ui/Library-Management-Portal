import { Component, ElementRef, inject, Inject, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { NgbDateAdapter, NgbDateParserFormatter, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject, lastValueFrom, debounceTime } from 'rxjs';
import { IKOTItemApiFormPayload, IKOTItemApiResponse, IKOTOTHERItemApiResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { CustomAdapter } from '../../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../../core/services/custom-date-parser-formatter.service';
import { ItemKotEntrySearchHelperComponent } from '../item-kot-entry-search-helper/item-kot-entry-search-helper.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-item-search-other-billing',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './item-search-other-billing.component.html',
  styleUrl: './item-search-other-billing.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class ItemSearchOtherBillingComponent {
  @ViewChild('tableContainer') tableContainer!: ElementRef;  // Reference to the table container
  @ViewChild('searchInputCode') searchInputCode!: ElementRef<HTMLInputElement>;
  @ViewChild('searchInputName') searchInputName!: ElementRef<HTMLInputElement>;
  dataSource: any[] = [];
  allItems: any[] = [];
  displayedColumns: string[] = ['Id', 'Name', 'Uom', 'Rate', 'Action'];
  public searchStringCode = '';
  public searchStringName = '';
  private searchSubject: Subject<string> = new Subject();
  public isSelected = false; // New flag to track selection state
  public dialogRef = inject(MatDialogRef<ItemKotEntrySearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private renderer: Renderer2 = inject(Renderer2);
  public selectedRow: any | null = null;
  // A counter to track how many rows have been hovered
  private hoverCount: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { additionalData: IKOTItemApiFormPayload }) {
  }
  ngOnInit(): void {
    this.GetHelpKotForItem();
    this.setupSearchDebounce();
  }
  ngAfterViewInit(): void {
    // Focus on the "Search by Name" input field after the dialog is fully initialized
    this.dialogRef.afterOpened().subscribe(() => {
      this.focusSearchInputName();
      // Use setTimeout to give the table rows some time to render before applying hover
      setTimeout(() => {
        if (this.dataSource.length > 0) {
          this.onRowHover(this.dataSource[0]); // Hover the first row after the view is ready
        }
      }, 100); // Adjust the timeout as necessary (100ms should be enough in most cases)
    });
    // Listen for keydown events to navigate with the keyboard
    this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          this.moveHover('down');
          break;
        case 'ArrowUp':
          this.moveHover('up');
          break;
        case 'Enter':
          if (this.selectedRow) {
            this.selectRow(this.selectedRow);
          }
          break;
      }
    });
  }
  private focusSearchInputName() {
    // Ensure the search input name is focused
    setTimeout(() => {
      if (this.searchInputName) {
        this.searchInputName.nativeElement.focus();
      }
    }, 300); // Delay to ensure focus happens after the dialog is fully rendered
  }
  public onRowHover(row: any) {
    // console.log("Hovered Row: ", row);  // Debugging log
    this.selectedRow = row; // Only update the hovered row, don't select it
  }
  public GetHelpKotForItem(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetHelpKotOtherForItem({}));
    tableRecords$.then((response: IKOTOTHERItemApiResponse) => {
      if (response.status === 'success') {
        this.allItems = response.result;
        this.dataSource = this.allItems;
        // Hover the first row after data is loaded
        if (this.dataSource.length > 0) {
          this.onRowHover(this.dataSource[0]); // Hover the first row
          // this.scrollToRow(); // Ensure the first row is visible
        }
      } else {
        this.dataSource = [];
        this.toastrService.error('Failed to fetch items', 'Error');
      }
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error('Failed to fetch items', 'Error');
    });
  }
  private moveHover(direction: 'up' | 'down') {
    const currentIndex = this.dataSource.indexOf(this.selectedRow);
    if (currentIndex === -1) return;
    const newIndex = direction === 'down'
      ? Math.min(currentIndex + 1, this.dataSource.length - 1)
      : Math.max(currentIndex - 1, 0);
    if (newIndex !== currentIndex) {
      this.onRowHover(this.dataSource[newIndex]);
      this.scrollToRow(newIndex);
    }
  }
  private scrollToRow(newIndex: number) {
    if (!this.tableContainer || !this.tableContainer.nativeElement) return;
    const container = this.tableContainer.nativeElement;
    const rowElements = container.querySelectorAll('mat-row');
    if (rowElements && rowElements[newIndex]) {
      const rowElement = rowElements[newIndex] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const rowRect = rowElement.getBoundingClientRect();
      if (rowRect.top < containerRect.top || rowRect.bottom > containerRect.bottom) {
        container.scroll({
          top: rowElement.offsetTop - container.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }
  public selectRow(data: any) {
    if (data && !this.isSelected) {
      this.selectedRow = data; // Mark the row as selected
      this.isSelected = true; // Mark as selected
      this.dialogRef.close(data); // Close the dialog and return the selected data
    }
  }
  private setupSearchDebounce() {
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.filterItems();
    });
  }
  // private filterItems() {
  //   if (!this.searchStringCode.trim() && !this.searchStringName.trim()) {
  //     this.dataSource = this.allItems;
  //   } else {
  //     this.dataSource = this.allItems.filter(item =>
  //       item.itemCode.toLowerCase().includes(this.searchStringCode.toLowerCase()) &&
  //       item.itemName.toLowerCase().includes(this.searchStringName.toLowerCase())
  //     );
  //   }
  //   // Hover the first row after filtering the data (if any rows are available)
  //   if (this.dataSource.length > 0) {
  //     this.onRowHover(this.dataSource[0]); // Hover the first row
  //     // this.scrollToRow();  // Scroll to ensure the hovered row is visible
  //   }
  // }
  private filterItems() {
    // If either search string is empty, do not apply unnecessary filter
    if (!this.searchStringCode.trim() && !this.searchStringName.trim()) {
      this.dataSource = this.allItems; // Reset to all items
    } else {
      this.dataSource = this.allItems.filter(item =>
        // Filter item by name if the search string is not empty, or by code if its search string is not empty
        (this.searchStringCode.trim() === '' || item.itemCode.toLowerCase().includes(this.searchStringCode.toLowerCase())) &&
        (this.searchStringName.trim() === '' || item.itemName.toLowerCase().includes(this.searchStringName.toLowerCase()))
      );
    }
    // Ensure the first row is hovered after filtering (if any rows are available)
    if (this.dataSource.length > 0) {
      this.onRowHover(this.dataSource[0]);
      // Optionally, scroll to the first row
      // this.scrollToRow(); 
    }
  }
  onSearchInputCode(event: Event) {
    const inputCode = (event.target as HTMLInputElement).value;
    this.searchStringCode = inputCode;
    this.searchSubject.next(inputCode);
  }
  onSearchInputName(event: Event) {
    const inputName = (event.target as HTMLInputElement).value;
    this.searchStringName = inputName;
    this.searchSubject.next(inputName);
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
