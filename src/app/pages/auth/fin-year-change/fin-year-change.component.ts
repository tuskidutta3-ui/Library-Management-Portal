import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Fin_year_Change } from '../../../core/models/interface/auth.interfaces';
import { AuthStoreService } from '../../../core/services/auth.store.service';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { SharedService } from '../../../core/services/shared.service';
@Component({
  selector: 'app-fin-year-change',
  standalone: false,
  templateUrl: './fin-year-change.component.html',
  styleUrl: './fin-year-change.component.scss'
})
export class FinYearChangeComponent {
  public finYearChangeForm!: FormGroup;
  private readonly apiErrorMessage = 'Request failed to execute';
  public finYearListRecords: any
  // Lazily inject the services
  private fb = inject(FormBuilder);
  private userProfileService = inject(UserProfileService);
  private readonly sharedService = inject(SharedService);
  private authStoreService = inject(AuthStoreService);
  private router = inject(Router);
  private toastrService = inject(ToastrService);
  private commonService = inject(CommonService);
  constructor() { }
  ngOnInit(): void {
    this.forgotPasswordForm();
    this.finYearChangeForm.controls['userId'].setValue(this.userProfileService.getUserId())
    this.getFinYearList()
  }
  private forgotPasswordForm(): void {
    this.finYearChangeForm = this.fb.group({
      userId: [0],
      financialYear: ['', [Validators.required]],
    })
  }
  public isFieldInvalid(controlName: string): boolean | null {
    return this.finYearChangeForm.get(controlName)!.invalid && this.finYearChangeForm.get(controlName)!.dirty && this.finYearChangeForm.get(controlName)!.touched;
  }
  finYearChangeHandler() {
    this.sharedService.showLoader();
    const finYearChangePayload: Fin_year_Change = this.finYearChangeForm.value;
    const finYearChange$ = lastValueFrom(this.authStoreService.changeFinancialYear(finYearChangePayload));
    finYearChange$
      .then((response: any) => {
        if (response.status === 'success') {
          alert("Financial Year Changed To " + response.result)
          this.toastrService.success('Financial Year Chnaged Succesfully', 'Success', environment.toastrConfig);
          this.router.navigate(['/app']);
        }
        else if (response.status === 'error') {
          this.toastrService.error(response.message, 'Error', environment.toastrConfig);
        }
        else {
          this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
        }
      }
      )
      .catch(() => {
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
      })
      .finally(() => {
        this.sharedService.hideLoader();
      })
  }
  private getFinYearList(): void {
    const payload = {
      "finYear": '2024-2025'
    }
    const finYearList$ = lastValueFrom(this.commonService.getFinYear(payload));
    finYearList$
      .then((response: any) => {
        this.finYearListRecords = ('success' === response.status) ? response.result : [];
      }
      )
      .catch(() => {
        this.finYearListRecords = [];
        this.toastrService.error(this.apiErrorMessage, 'Error', environment.toastrConfig);
      })
  }
}
