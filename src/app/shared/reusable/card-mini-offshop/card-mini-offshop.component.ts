import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { ToWords } from 'to-words';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../../../core/services/common.service';
import { CustomAdapter } from '../../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../../core/services/custom-date-parser-formatter.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { IlssTransactionService } from '../../../core/services/ilss-transaction.service';
import { LoadingService } from '../../../core/services/loading.service';
import { UtilService } from '../../../core/services/util.service';
import { CardMiniStatementComponent } from '../card-mini-statement/card-mini-statement.component';
import { PrintPdfComponent } from '../print-pdf/print-pdf.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
declare let pdfMake: any
declare let htmlToPdfmake: any
@Component({
  selector: 'app-card-mini-offshop',
  standalone: true,
  imports: [MatTableModule, NgbDatepickerModule, MatDivider, MatCheckboxModule, ReactiveFormsModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './card-mini-offshop.component.html',
  styleUrl: './card-mini-offshop.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class CardMiniOffshopComponent {
  public editCardMiniInfo!: FormGroup;
  dataSource: any;
  // displayedColumns: string[] = ['primary_Mem_Code', 'jCardNo', 'memberName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  groupedByDate: { [key: string]: any[] } = {};  // Declare groupedByDate
  pdfResult: any
  toWords = new ToWords();
  // Define properties to store member data
  memId: string;
  session: string = '';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<CardMiniOffshopComponent>);
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
    this.session = data.session;
  }
  ngOnInit(): void {
    this.editCardMiniFormInitialize();
    var datePipe = new DatePipe('en-US')
    const currentDate = new Date();
    this.editCardMiniInfo.controls['fromDate'].setValue(datePipe.transform(currentDate, 'dd-MM-yyyy'));
    this.editCardMiniInfo.controls['toDate'].setValue(datePipe.transform(currentDate, 'dd-MM-yyyy'));
    // Set memCode and memName to the form fields after fetching from the dialog data
    if (this.session) {
      this.editCardMiniInfo.controls['session'].setValue(this.session);  // Set member code
    }
  }
  editCardMiniFormInitialize() {
    this.editCardMiniInfo = this.fb.group({
      session: ['2024-2025'],
      fromDate: [''],
      toDate: [''],
      print: [false]
    })
  }
  // This is the method to initiate the print and handle PDF generation
  print(): void {
    // Start loading indicator
    this.loadService.loadingOn();
    const fromDate = this.util.dateApptoDB(this.editCardMiniInfo.get('fromDate')?.value);
    const toDate = this.util.dateApptoDB(this.editCardMiniInfo.get('toDate')?.value);
    // Prepare payload for the API request
    let payload = {
      fromDate: fromDate,
      toDate: toDate,
      session: this.editCardMiniInfo.get('session')?.value,
      memeId: Number(this.memId),  // Ensure memId is a number
      rptType: "D"
    };
    console.log('Payload for print:', payload); // Debug: Log the payload
    // Convert Observable to Promise with lastValueFrom to handle it with async/await
    lastValueFrom(this.IlssTransactionService.CardMiniPrintOffshop(payload))
      .then((response) => {
        console.log('Print response:', response); // Log the raw response
        // Ensure we handle the response as JSON (it could be a string or already an object)
        let jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
        // Check if the result is a string and needs to be parsed
        if (jsonResponse.result && typeof jsonResponse.result === 'string') {
          try {
            jsonResponse.result = JSON.parse(jsonResponse.result); // Parse the stringified JSON inside 'result'
          } catch (error) {
            console.error('Error parsing result string:', error);
            this.toastrService.error('Error parsing the response data!', 'Error', environment.toastrConfig);
            return; // Exit if parsing fails
          }
        }
        // Store the parsed result in the pdfResult variable
        this.pdfResult = jsonResponse.result;
        // Check if the API response is successful and contains valid data
        if (jsonResponse.status === 'success' && this.pdfResult && Array.isArray(this.pdfResult.Table)) {
          const transactions = this.pdfResult.Table;
          // Group transactions by Tran_Date
          this.groupedByDate = transactions.reduce((acc: any, transaction: any) => {
            const tranDate = transaction.Tran_Date; // Grouping by Tran_Date
            if (!acc[tranDate]) acc[tranDate] = [];
            acc[tranDate].push(transaction);
            return acc;
          }, {});
          console.log('Grouped transactions by Tran_Date:', this.groupedByDate); // Debug: Check the grouped data
          // Open the dialog to print PDF
          let dialogRef = this.dialog.open(PrintPdfComponent, { width: '60%', disableClose: true });
          // After the dialog is closed, generate the PDF based on the selected action
          dialogRef.afterClosed().subscribe(action => {
            if (action && action !== true) {
              this.generatePDF(action, fromDate, toDate); // Generate PDF if action is selected
            }
            else {
              // Handle case where no valid data is available
              this.toastrService.error("No data available to generate PDF!", 'Error', environment.toastrConfig);
            }
          });
        }
      })
      .catch((error) => {
        // Handle any error in the API call
        console.error('Error in print API call:', error); // Log the error
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
      })
      .finally(() => {
        // Stop loading once the API call is finished
        this.loadService.loadingOff();
      });
  }
  // Method to generate PDF after data is processed
  async generatePDF(action: string, fromDate: string, toDate: string) {
    const transactions = this.pdfResult.Table;
    const ClubName = this.userProfileService.getClub_Name();
    const ClubAdd = this.userProfileService.getClub_Address();
    // Group transactions by Tran_Date
    const groupedByDate = transactions.reduce((acc: any, transaction: any) => {
      const tranDate = transaction.Tran_Date;
      if (!acc[tranDate]) acc[tranDate] = [];
      acc[tranDate].push(transaction);
      return acc;
    }, {});
    // Define reusable table headers
    const transactionHeader = [
      { text: "Date", bold: true, fontSize: 9 },
      { text: "Particulars", bold: true, fontSize: 9 },
      { text: "Amount", bold: true, fontSize: 9, alignment: 'right' }
    ];
    // Define a straight line using a table with a custom layout
    const horizontalLine = {
      table: {
        widths: ['100%'],
        body: [[{ text: '', border: [false, true, false, false] }]] // Top border only
      },
      layout: {
        hLineWidth: () => 1.5, // Bold line
        vLineWidth: () => 0, // No vertical lines
        hLineStyle: () => ({ dash: { length: 1, space: 2 } }) // Dotted style
      }
    };
    // Create PDF content with grouped transactions
    const transactionTables = Object.keys(groupedByDate).map(tranDate => {
      const transactionsForDate = groupedByDate[tranDate];
      const transactionRows = transactionsForDate.map((transaction: { Tran_Type: string; Recpt_No: string; Amt: number }) => [
        { text: transaction.Tran_Type, fontSize: 9 },
        { text: transaction.Recpt_No, fontSize: 9 },
        { text: transaction.Amt.toFixed(2), fontSize: 9, alignment: 'right' }
      ]);
      return {
        table: {
          headerRows: 1, // This ensures the first row will repeat on every page
          widths: ['50%', '30%', '20%'],
          body: [
            transactionHeader,
            [{ text: tranDate, bold: true, fontSize: 9 }, { text: "", fontSize: 9 }, { text: "", fontSize: 9 }],
            ...transactionRows
          ]
        },
        layout: 'noBorders'
      };
    });
    // Calculate the total amount for all transactions
    const closingBalance = transactions.reduce((total: number, transaction: any) => {
      return total + parseFloat(transaction.Amt || '0');
    }, 0);
    // Outer table with borders
    const content = [
      {
        table: {
          headerRows: 3, // This ensures the first row will repeat on every page
          widths: ['100%'],
          body: [
            [{ text: ClubName, bold: true, fontSize: 12, alignment: 'center' }],
            [{ text: ClubAdd, fontSize: 10, alignment: 'center' }],
          ]
        },
        layout: 'noBorders'
      },
      horizontalLine, // Horizontal line after phone number
      {
        table: {
          headerRows: 4, // This ensures the first row will repeat on every page
          widths: ['100%'],
          body: [
            [{ text: `Card Balance Mini Statement From ${fromDate} to ${toDate}`, fontSize: 10, alignment: 'center' }],
            [horizontalLine], // Horizontal line after member details
            [{ text: `Member Code : ${transactions[0].Mem_Code}`, fontSize: 10, alignment: 'center' }],
            [{ text: `Member Name : ${transactions[0].Mem_Name}`, fontSize: 10, alignment: 'center' }],
          ]
        },
        layout: 'noBorders'
      },
      horizontalLine, // Horizontal line after member details
      ...transactionTables.map(table => [table, horizontalLine]), // Horizontal line after each transaction header
      // Add Closing Balance row at the end
      {
        table: {
          widths: ['50%', '30%', '20%'],
          body: [
            [{ text: "Closing Balance", bold: true, fontSize: 9 }, { text: "", fontSize: 9 }, { text: closingBalance.toFixed(2), bold: true, fontSize: 9,alignment: 'right' }]
          ]
        },
        layout: 'noBorders'
      }
    ];
    // Add the content to an outer bordered table
    const outerTable = {
      table: {
        widths: ['100%'],
        body: [[{ stack: content }]] // Nest the content inside the outer table
      },
      layout: {
        hLineWidth: (i: any, node: any) => 1.5, // Horizontal border width
        vLineWidth: (i: any, node: any) => 1.5, // Vertical border width
        hLineStyle: (i: any, node: any) => ({ dash: { length: 1, space: 0 } }), // Solid lines
        vLineStyle: (i: any, node: any) => ({ dash: { length: 1, space: 0 } }), // Solid lines
        paddingLeft: () => 8,
        paddingRight: () => 8,
        paddingTop: () => 4,
        paddingBottom: () => 4
      }
    };
    const docDefinition = {
      pageSize: 'A5',
      pageOrientation: 'portrait',
      fontFamily: 'Times New Roman',
      pageMargins: [12, 10, 12, 30],
      info: { title: 'Card Balance Mini Statement' },
      content: [outerTable], // Outer table with borders
      footer: (currentPage: number, pageCount: number) => ({
        fontSize: 6,
        table: {
          widths: ['40%', '30%', '30%'],
          body: [
            [
              { text: `Date: ${moment().format('DD/MM/YYYY')}`, margin: [10, 0, 0, 0] },
              '',
              { text: `Page ${currentPage} of ${pageCount}`, alignment: 'right', margin: [0, 0, 10, 0] }
            ],
            [
              { text: `Time: ${moment().format('hh:mm:ss A')}`, margin: [10, 0, 0, 0] },
              '',
              ''
            ]
          ]
        },
        layout: 'noBorders'
      })
    };
    // Handle PDF actions
    switch (action) {
      case 'download':
        pdfMake.createPdf(docDefinition).download('Card_Balance_Statement.pdf');
        break;
      case 'print':
        pdfMake.createPdf(docDefinition).print();
        break;
      case 'open':
        pdfMake.createPdf(docDefinition).open();
        break;
      default:
        console.error(`Unsupported action: ${action}`);
        this.toastrService.error('Unsupported action for PDF generation!', 'Error', environment.toastrConfig);
        break;
    }
  }
}
