import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { SharedService } from '../../../core/services/shared.service';
import { MemberAuthStoreService } from '../../../core/services/member-auth.store.service';
@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  public forgotPassForm!: FormGroup;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  private fb = inject(FormBuilder);
  private readonly sharedService = inject(SharedService);
  private MemberAuthStoreService = inject(MemberAuthStoreService);
  private router = inject(Router);
  private toastrService = inject(ToastrService);
  constructor() { }
  ngOnInit(): void {
    this.forgotPasswordForm();
  }
  ngAfterViewInit() {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;  // Explicitly set the muted property to true
    }
  }
  private forgotPasswordForm(): void {
    this.forgotPassForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  public isFieldInvalid(controlName: string): boolean | null {
    return this.forgotPassForm.get(controlName)!.invalid && this.forgotPassForm.get(controlName)!.dirty && this.forgotPassForm.get(controlName)!.touched;
  }
  forgotPassHandler() {
    this.sharedService.showLoader();
    const forgotPassword$ = lastValueFrom(this.MemberAuthStoreService.ForgotPassword(this.forgotPassForm.value));
    forgotPassword$
      .then((response: any) => {
        if (response.status === 'success') {
          this.toastrService.success(response.message, 'Success', environment.toastrConfig);
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
