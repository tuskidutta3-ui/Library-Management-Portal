import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-print-pdf',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './print-pdf.component.html',
  styleUrl: './print-pdf.component.scss'
})
export class PrintPdfComponent {
  constructor(
    private dialogRef: MatDialogRef<PrintPdfComponent>
  ) { }
  closeDialog(): void {
    console.log('Dialog closed manually');  // Log to ensure the function is called
    this.dialogRef.close();  // Close the dialog without any action
  }
  print(action: string): void {
    console.log('Dialog action selected:', action);  // Log the action to ensure it's correctly passed
    this.dialogRef.close(action);  // Close the dialog and pass the action value
  }
  @HostListener('document:keydown.enter', ['$event'])
  preventEnter(event: KeyboardEvent) {
    event.preventDefault();
  }
}
