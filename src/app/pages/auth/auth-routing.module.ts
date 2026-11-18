import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNewFinYearComponent } from './add-new-fin-year/add-new-fin-year.component';
import { FinYearChangeComponent } from './fin-year-change/fin-year-change.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetForgetPasswordComponent } from './reset-forget-password/reset-forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component'; 
import { MagazineComponent } from './magazine/magazine.component';
import { OfficeLoginComponent } from './office-login/office-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-forgot-password/:token', component: ResetForgetPasswordComponent },
  { path: 'fin-year-change', component: FinYearChangeComponent },
  { path: 'add-new-fin-year', component: AddNewFinYearComponent },
  { path: 'new-registration', component: NewRegistrationComponent }, 
  { path: 'magazine', component: MagazineComponent }, 
  { path: 'office-login', component: OfficeLoginComponent }, 
  { path: 'member-login', component: MemberLoginComponent }, 
  { path: 'terms-and-condition', component: TermsAndConditionComponent }, 
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
