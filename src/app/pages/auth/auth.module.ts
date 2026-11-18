import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewFinYearComponent } from './add-new-fin-year/add-new-fin-year.component';
import { FinYearChangeComponent } from './fin-year-change/fin-year-change.component';
import { ResetForgetPasswordComponent } from './reset-forget-password/reset-forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbPaginationModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardHeader, MatCardModule } from '@angular/material/card';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { AboutUsComponent } from './new-registration/about-us/about-us.component'; 
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { WhyRegisterComponent } from './login/why-register/why-register.component';
import { MagazineComponent } from './magazine/magazine.component';
import { OfficeLoginComponent } from './office-login/office-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { UsernamePatternDialogueComponent } from './new-registration/username-pattern-dialogue/username-pattern-dialogue.component';   
@NgModule({
  declarations: [
    LoginComponent,
    AddNewFinYearComponent,
    FinYearChangeComponent,
    ResetForgetPasswordComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    NewRegistrationComponent,
    AboutUsComponent, 
    TermsAndConditionComponent,
    WhyRegisterComponent,
    MagazineComponent,
    OfficeLoginComponent,
    MemberLoginComponent,
    UsernamePatternDialogueComponent, 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    LoadingComponent,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    LoadingComponent,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButton,
    MatMenuModule,
    MatInput,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    LoadingComponent,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButton,
    MatMenuModule,
    MatInput,
    MatCardHeader,
    MatCardModule, 
  ]
})
export class AuthModule { }
