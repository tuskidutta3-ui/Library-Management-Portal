import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DarkModeServicesService {
  // private readonly DARK_MODE_KEY = 'darkModeEnabled';
  // isDarkMode = false;
  // constructor() {
  //   this.loadInitialState();
  // }
  // private loadInitialState() {
  //   const savedMode = localStorage.getItem(this.DARK_MODE_KEY);
  //   this.isDarkMode = savedMode === 'true';
  //   this.applyTheme();
  // }                                                                                                                   
  // toggleDarkMode() {
  //   this.isDarkMode = !this.isDarkMode;   
  //   localStorage.setItem(this.DARK_MODE_KEY, String(this.isDarkMode));
  //   this.applyTheme();
  // }
  // private applyTheme() {
  //   if (this.isDarkMode) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   } else {
  //     document.documentElement.removeAttribute('data-theme');
  //   }
  // }
}
