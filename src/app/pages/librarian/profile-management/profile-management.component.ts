import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
@Component({
  selector: 'app-profile-management',
  standalone: false,
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  librarian = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };
  profileImage: string = 'assets/images/PPIC.png';
  public librarianDashboardService = inject(LibrarianDashboardService)
  constructor(private router: Router, private route: ActivatedRoute) { }
  // Load theme on component init
  ngOnInit() {
  }
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  goBack() {
    this.librarianDashboardService.isHeroVisible = true; // Show hero section
    this.router.navigate(['/librarian-dasboard'], { queryParams: { showHero: true } }).then(() => {
      window.scrollTo(0, 0); // Scroll to the top
    });
  }
  changePassword() {
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/change-password'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    })
  }
}
