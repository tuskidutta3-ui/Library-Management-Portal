import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-view-book-image',
  standalone: false,
  templateUrl: './view-book-image.component.html',
  styleUrl: './view-book-image.component.scss',
})
export class ViewBookImageComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewBookImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
