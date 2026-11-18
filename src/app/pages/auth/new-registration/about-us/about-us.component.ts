import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-about-us',
  standalone: false, 
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  constructor(private dialogRef: MatDialogRef<AboutUsComponent>) {}
  closeDialog() {
    this.dialogRef.close();
  }
}
