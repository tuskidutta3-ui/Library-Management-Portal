import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeShareService {
  isHeroVisible: boolean = true;
  currentComponent: any = null;
}