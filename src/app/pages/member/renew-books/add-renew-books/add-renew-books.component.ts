import { Component, Inject } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CommonService } from '../../../../core/services/common.service';
import { UserProfileService } from '../../../../core/services/get-user-profile.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { IEditManageBooksFormPayload } from '../../../librarian/interface/librarian-interface';
import { AddRequestBooksComponent } from '../../request-books/add-request-books/add-request-books.component';
import { LibrarianService } from '../../../librarian/service/librarian.service';
import {
  NgbDate,
  NgbDateAdapter,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { CustomAdapter } from '../../../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../../../core/services/custom-date-parser-formatter.service';
import { MemberService } from '../../member.service';
import { DatePipe } from '@angular/common';
import { UtilService } from '../../../../core/services/util.service';
@Component({
  selector: 'app-add-renew-books',
  standalone: false,
  templateUrl: './add-renew-books.component.html',
  styleUrl: './add-renew-books.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class AddRenewBooksComponent {
  public editRenewBooksInfo!: FormGroup;
  public isAddMode = true;
  private readonly apiErrorMessage = 'Request failed to execute';
  callGetAll = false;
  triggerView: boolean = false;
  selectedFiles: FileList | any; // for file upload
  slectedDocument: File | null = null;
  fileSizeError: boolean = false;
  uploadEnabled: boolean = false;
  showUploadSection = false;
  minDate: any = NgbDate;
  maxDate: any = NgbDate;
  triggerViewEdit: boolean = false;
  ebookCategories: any[] = []; // Store the categories dynamically
  // detailDataSource: BehaviorSubject<AbstractControl<any, any>[]> = new BehaviorSubject<AbstractControl<any, any>[]>([]);
  detailDataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayedColumns: string[] = ['slNo', 'bookCode', 'view', 'edit', 'remove'];
  formValue: any;
  constructor(
    public dialogRef: MatDialogRef<AddRenewBooksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { form: any; additionalData: any },
    private fb: FormBuilder,
    private MemberService: MemberService,
    private toastrService: ToastrService,
    private userProfileService: UserProfileService,
    private snackBar: MatSnackBar,
    private commonService: CommonService,
    private loadService: LoadingService,
    public dialog: MatDialog,
    private util: UtilService,
  ) {}
  ngOnInit(): void {
    this.callGetAll = false;
    this.editRenewBooksFormInitialize();
    this.editRenewBooksInfo.patchValue(this.data.form);
    if (!this.editRenewBooksInfo.get('renewalStatus')?.value) {
      this.editRenewBooksInfo.patchValue({
        renewalStatus: 'A',
      });
    }
    this.editRenewBooksInfo.patchValue({
      addBy: this.userProfileService.getUserId(),
    }); //patch with update
    this.GetHelpConfigEbooks();
    if (this.data.additionalData == 'EDIT') {
      this.editRenewBooksInfo.get('code')?.disable();
      this.triggerViewEdit = true;
    }
    if (this.data.additionalData == 'VIEW') {
      this.triggerView = true;
      this.editRenewBooksInfo.get('code')?.disable();
      this.editRenewBooksInfo.get('desc')?.disable();
      this.triggerViewEdit = true;
    }
  }
  editRenewBooksFormInitialize() {
    this.editRenewBooksInfo = this.fb.group({
      reqBookId: [0],
      studentId: [0],
      userName: [''],
      extentedDays: [0],
      categoryId: [0],
      ebookCode: [''],
      ebookCatName: [''],
      currentDueDt: [''],
      bookId: [0],
      mastBookCode: [''],
      mastBookName: [''],
      mastBookAuthPubName: [''],
      mastBookDescription: [''],
      rejectApproveStatus: [''],
      renewalStatus: ['A'],
      remarks: [''],
      renewalRemarks: [''],
      requestDt: [''],
      reqStatus: [''],
      activate: ['A'],
    });
  }
  public hideModal(): void {
    this.isAddMode = false;
    this.editRenewBooksFormInitialize();
    this.dialogRef.close(this.callGetAll);
  }
  public isFieldInvalid(controlName: string): boolean | null {
    return (
      this.editRenewBooksInfo.get(controlName)!.invalid &&
      this.editRenewBooksInfo.get(controlName)!.dirty &&
      this.editRenewBooksInfo.get(controlName)!.touched
    );
  }
  isWhitespace(str: any) {
    return /^\s*$/.test(str);
  }
  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow decimal point (.)
    if (charCode === 46) {
      return true;
    }
    // Allow numbers 0-9
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onDateInput(event: any): void {
    const input = event.target.value.replace(/\D/g, '');
    // Get the control name from the 'formControlName' attribute
    const controlName = event.target.getAttribute('formControlName');
    if (!controlName) return;
    if (input.length === 8) {
      const day = +input.substring(0, 2);
      const month = +input.substring(2, 4);
      const year = +input.substring(4, 8);
      const date = new Date(year, month - 1, day);
      if (!isNaN(date.getTime())) {
        // Visually format the input value (e.g., dd/mm/yyyy)
        event.target.value = this.formatDate(date);
        const formattedDate = this.formatDate(date); // "01/02/2025"
        this.editRenewBooksInfo.get(controlName)?.setValue(formattedDate);
        event.target.value = formattedDate;
      } else {
        // Invalid date - clear value
        this.editRenewBooksInfo.get(controlName)?.setValue('');
        event.target.value = '';
      }
    }
  }
  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  MemberSuggestion() {}
  memberSearchBox() {}


  public onSubmit(): void {
    const extenddays = this.editRenewBooksInfo.controls['extentedDays'].value;
    if (extenddays == 0) {
      alert('Please select the Extended Days');
      return;
    }
    this.formValue = this.editRenewBooksInfo.getRawValue();
    console.log(this.formValue);
    // convert UI date → DB format
    this.formValue.currentDueDt = this.formValue.currentDueDt
      ? this.util.dateApptoDB(this.formValue.currentDueDt)
      : null;
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {};
    // Define an array of specific fields you want to validate
    const fieldsToValidate = Object.keys(fieldNames);
    // Iterate over each field in formValue and validate only specific fields
    for (let key of fieldsToValidate) {
      // Check if the value of the field is only whitespace
      if (this.isWhitespace(this.formValue[key])) {
        // Handle the case where a field contains only spaces (whitespace)
        alert(
          `'${fieldNames[key]}' field contains only whitespace characters.`,
        );
        return;
        // You can choose to return false, throw an error, or handle it differently based on your requirements
      }
    }
    // Define an object mapping field names to formControlNames
    const fieldNamesValidZero: { [key: string]: string } = {};
    const fieldsToValidateZero = Object.keys(fieldNamesValidZero);
    for (let key of fieldsToValidateZero) {
      // Check if the value of the field is only 0
      if (this.formValue[key] === 0 || this.formValue[key] === '0') {
        alert(`Please give a valid value in '${fieldNamesValidZero[key]}'`);
        return;
      }
    }
    if (this.editRenewBooksInfo.controls['reqBookId'].value != 0) {
      this.loadService.loadingOn();
      const AddPayload: any = this.formValue;
      const AddResponse = this.MemberService.addRenewBookReqadata(AddPayload);
      lastValueFrom(AddResponse)
        .then((addResponse: any) => {
          if (addResponse.status === 'success') {
            this.callGetAll = true;
            this.hideModal();
            this.toastrService.success(
              'Added Successfully',
              'Success',
              environment.toastrConfig,
            );
          } else if (addResponse.status === 'error') {
            this.toastrService.error(
              addResponse.message,
              'error',
              environment.toastrConfig,
            );
          } else {
            this.toastrService.error(
              this.apiErrorMessage,
              'error',
              environment.toastrConfig,
            );
          }
        })
        .catch(() => {
          this.toastrService.error(
            this.apiErrorMessage,
            'error',
            environment.toastrConfig,
          );
        })
        .finally(() => {
          this.loadService.loadingOff();
        });
    }
  }
  public GetHelpConfigEbooks(): void {
    const gridRecords$ = lastValueFrom(
      this.commonService.GetHelpConfigEbooks({}),
    );
    gridRecords$.then((response) => {
      this.ebookCategories =
        'success' === response.status ? response.result : [];
    });
  }
}
