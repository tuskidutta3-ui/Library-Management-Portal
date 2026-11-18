import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HomeShareService } from '../../../core/services/home-share.service';
import { LoadingService } from '../../../core/services/loading.service';
import { TermsAndConditionComponent } from '../terms-and-condition/terms-and-condition.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsernamePatternDialogueComponent } from './username-pattern-dialogue/username-pattern-dialogue.component';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { default as Swal } from 'sweetalert2';
import {
  INewRegPayload,
  INewRegResponse,
} from '../../../core/models/interface/auth.interfaces';
// // Define interfaces locally to avoid conflicts
// interface INewRegPayload {
//   userName: string;
//   phoneNo: string;
//   userEmail: string;
//   userGrpId: number;
//   userId: number;
//   password: string;
//   userPw: string;
//   userType: string;
// }
// interface INewRegResponse {
//   statusCode: string;
//   status: string;
//   result: string;      // Change this from object to string
//   message: string;
//   pagingDetails: any;
// }
@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.scss'],
})
export class NewRegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  private readonly apiErrorMessage = 'Request failed to execute';
  callGetAll = false;
  public isAddMode = true;
  isLibrarian: boolean = false;
  isLoading = false;
  showPattern: boolean = false;
  formValue: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public homeservice: HomeShareService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private AuthStoreService: AuthStoreService,
    private dialog: MatDialog,
    private loadService: LoadingService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.callGetAll = false;
    this.editNewRegistrationFormInitialize();
    this.route.queryParams.subscribe((params) => {
      const userType = params['type'];
      console.log('User coming from:', userType);
      if (userType === 'member') {
        // Perform actions specific to Member Registration
      } else if (userType === 'office') {
        // Perform actions specific to Office Registration
      }
    });
  }
  editNewRegistrationFormInitialize() {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        phoneNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        userEmail: ['', [Validators.required, Validators.email]],
        userGrpId: [0],
        userId: [0],
        password: ['', [Validators.required, Validators.minLength(6)]],
        userPw: ['', Validators.required],
        userType: ['S', Validators.required],
      },
      { validator: this.passwordMatchValidator },
    );
  }
  public hideModal(): void {
    this.isAddMode = false;
    this.editNewRegistrationFormInitialize();
  }
  get username() {
    return this.registerForm.get('username');
  }
  goBack(): void {
    this.router
      .navigate(['/auth/login'], { queryParams: { showHero: true } })
      .then(() => {
        window.scrollTo(0, 0);
      });
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('userPw')?.value
      ? null
      : { passwordMismatch: true };
  }
  openDialog() {
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '95vw' : '20vw';
    const height = isMobile ? '100vh' : isIpadMini ? '56vh' : '30vh';
    let dialogRef = this.dialog.open(UsernamePatternDialogueComponent, {
      width: width,
      height: height,
      maxWidth: '100vw',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
      }
    });
  }
  openAboutUsDialog() {
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '95vw' : '55vw';
    const height = isMobile ? '100vh' : isIpadMini ? '56vh' : '75vh';
    let dialogRef = this.dialog.open(AboutUsComponent, {
      width: width,
      height: height,
      maxWidth: '100vw',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
      }
    });
  }
  openTermsAndCondiDialog() {
    const isMobile =
      isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini =
      isPlatformBrowser(this.platformId) &&
      window.innerWidth >= 768 &&
      window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '95vw' : '55vw';
    const height = isMobile ? '100vh' : isIpadMini ? '56vh' : '90vh';
    let dialogRef = this.dialog.open(TermsAndConditionComponent, {
      width: width,
      height: height,
      maxWidth: '100vw',
      disableClose: true,
      autoFocus: false,
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
      }
    });
  }
  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode === 46) {
      return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
 async registerHandler() {
    this.formValue = this.registerForm.getRawValue();
    if (this.registerForm.controls['userId'].value === 0) {
        this.isLoading = true;
        this.loadService.loadingOn();
        try {
            const RegistrationPayload: INewRegPayload = this.formValue;
            // Set userGrpId based on userType
            const userType = RegistrationPayload.userType?.trim().toUpperCase();
            if (userType === 'S') {
                RegistrationPayload.userGrpId = 2; // Member/Student
            } else if (userType === 'F') {
                RegistrationPayload.userGrpId = 1; // Faculty/Librarian
            } else {
                RegistrationPayload.userGrpId = 1; // Default to Office
            }
            console.log('Final Payload:', RegistrationPayload);
            const addResponse: INewRegResponse = await lastValueFrom(
                this.AuthStoreService.register(RegistrationPayload),
            );
            console.log('API Response:', addResponse);
            if (addResponse.status === 'success') {
                this.callGetAll = true;
                // Parse the result string to extract username and password
                const resultString = addResponse.result;
                const usernameMatch = resultString.match(/UserName\s*:\s*(\S+)/);
                const passwordMatch = resultString.match(/Password\s*:\s*(\S+)/);
                const generatedUserName = usernameMatch ? usernameMatch[1] : 'N/A';
                const generatedPassword = passwordMatch ? passwordMatch[1] : 'N/A';
                // Hide modal and turn off loading before showing Swal
                this.hideModal();
                this.loadService.loadingOff();
                // Show success message
                await Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    html: `
                        <div style="text-align: left; padding: 10px 20px;">
                            <p style="font-size: 16px; margin-bottom: 15px;">
                                ${addResponse.message || 'Your account has been created successfully.'}
                            </p>
                            <div style="
                                background: #f4f8ff;
                                border-radius: 10px;
                                padding: 15px;
                                margin-bottom: 15px;
                            ">
                                <div style="margin-bottom: 12px;">
                                    <strong>Username</strong>
                                    <div style="
                                        margin-top: 5px;
                                        padding: 10px;
                                        background: white;
                                        border-radius: 6px;
                                        font-weight: bold;
                                        color: #0040ff;
                                    ">
                                        ${generatedUserName}
                                    </div>
                                </div>
                                <div>
                                    <strong>Password</strong>
                                    <div style="
                                        margin-top: 5px;
                                        padding: 10px;
                                        background: white;
                                        border-radius: 6px;
                                        font-weight: bold;
                                        color: #198754;
                                    ">
                                        ${generatedPassword}
                                    </div>
                                </div>
                            </div>
                            <p style="
                                color: #dc3545;
                                font-size: 13px;
                                margin-bottom: 0;
                            ">
                                ⚠️ Please save your username and password securely.
                            </p>
                        </div>
                    `,
                    confirmButtonText: 'Continue to Login',
                    confirmButtonColor: '#007bff',
                    allowOutsideClick: false,
                });
                // Turn on loading before navigation
                this.loadService.loadingOn();
                // Navigate after Swal is closed
                const userTypeForNavigation = RegistrationPayload.userType
                    ?.trim()
                    .toUpperCase();
                try {
                    if (userTypeForNavigation === 'S') {
                        await this.router.navigate(['/auth/member-login']);
                    } else {
                        await this.router.navigate(['/auth/office-login']);
                    }
                    // Wait for navigation to complete and page to render
                    await this.waitForPageLoad();
                } catch (navError) {
                    console.error('Navigation error:', navError);
                } finally {
                    // Turn off loading after page is fully loaded
                    this.loadService.loadingOff();
                }
            } else if (addResponse.status === 'error') {
                this.toastrService.error(
                    addResponse.message || this.apiErrorMessage,
                    'Error',
                    environment.toastrConfig,
                );
            } else {
                this.toastrService.error(
                    this.apiErrorMessage,
                    'Error',
                    environment.toastrConfig,
                );
            }
        } catch (err) {
            console.error('Registration error:', err);
            this.toastrService.error(
                this.apiErrorMessage,
                'Error',
                environment.toastrConfig,
            );
        } finally {
            this.isLoading = false;
            this.loadService.loadingOff();
        }
    }
}
// Helper method to wait for page to load
private waitForPageLoad(): Promise<void> {
    return new Promise((resolve) => {
        // Check if page is already loaded
        if (document.readyState === 'complete') {
            // Wait a bit for Angular to render
            setTimeout(resolve, 300);
            return;
        }
        // Wait for page to load
        const onLoad = () => {
            document.removeEventListener('load', onLoad);
            // Wait a bit for Angular to render
            setTimeout(resolve, 300);
        };
        document.addEventListener('load', onLoad);
    });
}
}
