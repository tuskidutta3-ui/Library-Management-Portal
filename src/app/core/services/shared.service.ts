import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share, OperatorFunction, pipe, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { IChildMenu } from '../models/interface/common.interface';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public financialYear: number | null = null;
  public authToken: string | null = null;
  public isLoggedIn: boolean = false;
  // TODO: Need to change when login is implemented.
  public groupId: number = 0;
  public moduleAccess: IChildMenu[] = [];
  private loaderToggleState = new BehaviorSubject<boolean>(false);
  private finYearChange$ = new BehaviorSubject<null | number>(null);
  public getloaderState(): Observable<boolean> {
    return this.loaderToggleState.asObservable().pipe(
      share()
    );
  }
  public showLoader(): void {
    // console.log('inside showLoader');
    this.loaderToggleState.next(true);
  }
  public hideLoader(): void {
    this.loaderToggleState.next(false);
  }
  /**
   * 
   * @param dbounceTime debounce time in milliseconds
   * @param minChars minimum typed chars, after which API call triggered
   * @returns OperatorFunction<any, string>
   */
  public typeaheadOperartor(dbounceTime = 300, minChars = 2): OperatorFunction<any, string> {
    return pipe(
      debounceTime(dbounceTime),
      distinctUntilChanged(),
      filter(term => (term as string).length > minChars)
    );
  }
  public typeaheadGradeOperartor(dbounceTime = 300, minChars = 1): OperatorFunction<any, string> {
    return pipe(
      debounceTime(dbounceTime),
      distinctUntilChanged(),
      filter(term => (term as string).length > minChars)
    );
  }
  public typeaheadExpOperartor(dbounceTime = 300, minChars = 0): OperatorFunction<any, string> {
    return pipe(
      debounceTime(dbounceTime),
      distinctUntilChanged(),
      filter(term => (term as string).length > minChars)
    );
  }
  public financialYearChange(year: number | null): void {
    this.financialYear = year;
    this.finYearChange$.next(year);
  }
  public getFinancialYearChange(): Observable<null | number> {
    return this.finYearChange$.asObservable();
  }
}
