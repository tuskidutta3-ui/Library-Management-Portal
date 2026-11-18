import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessRoutingModule } from './process-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
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
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
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
    MatCheckbox
  ]
})
export class ProcessModule { }
