import { Component, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ILoginResponse } from '../../../core/models/interface/auth.interfaces';
import { UserProfile } from '../../../core/models/interface/user-profile.interface';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { HomeShareService } from '../../../core/services/home-share.service';
import { LoadingService } from '../../../core/services/loading.service';
import { MemberAuthStoreService } from '../../../core/services/member-auth.store.service';
import { SharedService } from '../../../core/services/shared.service';
import { WhyRegisterComponent } from '../login/why-register/why-register.component';
import { AboutUsComponent } from '../new-registration/about-us/about-us.component';
const USER_TYPE = 'user_type'
@Component({
  selector: 'app-member-login',
  standalone: false,
  templateUrl: './member-login.component.html',
  styleUrl: './member-login.component.scss'
})
export class MemberLoginComponent {
  @ViewChild('userTypeSelect') userTypeSelect!: MatSelect; // Accessing the mat-select
  // public logInForm!: FormGroup;
  logInForm!: FormGroup;
  userType: string = '';
  isLogin: boolean = false;
  private readonly apiErrorMessage = 'Request failed to execute';
  isLoading = false;
  isPasswordVisible: boolean = false;
  userprf?: UserProfile | null;
showPassword: boolean = false;
  showMenu: boolean = false;
  showBackButton: boolean = false;
  private readonly sharedService = inject(SharedService);
  // private fb = inject(FormBuilder);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private toastrService = inject(ToastrService);
  private authStoreService = inject(AuthStoreService);
  private MemberAuthStoreService = inject(MemberAuthStoreService);
  private loadService = inject(LoadingService);
  private dialog = inject(MatDialog);
  constructor(public homeservice: HomeShareService,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private location: Location,) { }
  currentSlide = 0;
  slideshowInterval: any;
  goBack(): void {
    this.router.navigate(['/auth/login']);
  }
  ngOnInit(): void {
    this.initInlineForm();
    //this.getWBList(); 
    this.userType = localStorage.getItem('USER_TYPE') || '';
    // You may want to reset it to false if you specifically want to hide it on certain navigations
    if (this.homeservice.currentComponent) {
      this.homeservice.isHeroVisible = false;
    }
  }
  togglePassword() {
  this.showPassword = !this.showPassword;
}
  scrollToFeatures() {
    const featuresSection = document.getElementById('features-section'); // Update with the actual section ID
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnDestroy() {
    clearInterval(this.slideshowInterval);
  }
  private initInlineForm(): void {
    this.logInForm = this.fb.group({
      userName: ['', [Validators.required]],
      userPW: ['', Validators.required],
userType: ['S'], 
      // userName: ['', [Validators.required]],
      // userPW: ['', Validators.required],
    })
  }
  getDynamicClass(): string {
    switch (this.userType) {
      case 'OfficeUser':
        return 'login-page-office-user';
      case 'MemberUser':
        return 'login-page-Member-user';
      case 'Swimmer':
        return 'login-page-swimmer';
      default:
        return '';
    }
  }
  forgotPassword() {
    this.router.navigate(['/auth/forgot-password'], { replaceUrl: true });
  }
  onUserTypeChange(selectedUserType: string): void {
    this.userType = selectedUserType;
    console.log('Selected User Type:', this.userType);
  }
  //////ACTUAL API ///////
   loginHandler(event: MouseEvent | KeyboardEvent): void {
      event.preventDefault();
      this.isLoading = true;
      this.loadService.loadingOn(); 
      console.log('Payload being sent:', this.logInForm.value);
      const addPartyMaster$ = lastValueFrom(this.authStoreService.login(this.logInForm.value)); 
      addPartyMaster$
        .then((response: ILoginResponse) => {
          if (response.status === 'success') {
            // this.sharedService.groupId = response.result.userGrpId;
            this.sharedService.isLoggedIn = true;
            // Store user details in session storage
            // window.sessionStorage.setItem('loginUserGroupId', response.result.logUserId.toString());
            window.sessionStorage.setItem('loginUserName', response.result.userName);
            window.sessionStorage.setItem('loginUserPhone', response.result.phoneNo);
            // Store the selected user type in sessionStorage
            // const selectedUserType = this.logInForm.value.userType;
            // window.sessionStorage.setItem('userType', selectedUserType);
            // Store the selected userType in sessionStorage
            window.sessionStorage.setItem('userType', this.userType);
            console.log(this.userType); 
            this.toastrService.success('Login successful', 'Success', environment.toastrConfig); 
            // Navigate to the homepage
            this.router.navigate(['/member-dashboard']);
          } else if (response.status === 'error') {
            this.toastrService.error(response.message, 'Error', environment.toastrConfig);
            this.isLoading = false; // Re-enable the form submit button
            // Optionally reset form to allow retry
            this.logInForm.reset();
          } else {
            this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
            this.isLoading = false; // Re-enable the form submit button
            // Optionally reset form to allow retry
            this.logInForm.reset();
          }
        })
        .catch(() => {
          this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
          this.isLoading = false; // Re-enable the form submit button
        })
        .finally(() => {
          this.loadService.loadingOff();
        });
    }
    // loginHandler(event: MouseEvent | KeyboardEvent): void {
    //   event.preventDefault(); // Prevent form submission behavior
    //   this.isLoading = true;
    //   // Simulate login - check hardcoded credentials or form values
    //   const userName = this.logInForm.value.userName;
    //   const userPW = this.logInForm.value.userPW;
    //   if (userName === 'debangana' && userPW === 'password123') {
    //     // Simulating a successful login
    //     this.sharedService.isLoggedIn = true;
    //     this.sharedService.groupId = 123; // Dummy group ID
    //     // Store user details in session storage
    //     window.sessionStorage.setItem('loginUserGroupId', '123');
    //     window.sessionStorage.setItem('loginUserName', userName);
    //     window.sessionStorage.setItem('loginUserEmail', userName); // Simulating email storage
    //     window.sessionStorage.setItem('userType', this.userType);
    //     this.toastrService.success('Login successful', 'Success', environment.toastrConfig);
    //     // Simulate navigation to home screen
    //     this.router.navigate(['/member-dasboard']);
    //   } else {
    //     this.toastrService.error('Invalid username or password', 'Error', environment.toastrConfig);
    //     this.isLoading = false;
    //     this.logInForm.reset();
    //   }
    // }
  // Define the parseJwt method inside your class
  parseJwt(token: string): any {
    const base64Url = token.split('.')[1]; // Get the Payload (second part of JWT)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert URL-safe base64 to standard base64
    const decoded = atob(base64); // Decode base64 to string
    return JSON.parse(decoded); // Parse the decoded string as JSON
  }
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (this.isPasswordVisible) {
      passwordInput.type = 'password';
    } else {
      passwordInput.type = 'text';
    }
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  openAboutUsDialog() {
    const isMobile = isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini = isPlatformBrowser(this.platformId) && window.innerWidth >= 768 && window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '95vw' : '55vw';
    const height = isMobile ? '100vh' : isIpadMini ? '56vh' : '75vh';
    let dialogRef = this.dialog.open(AboutUsComponent, {
      width: width,
      height: height, // Full width for mobile, 80% for desktop
      maxWidth: '100vw',                  // Max width to ensure full width
      disableClose: true,
      // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
      }
    });
  }
  openWhyRegDialog() {
    const isMobile = isPlatformBrowser(this.platformId) && window.innerWidth <= 600;
    const isIpadMini = isPlatformBrowser(this.platformId) && window.innerWidth >= 768 && window.innerWidth < 769;
    const width = isMobile ? '100vw' : isIpadMini ? '95vw' : '55vw';
    const height = isMobile ? '100vh' : isIpadMini ? '56vh' : '75vh';
    let dialogRef = this.dialog.open(WhyRegisterComponent, {
      width: width,
      height: height, // Full width for mobile, 80% for desktop
      maxWidth: '100vw',                  // Max width to ensure full width
      disableClose: true,
      // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
      }
    });
  }
  navigateTo() {
    this.router.navigate(['/auth/magazine']);
    // this.dialogRef.close(); // Close the dialog box
  }
}
