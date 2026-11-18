import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Inject, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject, lastValueFrom, debounceTime } from 'rxjs';
import { IKOTBillDisplayFormPayload, IKOTBillDisplayResponse, IKOTBillRegenFormPayload, IKOTBillVoidFormPayload, IKOTItemApiFormPayload, IKOTItemApiResponse, IUserCheckFormPayload } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { IlssTransactionService } from '../../../core/services/ilss-transaction.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { environment } from '../../../../environments/environment';
import { CustomAdapter } from '../../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../../core/services/custom-date-parser-formatter.service';
@Component({
  selector: 'app-bill-register-for-regenerate',
  standalone: true,
  imports: [MatTableModule, NgbDatepickerModule, MatCheckboxModule, ReactiveFormsModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './bill-register-for-regenerate.component.html',
  styleUrl: './bill-register-for-regenerate.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class BillRegisterForRegenerateComponent {
  @ViewChild('tableContainer') tableContainer!: ElementRef;  // Reference to the table container
  @ViewChild('searchInputOrderNo') searchInputOrderNo!: ElementRef<HTMLInputElement>;
  public editBillDisplay!: FormGroup;
  selectedRowIndex: number = 0;  // Track the selected row index
  selectedRow: any;  // Store the selected row for API request
  dataSource: any[] = [];
  allBills: any[] = [];
  displayedColumns: string[] = ['billno', 'orderno', 'code', 'member', 'waiter', 'amount', 'cancel'];
  dialogType: string = '';  // Define dialogType to hold 'Void' or 'Regenerate'
  ReasonList: any; // Define as array of IRecptType
  public searchStringBillNo = '';
  public searchStringOrderNo = '';
  public searchStringCode = '';
  public searchStringMember = '';
  public searchStringWaiter = '';
  private keydownListener: (() => void) | undefined;  // Nullable type
  public userCheck: boolean = false
  private searchSubject: Subject<void> = new Subject();
  // A counter to track how many rows have been hovered
  private hoverCount: number = 0;
  public masterBillVoidData: IKOTBillDisplayFormPayload = {
    hallId: 0,
    businessDate: ''
  };
  // Lazily inject the services
  private IlssTransactionService = inject(IlssTransactionService);
  private fb = inject(FormBuilder);
  private commonService = inject(CommonService);
  private userProfileService = inject(UserProfileService);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { additionalData: any },
    private dialogRef: MatDialogRef<BillRegisterForRegenerateComponent>,
    private toastrService: ToastrService,
    private renderer: Renderer2
  ) {
    this.masterBillVoidData = this.data.additionalData;
    this.dialogType = this.data.additionalData.type; // Assign the type from the payload
  }
  ngOnInit(): void {
    this.setupSearchDebounce();
    this.editBillDisplayFormInitialize();
    this.GetHelpReason();
    if (this.editBillDisplay && this.editBillDisplay.get('userPW')) {
      this.editBillDisplay.get('userPW')?.setValue('');
    }
    // Check the dialogType passed from the parent component
    if (this.dialogType === 'Other') {
      // If the dialog type is 'Void', fetch the settle bill data
      this.DisplaySettleBillOther();
    }
    else {
      // If the dialog type is 'Void', fetch the settle bill data
      this.DisplaySettleBill();
    }
  }
  editBillDisplayFormInitialize() {
    this.editBillDisplay = this.fb.group({
      reason: [''],
      userName: [''],
      userPW: [''],
    })
  }
  onRowHover(row: any) {
    this.selectedRow = row; // Mark the row as hovered
  }
  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     // Focus on the search input after the view is initialized
  //     if (this.searchInputOrderNo && this.searchInputOrderNo.nativeElement) {
  //       this.renderer.selectRootElement(this.searchInputOrderNo.nativeElement).focus();
  //     }
  //     // Automatically hover the first row if data is available
  //     if (this.dataSource.length > 0) {
  //       this.onRowHover(this.dataSource[0]); // Hover the first row
  //     }
  //     // Listen for keydown events to move hover with up/down arrows
  //     this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
  //       if (event.key === 'ArrowDown') {
  //         this.moveHover('down');
  //       } else if (event.key === 'ArrowUp') {
  //         this.moveHover('up');
  //       } else if (event.key === 'Enter' && this.selectedRow) {
  //         this.selectRow(this.selectedRow); // Select the currently hovered row when Enter is pressed
  //         this.onCancel(this.selectedRow); // Trigger the cancel logic
  //       }
  //     });
  //   }, 0);
  // }
  ngAfterViewInit(): void {
    setTimeout(() => {
      // Focus on the search input after the view is initialized
      if (this.searchInputOrderNo && this.searchInputOrderNo.nativeElement) {
        this.renderer.selectRootElement(this.searchInputOrderNo.nativeElement).focus();
      }
      // Automatically hover the first row if data is available
      if (this.dataSource.length > 0) {
        this.onRowHover(this.dataSource[0]); // Hover the first row
      }
      // Listen for keydown events to move hover with up/down arrows
      this.keydownListener = this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          this.moveHover('down');
        } else if (event.key === 'ArrowUp') {
          this.moveHover('up');
        } else if (event.key === 'Enter' && this.selectedRow) {
          this.selectRow(this.selectedRow); // Select the currently hovered row when Enter is pressed
          this.onCancel(this.selectedRow); // Trigger the cancel logic
          // this.dialogRef.close();
        }
      });
    }, 0);
  }
  ngOnDestroy(): void {
    // Remove the keydown event listener when the component is destroyed
    if (this.keydownListener) {
      this.keydownListener();  // This will remove the listener
    }
  }
  // Optimized version of moveHover with automatic scrolling and smooth row navigation
  private moveHover(direction: 'up' | 'down') {
    const currentIndex = this.dataSource.indexOf(this.selectedRow);
    if (currentIndex === -1) {
      // If no row is selected, do nothing
      return;
    }
    let newIndex: number = currentIndex;
    if (direction === 'down') {
      // Move hover down, wrap around if at last row
      newIndex = (currentIndex + 1) % this.dataSource.length;  // Wrap to the first row when at the last row
    } else if (direction === 'up') {
      if (currentIndex > 0) {
        // If not at the first row, move hover up to the previous row
        newIndex = currentIndex - 1;
      }
      // If at the first row, stay on the first row (no movement)
    }
    // Only update hover if the row has changed
    if (newIndex !== currentIndex) {
      this.onRowHover(this.dataSource[newIndex]);
      this.hoverCount++; // Increase hover count
      // Scroll into view if more than 6 rows have been hovered
      if (this.hoverCount >= 6) {
        this.scrollToRow(newIndex);
      }
    }
  }
  // Scroll the table to make the hovered row visible
  private scrollToRow(newIndex: number) {
    if (this.tableContainer && this.tableContainer.nativeElement) {
      const rowElement = document.querySelectorAll('mat-row')[newIndex] as HTMLElement;
      const tableRect = this.tableContainer.nativeElement.getBoundingClientRect();
      if (rowElement) {
        const rowRect = rowElement.getBoundingClientRect();
        // Only start scrolling if the row is out of the visible area
        if (this.hoverCount >= 6 && (rowRect.top < tableRect.top || rowRect.bottom > tableRect.bottom)) {
          rowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }
  public DisplaySettleBill(): void {
    const tableRecords$ = lastValueFrom(this.IlssTransactionService.DisplaySettleBill(this.masterBillVoidData));
    tableRecords$.then((response: IKOTBillDisplayResponse) => {
      if (response.status === 'success') {
        this.allBills = response.result;
        this.dataSource = this.allBills;
        if (this.allBills.length === 0) {
          // No data available
          this.toastrService.info('No data is available', 'Information');
          this.dataSource = [];  // Clear the dataSource
        }
        // Automatically hover the first row after data is loaded
        if (this.dataSource.length > 0) {
          this.onRowHover(this.dataSource[0]); // Hover the first row
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
  public DisplaySettleBillOther(): void {
    const tableRecords$ = lastValueFrom(this.IlssTransactionService.DisplaySettleBillOther(this.masterBillVoidData));
    tableRecords$.then((response: IKOTBillDisplayResponse) => {
      if (response.status === 'success') {
        this.allBills = response.result;
        this.dataSource = this.allBills;
        if (this.allBills.length === 0) {
          // No data available
          this.toastrService.info('No data is available', 'Information');
          this.dataSource = [];  // Clear the dataSource
          // this.isDataLoaded = false;
        }
        // Automatically hover the first row after data is loaded
        if (this.dataSource.length > 0) {
          this.onRowHover(this.dataSource[0]); // Hover the first row
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
  onCancel(data: any) {
    if (this.editBillDisplay.controls['reason'].value == '') {
      alert('⚠️ Please Select Void Reason');
      return;
    }
    if (this.dialogType == 'Void') {
      this.VoidBill(data);
    }
    if (this.dialogType == 'Other') {
      this.OtherVoidBill(data);
    }
    else if (this.dialogType == 'Regenerate') {
      this.KotRegenerate(data)
    }
  }
  VoidBill(data: any) {
    if (this.editBillDisplay.controls['reason'].value == '') {
      alert('⚠️ Please Select Void Reason!');
      return;
    }
    if (this.editBillDisplay.controls['userName'].value == '') {
      alert('⚠️ Please Enter User Name!');
      return;
    }
    if (this.editBillDisplay.controls['userPW'].value == '') {
      alert('⚠️ Please Enter User Password!');
      return;
    }
    const payload: IKOTBillVoidFormPayload = {
      orderNo: data.orderNo,
      billNo: data.billNo,
      voidReason: this.editBillDisplay.get('reason')?.value,
      voidUser: this.editBillDisplay.get('userName')?.value,
      voidUserPwd: this.editBillDisplay.get('userPW')?.value,
      add_By: this.userProfileService.getUserCode(),
      add_Comp_IP: '02',
      isRestaurantOnly: true
    };
    return lastValueFrom(this.IlssTransactionService.VoidBill(payload))
      .then(response => {
        if (response.status === 'success') {
          const result = response.result;
          this.toastrService.success(response.message, 'Success', environment.toastrConfig);
          // Close dialog if API call was successful
          this.dialogRef.close(payload);
        }
        else if (response.status === 'error') {
          this.toastrService.error(response.message, 'error', environment.toastrConfig);
        }
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  }
  OtherVoidBill(data: any) {
    if (this.editBillDisplay.controls['reason'].value == '') {
      alert('⚠️ Please Select Void Reason!');
      return;
    }
    if (this.editBillDisplay.controls['userName'].value == '') {
      alert('⚠️ Please Enter User Name!');
      return;
    }
    if (this.editBillDisplay.controls['userPW'].value == '') {
      alert('⚠️ Please Enter User Password!');
      return;
    }
    const payload: IKOTBillVoidFormPayload = {
      orderNo: data.orderNo,
      billNo: data.billNo,
      voidReason: this.editBillDisplay.get('reason')?.value,
      add_By: this.userProfileService.getUserCode(),
      add_Comp_IP: '02',
      isRestaurantOnly: true,
      voidUser: this.editBillDisplay.get('userName')?.value,
      voidUserPwd: this.editBillDisplay.get('userPW')?.value,
    };
    return lastValueFrom(this.IlssTransactionService.OtherVoidBill(payload))
      .then(response => {
        if (response.status === 'success') {
          const result = response.result;
          this.toastrService.success(response.message, 'Success', environment.toastrConfig);
          // Close dialog if API call was successful
          this.dialogRef.close();
        }
        else if (response.status === 'error') {
          this.toastrService.error(response.message, 'error', environment.toastrConfig);
        }
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  }
  KotRegenerate(data: any) {
    if (this.editBillDisplay.controls['reason'].value == '') {
      alert('⚠️ Please Select Void Reason!');
      return;
    }
    if (this.editBillDisplay.controls['userName'].value == '') {
      alert('⚠️ Please Enter User Name!');
      return;
    }
    if (this.editBillDisplay.controls['userPW'].value == '') {
      alert('⚠️ Please Enter User Password!');
      return;
    }
    const payload: IKOTBillRegenFormPayload = {
      orderDate: this.data.additionalData.businessDate,
      billNo: data.billNo,
      voidReason: this.editBillDisplay.get('reason')?.value,
      voidUser: this.editBillDisplay.get('userName')?.value,
      voidUserPwd: this.editBillDisplay.get('userPW')?.value,
      add_By: this.userProfileService.getUserCode(),
      add_Comp_IP: '02',
      isRestaurantOnly: true
    };
    return lastValueFrom(this.IlssTransactionService.KotRegenerate(payload))
      .then(response => {
        if (response.status === 'success') {
          const result = response.result;
          this.toastrService.success(response.message, 'Success', environment.toastrConfig);
          // Close dialog if API call was successful
          this.dialogRef.close();
        }
        else if (response.status === 'error') {
          this.toastrService.error(response.message, 'error', environment.toastrConfig);
        }
      })
      .catch(error => {
        console.error('Error fetching member data:', error);
      });
  }
  private setupSearchDebounce() {
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.filterItems();
    });
  }
  private filterItems() {
    const searchStringBillNo = this.searchStringBillNo.trim().toLowerCase();
    const searchStringOrderNo = this.searchStringOrderNo.trim().toLowerCase();
    const searchStringCode = this.searchStringCode.trim().toLowerCase();
    const searchStringMember = this.searchStringMember.trim().toLowerCase();
    const searchStringWaiter = this.searchStringWaiter.trim().toLowerCase();
    // Filter data based on search criteria
    this.dataSource = this.allBills.filter(item => {
      const billNoMatch = searchStringBillNo ? item.billNo?.toString().toLowerCase().includes(searchStringBillNo) : true;
      const orderNoMatch = searchStringOrderNo ? item.orderNo?.toString().toLowerCase().includes(searchStringOrderNo) : true;
      const codeMatch = searchStringCode ? item.mem_Code?.toLowerCase().includes(searchStringCode) : true;
      const memberMatch = searchStringMember ? item.name?.toLowerCase().includes(searchStringMember) : true;
      const waiterMatch = searchStringWaiter ? item.waiterName?.toLowerCase().includes(searchStringWaiter) : true;
      // Return true for rows that match all conditions
      return billNoMatch && orderNoMatch && codeMatch && memberMatch && waiterMatch;
    });
    // Reset hover count after filtering
    this.hoverCount = 0; // Ensure hoverCount is necessary here
    // Hover the first row if there are any items in dataSource
    if (this.dataSource.length > 0) {
      this.onRowHover(this.dataSource[0]);  // Hover the first item
    }
  }
  selectRow(data: any) {
    this.selectedRow = data; // Mark the row as selected
    // this.dialogRef.close(data); // Close the dialog and return the selected data
  }
  closeDialog() {
    if (this.keydownListener) {
      this.keydownListener(); // Remove the keydown event listener
    }
    this.dialogRef.close();
  }
  // Trigger the filter when any of the search fields are updated
  onSearchInputBillNo(event: Event) {
    this.searchStringBillNo = (event.target as HTMLInputElement).value;
    this.filterItems();
  }
  onSearchInputOrderNo(event: Event) {
    this.searchStringOrderNo = (event.target as HTMLInputElement).value;
    this.filterItems();
  }
  onSearchInputCode(event: Event) {
    this.searchStringCode = (event.target as HTMLInputElement).value;
    this.filterItems();
  }
  onSearchInputMember(event: Event) {
    this.searchStringMember = (event.target as HTMLInputElement).value;
    this.filterItems();
  }
  onSearchInputWaiter(event: Event) {
    this.searchStringWaiter = (event.target as HTMLInputElement).value;
    this.filterItems();
  }
  public GetHelpReason(): void {
    const Reason$ = lastValueFrom(this.commonService.GetHelpReason({}));
    Reason$.then(response => {
      this.ReasonList = ('success' === response.status) ? response.result : [];
    });
  }
}
