import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CommonService } from '../../../../core/services/common.service';
import { UserProfileService } from '../../../../core/services/get-user-profile.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { UtilService } from '../../../../core/services/util.service';
import { BookCodeSearchHelperComponent } from '../../../all-helpers/book-code-search-helper/book-code-search-helper.component';
import { ApproveRejectRequestComponent } from '../../Issue-books/approve-reject-request/approve-reject-request.component';
import { LibrarianService } from '../../service/librarian.service';
@Component({
  selector: 'app-add-pending-renewal-req',
  standalone: false, 
  templateUrl: './add-pending-renewal-req.component.html',
  styleUrl: './add-pending-renewal-req.component.scss'
})
export class AddPendingRenewalReqComponent {

  public editrequestBooksInfo!: FormGroup;
    public isAddMode = true;
    private readonly apiErrorMessage = 'Request failed to execute';
    callGetAll = false;
    triggerView: boolean = false;
    selectedFiles: FileList | any; // for file upload
    slectedDocument: File | null = null;
    fileSizeError: boolean = false;
    uploadEnabled: boolean = false;
    showUploadSection = false;
    showCancelRemarks = false;
    ebookCategories: any[] = []; // Store the categories dynamically
    // detailDataSource: BehaviorSubject<AbstractControl<any, any>[]> = new BehaviorSubject<AbstractControl<any, any>[]>([]);
    detailDataSource = new BehaviorSubject<AbstractControl[]>([]);
    displayedColumns: string[] = ['slNo', 'bookCode', 'view', 'edit', 'remove'];
    formValue: any;
    constructor(
      public dialogRef: MatDialogRef<AddPendingRenewalReqComponent>,
      @Inject(PLATFORM_ID) private platformId: Object,
      @Inject(MAT_DIALOG_DATA) public data: { form: any; additionalData: any },
      private fb: FormBuilder,
      private LibrarianService: LibrarianService,
      private toastrService: ToastrService,
      private userProfileService: UserProfileService,
      private snackBar: MatSnackBar,
      private commonService: CommonService,
      private loadService: LoadingService,
      private util: UtilService,
      public dialog: MatDialog,
    ) {}
  ngOnInit(): void {
    this.callGetAll = false;
    this.editrequestBooksFormInitialize();
    this.editrequestBooksInfo.patchValue(this.data.form); 
    this.editrequestBooksInfo.patchValue({
      addBy: this.userProfileService.getUserId(), 
    });
  }
 
    editrequestBooksFormInitialize() {
      this.editrequestBooksInfo = this.fb.group({
        reqBookId: [0],
        studentId: [0],
        userName: [''],
        categoryId: [0],
        ebookCode: [''],
        ebookCatName: [''],
        currentDueDt: [''],
        bookId: [0],
        mastBookCode: [''],
        mastBookName: [''],
        mastBookAuthPubName: [''],
        mastBookDescription: [''],
        adminRenewReqStatus: ['A'],
        adminRenewReqRemarks: [''],
        requestDt: [''],
        reqStatus: [''],
        activate: ['A'],
      });
    }
    public hideModal(): void {
      this.isAddMode = false;
      this.editrequestBooksFormInitialize();
      this.dialogRef.close(this.callGetAll);
    }
    public isFieldInvalid(controlName: string): boolean | null {
      return (
        this.editrequestBooksInfo.get(controlName)!.invalid &&
        this.editrequestBooksInfo.get(controlName)!.dirty &&
        this.editrequestBooksInfo.get(controlName)!.touched
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
    resetBookFields() {
      this.editrequestBooksInfo.patchValue({
        bookId: null,
        mastBookCode: '',
        mastBookName: '',
        mastBookAuthPubName: '',
        mastBookDescription: '',
      });
    }
    
    public onSubmit(): void {
      this.formValue = this.editrequestBooksInfo.getRawValue();
      const adminRenewReqStatus =
        this.editrequestBooksInfo.controls['adminRenewReqStatus'].value;
      const adminRenewReqRemarks = this.editrequestBooksInfo.controls['adminRenewReqRemarks'].value;
      if (adminRenewReqStatus === 'R' && (!adminRenewReqRemarks || adminRenewReqRemarks.trim() === '')) {
    this.toastrService.warning(
      'Please write the Remarks',
      'Validation',
      environment.toastrConfig
    );
    return;
  }
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
      if (this.editrequestBooksInfo.controls['reqBookId'].value != 0) {
        this.loadService.loadingOn();
        const AddPayload: any = this.formValue;
        const AddResponse =
          this.LibrarianService.AdminPendingRenewalRequestCommand(AddPayload);
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
  
}
