import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MemberDashboardService {
  isHeroVisible: boolean = true;
  currentComponent: any = null;
}
