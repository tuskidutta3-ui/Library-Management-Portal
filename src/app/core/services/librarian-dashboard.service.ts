import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LibrarianDashboardService {
  isHeroVisible: boolean = true;
  currentComponent: any = null;
}
