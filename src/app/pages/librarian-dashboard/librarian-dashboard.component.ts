import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianDashboardService } from '../../core/services/librarian-dashboard.service';
import { DarkModeToggleComponent } from '../../shared/dark-mode-toggle/dark-mode-toggle.component';
@Component({
  selector: 'app-librarian-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './librarian-dashboard.component.html',
  styleUrl: './librarian-dashboard.component.scss',
  animations: [
    trigger('slideToggle', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class LibrarianDashboardComponent {
  activeFeature: string | null = null;
  selectedInputField: string | null = null;
  currentComponent: any = null;
  public librarianDashboardService = inject(LibrarianDashboardService)
  public activatedRoute = inject(ActivatedRoute)
  public dialog = inject(MatDialog)
  public cdr = inject(ChangeDetectorRef)
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: { showHero?: string }) => {
      this.librarianDashboardService.isHeroVisible = params['showHero'] !== 'false';
    });
    // You may want to reset it to false if you specifically want to hide it on certain navigations
    if (this.librarianDashboardService.currentComponent) {
      this.librarianDashboardService.isHeroVisible = false;
    }
    this.cdr.detectChanges(); // Force change detection
  }
  logout() {
    // Clear session & redirect
    this.router.navigate(['/auth/login']);
  }
  featureTitles: { [key: string]: string } = {
    manageBooks: "📖 Manage Books",
    issueReturnBooks: "🔄 Issue & Return Books",
    manageMembers: "👥 Member Management",
    overdueManagement: "⚠ Overdue Books",
  };
  toggleFeature(feature: string) {
    this.activeFeature = this.activeFeature === feature ? null : feature;
    this.selectedInputField = null;
  }
   GotoCategory() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/books-category'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
  GotoManageBooks() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/manage-books'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
 GotoIssueBooks() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/issue-books'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
  GotoMemberRegistration() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/register-new-member'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
  GotoOverDueManagement() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/pending-renewal-req'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
  GotoProfileManagement() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/profile-management'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    });
  }
  showInputField(field: string) {
    this.selectedInputField = this.selectedInputField === field ? null : field;
  }
}