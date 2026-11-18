import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserProfileService } from '../../../../core/services/get-user-profile.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { LibrarianService } from '../../service/librarian.service';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ManageMembersGetById } from '../../interface/librarian-interface';
@Component({
  selector: 'app-add-register-new-member',
  standalone: false,
  templateUrl: './add-register-new-member.component.html',
  styleUrl: './add-register-new-member.component.scss',
})
export class AddRegisterNewMemberComponent {
  public editManageNewBooksInfo!: FormGroup;
  public isAddMode = true;
  private readonly apiErrorMessage = 'Request failed to execute';
  callGetAll = false;
  triggerView: boolean = false;
  selectedFiles: FileList | any; // for file upload
  slectedDocument: File | null = null;
  fileSizeError: boolean = false;
  formValue: any;
  constructor(
    public dialogRef: MatDialogRef<AddRegisterNewMemberComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { form: ManageMembersGetById; additionalData: any },
    private fb: FormBuilder,
    // private coOperativeMasterService: CoOperativeMasterService,
    private toastrService: ToastrService,
    private userProfileService: UserProfileService,
    private snackBar: MatSnackBar,
    private LibrarianService: LibrarianService,
    // private commonService: CommonService,
    private loadService: LoadingService
  ) {}
  ngOnInit(): void {
    this.callGetAll = false;
    this.editManageNewBooksFormInitialize();
    this.editManageNewBooksInfo.patchValue(this.data.form);
    // this.editManageNewBooksInfo.patchValue({ addBy: this.userProfileService.getUserId() }); //patch with update
    // if (this.data.additionalData == 'EDIT') {
    //   this.editManageNewBooksInfo.get('code')?.disable()
    // }
    if (this.data.additionalData == 'VIEW') {
      this.triggerView = true;
      this.editManageNewBooksInfo.get('userName')?.disable();
      this.editManageNewBooksInfo.get('phoneNo')?.disable();
      this.editManageNewBooksInfo.get('userEmail')?.disable();
    }
  }
  editManageNewBooksFormInitialize() {
    this.editManageNewBooksInfo = this.fb.group({
      userName: [''],
      phoneNo: [''],
      userEmail: [''],
      userId: [0],
    });
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
  public hideModal(): void {
    this.isAddMode = false;
    this.editManageNewBooksFormInitialize();
    this.dialogRef.close(this.callGetAll);
  }
  isWhitespace(str: any) {
    return /^\s*$/.test(str);
  }
  public onSubmit(): void {
    this.formValue = this.editManageNewBooksInfo.getRawValue();
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {
      userName: 'Name',
      phoneNo: 'Phone No',
      userEmail: 'Email Id',
    };
    // Define an array of specific fields you want to validate
    const fieldsToValidate = Object.keys(fieldNames);
    // Iterate over each field in formValue and validate only specific fields
    for (let key of fieldsToValidate) {
      // Check if the value of the field is only whitespace
      if (this.isWhitespace(this.formValue[key])) {
        alert(
          `'${fieldNames[key]}' field contains only whitespace characters.`
        );
        return;
      }
    }
    // Define an object mapping field names to formControlNames
    const fieldNamesValidZero: { [key: string]: string } = {
      userName: 'Name',
      phoneNo: 'Phone No',
      userEmail: 'Email Id',
    };
    const fieldsToValidateZero = Object.keys(fieldNamesValidZero);
    for (let key of fieldsToValidateZero) {
      // Check if the value of the field is only 0
      if (this.formValue[key] === 0 || this.formValue[key] === '0') {
        alert(`Please give a valid value in '${fieldNamesValidZero[key]}'`);
        return;
      }
    }
    // MOVE API CALL OUTSIDE THE LOOP
    if (this.editManageNewBooksInfo.controls['userId'].value != 0) {
      this.loadService.loadingOn();
      const DepartmentAddPayload: any = this.formValue;
      const DepartmentAddResponse =
        this.LibrarianService.editMembersData(DepartmentAddPayload);
      lastValueFrom(DepartmentAddResponse)
        .then((addResponse: any) => {
          if (addResponse.status === 'success') {
            this.callGetAll = true;
            this.hideModal();
            this.toastrService.success(
              addResponse.message,
              'Success',
              environment.toastrConfig
            );
          } else if (addResponse.status === 'error') {
            this.toastrService.error(
              addResponse.message,
              'error',
              environment.toastrConfig
            );
          } else {
            this.toastrService.error(
              this.apiErrorMessage,
              'error',
              environment.toastrConfig
            );
          }
        })
        .catch(() => {
          this.toastrService.error(
            this.apiErrorMessage,
            'error',
            environment.toastrConfig
          );
        })
        .finally(() => {
          this.loadService.loadingOff();
        });
    }
  }
}
