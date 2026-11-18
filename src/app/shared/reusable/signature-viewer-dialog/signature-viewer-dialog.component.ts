import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-signature-viewer-dialog',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './signature-viewer-dialog.component.html',
  styleUrl: './signature-viewer-dialog.component.scss'
})
export class SignatureViewerDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { sig: string; isDeleteButtonEnabled: boolean },
    public dialogRef2: MatDialogRef<SignatureViewerDialogComponent>,
  ) { }
   // Method to delete the photo
   deleteSig(): void {
    this.dialogRef2.close({ delete: true });
  }
}
