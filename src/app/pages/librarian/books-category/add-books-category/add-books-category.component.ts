import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  FormArray,
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
import {
  MasterAddCategoryGetById,
  IAddManageBooksFormPayload,
  IManageBooksCreateResponse,
  IEditManageBooksFormPayload,
  IAddMasterAddCategoryFormPayload,
  IMasterAddCategoryCreateResponse,
} from '../../interface/librarian-interface';
import { ViewBookImageComponent } from '../../manage-bboks/add-manage-books/view-book-image/view-book-image.component';
import { LibrarianService } from '../../service/librarian.service';
@Component({
  selector: 'app-add-books-category',
  standalone: false,
  templateUrl: './add-books-category.component.html',
  styleUrl: './add-books-category.component.scss',
})
export class AddBooksCategoryComponent {
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
    public dialogRef: MatDialogRef<AddBooksCategoryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { form: MasterAddCategoryGetById; additionalData: any },
    private fb: FormBuilder,
    private LibrarianService: LibrarianService,
    private toastrService: ToastrService,
    private userProfileService: UserProfileService,
    private snackBar: MatSnackBar,
    private commonService: CommonService,
    private loadService: LoadingService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.callGetAll = false;
    this.editManageNewBooksFormInitialize();
    this.editManageNewBooksInfo.patchValue(this.data.form);
    this.editManageNewBooksInfo.patchValue({
      addBy: this.userProfileService.getUserId(),
    }); //patch with update
      this.editManageNewBooksInfo.get('ebookCode')?.disable();
    if (this.data.additionalData == 'VIEW') {
      this.triggerView = true;
      this.editManageNewBooksInfo.disable() 
    }
  }
  editManageNewBooksFormInitialize() {
    this.editManageNewBooksInfo = this.fb.group({
      catEBookId: [0],
      ebookCode: [''],
      ebookCatName: [''],
      activate: [''],
      addBy: [0],
    });
  }
  // get addImage(): FormArray {
  //   return this.editManageNewBooksInfo.get('addImage') as FormArray;
  // }
  // addFileToForm() {
  //   if (!this.slectedDocument) {
  //     this.snackBar.open('⚠️ Please select a file first!', 'Dismiss', {
  //       duration: 3000,
  //       horizontalPosition: 'right',
  //       verticalPosition: 'top',
  //     });
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.readAsDataURL(this.slectedDocument); // Convert file to Base64
  //   reader.onload = () => {
  //     const newRow = this.fb.group({
  //       eBookSlno: [this.addImage.controls.length + 1], // Auto-increment SL No
  //       ebookCode: ['BOOK-' + (this.addImage.controls.length + 1)], // Dummy book code
  //       ebookCatName: [reader.result], // Store Base64 image URL
  //     });
  //     this.addImage.push(newRow); // ✅ Add to FormArray
  //     // ✅ Use `.next()` to update BehaviorSubject
  //     this.detailDataSource.next(this.addImage.controls);
  //     this.snackBar.open('✅ File added successfully!', 'Dismiss', {
  //       duration: 3000,
  //       horizontalPosition: 'right',
  //       verticalPosition: 'top',
  //     });
  //     // Clear file input
  //     (document.getElementById('formFileSm') as HTMLInputElement).value = '';
  //     this.slectedDocument = null;
  //   };
  // }
  // removeImage(index: number) {
  //   this.addImage.removeAt(index); // Remove the row
  //   // ✅ Use `.next()` to update BehaviorSubject
  //   this.detailDataSource.next(this.addImage.controls);
  // }
  // openImageDialog(imageUrl: string): void {
  //   this.dialog.open(ViewBookImageComponent, {
  //     data: { imageUrl },
  //     width: '80vw', // Adjust width
  //     maxHeight: '90vh', // Limit height
  //   });
  // }
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
  public onSubmit(): void {
    this.formValue = this.editManageNewBooksInfo.getRawValue();
    this.formValue.addBy = this.userProfileService.getUserId();
    // this.formValue.editBy = this.userProfileService.getUserId()
    // this.formValue.unitId = this.userProfileService.getUnitId()
    // this.formValue.companyCode = '02'
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {
      // ebookCode: 'Category Code',
      ebookCatName: 'Category Name',
    };
    // Define an array of specific fields you want to validate
    const fieldsToValidate = Object.keys(fieldNames);
    // Iterate over each field in formValue and validate only specific fields
    for (let key of fieldsToValidate) {
      // Check if the value of the field is only whitespace
      if (this.isWhitespace(this.formValue[key])) {
        // Handle the case where a field contains only spaces (whitespace)
        alert(
          `'${fieldNames[key]}' field contains only whitespace characters.`
        );
        return;
        // You can choose to return false, throw an error, or handle it differently based on your requirements
      }
    }
    const CategoryAddFormPayload: IAddMasterAddCategoryFormPayload =
      this.formValue;
    const CategoryAddResponse = this.LibrarianService.addCategoryForService(
      CategoryAddFormPayload
    );
    lastValueFrom(CategoryAddResponse)
      .then((addResponse: IMasterAddCategoryCreateResponse) => {
        if (addResponse.status === 'success') {
          this.callGetAll = true;
          this.hideModal();
          if (this.editManageNewBooksInfo.controls['catEBookId'].value == 0) {
            this.toastrService.success(
              addResponse.message,
              'Success',
              environment.toastrConfig
            );
          } else {
            this.toastrService.success(
              addResponse.message,
              'Success',
              environment.toastrConfig
            );
          }
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
