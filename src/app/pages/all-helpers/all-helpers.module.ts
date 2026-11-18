import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
// Remove BookCodeSearchHelperComponent from declarations since it's standalone
// import { BookCodeSearchHelperComponent } from './book-code-search-helper/book-code-search-helper.component';
import { LoadingComponent } from '../../shared/reusable/loading/loading.component';
@NgModule({
  declarations: [
    // Remove BookCodeSearchHelperComponent from here
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    LoadingComponent,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    NgbPaginationModule,
  ],
})
export class AllHelpersModule {}