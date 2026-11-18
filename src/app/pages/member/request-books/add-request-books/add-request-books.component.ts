import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LibrarianService } from '../../../librarian/service/librarian.service';
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
import { BookCodeSearchHelperComponent } from '../../../all-helpers/book-code-search-helper/book-code-search-helper.component';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { MemberService } from '../../member.service';
import {
  IAddReqBookFormPayload,
  IEditReqBookFormPayload,
} from '../../member-interface';
import { UtilService } from '../../../../core/services/util.service';
@Component({
  selector: 'app-add-request-books',
  standalone: false,
  templateUrl: './add-request-books.component.html',
  styleUrl: './add-request-books.component.scss',
})
export class AddRequestBooksComponent {
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
  ebookCategories: any[] = []; // Store the categories dynamically
  // detailDataSource: BehaviorSubject<AbstractControl<any, any>[]> = new BehaviorSubject<AbstractControl<any, any>[]>([]);
  detailDataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayedColumns: string[] = ['slNo', 'bookCode', 'view', 'edit', 'remove'];
  formValue: any;
  constructor(
    public dialogRef: MatDialogRef<AddRequestBooksComponent>,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(MAT_DIALOG_DATA) public data: { form: any; additionalData: any },
    private fb: FormBuilder,
    private MemberService: MemberService,
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
    }); //patch with update
    this.GetHelpConfigEbooks();
    if (this.data.additionalData == 'VIEW') {
      this.triggerView = true;
      this.editrequestBooksInfo.disable(); 
    }
    this.editrequestBooksInfo.get('categoryId')?.valueChanges.subscribe(() => {
      this.resetBookFields();
    });
    this.editrequestBooksInfo.patchValue({
      studentId: this.userProfileService.getUserId(),
    }); //patch with update
  }
  editrequestBooksFormInitialize() {
    this.editrequestBooksInfo = this.fb.group({
      categoryId: [0],
      bookId: [0],
      mastBookCode: [''],
      mastBookName: [''],
      mastBookAuthPubName: [''],
      mastBookDescription: [''],  
      reqBookId: [0],
      requestDt: [''],
      currentDueDt: [''],
      reqStatus: ['P'],
      renewalStatus: [''],
      extentedDays: [''],
      remarks: [''],
      activate: [''],
      studentId: [0],
      addTime: [''],
      editTime: [''],
      editBy: [''],
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
          (ItemEmp: { bookCode: string}) =>
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
    var datePipe = new DatePipe('en-US');
    const currentDate = new Date();
    const requestDt = datePipe.transform(currentDate, 'dd-MM-yyyy');
    //  const currentDueDt = this.editrequestBooksInfo.controls['currentDueDt'].value;
    this.formValue = Object.assign({}, this.formValue, {
      requestDt: requestDt ? this.util.dateApptoDB(requestDt as string) : null,
      // currentDueDt: currentDueDt ? this.util.dateApptoDB(currentDueDt as string) : null,
    });
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {
      code: 'Code',
      desc: 'Description',
    };
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
    const fieldNamesValidZero: { [key: string]: string } = {
      code: 'Code',
      desc: 'Description',
    };
    const fieldsToValidateZero = Object.keys(fieldNamesValidZero);
    for (let key of fieldsToValidateZero) {
      // Check if the value of the field is only 0
      if (this.formValue[key] === 0 || this.formValue[key] === '0') {
        alert(`Please give a valid value in '${fieldNamesValidZero[key]}'`);
        return;
      }
    }
    if (this.editrequestBooksInfo.controls['reqBookId'].value == 0) {
      this.loadService.loadingOn();
      const DepartmentAddPayload: IAddReqBookFormPayload = this.formValue;
      const DepartmentAddResponse =
        this.MemberService.addReqBookFadata(DepartmentAddPayload);
      lastValueFrom(DepartmentAddResponse)
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
    } else {
      this.loadService.loadingOn();
      const DepartmentEditPayload: IEditReqBookFormPayload = this.formValue;
      const DepartmentEditResponse = this.MemberService.editReqBookFadata(
        DepartmentEditPayload,
      );
      lastValueFrom(DepartmentEditResponse)
        .then((editResponse: any) => {
          if (editResponse.status === 'success') {
            this.callGetAll = true;
            this.isAddMode = true;
            this.hideModal();
            this.toastrService.success(
              'Updated Successfully',
              'Success',
              environment.toastrConfig,
            );
          } else if (editResponse.status === 'error') {
            this.toastrService.error(
              editResponse.message,
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
