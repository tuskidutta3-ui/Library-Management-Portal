import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
@Component({
  selector: 'app-add-new-fin-year',
  standalone: false,
  templateUrl: './add-new-fin-year.component.html',
  styleUrl: './add-new-fin-year.component.scss'
})
export class AddNewFinYearComponent {
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  private toastrService = inject(ToastrService);
  private authStoreService = inject(AuthStoreService);
  private router = inject(Router);
  private userProfileService = inject(UserProfileService);
  constructor() { }
  onSubmit() {
    const payload = {
      'finYear': '2024-2025'
    }
    const bankAddResponse = this.authStoreService.CreateNewFinYear(payload);
    lastValueFrom(bankAddResponse).then(
      (addResponse: any) => {
        if (addResponse.status === 'success') {
          this.toastrService.success('Financial Year Added Successfully', 'Success', environment.toastrConfig);
          this.router.navigate(['/app']);
          // window.location.reload()//reload the page 
        }
        else if (addResponse.status === 'error') {
          this.toastrService.error(addResponse.message, 'error', environment.toastrConfig);
        }
        else if (addResponse.status === 'warning') {
          this.toastrService.warning(addResponse.message, 'warning', environment.toastrConfig);
        }
        else {
          this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
        }
      }
    )
      .catch(() => {
        this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
      })
  }
}
