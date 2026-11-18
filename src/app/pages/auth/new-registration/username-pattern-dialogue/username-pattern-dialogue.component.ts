import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-username-pattern-dialogue',
  standalone: false,
  templateUrl: './username-pattern-dialogue.component.html',
  styleUrl: './username-pattern-dialogue.component.scss'
})
export class UsernamePatternDialogueComponent {
  constructor(private dialogRef: MatDialogRef<UsernamePatternDialogueComponent>) { }
  closeDialog() {
    this.dialogRef.close();
  }
}
