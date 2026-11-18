import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarianDashboardService } from '../../../core/services/librarian-dashboard.service';
@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  public changePasswordForm!: FormGroup;
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  public librarianDashboardService = inject(LibrarianDashboardService)
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.editChangePasswordFormInitialize()
  }
  editChangePasswordFormInitialize() {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  goBack(){
    const uniqueParam = new Date().getTime(); // or use a counter
    this.router.navigate(['/librarian-dasboard/librarian/profile-management'], { queryParams: { unique: uniqueParam } }).then(() => {
      // Set hero visibility based on the current path
      this.librarianDashboardService.isHeroVisible = false;
    })
  }
  onChangePassword() {
    if (this.changePasswordForm.value.newPassword !== this.changePasswordForm.value.confirmPassword) {
      alert('New Password and Confirm Password do not match!');
      return;
    }
    alert('Password updated successfully!');
    // this.router.navigate(['/librarian/profile']);
  }
}
