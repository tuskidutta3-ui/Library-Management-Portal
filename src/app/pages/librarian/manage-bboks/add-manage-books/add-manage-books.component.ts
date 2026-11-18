  import { Component, Inject } from '@angular/core';
  import {
    FormGroup,
    FormBuilder,
    AbstractControl,
    FormArray,
  } from '@angular/forms';
  import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
  } from '@angular/material/dialog';
  import { UserProfileService } from '../../../../core/services/get-user-profile.service';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { BehaviorSubject, lastValueFrom } from 'rxjs';
  import { ViewBookImageComponent } from './view-book-image/view-book-image.component';
  import { CommonService } from '../../../../core/services/common.service';
  import { LibrarianService } from '../../service/librarian.service';
  import { ToastrService } from 'ngx-toastr';
  import { environment } from '../../../../../environments/environment';
  import { LoadingService } from '../../../../core/services/loading.service';
  import {
    ManageBooksGetById,
    IAddManageBooksFormPayload,
    IManageBooksCreateResponse,
    IEditManageBooksFormPayload,
  } from '../../interface/librarian-interface';
  @Component({
    selector: 'app-add-manage-books',
    standalone: false,
    templateUrl: './add-manage-books.component.html',
    styleUrl: './add-manage-books.component.scss',
  })
  export class AddManageBooksComponent {
    public editManageNewBooksInfo!: FormGroup;
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
      public dialogRef: MatDialogRef<AddManageBooksComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data: { form: ManageBooksGetById; additionalData: any },
      private fb: FormBuilder,
      private LibrarianService: LibrarianService,
      private toastrService: ToastrService,
      private userProfileService: UserProfileService,
      private snackBar: MatSnackBar,
      private commonService: CommonService,
      private loadService: LoadingService,
      public dialog: MatDialog,
    ) {}
    ngOnInit(): void {
      this.callGetAll = false;
      this.editManageNewBooksFormInitialize();
      this.editManageNewBooksInfo.patchValue(this.data.form);
      this.editManageNewBooksInfo.patchValue({
        addBy: this.userProfileService.getUserId(),
      }); //patch with update
      this.GetHelpConfigEbooks();
      this.editManageNewBooksInfo.get('mastBookCode')?.disable();
      if (this.data.additionalData == 'EDIT') {
        this.editManageNewBooksInfo.get('catEBookId')?.disable();
      }
      if (this.data.additionalData == 'VIEW') {
        this.triggerView = true;
        this.editManageNewBooksInfo.disable();
      }
    }
    editManageNewBooksFormInitialize() {
      this.editManageNewBooksInfo = this.fb.group({
        masterBookId: [0],
        mastBookDescription: [''],
        mastBookName: [''],
        mastBookAuthPubName: [''],
        activate: ['A'],
        mastBookCode: [''],
        catEBookId: [0],
        ebookCatName: [''],
        eBookSlno: [0],
        ebookCode: ['0'],
        addBy: [0],
      });
    }
    get addImage(): FormArray {
      return this.editManageNewBooksInfo.get('addImage') as FormArray;
    }
    addFileToForm() {
      if (!this.slectedDocument) {
        this.snackBar.open('⚠️ Please select a file first!', 'Dismiss', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.slectedDocument); // Convert file to Base64
      reader.onload = () => {
        const newRow = this.fb.group({
          eBookSlno: [this.addImage.controls.length + 1], // Auto-increment SL No
          ebookCode: ['BOOK-' + (this.addImage.controls.length + 1)], // Dummy book code
          ebookCatName: [reader.result], // Store Base64 image URL
        });
        this.addImage.push(newRow); // ✅ Add to FormArray
        // ✅ Use `.next()` to update BehaviorSubject
        this.detailDataSource.next(this.addImage.controls);
        this.snackBar.open('✅ File added successfully!', 'Dismiss', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
        // Clear file input
        (document.getElementById('formFileSm') as HTMLInputElement).value = '';
        this.slectedDocument = null;
      };
    }
    removeImage(index: number) {
      this.addImage.removeAt(index); // Remove the row
      // ✅ Use `.next()` to update BehaviorSubject
      this.detailDataSource.next(this.addImage.controls);
    }
    openImageDialog(imageUrl: string): void {
      this.dialog.open(ViewBookImageComponent, {
        data: { imageUrl },
        width: '80vw', // Adjust width
        maxHeight: '90vh', // Limit height
      });
    }
    public hideModal(): void {
      this.isAddMode = false;
      this.editManageNewBooksFormInitialize();
      this.dialogRef.close(this.callGetAll);
    }
    public isFieldInvalid(controlName: string): boolean | null {
      return (
        this.editManageNewBooksInfo.get(controlName)!.invalid &&
        this.editManageNewBooksInfo.get(controlName)!.dirty &&
        this.editManageNewBooksInfo.get(controlName)!.touched
      );
    }
    isWhitespace(str: any) {
      return /^\s*$/.test(str);
    }
    // formatCode() {
    //   let value = this.editManageNewBooksInfo.get('code')?.value;
    //   // Convert to number to remove leading zeros, then format back to 7-digit string
    //   if (value) {
    //     value = Number(value).toString().padStart(7, '0');
    //     this.editManageNewBooksInfo.get('code')?.setValue(value, { emitEvent: false });
    //   }
    // }
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
    selectFiles(event: any): void {
      const fileInput = event.target; // Get the file input element
      this.selectedFiles = fileInput.files; // Get selected files
      this.fileSizeError = false; // Reset error flag
      if (this.selectedFiles?.length > 0) {
        const file = this.selectedFiles[0]; // Get the first file
        // Validate file size (3 MB = 3 * 1024 * 1024 bytes)
        if (file.size > 2 * 1024 * 1024) {
          this.fileSizeError = true; // Set error flag
          this.slectedDocument = null; // Clear selected document
          // alert('File size exceeds 3 MB limit.');
          this.snackBar.open(
            '⚠️ File size exceeds 2 MB limit.Please select a smaller size!',
            'Dismiss',
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            },
          );
          // Clear the file input
          fileInput.value = ''; // Reset the input field
          return; // Exit the function
        } else {
          this.slectedDocument = file; // Store valid file
        }
      } else {
        this.slectedDocument = null; // Clear selected document
        alert('Please upload the Photo!');
        return;
      }
    }
    public onSubmit(): void {
      this.formValue = this.editManageNewBooksInfo.getRawValue();
      // Define an object mapping field names to formControlNames
      const fieldNames: { [key: string]: string } = {
        mastBookName: 'Book Name',
        mastBookAuthPubName: 'Publishere/Author Name',
        mastBookDescription: 'Description',
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
      const fieldNamesValidZero: { [key: string]: string } = {};
      const fieldsToValidateZero = Object.keys(fieldNamesValidZero);
      for (let key of fieldsToValidateZero) {
        // Check if the value of the field is only 0
        if (this.formValue[key] === 0 || this.formValue[key] === '0') {
          alert(`Please give a valid value in '${fieldNamesValidZero[key]}'`);
          return;
        }
      }
      if (this.editManageNewBooksInfo.controls['masterBookId'].value == 0) {
        this.loadService.loadingOn();
        const DepartmentAddPayload: IAddManageBooksFormPayload = this.formValue;
        const DepartmentAddResponse =
          this.LibrarianService.addManageBooksData(DepartmentAddPayload);
        lastValueFrom(DepartmentAddResponse)
          .then((addResponse: IManageBooksCreateResponse) => {
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
        const DepartmentEditPayload: IEditManageBooksFormPayload = this.formValue;
        const DepartmentEditResponse = this.LibrarianService.editManageBooksData(
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
