import { Component, ElementRef, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { UserProfile } from '../../../core/models/interface/user-profile.interface';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { HomeShareService } from '../../../core/services/home-share.service';
import { LoadingService } from '../../../core/services/loading.service';
import { SharedService } from '../../../core/services/shared.service';
import { WhyRegisterComponent } from '../login/why-register/why-register.component';
const USER_TYPE = 'user_type'
@Component({
  selector: 'app-magazine',
  standalone: false,
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.scss'
})
export class MagazineComponent {
  @ViewChild('bookDetailsSection') bookDetailsSection!: ElementRef;
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
  selectedCategory: string = '';
  selectedBook: any = null;
  private readonly sharedService = inject(SharedService);
  // private fb = inject(FormBuilder);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private toastrService = inject(ToastrService);
  private authStoreService = inject(AuthStoreService);
  // private MemberAuthStoreService = inject(MemberAuthStoreService);
  private loadService = inject(LoadingService);
  private dialog = inject(MatDialog);
  constructor(public homeservice: HomeShareService,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private location: Location,) { }
  slides = [
    {
      title: 'Dive into Excellence with ILSS Club',
      description: 'Join Kolkata\'s premier swimming destination, where tradition meets expertise.',
      videoSrc: '/assets/images/Lib1stSlide.mp4'
    },
    // {
    //   title: 'Swim with the Best at ILSS Club',
    //   description: 'Experience top-notch swimming facilities and expert training in the heart of Kolkata.',
    //   videoSrc: '/assets/videos/Lib1stSlide.mp4'
    // },
    // {
    //   title: 'Experience Swimming Excellence at ILSS Club',
    //   description: 'Discover our premier facilities and expert coaching that set us apart.',
    //   videoSrc: '/assets/videos/Lib1stSlide.mp4'
    // }
  ];
  private initInlineForm(): void {
    this.logInForm = this.fb.group({
      userName: ['debangana', [Validators.required]],
      userPW: ['password123', Validators.required],
      userType: [''],
    })
  }
  currentSlide = 0;
  slideshowInterval: any;
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.initInlineForm();
    //this.getWBList(); 
    this.startSlideshow();
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
  startSlideshow() {
    this.slideshowInterval = setInterval(() => {
      this.nextSlide();
    }, 8000); // Change slide every 8 seconds
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  ngOnDestroy() {
    clearInterval(this.slideshowInterval);
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
  loginHandler(event: MouseEvent | KeyboardEvent): void {
    event.preventDefault(); // Prevent form submission behavior
    this.isLoading = true;
    // Simulate login - check hardcoded credentials or form values
    const userName = this.logInForm.value.userName;
    const userPW = this.logInForm.value.userPW;
    if (userName === 'debangana' && userPW === 'password123') {
      // Simulating a successful login
      this.sharedService.isLoggedIn = true;
      this.sharedService.groupId = 123; // Dummy group ID
      // Store user details in session storage
      window.sessionStorage.setItem('loginUserGroupId', '123');
      window.sessionStorage.setItem('loginUserName', userName);
      window.sessionStorage.setItem('loginUserEmail', userName); // Simulating email storage
      window.sessionStorage.setItem('userType', this.userType);
      this.toastrService.success('Login successful', 'Success', environment.toastrConfig);
      // Simulate navigation to home screen
      this.router.navigate(['/app']);
    } else {
      this.toastrService.error('Invalid username or password', 'Error', environment.toastrConfig);
      this.isLoading = false;
      this.logInForm.reset();
    }
  }
  // loginHandler(event: MouseEvent | KeyboardEvent): void {
  //   this.isLoading = true;
  //   this.loadService.loadingOn();
  //   const addPartyMaster$ = lastValueFrom(this.authStoreService.login(this.logInForm.value));
  //   addPartyMaster$
  //     .then((response: ILoginResponse) => {
  //       if (response.status === 'success') {
  //         this.sharedService.groupId = response.result.userGrpId;
  //         this.sharedService.isLoggedIn = true;
  //         // Store user details in session storage
  //         window.sessionStorage.setItem('loginUserGroupId', response.result.userGrpId.toString());
  //         window.sessionStorage.setItem('loginUserName', response.result.userName);
  //         window.sessionStorage.setItem('loginUserEmail', response.result.userEmail);
  //         // Store the selected user type in sessionStorage
  //         // const selectedUserType = this.logInForm.value.userType;
  //         // window.sessionStorage.setItem('userType', selectedUserType);
  //         // Store the selected userType in sessionStorage
  //         window.sessionStorage.setItem('userType', this.userType);
  //         console.log(this.userType);
  //         this.toastrService.success('Login successful', 'Success', environment.toastrConfig);
  //         // Navigate to the homepage
  //         this.router.navigate(['/app']);
  //       } else if (response.status === 'error') {
  //         this.toastrService.error(response.message, 'Error', environment.toastrConfig);
  //         this.isLoading = false; // Re-enable the form submit button
  //         // Optionally reset form to allow retry
  //         this.logInForm.reset();
  //       } else {
  //         this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
  //         this.isLoading = false; // Re-enable the form submit button
  //         // Optionally reset form to allow retry
  //         this.logInForm.reset();
  //       }
  //     })
  //     .catch(() => {
  //       this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
  //       this.isLoading = false; // Re-enable the form submit button
  //     })
  //     .finally(() => {
  //       this.loadService.loadingOff();
  //     });
  // }
  setUserType(type: string): void {
    this.userType = type;
    localStorage.setItem(USER_TYPE, 'swimmer')
    if (this.userType == 'Swimmer') {
      this.router.navigate(['/auth/dashboard-login'], { replaceUrl: true });
    }
    this.showMenu = false; // Hide the menu after selection
  }
  // Define the parseJwt method inside your class
  parseJwt(token: string): any {
    const base64Url = token.split('.')[1]; // Get the Payload (second part of JWT)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Convert URL-safe base64 to standard base64
    const decoded = atob(base64); // Decode base64 to string
    return JSON.parse(decoded); // Parse the decoded string as JSON
  }
  // MemberloginHandler(event: MouseEvent | KeyboardEvent): void {
  //   this.isLoading = true;
  //   this.loadService.loadingOn();
  //   const addPartyMaster$ = lastValueFrom(this.MemberAuthStoreService.Memberlogin(this.logInForm.value));
  //   addPartyMaster$
  //     .then((response: ILoginResponse) => {
  //       if (response.status === 'success') {
  //         this.sharedService.groupId = response.result.userGrpId;
  //         this.sharedService.isLoggedIn = true;
  //         // Store user details in session storage
  //         window.sessionStorage.setItem('loginUserGroupId', response.result.userGrpId.toString());
  //         window.sessionStorage.setItem('loginUserName', response.result.userName);
  //         window.sessionStorage.setItem('loginUserEmail', response.result.userEmail);
  //         // Decode the JWT token manually
  //         const decodedMessage = this.parseJwt(response.message);  // Use this.parseJwt to call the method inside the class
  //         // Extract fields from the decoded JWT
  //         const memId = decodedMessage.MemId;
  //         const memCode = decodedMessage.MemCode;
  //         const primaryMemCode = decodedMessage.PrimaryMemCode;
  //         const mainMem = decodedMessage.MainMem;
  //         // Store these values in sessionStorage if needed
  //         window.sessionStorage.setItem('memId', memId);
  //         window.sessionStorage.setItem('memCode', memCode);
  //         window.sessionStorage.setItem('primaryMemCode', primaryMemCode);
  //         window.sessionStorage.setItem('mainMem', mainMem);
  //         console.log(memId, memCode, primaryMemCode, mainMem);
  //         // Store the selected user type in sessionStorage
  //         // const selectedUserType = this.logInForm.value.userType;
  //         // window.sessionStorage.setItem('userType', selectedUserType);
  //         // Store the selected userType in sessionStorage
  //         window.sessionStorage.setItem('userType', this.userType);
  //         console.log(this.userType);
  //         this.toastrService.success('Login successful', 'Success', environment.toastrConfig);
  //         // Navigate to the homepage
  //         this.router.navigate(['/auth/member-dashboard'], { replaceUrl: true });
  //       } else if (response.status === 'error') {
  //         this.toastrService.error(response.message, 'Error', environment.toastrConfig);
  //         this.isLoading = false; // Re-enable the form submit button
  //         // Optionally reset form to allow retry
  //         this.logInForm.reset();
  //       } else {
  //         this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
  //         this.isLoading = false; // Re-enable the form submit button
  //         // Optionally reset form to allow retry
  //         this.logInForm.reset();
  //       }
  //     })
  //     .catch(() => {
  //       this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
  //       this.isLoading = false; // Re-enable the form submit button
  //     })
  //     .finally(() => {
  //       this.loadService.loadingOff();
  //     });
  // }
  togglePasswordVisibility(): void {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (this.isPasswordVisible) {
      passwordInput.type = 'password';
    } else {
      passwordInput.type = 'text';
    }
    this.isPasswordVisible = !this.isPasswordVisible;
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
  goHome() {
    this.router.navigate(['/app']);
  }
  magazines = [
    { title: 'Wired', category: 'Technology', description: 'Technology, Science, and Innovation', image: 'assets/images/TECH_Magazine.jpg' },
    { title: 'Forbes', category: 'Business', description: 'Business & Finance', image: 'assets/images/FORBS_Magazine.jpg' },
    { title: 'National Geographic', category: 'Science', description: 'Science & Nature', image: 'assets/images/NG_Magazine.jpg' },
    { title: 'Vogue', category: 'Fashion', description: 'Fashion & Lifestyle', image: 'assets/images/VOGUE_Magazine.jpg' },
    { title: 'Lonely Planet', category: 'Travel', description: 'Travel & Adventure', image: 'assets/images/LP_Magazine.jpg' },
  ];
  books = [
    { title: 'IIT Madras Shaastra', category: 'Technology', author: 'By IIT Madras Shaastra team', description: '"IIT Madras Shaastra" is an esteemed publication by the IIT Madras Shaastra team, dedicated to exploring advancements in science, technology, and innovation. It provides in-depth insights into cutting-edge research, emerging trends, and breakthrough developments across various domains, including artificial intelligence, robotics, sustainability, and space exploration. This magazine serves as a bridge between academia and industry, featuring expert opinions, thought-provoking articles, and real-world applications of technological advancements. With contributions from leading scientists, researchers, and IIT Madras alumni, "Shaastra" continues to inspire and inform readers about the ever-evolving landscape of science and technology.', image: 'assets/images/Tech_Mag1.jpg' ,totalCopies: 3 },
    { title: 'Science Reporter Magazine ', category: 'Technology', author: 'By CSIR-NIScPR', description:'Science Reporter is a monthly popular science magazine published in India since 1964 by the National Institute of Science Communication and Information Resources (NIScPR), a government agency based in New Delhi. The magazine aims to make citizens aware of the research taking place in various scientific institutions across the country. Over time, it has expanded its scope to cover a wide range of national and international science issues. The content includes reports of current interest, essays by eminent scientists on modern technologies and science policies, as well as regular columns featuring science fiction, puzzles, hobby projects, and crosswords. The magazine is published in English and is primarily read in India and neighboring countries. ', image: 'assets/images/TECH_Mag6.jpg',totalCopies: 3 },
    { title: 'Technology & Society', category: 'Technology', author: 'By IEEE Society on Social Implications of Technology (SSIT)', image: 'assets/images/Tech_Mag3.jpg',totalCopies: 0 },
    { title: 'TIME:The Most Amazing Innovations of 2005', category: 'Technology', author: 'TIME Magazine.', image: 'assets/images/Tech_Mag4.jpg' ,totalCopies: 1},
    { title: 'TIME:Visions Of Tomorrow', category: 'Technology', author: 'Thomas A.Easton', image: 'assets/images/Tech_Mag5.jpg' },
    { title: 'Investment Strategies', category: 'Business', author: 'By Jane Smith', image: 'assets/images/business_book.jpg' },
    { title: 'Space Exploration', category: 'Science', author: 'By Carl Sagan', image: 'assets/images/science_book.jpg' },
    { title: 'Fashion Trends 2024', category: 'Fashion', author: 'By Emily Rose', image: 'assets/images/fashion_book.jpg' },
    { title: 'Backpacking Europe', category: 'Travel', author: 'By Rick Steves', image: 'assets/images/travel_book.jpg' },
  ];
  get filteredBooks() {
    return this.books.filter(book => book.category === this.selectedCategory);
  }
  showCategory(category: string, event?: Event) {
    if (event) event.stopPropagation(); // Prevent event bubbling
    this.selectedCategory = category;
    this.selectedBook = null;
  }
  showBookDetails(book: any, event?: Event) {
    event?.stopPropagation();  // Prevents event bubbling if needed
    this.selectedBook = book;
    // Scroll to the book details section after a short delay
    setTimeout(() => {
      this.bookDetailsSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
  goBackTo() {
    if (this.selectedBook) {
      this.selectedBook = null; // Go back to books list
    } else {
      this.selectedCategory = ''; // Go back to magazines
    }
  }
  GotoMemberLoginPage(){
    this.router.navigate(['/auth/member-login']);
  }
}
