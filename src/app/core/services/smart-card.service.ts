import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { IErrorResponse, ISuccessResponse, IWriteSmartCardPayload } from '../models/interface/smart-card-interface';
@Injectable({
  providedIn: 'root'
})
export class SmartCardService {
  constructor(private http: HttpClient) { }
  public writeSmartCard(payload: IWriteSmartCardPayload): Observable<ISuccessResponse | IErrorResponse> {
    const apiUrl = `${environment.smartCardEndpoint}/api/smartcard/WriteSmartCard`;
    return this.http.post<ISuccessResponse | IErrorResponse>(apiUrl, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }
  public readSmartCard(): Observable<ISuccessResponse | IErrorResponse> {
    const apiUrl = `${environment.smartCardEndpoint}/api/smartcard/ReadSmartCard`; // Replace with your actual endpoint
    return this.http.post<ISuccessResponse | IErrorResponse>(apiUrl, {}, { // Assuming payload is an empty object
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }
  public GetComputerName(): Observable<any> {
    const apiUrl = `${environment.smartCardEndpoint}/api/smartcard/GetComputerName`; // Replace with your actual endpoint
    return this.http.post<any>(apiUrl, {}, { // Assuming payload is an empty object
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }
  // Error handling method
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
