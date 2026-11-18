import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
@Component({
  selector: 'app-bill-confirm-box',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './bill-confirm-box.component.html',
  styleUrl: './bill-confirm-box.component.scss'
})
export class BillConfirmBoxComponent {
  // Track which button is currently selected (Yes or No)
  isYesSelected: boolean = true;
  dialogTitle: string;
  dialogMessage: string;
  constructor(
    public dialogRef: MatDialogRef<BillConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string } // Inject MAT_DIALOG_DATA
  ) {
    this.dialogTitle = data.title;
    this.dialogMessage = data.message;
  }
  ngAfterViewInit(): void {
    // Focus on "Yes" button when the dialog is initialized
    const yesButton = document.getElementById('yesButton') as HTMLElement;
    if (yesButton) {
      yesButton.focus();
    }
  }
  onConfirmAdd(): void {
    this.dialogRef.close(true); // Return true on confirmation
  }
  onCancel(): void {
    this.dialogRef.close(false); // Return false on cancellation
  }
  // Handle Arrow Left key (select Yes)
  onArrowLeft() {
    this.isYesSelected = true;
    const yesButton = document.getElementById('yesButton') as HTMLElement;
    yesButton?.focus();  // Set focus to "Yes" button
  }
  // Handle Arrow Right key (select No)
  onArrowRight() {
    this.isYesSelected = false;
    const noButton = document.getElementById('noButton') as HTMLElement;
    noButton?.focus();  // Set focus to "No" button
  }
  // Handle Enter key (trigger the click of the selected button)
  onEnter() {
    if (this.isYesSelected) {
      this.onConfirmAdd();  // Confirm Yes
    } else {
      this.onCancel();  // Confirm No and close dialog
    }
  }
  onConfirm() {
  }
}
