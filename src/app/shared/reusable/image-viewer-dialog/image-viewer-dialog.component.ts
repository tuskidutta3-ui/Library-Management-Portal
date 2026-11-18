import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-image-viewer-dialog',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './image-viewer-dialog.component.html',
  styleUrl: './image-viewer-dialog.component.scss'
})
export class ImageViewerDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { image: string; isDeleteButtonEnabled: boolean },
    public dialogRef: MatDialogRef<ImageViewerDialogComponent>,
  ) { }
  // Method to delete the photo
  deletePhoto(): void {
    this.dialogRef.close({ delete: true });
  }
}