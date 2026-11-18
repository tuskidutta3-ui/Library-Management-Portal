import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IResetResponse } from '../../../core/models/interface/auth.interfaces';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { SharedService } from '../../../core/services/shared.service';
import { HomeShareService } from '../../../core/services/home-share.service';
@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  public resetPassForm!: FormGroup;
  private readonly apiErrorMessage = 'Request failed to execute';
  hide1 = true;
  hide = true;
  showOldPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  passwordStrength: number = 0;
  passwordStrengthClass: string = '';
  passwordStrengthMessage: string = '';
  formValue: any;
  // Lazily inject the services
  private fb = inject(FormBuilder);
  private userProfileService = inject(UserProfileService);
  private readonly sharedService = inject(SharedService);
  private authStoreService = inject(AuthStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toastrService = inject(ToastrService);
  public homeservice = inject(HomeShareService);
  constructor() {}
  ngOnInit(): void {
    this.resetPasswordForm();
    this.resetPassForm.controls['userCode'].setValue(
      this.userProfileService.getUserCode()
    );
    // this.resetPassForm.controls['userId'].setValue(parseInt(this.userProfileService.getUserId()))
  }
  private resetPasswordForm(): void {
    this.resetPassForm = this.fb.group(
      {
        userCode: [''],
        userPw: ['', [Validators.required]],
        newPw: ['', [Validators.required]],
        confrmPw: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }
  goBack(): void {
    this.homeservice.isHeroVisible = true; // Show hero section
    this.router
      .navigate(['/app'], { queryParams: { showHero: true } })
      .then(() => {
        window.scrollTo(0, 0); // Scroll to the top
      });
  }
  togglOldPasswordVisibility() {
    this.showOldPassword = !this.showOldPassword;
  }
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  // Custom validator to check if password and confirmPassword are equal
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('newPw')?.value;
    const confirmPassword = control.get('confrmPw')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      control.get('confrmPw')?.setErrors({ notEqual: true });
      return { notEqual: true };
    }
    return null; // No error if passwords match
  }
  get f() {
    return this.resetPassForm.controls;
  }
  public isFieldInvalid(controlName: string): boolean | null {
    return (
      this.resetPassForm.get(controlName)!.invalid &&
      this.resetPassForm.get(controlName)!.dirty &&
      this.resetPassForm.get(controlName)!.touched
    );
  }
  calculatePasswordStrength() {
    const password = this.resetPassForm.get('newPw')?.value;
    let strength = 0;
    if (password) {
      // Criteria: Length, Uppercase, Lowercase, Numbers, Special Characters
      if (password.length >= 6) strength += 20;
      if (/[A-Z]/.test(password)) strength += 20;
      if (/[a-z]/.test(password)) strength += 20;
      if (/[0-9]/.test(password)) strength += 20;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 20;
      // Update the strength and message based on score
      this.passwordStrength = strength;
      if (strength < 40) {
        this.passwordStrengthClass = 'bg-danger';
        this.passwordStrengthMessage = 'Weak';
      } else if (strength < 70) {
        this.passwordStrengthClass = 'bg-warning';
        this.passwordStrengthMessage = 'Moderate';
      } else {
        this.passwordStrengthClass = 'bg-success';
        this.passwordStrengthMessage = 'Strong';
      }
    } else {
      // Clear the strength message and reset the strength when password is empty
      this.passwordStrengthClass = '';
      this.passwordStrengthMessage = '';
    }
  }
  isWhitespace(str: any) {
    return /^\s*$/.test(str);
  }
  resetForgotHandler(event: MouseEvent | KeyboardEvent): void {
    this.formValue = this.resetPassForm.getRawValue();
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {
      newPw: 'New Password',
      confrmPw: 'Confirm Password',
      userPw: 'Old Password',
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
    event.preventDefault();
    this.sharedService.showLoader();
    const payload = {
      ...this.resetPassForm.value,
    };
    const restPassword$ = lastValueFrom(
      this.authStoreService.resetPassword(payload)
    );
    restPassword$
      .then((response: any) => {
        if (response.status === 'success') {
          this.toastrService.success(
            'PassWord Changed successfully',
            'Success',
            environment.toastrConfig
          );
          this.router.navigate(['/auth/login']);
        } else if (response.status === 'error') {
          this.toastrService.error(
            response.message,
            'Error',
            environment.toastrConfig
          );
        } else {
          this.toastrService.error(
            this.apiErrorMessage,
            'Error',
            environment.toastrConfig
          );
        }
      })
      .catch(() => {
        this.toastrService.error(
          this.apiErrorMessage,
          'Error',
          environment.toastrConfig
        );
      })
      .finally(() => {
        this.sharedService.hideLoader();
      });
  }
}
