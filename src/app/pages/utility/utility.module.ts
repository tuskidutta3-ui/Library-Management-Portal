import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityRoutingModule } from './utility-routing.module'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgbModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatNativeDateModule,
    LoadingComponent,
    MatCheckboxModule
  ]
})
export class UtilityModule { }
