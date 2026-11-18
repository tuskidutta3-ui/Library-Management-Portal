import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { DarkModeServicesService } from '../Service/dark-mode-services.service';
@Component({
  selector: 'app-dark-mode-toggle', 
  standalone: true,  // Mark as standalone
  imports: [CommonModule],
  template: `
    <!-- <button class="toggle-mode" (click)="toggleDarkMode()" 
            [title]="darkMode.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
      <span *ngIf="darkMode.isDarkMode">☀️</span>
      <span *ngIf="!darkMode.isDarkMode">🌙</span>
    </button> -->
  `,
  // styles: [`
  //   .toggle-mode {
  //     // background: transparent;
  //     background-color: white;
  //     border-radius:50%;
  //     border: none;
  //     color: inherit;
  //     cursor: pointer;
  //     font-size: 1rem;
  //     padding: 0.5rem 1rem;
  //     display: flex;
  //     align-items: center;
  //     gap: 0.5rem;
  //     margin-top:8%
  //   }
  // `]
})
export class DarkModeToggleComponent {
  // constructor(public darkMode: DarkModeServicesService) {}
  // toggleDarkMode() {
  //   this.darkMode.toggleDarkMode();
  // }
}
