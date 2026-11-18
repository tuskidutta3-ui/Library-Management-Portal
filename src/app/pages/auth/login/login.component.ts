import { Component, Inject, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { SharedService } from '../../../core/services/shared.service';
import { lastValueFrom } from 'rxjs';
import { ILoginResponse } from '../../../core/models/interface/auth.interfaces';
import { LoadingService } from '../../../core/services/loading.service';
import { environment } from '../../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { UserProfile } from '../../../core/models/interface/user-profile.interface';
import { HomeShareService } from '../../../core/services/home-share.service';
import { MemberAuthStoreService } from '../../../core/services/member-auth.store.service';
import { isPlatformBrowser, Location } from '@angular/common';
import { AboutUsComponent } from '../new-registration/about-us/about-us.component';
import { WhyRegisterComponent } from './why-register/why-register.component';
import { CommonService } from '../../../core/services/common.service';
const USER_TYPE = 'user_type'
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  @ViewChild('userTypeSelect') userTypeSelect!: MatSelect; // Accessing the mat-select
  @ViewChild('desktopVideo') desktopVideo: any;
  @ViewChild('tabletVideo') tabletVideo: any;
  @ViewChild('mobileVideo') mobileVideo: any; 
  ebookCategories: any[] = []; // Store the categories dynamically
  registrationForm!: FormGroup;
  // public logInForm!: FormGroup;
  logInForm!: FormGroup;
  userType: string = '';
  isLogin: boolean = false;
  showHeroSection: boolean = true;
  selectedComponent: string | null = null;
  isHeroVisible = true;
  isNavigating: boolean = false;
  currentComponent: any = null;
  isRegistrationMode: boolean = true;  // Tracks whether to show registration form
  private readonly apiErrorMessage = 'Request failed to execute';
  wbRecords: any;
  isLoading = false;
  isPasswordVisible: boolean = false;
  userprf?: UserProfile | null;
  slideIndex = 0;
  showMenu: boolean = false;
  autoSlideInterval: any; // Reference to the auto-slide timer  
  isUserLoggedIn: boolean = false;
  isdashboard: boolean = false
  selectedService: string = '';
  selectedEbookCategory: string = '';
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
    private location: Location,
    private commonService: CommonService,) { }
  slides = [
    {
      title: 'Dive into Excellence with ILSS Club',
      description: 'Join Kolkata\'s premier swimming destination, where tradition meets expertise.',
      desktopVideo: '/assets/images/Lib1stSlide.mp4',  // Desktop version 
      tabletVideo: '/assets/images/ForMobile2.mp4',    // Tablet version
      mobileVideo: '/assets/images/ForMobile2.mp4'     // Mobile version
    },
  ];
  ngAfterViewInit() {
    this.initializeVideos();
  }
  initializeVideos() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      this.playVideoSafely(this.desktopVideo?.nativeElement);
      this.playVideoSafely(this.tabletVideo?.nativeElement);
      this.playVideoSafely(this.mobileVideo?.nativeElement);
    }, 300);
  }
  playVideoSafely(videoElement: HTMLVideoElement) {
    if (!videoElement) return;
    // Ensure video is properly muted (even though we have muted attribute)
    videoElement.muted = true;
    videoElement.playsInline = true;
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Autoplay was prevented - use alternative method
        this.alternativeVideoStart(videoElement);
      });
    }
  }
  alternativeVideoStart(videoElement: HTMLVideoElement) {
    // Some browsers need the video source reset
    videoElement.src = videoElement.src;
    videoElement.load();
    // Try playing again after a small delay
    setTimeout(() => {
      videoElement.play().catch(e => console.log('Final video play attempt failed'));
    }, 200);
  }
  currentSlide = 0;
  slideshowInterval: any;
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.initInlineForm();
    //this.getWBList();  
    this.GetHelpConfigEbooks();
    // You may want to reset it to false if you specifically want to hide it on certain navigations
    if (this.homeservice.currentComponent) {
      this.homeservice.isHeroVisible = false;
    }
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
      userName: ['debangana', [Validators.required]],
      userPW: ['password123', Validators.required],
      userType: [''],
      code: ['']
    })
  }
  setUserType(type: string): void {
    this.userType = type;
    localStorage.setItem('USER_TYPE', type);  // Store user type
    if (this.userType == 'OfficeUser') {
      this.router.navigate(['/auth/office-login'], { replaceUrl: true });
    }
    if (this.userType == 'MemberUser') {
      this.router.navigate(['/auth/member-login'], { replaceUrl: true });
    }
    this.showMenu = false;
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
  // Method to handle feature selection
  selectFeature(component: string) {
    this.showHeroSection = false;
    this.selectedComponent = component;
  }
  navigateToComponent(component: any) {
    this.isHeroVisible = false; // Hide the hero section
    this.currentComponent = component; // Set the current component to be displayed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onUserTypeChange(selectedUserType: string): void {
    this.userType = selectedUserType;
    console.log('Selected User Type:', this.userType);
  }
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
      height: height,
      maxWidth: '100vw',
      disableClose: true,
      autoFocus: false,  // Prevents automatic focusing on first element
      restoreFocus: false // Prevents focus from shifting after closing
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
      }
    });
  }
  onServiceSelect(service: string) {
    this.selectedService = service;
    console.log('Selected Service:', this.selectedService);
  }
  onEbookCategorySelect(category: string) {
    this.selectedEbookCategory = category;
    console.log('Selected eBook Category:', this.selectedEbookCategory);
  }
  navigateTo() {
    this.router.navigate(['/auth/magazine']);
    // this.dialogRef.close(); // Close the dialog box
  }
  public GetHelpConfigEbooks(): void {
    const gridRecords$ = lastValueFrom(this.commonService.GetHelpConfigEbooks({}));
    gridRecords$.then(response => {
      this.ebookCategories = ('success' === response.status) ? response.result : [];
    });
  }
}
