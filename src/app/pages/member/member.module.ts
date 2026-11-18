  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { MemberRoutingModule } from './member-routing.module';
  import { RequestBooksComponent } from './request-books/request-books.component';
  import { AddRequestBooksComponent } from './request-books/add-request-books/add-request-books.component';
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
import { RenewBooksComponent } from './renew-books/renew-books.component';
import { AddRenewBooksComponent } from './renew-books/add-renew-books/add-renew-books.component';
  @NgModule({
    declarations: [
      RequestBooksComponent,
      AddRequestBooksComponent,
      RenewBooksComponent,
      AddRenewBooksComponent
    ],
    imports: [
      CommonModule,
      MemberRoutingModule,
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
  export class MemberModule { }
