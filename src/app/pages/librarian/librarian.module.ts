import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianRoutingModule } from './librarian-routing.module'; 
import { ManageBboksComponent } from './manage-bboks/manage-bboks.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardHeader, MatCardModule } from '@angular/material/card';
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
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { IssueBooksComponent } from './Issue-books/issue-books/issue-books.component'; 
import { AddManageBooksComponent } from './manage-bboks/add-manage-books/add-manage-books.component';
import { RegisterNewMemberComponent } from './register-new-member/register-new-member.component';
import { AddRegisterNewMemberComponent } from './register-new-member/add-register-new-member/add-register-new-member.component';
import { OverdueBooksComponent } from './overdue-books/overdue-books.component'; 
import { ViewBookImageComponent } from './manage-bboks/add-manage-books/view-book-image/view-book-image.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BooksCategoryComponent } from './books-category/books-category.component';
import { AddBooksCategoryComponent } from './books-category/add-books-category/add-books-category.component';
import { PendingRenewalReqComponent } from './pending-renewal-req/pending-renewal-req.component';
import { AddPendingRenewalReqComponent } from './pending-renewal-req/add-pending-renewal-req/add-pending-renewal-req.component';
import { ApproveRejectRequestComponent } from './Issue-books/approve-reject-request/approve-reject-request.component';
@NgModule({
  declarations: [
    ManageBboksComponent,
    AddManageBooksComponent,
   IssueBooksComponent, 
   RegisterNewMemberComponent,
   AddRegisterNewMemberComponent,
   OverdueBooksComponent, 
   ViewBookImageComponent,
   ChangePasswordComponent,
   ProfileManagementComponent,
   BooksCategoryComponent,
   AddBooksCategoryComponent,
   PendingRenewalReqComponent,
   AddPendingRenewalReqComponent,
   ApproveRejectRequestComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule,
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
    MatCardModule
  ]
})
export class LibrarianModule { }
