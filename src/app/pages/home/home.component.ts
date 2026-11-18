import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { UserProfile } from '../../core/models/interface/user-profile.interface';
import { Subscriptor } from '../../core/models/class/subscriptor';
import { MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SharedService } from '../../core/services/shared.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthStoreService } from '../../core/services/auth.store.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../core/services/common.service';
import { UserProfileService } from '../../core/services/get-user-profile.service';
import { environment } from '../../../environments/environment.development';
import { lastValueFrom, Subscription } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClient } from '@angular/common/http';
import { MasterRoutingModule } from '../master/master-routing.module';
import { UtilityRoutingModule } from '../utility/utility-routing.module';
import { TransactionRoutingModule } from '../transaction/transaction-routing.module';
import { HomeShareService } from '../../core/services/home-share.service';
interface FoodNode {
  name: string;
  path: string;
  children?: FoodNode[];
}
// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Master',
//     path: '',
//     children: [
//       { name: 'CLUB PARAMETER', path: '/app/master/club-parameter' },
//       {
//         name: 'LOCKER',
//         path: '',
//         children: [
//           { name: 'LOCKER LOCATION', path: '/app/master/locker-location' },
//           { name: 'LOCKER TYPE', path: '/app/master/locker-type' },
//           { name: 'MASTER LOCKER', path: '/app/master/master-locker' },
//           { name: 'LOCKER STATUS OTHER THAN COMPONENT', path: '/app/master/locker-status-other-than-member' },
//         ]
//       },
//       { name: 'HALL MASTER', path: '/app/master/hall-master' },
//       { name: 'HALL MACHINE MAPPING', path: '/app/master/hall-machine-mapping' },
//       { name: 'HALL MEMBERSHIP MAPPING FOR CARD RECHARGE', path: '/app/master/hall-membership-mapping' },
//       { name: 'CATERER MASTER', path: '/app/master/caterer-master' },
//       { name: 'WAITER / STEWARD MASTER', path: '/app/master/waiter-master' },
//       {
//         name: 'TAX',
//         path: '',
//         children: [
//           { name: 'TAX GROUP MASTER', path: '/app/master/tax-group' },
//           { name: 'TAX MASTER', path: '/app/master/tax-master' },
//         ]
//       },
//       { name: 'UNIT MASTER', path: '/app/master/unit-master' },
//       {
//         name: 'ITEM ( RESTAURANT )',
//         path: '',
//         children: [
//           { name: 'ITEM GROUP MASTER', path: '/app/master/item-group' },
//           { name: 'ITEM GROUP DETAILS', path: '/app/master/item-group-details' },
//           { name: 'ITEM SUB-GROUP WISE GST RATE', path: '/app/master/item-subgroupwise-gst-rate' },
//           { name: 'ITEM MASTER', path: '/app/master/item-master' },
//           { name: 'ITEM PRICE MASTER', path: '/app/master/item-price' },
//           { name: 'ITEM OFFER MASTER', path: '/app/master/item-offer' },
//           { name: 'RECIPE MASTER', path: '/app/master/recipe-master' },
//         ]
//       },
//       {
//         name: 'ITEM ( GODOWN )',
//         path: '',
//         children: [
//           { name: 'OTHER ITEM GROUP', path: '/app/master/other-item-group' },
//           { name: 'GODOWN ITEM MASTER', path: '/app/master/godown-item' },
//           { name: 'CANTEEN ITEM & UOM MAPPING', path: '/app/master/canteen-uom-mapping' },
//           { name: 'ITEM OFFER MASTER ( OFFSHOP )', path: '/app/master/offshop-offer' },
//         ]
//       },
//       { name: 'IDENTITY PROOF MASTER', path: '/app/master/identity-proof' },
//       {
//         name: 'MEMBER',
//         path: '',
//         children: [
//           { name: 'MEMBER TYPE MASTER', path: '/app/master/member-type' },
//           { name: 'MEMBER TYPE SUBSCRIPTION MASTER', path: '/app/master/member-type-subscription' },
//           { name: 'MEMBER WISE LOCKER DETAILS', path: '/app/master/member-wise-locker-details' },
//           { name: 'MEMBER OPENING BALANCE', path: '/app/master/member-opening-balance' },
//           { name: 'MEMBER MASTER', path: '/app/master/member-master' },
//         ]
//       },
//       { name: 'BANK MASTER', path: '/app/master/bank-master' },
//       { name: 'PAYMENT HEAD MASTER', path: '/app/master/payment-head-master' },
//       { name: 'SUBSCRIPTION REMARKS MASTER', path: '/app/master/subscription-remarks-master' },
//       {
//         name: 'REASON',
//         path: '',
//         children: [
//           { name: 'REASON TYPE MASTER', path: '/app/master/reason-type' },
//           { name: 'REASON MASTER', path: '/app/master/reason-master' },
//         ]
//       },
//       { name: 'RELATIONSHIP MASTER', path: '/app/master/relationship-master' },
//       { name: 'PARTY MASTER', path: '/app/master/party-master' },
//       {
//         name: 'BEVCO',
//         path: '',
//         children: [
//           { name: 'ITEM-LINK-MASTER', path: '/app/master/item-link-master' },
//         ]
//       },
//       { name: 'OTHER CHARGES MASTER', path: '/app/master/other-charges' },
//       { name: 'OTHER CHARGE RATE MASTER', path: '/app/master/other-charge-rate' },
//       { name: 'SEASONAL SWIMMER MASTER', path: '/app/master/sesonal-swimmer-master' },
//     ],
//   },
//   {
//     name: 'Transaction',
//     path: '',
//     children: [
//       {
//         name: 'JUNIOR ASSOCIATE',
//         path: '',
//         children: [
//           { name: 'ADMISSION OF JUNIOR ASSOCIATE', path: '/app/transaction/admission-of-junior-associate' },
//         ]
//       },
//       { name: 'CARD TOP-UP', path: '/app/transaction/card-top-up' },
//       { name: 'ISSUE OF MEMBER CARD', path: '/app/transaction/issue-of-member-card' },
//     ],
//   },
// ];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  path: string;
  level: number;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTreeModule, MatSelectModule, MatCardModule, MasterRoutingModule, TransactionRoutingModule, MatListModule, MatSidenavModule, MatToolbarModule, UtilityRoutingModule, MatButtonToggleModule, MatIconModule, CommonModule, RouterModule, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuPaths = new Set<string>();
  submenuPaths = new Set<string>(); // Track submenus
  lockersRendered: Set<string> = new Set(); // Set to track rendered submenus dynamically
  renderedPaths: Set<string> = new Set();
  private subscriptions: Subscription[] = [];  // Store all subscriptions
  dataSource: any = { data: [] };
  userprf?: UserProfile | null
  private readonly apiErrorMessage = 'Request failed to execute';
  public leftMenu: any;
  private subs = new Subscriptor();
  public finYearFromService!: number | null;
  // public financialYear: number | null;
  // This method checks if a menu item is a duplicate based on its name or other unique property
  private alreadyProcessedMenus: Set<string> = new Set();
  showHeroSection: boolean = true;
  selectedComponent: string | null = null;
  isHeroVisible = true;
  isNavigating: boolean = false;   // Flag to prevent rapid clicks
  userType: string = '';
  currentComponent: any = null;
  // private slideIndex: number = 0;
  slideIndex = 0;
  slides!: HTMLElement[];
  autoSlideInterval: any; // Reference to the auto-slide timer
  monthName: string = '';
  year: number = 0;
  wbCode: string = '';
  showMasterTree = false;  // To control the visibility of the tree
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  // Lazily inject the services
  private readonly sharedService = inject(SharedService)
  private router = inject(Router)
  private authStoreService = inject(AuthStoreService)
  private toastrService = inject(ToastrService)
  private commonService = inject(CommonService)
  public userProfileService = inject(UserProfileService)
  private cdRef = inject(ChangeDetectorRef)
  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public homeservice: HomeShareService
  ) {
    // this.dataSource.data = TREE_DATA;
    // this.financialYear = this.sharedService.financialYear;
    // this.slides = Array.from(document.getElementsByClassName('hero-slide')) as HTMLElement[];
    // // this.fetchMenuData();
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log('Navigated to:', event.url);
    //   }
    // });
  }
  ngOnInit(): void {
    // this.authStoreService.userProfile.subscribe((data: any) => {
    //   this.userprf = data
    //   // console.log(data?.FinYear);
    //   // console.log(JSON.stringify(data));
    // })
    // // this.MonthNumberToName();
    // this.getMenuList();
    // // this.dataSource.data = TREE_DATA;
    // // this.setFinancialYear()
    // this.getFinancialYear();
    // // this.showSlides();
    // this.activatedRoute.queryParams.subscribe((params: { showHero?: string }) => {
    //   this.homeservice.isHeroVisible = params['showHero'] !== 'false';
    // });
    // // You may want to reset it to false if you specifically want to hide it on certain navigations
    // if (this.homeservice.currentComponent) {
    //   this.homeservice.isHeroVisible = false;
    // }
    // // Additional logic...
    // this.authStoreService.userProfile.subscribe((data: any) => {
    //   this.userprf = data;
    // });
    // this.isHeroVisible = true;
    console.log('BankMasterComponent initialized');
    // this.cdr.detectChanges(); // Force change detection
  }
  ngAfterViewInit(): void {
    // Fetch all slides after the view has been initialized
    // this.slides = Array.from(document.getElementsByClassName('hero-slide')) as HTMLElement[];
    // Start the automatic slideshow
    // this.autoSlide();
    // Initially show the first slide
    // this.showSlide(this.slideIndex);
  }
  // MonthNumberToName() {
  //   if (this.userprf?.Month) {
  //     const monthNumber = this.userprf.Month;
  //     // Create a Date object with the specified month number (0-indexed)
  //     // Use the toLocaleString method to get the month name
  //     this.monthName = new Date(2022, monthNumber - 1, 1).toLocaleString('en-US', { month: 'short' });
  //   }
  // }
  ngOnDestroy(): void {
    // this.subs.clear();
    // // Clean up the interval when the component is destroyed to prevent memory leaks
    // if (this.autoSlideInterval) {
    //   clearInterval(this.autoSlideInterval);
    // }
    console.log('BankMasterComponent destroyed');
  }
  public getFinancialYear(): void {
    this.subs.add = this.sharedService.getFinancialYearChange().subscribe({
      next: (triggeredYear) => {
        this.finYearFromService = triggeredYear;
      }
    })
  }
  logout() {//
    this.authStoreService.logout().subscribe(() => {
      this.sharedService.isLoggedIn = false;
      this.sharedService.groupId = 0;
      this.sharedService.financialYearChange(null);
      if (window.sessionStorage) {
        window.sessionStorage.clear();
      }
      this.router.navigate(['/auth/login']);
      this.toastrService.success('Logout successful', 'Success', environment.toastrConfig);
    })
  }
  private getMenuList(): void {
    const userId = parseInt(this.userProfileService.getUserId());
    lastValueFrom(this.commonService.getMenuListData({ userId: userId }))
      .then((response: any) => {
        // Assuming response.result is the correct structure
        if (response.status === 'success') {
          this.dataSource.data = this.formatMenuData(response.result);
          this.cdRef.detectChanges(); // Manually trigger change detection
          console.log(this.dataSource.data);
        } else {
          this.dataSource.data = []; // Handle empty data case
        }
      })
      .catch(() => {
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
      });
  }
  // Function to format the API response to match your menu structure
  private formatMenuData(menuItems: any[]): any[] {
    return menuItems.map(item => ({
      name: item.name,
      children: item.children ? this.formatMenuData(item.children) : [],
      path: item.path || null
    }));
  }
  autoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slides every 3 seconds
  }
  // Show the current slide and hide the rest
  showSlide(index: number) {
    if (!this.slides || this.slides.length === 0) {
      console.error('No slides found');
      return;
    }
    // Remove 'active' class from all slides
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove('active');
    }
    // Ensure the slide index is within bounds
    if (index >= this.slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = this.slides.length - 1;
    }
    // Add 'active' class to the current slide
    this.slides[this.slideIndex].classList.add('active');
  }
  // Navigate to the next slide
  nextSlide() {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }
  // Navigate to the previous slide
  prevSlide() {
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }
  scrollToFeatures() {
    const openMenuButton = document.getElementById('openMenuButton');
    if (openMenuButton) {
      openMenuButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
  getDynamicClass(): string {
    switch (this.userType) {
      case 'OfficeUser':
        return 'login-page-office-user';
      case 'Member':
        return 'login-page-member';
      case 'Swimmer':
        return 'login-page-swimmer';
      default:
        return '';
    }
  }
  // navigateTo(path: string): void {
  //   this.router.navigate([path]);  // Navigate to the route
  //   this.currentComponent = null;  // Or set to the desired component based on the path
  //   // Optional: Update the current component based on the path
  //   switch (path) {
  //     case '/app/utility/user-group':
  //       this.currentComponent = UserGroupComponent;
  //       break;
  //     case '/app/utility/user':
  //       this.currentComponent = UserComponent;
  //       break;
  //     case '/app/master/club-parameter':
  //       this.currentComponent = ClubParameterComponent;
  //       break;
  //     case '/app/master/locker-location':
  //       this.currentComponent = LockerLocationComponent;
  //       break;
  //     case '/app/master/locker-type':
  //       this.currentComponent = LockerTypeComponent;
  //       break;
  //     case '/app/master/master-locker':
  //       this.currentComponent = MasterLockerComponent;
  //       break;
  //     case '/app/master/locker-status-other-than-member':
  //       this.currentComponent = LockerStatusOtherThanMemberComponent;
  //       break;
  //     case '/app/master/hall-master':
  //       this.currentComponent = HallMasterComponent;
  //       break;
  //     case '/app/master/hall-machine-mapping':
  //       this.currentComponent = HallMachineMappingComponent;
  //       break;
  //     case '/app/master/hall-membership-mapping':
  //       this.currentComponent = HallMembershipMappingForCardRechargeComponent;
  //       break;
  //     case '/app/master/caterer-master':
  //       this.currentComponent = CatererMasterComponent;
  //       break;
  //     case '/app/master/waiter-master':
  //       this.currentComponent = WaiterMasterComponent;
  //       break;
  //     case '/app/master/tax-group':
  //       this.currentComponent = TaxGroupMasterComponent;
  //       break;
  //     case '/app/master/tax-master':
  //       this.currentComponent = TaxMasterComponent;
  //       break;
  //     case '/app/master/unit-master':
  //       this.currentComponent = UnitMasterComponent;
  //       break;
  //     case '/app/master/item-group':
  //       this.currentComponent = ItemGroupMasterComponent;
  //       break;
  //     case '/app/master/item-group-details':
  //       this.currentComponent = ItemGroupMasterDetailsComponent;
  //       break;
  //     case '/app/master/item-subgroupwise-gst-rate':
  //       this.currentComponent = ItemSubgroupwiseGstRateComponent;
  //       break;
  //     case '/app/master/item-master':
  //       this.currentComponent = ItemMasterComponent;
  //       break;
  //     case '/app/master/item-price':
  //       this.currentComponent = ItemPriceMasterComponent;
  //       break;
  //     case '/app/master/item-offer':
  //       this.currentComponent = ItemOfferMasterComponent;
  //       break;
  //     case '/app/master/recipe-master':
  //       this.currentComponent = RecipeMasterComponent;
  //       break;
  //     case '/app/master/other-item-group':
  //       this.currentComponent = OtherItemGroupComponent;
  //       break;
  //     case '/app/master/godown-item':
  //       this.currentComponent = GodownItemMasterComponent;
  //       break;
  //     case '/app/master/canteen-uom-mapping':
  //       this.currentComponent = CanteenUomMappingComponent;
  //       break;
  //     case '/app/master/offshop-offer':
  //       this.currentComponent = OffshopOfferMasterComponent;
  //       break;
  //     case '/app/master/identity-proof':
  //       this.currentComponent = IdentityProofMasterComponent;
  //       break;
  //     case '/app/master/member-type':
  //       this.currentComponent = MemberTypeMasterComponent;
  //       break;
  //     case '/app/master/member-type-subscription':
  //       this.currentComponent = MemberTypeSubscriptionComponent;
  //       break;
  //     case '/app/master/member-wise-locker-details':
  //       this.currentComponent = MemberWiseLockerDetailsComponent;
  //       break;
  //     case '/app/master/member-opening-balance':
  //       this.currentComponent = MemberOpeningBalanceComponent;
  //       break;
  //     case '/app/master/member-master':
  //       this.currentComponent = MemberRegistrationComponent;
  //       break;
  //     case '/app/master/bank-master':
  //       this.currentComponent = BankMasterComponent;
  //       break;
  //     case '/app/master/payment-head-master':
  //       this.currentComponent = PaymentHeadMasterComponent;
  //       break;
  //     case '/app/master/subscription-remarks-master':
  //       this.currentComponent = SubscriptionRemarksComponent;
  //       break;
  //     case '/app/master/reason-type':
  //       this.currentComponent = ReasonTypeComponent;
  //       break;
  //     case '/app/master/reason-master':
  //       this.currentComponent = ReasonMasterComponent;
  //       break;
  //     case '/app/master/relationship-master':
  //       this.currentComponent = RelationshipMasterComponent;
  //       break;
  //     case '/app/master/party-master':
  //       this.currentComponent = PartyMasterComponent;
  //       break;
  //     case '/app/master/item-link-master':
  //       this.currentComponent = ItemLinkMasterComponent;
  //       break;
  //     case '/app/master/other-charges':
  //       this.currentComponent = OtherChargesComponent;
  //       break;
  //     case '/app/master/other-charge-rate':
  //       this.currentComponent = OtherChargeRateComponent;
  //       break;
  //     case '/app/master/sesonal-swimmer-master':
  //       this.currentComponent = SeasonalSwimmerMasterComponent;
  //       break;
  //     case '/app/transaction/admission-of-junior-associate':
  //       this.currentComponent = AdmissionOfJuniorAssociateComponent;
  //       break;
  //     case '/app/transaction/fees-collection-from-junior-associate':
  //       this.currentComponent = FeesCollectionFromJuniorAssociateComponent;
  //       break;
  //     case '/app/transaction/card-top-up':
  //       this.currentComponent = CardTopUpComponent;
  //       break;
  //     case '/app/transaction/check-member-card':
  //       this.currentComponent = CheckMemberCardComponent;
  //       break;
  //     case '/app/transaction/member-card-balance-return':
  //       this.currentComponent = MemberCardBalanceReturnComponent;
  //       break;
  //     case '/app/transaction/running-members-subscription':
  //       this.currentComponent = RunningMembersSubscriptionComponent;
  //       break;
  //     case '/app/transaction/new-members-subscription':
  //       this.currentComponent = NewMembersSubscriptionComponent;
  //       break;
  //     case '/app/transaction/issue-of-member-card':
  //       this.currentComponent = IssueOfMemberCardComponent;
  //       break;
  //     case '/app/transaction/running-member-donation':
  //       this.currentComponent = RunningMembersDonationComponent;
  //       break;
  //     default:
  //       this.currentComponent = null;  // Reset or set to a default component
  //   }
  //   this.isHeroVisible = false;  // Hide the hero section
  // }
  resetComponentState() {
    this.currentComponent = null; // Reset the current component
    this.isHeroVisible = true;     // Show the hero section
  }
  navigateTo(path: string): void {
    // Add a unique query parameter to force re-initialization
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate([path], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.homeservice.isHeroVisible = !this.isHeroVisibleForPath(path);
    });
  }
  // Helper method to determine visibility for specific paths
  private isHeroVisibleForPath(path: string): boolean {
    const pathsWithoutHero = [
      '/app/master/bank-master',
      '/app/utility/user-group',
      '/app/utility/user',
      '/app/master/club-parameter',
      '/app/master/locker-location',
      '/app/master/locker-type',
      '/app/master/master-locker',
      '/app/master/locker-status-other-than-member',
      '/app/master/hall-master',
      '/app/master/hall-machine-mapping',
      '/app/master/hall-membership-mapping',
      '/app/master/caterer-master',
      '/app/master/waiter-master',
      '/app/master/tax-group',
      '/app/master/tax-master',
      '/app/master/unit-master',
      '/app/master/item-group',
      '/app/master/item-group-details',
      '/app/master/item-subgroupwise-gst-rate',
      '/app/master/item-master',
      '/app/master/item-price',
      '/app/master/item-offer',
      '/app/master/recipe-master',
      '/app/master/other-item-group',
      '/app/master/godown-item',
      '/app/master/canteen-uom-mapping',
      '/app/master/offshop-offer',
      '/app/master/identity-proof',
      '/app/master/member-type',
      '/app/master/member-type-subscription',
      '/app/master/member-wise-locker-details',
      '/app/master/member-opening-balance',
      '/app/master/member-master',
      '/app/master/master-payment-purpose',
      '/app/master/payment-head-master',
      '/app/master/subscription-remarks-master',
      '/app/master/reason-type',
      '/app/master/reason-master',
      '/app/master/relationship-master',
      '/app/master/party-master',
      '/app/master/item-link-master',
      '/app/master/other-charges',
      '/app/master/other-charge-rate',
      '/app/master/sesonal-swimmer-master',
      '/app/master/change-primary-member',
      '/app/master/swim-mem-type',
      '/app/master/sesonal-swimmer-master-new',
      '/app/master/form-cat',
      '/app/master/session-type',
      '/app/master/batch-timing-list',
      '/app/master/booking-range',
      '/app/transaction/admission-of-junior-associate',
      '/app/transaction/fees-collection-from-junior-associate',
      '/app/transaction/card-top-up',
      '/app/transaction/check-member-card',
      '/app/transaction/member-card-balance-return',
      '/app/transaction/running-members-subscription',
      '/app/transaction/new-members-subscription',
      '/app/transaction/issue-of-member-card',
      '/app/transaction/running-member-donation',
      '/app/transaction/miscellaneous-collection',
      '/app/transaction/pos',
      '/app/transaction/kot-entry-swimmer-member',
      '/app/transaction/member-other-billing',
      '/app/transaction/off-shop-billing',
      '/app/transaction/running-members-subscription',
      '/app/transaction/check-member-card',
      '/app/transaction/transfer-installment-collection-to-suspense',
      '/app/transaction/issue-card',
      '/app/transaction/seasonal-card-topup',
      '/app/transaction/card-balance-return',
      '/app/transaction/issue-off-shop-item-from-godown',
      '/app/transaction/slot-booking',
      '/app/transaction/swim-card-type-change',
      '/app/transaction/goods-receipt-note',
      '/app/transaction/issue-from-godown-to-restaurant',
      '/app/transaction/other-materials-issue-details',
      '/app/transaction/goods-return-note',
      '/app/transaction/godown-wastage-details',
      '/app/transaction/item-other-opening-balance',
      '/app/transaction/item-restaurant-opening-balance',
      '/app/transaction/liquor-stock-adjustment',
      '/app/transaction/increase-bar-stock',
      '/app/transaction/canteen-food wastage at-restaurant',
      '/app/transaction/canteen-raw-material-opening-balance',
      '/app/transaction/grn-for-canteen-raw-materials',
      '/app/transaction/adjustment-of-canteen-raw-materials',
      '/app/transaction/issue-of-canteen-raw-material',
      '/app/transaction/canteen-billing',
      '/app/transaction/purchase-form',
      '/app/transaction/admission-form',
      '/app/reports/bill-register',
      '/app/reports/item-wise-sale-canteen',
      '/app/reports/canteen-void-bill-register',
      '/app/reports/subscription-from-ja',
      '/app/reports/member-subscription-status',
      '/app/reports/misc-collection-from-member',
      '/app/reports/members-topup-report',
      '/app/reports/members-card-balance',
      '/app/reports/caution-money-collection-from-temp-card',
      '/app/reports/caution-money-refund-for-mem-card',
      '/app/reports/fine-collect-for-mem-card',
      '/app/reports/swim-member-topUp-report',
      '/app/reports/swim-bill-register-hall-wise',
      '/app/reports/daily-collection-report',
      '/app/reports/daily-collection-from-canteen',
      '/app/reports/off-shop-bill-register',
      '/app/reports/members-topup-report',
      '/app/reports/daily-collection-oth-charges',
      '/app/reports/caterer-and-item-wise-sale-with-cost-price',
      '/app/reports/bill-wise-kot-report',
      '/app/reports/void-bill-register',
      '/app/reports/item-wise-sale-restaurant',
      '/app/reports/off-shop-void-register',
      '/app/reports/item-wise-sale-off-shop',
      '/app/reports/off-shop-duplicate-bill',
      '/app/reports/duplicate-bill',
      '/app/reports/swim-duplicate-bill',
      '/app/reports/card-recharge-register',
      '/app/reports/status-wise-locker-report',
      '/app/reports/status-wise-locker-report',
      '/app/reports/item-master-report',
      '/app/reports/item-offer-report',
      '/app/reports/mem-reg-by-mem-code-range-with-pic',
      '/app/reports/lable-print',
      '/app/reports/locker-rent-received-from-mem',
      '/app/reports/locker-rent-outstanding',
      '/app/reports/donation-received-from-mem',
      '/app/reports/donation-outstanding',
      '/app/reports/members-card-balance-return',
      '/app/reports/members-negative-balance-report',
      '/app/reports/pay-mode-wise-card-recharge-summ',
      '/app/reports/status-wise-locker-report',
      '/app/reports/mem-wise-locker-statement',
      '/app/reports/locker-movement-report',
      '/app/reports/item-price-report',
      '/app/reports/member-register-without-pic',
      '/app/reports/contact-no-wise-mem-dtls',
      '/app/reports/mem-list-for-card-print',
      '/app/reports/list-of-junior-asso-session',
      '/app/reports/ref-code-wise-ja',
      '/app/reports/gst-register',
      '/app/reports/active-mem-counting',
      '/app/reports/form-purchase-but-not-done',
      '/app/reports/money-receipt-typewise',
      '/app/reports/money-receipt-datewise',
      '/app/reports/batchlist',
      '/app/reports/card-type-change',
      '/app/reports/swim-members-card-balance',
      '/app/reports/canteen-bill-register',
      '/app/reports/grn-report',
      '/app/reports/grn-reg-report',
      '/app/reports/issue-note-of-rest-mtrls',
      '/app/reports/issue-reg-of-rest-mtrls',
      '/app/reports/issue-note-of-oth-mtrls',
      '/app/reports/issue-reg-of-oth-mtrls',
      '/app/reports/stock-ledger',
      '/app/reports/stock-ledger-with-value',
      '/app/reports/stock-take-worksheet',
      '/app/reports/wastage-report',
      '/app/reports/goods-return-note',
      '/app/reports/goods-return-reg',
      '/app/reports/liquor-stock-reg',
      '/app/reports/liquor-wastage-reg',
      '/app/reports/suspence-report',
      '/app/reports/canteen-item-ob',
      '/app/reports/canteen-stock-adj',
      '/app/reports/canteen-grn-reg',
      '/app/reports/canteen-grn',
      '/app/reports/issue-of-cant-mtrl',
      '/app/reports/foc-sale-of-cant',
      '/app/reports/cant-stock-reg',
      '/app/reports/recipe-register',
      '/app/reports/category-wise-member-list',
      '/app/reports/insurance-details',
      '/app/reports/money-receipt-paymodewise',
      '/app/utility/day-end',
      '/app/utility/member-user',
      '/app/process/gen-yr-subs',
      '/app/process/gen-donation',
      '/app/process/import-member-card-balance',
      '/app/process/liquor-comsumption',
      '/app/process/tran-gdn-stock',
      '/app/process/tran-bar-stock',
      '/app/process/tran-can-stock',
      '/app/process/re-gen-yr-subs',
      '/app/process/re-gen-donation-subs',
      '/app/process/subs-reminder',
      '/app/process/donation-reminder',
    ];
    return pathsWithoutHero.includes(path);
  }
  getIconForParent(parentName: string): string {
    switch (parentName) {
      case 'Master':
        return 'business';
      case 'Transaction':
        return 'credit_card';
      case 'Utility':
        return 'settings';
      case 'Report':
        return 'assessment';
      case 'Process':
        return 'play_circle';
      default:
        return 'folder'; // Fallback icon
    }
  }
}
