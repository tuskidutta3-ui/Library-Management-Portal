import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-why-register',
  standalone: false, 
  templateUrl: './why-register.component.html',
  styleUrl: './why-register.component.scss'
})
export class WhyRegisterComponent {
  constructor(private router: Router, private dialogRef: MatDialogRef<WhyRegisterComponent>) {}
  OpenRegistration(){
    this.router.navigate(['/auth/new-registration']);
    this.dialogRef.close(); // Close the dialog box
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
