import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbPaginationModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
  ],
  imports: [
    MatTooltipModule,
    CommonModule,
    // BrowserModule,
    MasterRoutingModule,
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
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    NgbDatepickerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepicker,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSortModule, // Add this module to enable sorting
    MatTableModule
  ],
})
export class MasterModule { }
