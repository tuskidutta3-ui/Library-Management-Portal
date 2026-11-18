import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import { NgbPaginationModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { TransactionRoutingModule } from './transaction-routing.module';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
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
    MatCheckboxModule
  ]
})
export class TransactionModule { }
