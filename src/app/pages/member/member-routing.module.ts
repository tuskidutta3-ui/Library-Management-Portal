import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestBooksComponent } from './request-books/request-books.component';
import { RenewBooksComponent } from './renew-books/renew-books.component';
const routes: Routes = [
     { path: 'request-books', component: RequestBooksComponent },
     { path: 'renew-books', component: RenewBooksComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
