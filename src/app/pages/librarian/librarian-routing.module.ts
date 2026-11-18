import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBboksComponent } from './manage-bboks/manage-bboks.component';
import { IssueBooksComponent } from './Issue-books/issue-books/issue-books.component';
import { RegisterNewMemberComponent } from './register-new-member/register-new-member.component';
import { OverdueBooksComponent } from './overdue-books/overdue-books.component';
import { ViewBookImageComponent } from './manage-bboks/add-manage-books/view-book-image/view-book-image.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { BooksCategoryComponent } from './books-category/books-category.component';
import { PendingRenewalReqComponent } from './pending-renewal-req/pending-renewal-req.component';
const routes: Routes = [
   { path: 'manage-books', component: ManageBboksComponent },
   { path: 'issue-books', component: IssueBooksComponent },
   { path: 'register-new-member', component: RegisterNewMemberComponent },
   { path: 'overdue-books', component: OverdueBooksComponent },
   { path: 'view-book-image', component: ViewBookImageComponent },
   { path: 'profile-management', component: ProfileManagementComponent },
   { path: 'change-password', component: ChangePasswordComponent },
   { path: 'books-category', component: BooksCategoryComponent },
   { path: 'pending-renewal-req', component: PendingRenewalReqComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarianRoutingModule { }
