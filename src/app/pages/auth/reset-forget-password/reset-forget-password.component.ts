import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IResetForgotPassResponse } from '../../../core/models/interface/auth.interfaces';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { SharedService } from '../../../core/services/shared.service';
import { MemberAuthStoreService } from '../../../core/services/member-auth.store.service';
@Component({
  selector: 'app-reset-forget-password',
  standalone: false,
  templateUrl: './reset-forget-password.component.html',
  styleUrl: './reset-forget-password.component.scss'
})
export class ResetForgetPasswordComponent {
  public resetForgotPassForm!: FormGroup;
  private readonly apiErrorMessage = 'Request failed to execute';
  hide1 = true
  hide = true
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
  private MemberAuthStoreService = inject(MemberAuthStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toastrService = inject(ToastrService);
  constructor() { }
  ngOnInit(): void {
    this.resetPasswordForm()
    // this.resetForgotPassForm.controls['userId'].setValue(parseInt(this.userProfileService.getUserId()))
  }
  private resetPasswordForm(): void {
    this.resetForgotPassForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator }
    )
  }
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  // Custom validator to check if password and confirmPassword are equal
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ notEqual: true });
      return { notEqual: true };
    }
    return null;  // No error if passwords match
  }
  get f() {
    return this.resetForgotPassForm.controls;
  }
  public isFieldInvalid(controlName: string): boolean | null {
    return this.resetForgotPassForm.get(controlName)!.invalid && this.resetForgotPassForm.get(controlName)!.dirty && this.resetForgotPassForm.get(controlName)!.touched;
  }
  calculatePasswordStrength() {
    const password = this.resetForgotPassForm.get('password')?.value;
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
    this.formValue = this.resetForgotPassForm.getRawValue();
    // Define an object mapping field names to formControlNames
    const fieldNames: { [key: string]: string } = {
      password: 'New Password',
      confirmPassword: 'Confirm Password',
    };
    // Define an array of specific fields you want to validate
    const fieldsToValidate = Object.keys(fieldNames);
    // Iterate over each field in formValue and validate only specific fields
    for (let key of fieldsToValidate) {
      // Check if the value of the field is only whitespace
      if (this.isWhitespace(this.formValue[key])) {
        // Handle the case where a field contains only spaces (whitespace)
        alert(`'${fieldNames[key]}' field contains only whitespace characters.`);
        return;
        // You can choose to return false, throw an error, or handle it differently based on your requirements
      }
    }
    event.preventDefault();
    this.sharedService.showLoader();
    const payload = {
      ...this.resetForgotPassForm.value,
      token: this.route.snapshot.params['token'],
    }
    const restPassword$ = lastValueFrom(this.MemberAuthStoreService.ResetForgotPassword(payload));
    restPassword$
      .then((response: IResetForgotPassResponse) => {
        if (response.status === 'success') {
          this.toastrService.success('PassWord Reset successfully', 'Success', environment.toastrConfig);
          this.router.navigate(['/auth/login']);
        }
        else if (response.status === 'error') {
          this.toastrService.error(response.message, 'Error', environment.toastrConfig);
        }
        else {
          this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
        }
      }
      )
      .catch(() => {
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
      })
      .finally(() => {
        this.sharedService.hideLoader();
      })
  }
}
