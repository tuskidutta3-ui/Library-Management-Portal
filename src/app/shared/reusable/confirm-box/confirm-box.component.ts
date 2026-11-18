import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirm-box',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, CommonModule, FormsModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './confirm-box.component.html',
  styleUrl: './confirm-box.component.scss'
})
export class ConfirmBoxComponent {
  // Track which button is currently selected (Yes or No)
  isYesSelected: boolean = true;
  constructor(public dialogRef: MatDialogRef<ConfirmBoxComponent>) { }
  ngAfterViewInit(): void {
    // Focus on "Yes" button when the dialog is initialized
    const yesButton = document.getElementById('yesButton') as HTMLElement;
    if (yesButton) {
      yesButton.focus();
    }
  }
  // Function triggered when 'Yes' is selected
  onConfirmAdd(): void {
    this.dialogRef.close(true);  // User confirmed, return true
  }
  // Function triggered when 'No' is selected (closes the dialog)
  onCancel(): void {
    this.dialogRef.close(false);  // User canceled, return false
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
}