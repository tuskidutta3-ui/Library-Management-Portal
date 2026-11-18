import { isPlatformBrowser, DatePipe } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
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
import { UtilService } from '../../../../core/services/util.service';
import { BookCodeSearchHelperComponent } from '../../../all-helpers/book-code-search-helper/book-code-search-helper.component';
import {
  IAddReqBookFormPayload,
  IEditReqBookFormPayload,
} from '../../../member/member-interface';
import { MemberService } from '../../../member/member.service';
import { LibrarianService } from '../../service/librarian.service';
@Component({
  selector: 'app-approve-reject-request',
  standalone: false,
  templateUrl: './approve-reject-request.component.html',
  styleUrl: './approve-reject-request.component.scss',
})
export class ApproveRejectRequestComponent {
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
    public dialogRef: MatDialogRef<ApproveRejectRequestComponent>,
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
  // First, disable controls BEFORE patching if needed
  this.editrequestBooksInfo.controls['categoryId'].disable();
  this.editrequestBooksInfo.controls['mastBookCode'].disable();
  this.editrequestBooksInfo.controls['mastBookName'].disable();
  this.editrequestBooksInfo.controls['mastBookAuthPubName'].disable();
  this.editrequestBooksInfo.controls['mastBookDescription'].disable();
  // Patch the data after disabling
  this.editrequestBooksInfo.patchValue(this.data.form);
  // Set up subscriptions AFTER patching values
  this.setupValueChangeSubscriptions();
  // Load categories
  this.GetHelpConfigEbooks();
  // Set userId
  this.editrequestBooksInfo.patchValue({
    addBy: this.userProfileService.getUserId(),
    studentId: this.userProfileService.getUserId(),
  });
}
private setupValueChangeSubscriptions(): void {
  this.editrequestBooksInfo.get('categoryId')?.valueChanges.subscribe(() => {
    this.resetBookFields();
  });
  this.editrequestBooksInfo
    .get('rejectApproveStatus')
    ?.valueChanges.subscribe((value) => {
      this.showCancelRemarks = value === 'R';
      const remarksCtrl = this.editrequestBooksInfo.get('remarks');
      if (value === 'R') {
        remarksCtrl?.setValidators([Validators.required]);
      } else {
        remarksCtrl?.clearValidators();
        remarksCtrl?.setValue('');
      }
      remarksCtrl?.updateValueAndValidity();
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
      rejectApproveStatus: ['A'],
      remarks: [''],
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
  BookCodeSearchBox() {
    const catId = this.editrequestBooksInfo.controls['categoryId'].value;
    if (!catId || catId == 0) {
      this.toastrService.warning('Please first select a category');
      return;
    }
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '100vw' : '70vw';
    const height = isMobile ? '80vh' : isIpadMini ? '70vh' : '85vh';
    let dialogRef = this.dialog.open(BookCodeSearchHelperComponent, {
      width: width,
      height: height,
      maxWidth: '100vw',
      disableClose: true,
      data: {
        categoryId: this.editrequestBooksInfo.controls['categoryId'].value,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result != false) {
        this.editrequestBooksInfo.controls['bookId'].setValue(result.id);
        this.editrequestBooksInfo.controls['mastBookCode'].setValue(
          result.bookCode,
        );
        this.editrequestBooksInfo.controls['mastBookName'].setValue(
          result.mastBookName,
        );
        this.editrequestBooksInfo.controls['mastBookAuthPubName'].setValue(
          result.mastBookAuthPubName,
        );
        this.editrequestBooksInfo.controls['mastBookDescription'].setValue(
          result.mastBookDescription,
        );
      }
    });
  }
  async BookCodeSuggestion() {
    const catId = this.editrequestBooksInfo.controls['categoryId'].value;
    if (!catId || catId == 0) {
      this.toastrService.warning('Please first select a category');
      this.editrequestBooksInfo.controls['mastBookCode'].setValue('');
      return;
    }
    const mastBookCode =
      this.editrequestBooksInfo.controls['mastBookCode'].value;
    if (!mastBookCode || mastBookCode.trim() === '') {
      return;
    }
    const memPlNoValue =
      this.editrequestBooksInfo.controls['mastBookCode'].value;
    console.log(memPlNoValue);
    if (memPlNoValue && memPlNoValue.trim() !== '') {
      const servicePayload = this.getAutoSuggestPayloadEmp(memPlNoValue);
      const response = await lastValueFrom(
        this.commonService.GetHelpBooks(servicePayload),
      );
      if (response.result && response.result.length > 0) {
        const matchedItemEmp = response.result.find(
          (ItemEmp: { bookCode: string }) =>
            ItemEmp.bookCode.trim().toLowerCase() ===
            memPlNoValue.trim().toLowerCase(),
        );
        if (matchedItemEmp) {
          this.editrequestBooksInfo.controls['bookId'].setValue(
            matchedItemEmp.id,
          );
          this.editrequestBooksInfo.controls['mastBookCode'].setValue(
            matchedItemEmp.bookCode,
          );
          this.editrequestBooksInfo.controls['mastBookName'].setValue(
            matchedItemEmp.mastBookName,
          );
          this.editrequestBooksInfo.controls['mastBookAuthPubName'].setValue(
            matchedItemEmp.mastBookAuthPubName,
          );
          this.editrequestBooksInfo.controls['mastBookDescription'].setValue(
            matchedItemEmp.mastBookDescription,
          );
        } else {
          this.clearEmpValues();
          this.editrequestBooksInfo.controls['mastBookCode'].setErrors({
            noMatch: true,
          });
        }
      } else {
        this.clearEmpValues();
        this.editrequestBooksInfo.controls['mastBookCode'].setErrors({
          noMatch: true,
        });
      }
    } else {
      this.clearEmpValues();
      this.editrequestBooksInfo.controls['mastBookCode'].setErrors({
        required: true,
      });
    }
  }
  private clearEmpValues() {
    this.editrequestBooksInfo.controls['bookId'].setValue(0);
    this.editrequestBooksInfo.controls['mastBookCode'].setValue('');
    this.editrequestBooksInfo.controls['mastBookName'].setValue('');
    this.editrequestBooksInfo.controls['mastBookAuthPubName'].setValue('');
    this.editrequestBooksInfo.controls['mastBookDescription'].setValue('');
  }
  /////////////////////////////////AutoSuggestion////////////////////////////
  private getAutoSuggestPayloadEmp(searchTerm: string): any {
    return {
      categoryId: this.editrequestBooksInfo.controls['categoryId'].value,
      recordStatus: '',
      pagingParameters: {
        pageNumber: 1,
        pageSize: 10,
      },
      searchString: searchTerm,
    };
  }
  public onSubmit(): void {
    this.formValue = this.editrequestBooksInfo.getRawValue();
    const rejectApproveStatus =
      this.editrequestBooksInfo.controls['rejectApproveStatus'].value;
    const remarks = this.editrequestBooksInfo.controls['remarks'].value;
    if (rejectApproveStatus === 'R' && (!remarks || remarks.trim() === '')) {
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
        this.LibrarianService.IssueBooksORejectCommand(AddPayload);
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
    // else {
    //   this.loadService.loadingOn();
    //   const DepartmentEditPayload: IEditReqBookFormPayload = this.formValue;
    //   const DepartmentEditResponse = this.LibrarianService.editReqBookFadata(
    //     DepartmentEditPayload,
    //   );
    //   lastValueFrom(DepartmentEditResponse)
    //     .then((editResponse: any) => {
    //       if (editResponse.status === 'success') {
    //         this.callGetAll = true;
    //         this.isAddMode = true;
    //         this.hideModal();
    //         this.toastrService.success(
    //           'Updated Successfully',
    //           'Success',
    //           environment.toastrConfig,
    //         );
    //       } else if (editResponse.status === 'error') {
    //         this.toastrService.error(
    //           editResponse.message,
    //           'error',
    //           environment.toastrConfig,
    //         );
    //       } else {
    //         this.toastrService.error(
    //           this.apiErrorMessage,
    //           'error',
    //           environment.toastrConfig,
    //         );
    //       }
    //     })
    //     .catch(() => {
    //       this.toastrService.error(
    //         this.apiErrorMessage,
    //         'error',
    //         environment.toastrConfig,
    //       );
    //     })
    //     .finally(() => {
    //       this.loadService.loadingOff();
    //     });
    // }
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
