import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, inject, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { ToWords } from 'to-words';
import { environment } from '../../../../environments/environment';
import { IKOTBillDisplayResponse } from '../../../core/models/interface/common.interface';
import { CommonService } from '../../../core/services/common.service';
import { CustomAdapter } from '../../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../../core/services/custom-date-parser-formatter.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { IlssTransactionService } from '../../../core/services/ilss-transaction.service';
import { LoadingService } from '../../../core/services/loading.service';
import { UtilService } from '../../../core/services/util.service';
import { DuplicateBillPrintingComponent } from '../duplicate-bill-printing/duplicate-bill-printing.component';
import { PrintPdfComponent } from '../print-pdf/print-pdf.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
declare let pdfMake: any
declare let htmlToPdfmake: any
@Component({
  selector: 'app-duplicate-bill-swimmer',
  standalone: true,
  imports: [MatTableModule, NgbDatepickerModule, MatCheckboxModule, ReactiveFormsModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './duplicate-bill-swimmer.component.html',
  styleUrl: './duplicate-bill-swimmer.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class DuplicateBillSwimmerComponent {
  @ViewChild('tableContainer') tableContainer!: ElementRef;
  @ViewChild('datepickerButton') datepickerButton!: ElementRef;
  public editDuplicateBillInfo!: FormGroup;
  dataSource: any;
  displayedColumns: string[] = ['billno', 'date', 'amount', 'print'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  selectedRow: any;  // Store the selected row for API request
  allBills: any[] = [];
  Total: number = 0
  pdfResult: any
  toWords = new ToWords();
  // Track the currently selected row's index
  selectedRowIndex: number = -1;  // Initialize as -1, indicating no row is selected initially
  public isSelected = false; // Track if a row is selected
  public isDataLoaded = false;  // Track if data is loaded
  // Define properties to store member data
  memId: number;
  fullName: string;
  memCode: string;
  isPrinting = false;  // Flag to track if print dialog is already open
  // A counter to track how many rows have been hovered
  private hoverCount: number = 0;
  private debounceTimeout: any = null;
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<DuplicateBillSwimmerComponent>);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  private fb = inject(FormBuilder);
  private commonService = inject(CommonService);
  private userProfileService = inject(UserProfileService);
  private IlssTransactionService = inject(IlssTransactionService);
  private renderer = inject(Renderer2);
  private loadService = inject(LoadingService);
  private util = inject(UtilService);
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private uploadService: CommonService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {
    // Initialize memId, fullName, and memCode from dialog data
    this.memId = data.memId;
    this.fullName = data.fullName;
    this.memCode = data.memCode;
  }
  ngOnInit(): void {
    this.editDuplicateBillFormInitialize();
    var datePipe = new DatePipe('en-US')
    const currentDate = new Date();
    this.editDuplicateBillInfo.controls['businessDate'].setValue(datePipe.transform(currentDate, 'dd-MM-yyyy'));
    // Set memCode and memName to the form fields after fetching from the dialog data
    if (this.memCode) {
      this.editDuplicateBillInfo.controls['mem_Code'].setValue(this.memCode);  // Set member code
    }
    if (this.fullName) {
      this.editDuplicateBillInfo.controls['mem_Name'].setValue(this.fullName);  // Set member name
    }
  }
  // Optional: Ensuring proper handling of keyboard events for navigation
  ngAfterViewInit(): void {
    this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          this.moveHover('down');  // Move down when ArrowDown is pressed
          break;
        case 'ArrowUp':
          this.moveHover('up');    // Move up when ArrowUp is pressed
          break;
        case 'Enter':
          this.printRow();  // Print the hovered row on Enter key press
          break;
      }
    });
  }
  // Handling the row hover effect
  public onRowHover(row: any) {
    this.selectedRow = row;  // Set the hovered row as selected
    console.log("Hovered Row: ", row);  // Optional debugging log
  }
  editDuplicateBillFormInitialize() {
    this.editDuplicateBillInfo = this.fb.group({
      businessDate: [''],
      mem_Code: [''],
      mem_Name: [''],
    })
  }
  // Method to check if the mem_Code field is filled
  isMemberCodeEntered(): boolean {
    const memCode = this.editDuplicateBillInfo.get('mem_Code')?.value;
    return memCode && memCode.trim().length > 0;  // Return true if there's a value in mem_Code
  }
  public DisplaySettleBill(): void {
    // // Show the loading indicator using the LoadingService
    // this.loadService.loadingOn();
    // Directly construct the payload for the API call here
    const payload = {
      hallId: 0,
      MemId: this.memId,  // Dynamically set the memId
      businessDate: this.util.dateApptoDB(this.editDuplicateBillInfo.get('businessDate')?.value)
    };
    // Make the API call with the dynamically constructed payload
    const tableRecords$ = lastValueFrom(this.IlssTransactionService.DisplaySettleBillSwimmer(payload));
    tableRecords$.then((response: IKOTBillDisplayResponse) => {
      if (response.status === 'success') {
        this.allBills = response.result;
        this.dataSource = this.allBills;
        if (this.allBills.length === 0) {
          // No data available
          this.toastrService.info('No data is available', 'Information');
          this.dataSource = [];  // Clear the dataSource
          this.isDataLoaded = false;
        }
        // Hover the first row after data is loaded
        if (this.dataSource.length > 0) {
          this.onRowHover(this.dataSource[0]); // Hover the first row
          // this.scrollToRow(); // Ensure the first row is visible
        }
      } else {
        this.dataSource = [];
        this.isDataLoaded = false; // Reset the loaded state on failure
        // this.loadService.loadingOff();
        this.toastrService.error('Failed to fetch items', 'Error');
      }
    }).catch(_ => {
      // this.loadService.loadingOff();
      this.dataSource = [];
      this.toastrService.error('Failed to fetch items', 'Error');
    });
  }
  private moveHover(direction: 'up' | 'down') {
    // Ensure there is a selected row before proceeding
    if (!this.selectedRow) {
      // Optionally, show a message or return early if no row is selected
      // this.toastrService.warning('Please select a row to navigate', 'Warning');
      // return;
    }
    const currentIndex = this.dataSource.indexOf(this.selectedRow);
    if (currentIndex === -1) return;  // Exit if no row is found
    // Determine the new index based on the direction
    let newIndex = direction === 'down'
      ? Math.min(currentIndex + 1, this.dataSource.length - 1)
      : Math.max(currentIndex - 1, 0);
    // If the new index is different from the current, update hover and scroll
    if (newIndex !== currentIndex) {
      this.onRowHover(this.dataSource[newIndex]);  // Update the hovered row
      this.selectedRow = this.dataSource[newIndex];  // Update selected row
      this.scrollToRow(newIndex);  // Scroll to the new row
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
      // Scroll the container if the row is out of view
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
    }
  }
  // Trigger print for the hovered row
  private printRow(): void {
    // Prevent print if it's already in progress
    if (this.isPrinting) {
      return;  // If already printing, do nothing
    }
    // Set the flag to true to indicate that the print dialog is being opened
    this.isPrinting = true;
    // Ensure a row is selected before attempting to print
    if (this.selectedRow) {
      this.print(this.selectedRow, this.selectedRowIndex);
    } else {
      // Handle case where no row is selected (optional)
      this.toastrService.warning('Please select a row to print.', 'Warning');
    }
  }
  //////////////////////////////////////// KOT PRINT & SETTLE BILL PRINT  /////////////////////////////////////////////////
  print(element: any, index: number): void {
    console.log('print clicked');
    console.log('element:', element); // Check if element is populated correctly
    const billNo = element.billNo;
    if (!billNo) {
      console.error('OrderNo is not available for row at index', index);
      return;  // Exit if orderNo is not found
    }
    // Start loading
    this.loadService.loadingOn();
    // Define the payload
    let payload = {
      orderNo: billNo,
      isSettled: true,
      memCardOb: 0,
      memCardCb: 0,
      reportName: "KOT"
    };
    console.log('Payload for print:', payload); // Log the payload
    // Using lastValueFrom to convert Observable to a Promise and then use .then()
    lastValueFrom(this.IlssTransactionService.KotPrintSwimmer(payload))
      .then((response) => {
        console.log('Print response:', response); // Log the response
        if (response.status === 'success' && response.result) {
          this.pdfResult = response.result;
          console.log(this.pdfResult);
          // Open the dialog to print PDF
          let dialogRef = this.dialog.open(PrintPdfComponent, {
            width: '60%',
            disableClose: true
          });
          // After the dialog is closed, perform actions based on the response
          dialogRef.afterClosed().subscribe(action => {
            // Reset isPrinting flag after dialog is closed
            this.isPrinting = false;
            if (action) {
              if (action !== true) {
                this.generatePDF(action);  // Id of form
              }
            }
          });
        } else {
          this.toastrService.error("No data available to generate PDF!", 'Error', environment.toastrConfig);
        }
      })
      .catch((error) => {
        // Handle any error in the API call
        console.error('Error in print API call:', error); // Log the error
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
        this.isPrinting = false; // Reset flag on error
      })
      .finally(() => {
        // Stop loading after the API call is completed
        this.loadService.loadingOff();
      });
  }
  getBase64ImageFromURL(url: any) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  }
  async generatePDF(action: string) {
    // Fetch the image and store it
    const logoBase64 = await this.getBase64ImageFromURL('../../../assets/images/logo.png');
    const ClubName = this.userProfileService.getClub_Name();
    const ClubAdd = this.userProfileService.getClub_Address();
    this.Total = this.pdfResult.res.reduce((a: any, b: any) => a + +b.basicAmt_AfterDisc, 0).toFixed(2);
    const heading = 'Tax Invoice (Duplicate)'
    // Group items by subGrpType
    const groupedItems = this.pdfResult.res.reduce((acc: any, item: any) => {
      const group = item.subGrpType === 'L' ? 'Liquor Item' : item.subGrpType === 'F' ? 'Food Item' : 'Misc. Item'; // Replace 'L' with 'Liquor'
      if (!acc[group]) {
        acc[group] = { items: [], total: 0 }; // Initialize a new array for items and total for each group
      }
      acc[group].items.push(item); // Add item to the respective group
      acc[group].total += +item.basicAmt_AfterDisc; // Add item's basicAmt_AfterDisc to the group's total
      return acc;
    }, {});
    // Map the grouped items to table rows
    const groupedTableRows = Object.keys(groupedItems).map((group) => {
      const groupTotal = groupedItems[group].total.toFixed(2); // Get total for the group
      return [
        // Add a section header for each group
        [
          {
            text: `${group}`,
            bold: true,
            fontSize: 9,
            colSpan: 7,
            alignment: 'left',
            margin: [0, 0, 0, 0]
          },
          {}, {}, {}, {}, {}, {}
        ],
        // Map the items of the current group to table rows
        ...groupedItems[group].items.map((item: any) => [
          { text: item.itemShort, colSpan: 3, alignment: 'left', fontSize: 8 },
          { text: '', fontSize: 8 },
          { text: '', fontSize: 8 },
          { text: item.uomShort, alignment: 'left', fontSize: 8 },
          { text: item.totalQty, alignment: 'right', fontSize: 8 },
          { text: item.rate.toFixed(2), alignment: 'right', fontSize: 8 },
          { text: item.basicAmt_AfterDisc.toFixed(2), alignment: 'right', fontSize: 8 },
        ]),
        [{
          canvas: [
            {
              type: 'line',
              x1: 330,
              y1: 1,
              x2: 400,  // Adjust width according to your layout
              y2: 1,
              lineWidth: 0.5,
              dash: { length: 4, space: 2 }
            }
          ],
          // margin: [0, 0, 0, 5]  // Adds margin between header and line
        }, {}, {}, {}, {}, {}, {}],
        // Add the total row for the current group
        [
          {
            text: ``,
            bold: true,
            fontSize: 8,
            colSpan: 6,
            alignment: 'right',
            margin: [0, 10, 0, 0],
          },
          {},
          {},
          {},
          {},
          {},
          {
            text: groupTotal, // The total for this subgroup
            bold: true,
            fontSize: 8,
            alignment: 'right',
          },
        ],
        [{
          canvas: [
            {
              type: 'line',
              x1: 330,
              y1: 1,
              x2: 400,  // Adjust width according to your layout
              y2: 1,
              lineWidth: 0.5,
              dash: { length: 4, space: 2 }
            }
          ],
          // margin: [0, 0, 0, 5]  // Adds margin between header and line
        }, {}, {}, {}, {}, {}, {}],
      ];
    });
    // Calculate the grand total
    const grandTotal = Object.values(groupedItems).reduce((sum: number, group: any) => sum + group.total, 0).toFixed(2);
    // Define document definition
    let docDefinition = {
      pageSize: 'A5',
      pageOrientation: 'portrait',
      fontFamily: 'Times New Roman',
      pageMargins: [12, 10, 12, 30],
      info: {
        title: 'TEMP. BILL',
      },
      footer: (currentPage: number, pageCount: number) => ({
        fontSize: 6,
        table: {
          widths: ['40%', '30%', '30%'],
          body: [
            [{ text: `Date: ${moment(new Date()).format('DD/MM/YYYY')}`, margin: [10, 0, 0, 0] }, '',
            { text: `Page ${currentPage} of ${pageCount}`, alignment: 'right', margin: [0, 0, 10, 0] }],
            [{ text: `Time: ${moment(new Date()).format('hh:mm:ss A')}`, margin: [10, 0, 0, 0] }, '', '']
          ]
        },
        layout: 'noBorders'
      }),
      content: [
        {
          table: {
            headerRows: 4, // This ensures the first row will repeat on every page
            widths: ['100%'],
            body: [
              [{
                table: {
                  widths: ['25%', '50%', '25%'],
                  body: [
                    [
                      {
                        image: logoBase64,
                        width: 40,
                        margin: [8, 0, 0, 0],
                        rowSpan: 4,
                        alignment: 'left'
                      },
                      {}, {}, // Empty cells for alignment
                    ],
                    [
                      {}, // Empty cell to align text
                      {
                        text: ClubName,
                        bold: true,
                        fontSize: 10,
                        alignment: 'center',
                      },
                      {}
                    ],
                    [
                      {}, // Empty cell to align text
                      {
                        text: ClubAdd,
                        bold: true,
                        fontSize: 10,
                        alignment: 'center',
                      },
                      {}
                    ],
                    [
                      {}, // Empty cell to align text
                      {
                        text: heading,
                        bold: true,
                        fontSize: 9,
                        alignment: 'center',
                        decoration: 'underline',  // Underlines the text
                      },
                      {}
                    ],
                  ]
                },
                layout: 'noBorders'
              }],
              [
                {
                  table: {
                    widths: ['50%', '50%'],
                    body: [
                      [{
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 1,
                            x2: 395,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 0]  // Adds margin between header and line
                      }, {}],
                      [
                        {
                          text: "Order No. : " + this.pdfResult.res[0].orderNo,
                          bold: true,
                          fontSize: 8,
                          margin: [0, 5, 0, 0] // Adjusted margin for placement
                        },
                        {
                          text: "Date : " + this.util.dateDBtoApp(this.pdfResult.res[0].orderDate) + "  Time : " + moment(this.pdfResult.res[0].a_TIME).format('h:mm:s a'),
                          bold: true,
                          fontSize: 8, margin: [0, 5, 0, 0] // Adjusted margin for placement
                        },
                      ],
                      [
                        {
                          text: "Hall : " + this.pdfResult.res[0].hall_Name,
                          bold: false,
                          fontSize: 8,
                          // margin: [0, 10, 0, 5] // Adjusted margin for placement
                        },
                        {
                          text: "Waiter : " + this.pdfResult.res[0].waiterName,
                          bold: false,
                          fontSize: 8,
                        },
                      ],
                      [
                        {
                          text: "GSTIN : " + this.userProfileService.getST_NO(),
                          bold: false,
                          fontSize: 8,
                        },
                        {
                          text: "Food License No. : " + this.userProfileService.getVAT_No(),
                          bold: false,
                          fontSize: 8,
                        },
                      ],
                    ]
                  }, layout: 'noBorders'
                }],
              [
                {
                  table: {
                    widths: ['100%'],
                    body: [
                      [{
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 1,
                            x2: 395,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 0]  // Adds margin between header and line
                      },],
                      [
                        {
                          text: "Member Code : [ " + this.pdfResult.res[0].mem_Code + ' ] ' + ' ' + this.pdfResult.res[0].name,
                          bold: false,
                          fontSize: 8,
                          // margin: [0, 10, 0, 5] // Adjusted margin for placement
                        },
                      ],
                    ]
                  }, layout: 'noBorders'
                }],
              [
                {
                  table: {
                    widths: ['20%', '3%', '17%', '20%', '10%', '15%', '15%'],
                    body: [
                      [{
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 1,
                            x2: 395,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 0]  // Adds margin between header and line
                      }, {}, {}, {}, {}, {}, {}],
                      [
                        {
                          text: "Item",
                          bold: true,
                           fontSize: 8,
                          colSpan: 3
                        },
                        {
                          text: "",
                          bold: true,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: true,
                           fontSize: 8,
                        },
                        {
                          text: "UOM",
                          bold: true,
                           fontSize: 8,
                          alignment: 'left'
                        },
                        {
                          text: "Qty",
                          bold: true,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "Rate",
                          bold: true,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "Amount",
                          bold: true,
                           fontSize: 8,
                          alignment: 'right'
                        },
                      ],
                      [{
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 1,
                            x2: 395,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 0]  // Adds margin between header and line
                      }, {}, {}, {}, {}, {}, {}]
                    ]
                  }, layout: 'noBorders'
                }],
              [
                {
                  table: {
                    widths: ['20%', '3%', '17%', '20%', '10%', '15%', '15%'],
                    body: [
                      // ...this.pdfResult.res.map((itemdlt: any) => [
                      //   { text: itemdlt.itemShort, colSpan: 3, alignment: 'left',  fontSize: 8, },
                      //   { text: '',  fontSize: 8, },
                      //   { text: '',  fontSize: 8, },
                      //   { text: itemdlt.uomShort, alignment: 'left',  fontSize: 8, },
                      //   { text: itemdlt.totalQty, alignment: 'right',  fontSize: 8, },
                      //   { text: itemdlt.rate, alignment: 'right',  fontSize: 8, },
                      //   { text: itemdlt.basicAmt_AfterDisc, alignment: 'right',  fontSize: 8, },
                      // ]),
                      // [
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: "",
                      //     bold: false,
                      //      fontSize: 8,
                      //   },
                      //   {
                      //     text: this.Total,
                      //     bold: false,
                      //      fontSize: 8,
                      //     alignment: 'right',
                      //   },
                      // ],
                      // Grouped rows
                      ...groupedTableRows.flat(),  // Flatten the grouped rows
                      [
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "Sub Total : ",
                          bold: true,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: grandTotal,
                          bold: false,
                           fontSize: 8,
                          alignment: 'right',
                        },
                      ],
                      ...this.pdfResult.stRep.map((tax: any) => [
                        { text: '', alignment: 'center',  fontSize: 8, },
                        { text: '', alignment: 'center',  fontSize: 8, },
                        { text: '', alignment: 'center',  fontSize: 8, },
                        { text: tax.sT_NAME, colSpan: 3, alignment: 'left',  fontSize: 8, },
                        { text: '', alignment: 'center',  fontSize: 8, },
                        { text: '', alignment: 'center',  fontSize: 8, },
                        { text: tax.stTotalAmt.toFixed(2), alignment: 'right',  fontSize: 8, },
                      ]),
                      [{
                        canvas: [
                          {
                            type: 'line',
                            x1: 330,
                            y1: 1,
                            x2: 400,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 5]  // Adds margin between header and line
                      }, {}, {}, {}, {}, {}, {}],
                      [
                        {
                          text: "Card Balance",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center',
                          colSpan: 3,
                          decoration: 'underline',  // Underlines the text
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "Total Gross ",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].totalNet.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right',
                        },
                      ],
                      [
                        {
                          text: "Opening Balance",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: (this.pdfResult.res[0].memCardOb.toFixed(2) - this.pdfResult.res[0].lastTopUpAmt.toFixed(2)),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "Round Off ",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].roundOff.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right',
                        },
                      ],
                      [
                        {
                          text: "Last Topup",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].lastTopUpAmt.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          canvas: [
                            {
                              type: 'line',
                              x1: 450,
                              y1: 1,
                              x2: 555,  // Adjust width according to your layout
                              y2: 1,
                              lineWidth: 0.5,
                              dash: { length: 4, space: 2 }
                            }
                          ],
                        },
                      ],
                      [
                        {
                          canvas: [
                            {
                              type: 'line',
                              x1: 0,
                              y1: 1,
                              x2: 150,  // Adjust width according to your layout
                              y2: 1,
                              lineWidth: 0.5,
                              dash: { length: 4, space: 2 }
                            }
                          ],
                          margin: [0, 0, 0, 5]  // Adds margin between header and line
                        },
                        {
                        },
                        {
                        },
                        {
                          text: "Total Payable",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].totalNet_AfterRo.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right',
                        },
                      ],
                      [
                        {
                          text: "(Opening + Topup)",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].memCardOb.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          canvas: [
                            {
                              type: 'line',
                              x1: 48,
                              y1: 1,
                              x2: 120,  // Adjust width according to your layout
                              y2: 1,
                              lineWidth: 0.5,
                              dash: { length: 4, space: 2 }
                            }
                          ],
                          margin: [0, 0, 0, 5]  // Adds margin between header and line
                        },
                        {
                          text: "",
                          bold: true,
                          fontSize: 8,
                        },
                      ],
                      [
                        {
                          text: "Billed Amount",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].totalNet_AfterRo.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                      ],
                      [
                        {
                          text: "Closing Balance",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: ":",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: this.pdfResult.res[0].memCardCb.toFixed(2),
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'center'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                          alignment: 'right'
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                        {
                          text: "",
                          bold: false,
                           fontSize: 8,
                        },
                      ],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {}, {}],
                      [{}, {}, {}, {}, {}, {
                        canvas: [
                          {
                            type: 'line',
                            x1: 0,
                            y1: 1,
                            x2: 115,  // Adjust width according to your layout
                            y2: 1,
                            lineWidth: 0.5,
                            dash: { length: 4, space: 2 }
                          }
                        ],
                        margin: [0, 0, 0, 5]  // Adds margin between header and line
                      }, {}
                      ],
                      [
                        {
                          text: "NB : *Free of Cost, **Free Offer",
                          bold: true,
                          fontSize: 8,
                          colSpan: 5
                        },
                        {}, {}, {}, {},
                        {
                          text: "Member's Signature",
                          bold: true,
                          fontSize: 8,
                          colSpan: 2,
                          alignment: 'right'
                          // margin: [0, 10, 0, 5] // Adjusted margin for placement
                        },
                        {}
                      ],
                    ]
                  },
                  layout: 'noBorders'
                }],
            ]
          },
        layout: 'noBorders'
        }
      ]
    };
    if (action === 'download') {
      pdfMake.createPdf(docDefinition).download('Temp.Bill.pdf');
    } else if (action === 'print') {
      pdfMake.createPdf(docDefinition).print();
    } else {
      pdfMake.createPdf(docDefinition).open();
    }
  }
}
