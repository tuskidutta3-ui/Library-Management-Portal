import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CustomAdapter } from '../../core/services/custom-adapter.service';
import { CustomDateParserFormatter } from '../../core/services/custom-date-parser-formatter.service';
import { AboutUsComponent } from '../auth/new-registration/about-us/about-us.component';
import { DarkModeToggleComponent } from '../../shared/dark-mode-toggle/dark-mode-toggle.component';
import { MemberDashboardService } from '../../core/services/member-dashboard.service';
import { UserProfileService } from '../../core/services/get-user-profile.service';
@Component({
  selector: 'app-member-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, DarkModeToggleComponent],
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.scss',
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class MemberDashboardComponent {
  @ViewChild('notificationsList') notificationsList!: ElementRef;
  memberName: string = '';
  memberEmail: string = '';
  memberId: string = '';
  showNotifications = false;
  isDarkMode = false;
  notifications: string[] = [
    "📅 Due date for 'The Alchemist' is in 2 days!",
    "📢 New book added: 'Atomic Habits'",
    '⚠ You have an overdue fine of ₹50',
  ];
  activeFeature: string | null = null;
  selectedInputField: string | null = null;
  public MemberDashboardService = inject(MemberDashboardService);
  public activatedRoute = inject(ActivatedRoute);
  public cdr = inject(ChangeDetectorRef);
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dialog: MatDialog,
    private renderer: Renderer2,
    private userProfileService: UserProfileService,
  ) {}
  ngOnInit() {
    this.memberName = this.userProfileService.getUserName();
    this.memberEmail = this.userProfileService.getEmail();
    this.memberId = this.userProfileService.getUserId();
    this.activatedRoute.queryParams.subscribe(
      (params: { showHero?: string }) => {
        this.MemberDashboardService.isHeroVisible =
          params['showHero'] !== 'false';
      },
    );
    // You may want to reset it to false if you specifically want to hide it on certain navigations
    if (this.MemberDashboardService.currentComponent) {
      this.MemberDashboardService.isHeroVisible = false;
    }
    this.cdr.detectChanges(); // Force change detection
  }
  logout() {
    // Clear session & redirect
    this.router.navigate(['/auth/login']);
  }
  viewBorrowedBooks() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router
      .navigate(['/member-dashboard/member/request-books'], {
        queryParams: { unique: uniqueParam },
      })
      .then(() => {
        // Set hero visibility based on the current path
        this.MemberDashboardService.isHeroVisible = false;
      });
  }
  renewBooks() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router
      .navigate(['/member-dashboard/member/renew-books'], {
        queryParams: { unique: uniqueParam },
      })
      .then(() => {
        // Set hero visibility based on the current path
        this.MemberDashboardService.isHeroVisible = false;
      });
  }
  
  scrollToBottom() {
    setTimeout(() => {
      if (this.notificationsList?.nativeElement) {
        this.notificationsList.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 100);
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
      height: height, // Full width for mobile, 80% for desktop
      maxWidth: '100vw', // Max width to ensure full width
      disableClose: true,
      // panelClass: isMobile ? 'dialog-fullscreen' : 'dialog-pc-width' // Custom classes if needed
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
      }
    });
  }
}
