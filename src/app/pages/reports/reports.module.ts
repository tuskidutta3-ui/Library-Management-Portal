import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbPaginationModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
  ], 
  imports: [
    CommonModule,
    ReportsRoutingModule,
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
    NgbTimepickerModule,
    MatCheckboxModule
  ]
})
export class ReportsModule { }
