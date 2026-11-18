import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-payment-success-dialog',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './payment-success-dialog.component.html',
  styleUrl: './payment-success-dialog.component.scss'
})
export class PaymentSuccessDialogComponent {
  isSpinnerVisible: boolean = true; // Controls spinner visibility
  isMessageVisible: boolean = false; // Controls success message visibility
  isLoading = true;
  transactionId = "1234567890";
  orderId = "987654321";
  paymentDate = new Date().toLocaleDateString();
  amountPaid = 5000;
  constructor(public dialogRef: MatDialogRef<PaymentSuccessDialogComponent>) { }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Wait 3 seconds before showing payment success
  }
  // Function triggered when 'No' is selected (closes the dialog)
  onClose(): void {
    this.dialogRef.close(false);  // User canceled, return false
  }
}
