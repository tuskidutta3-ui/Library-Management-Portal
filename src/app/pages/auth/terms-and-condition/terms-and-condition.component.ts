import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-terms-and-condition',
  standalone: false, 
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.scss'
})
export class TermsAndConditionComponent {
 constructor(private dialogRef: MatDialogRef<TermsAndConditionComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
