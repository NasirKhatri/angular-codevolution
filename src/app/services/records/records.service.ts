import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Nasir", "Khatri"];
  info2: string[] = ["Shadab", "Ahmed"];
  info3: string[] = ["Danish", "Ahmed"];

  getInfo1(): string[] {
    return this.info1;
  }
  
  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  private _url = "/assets/employees.json"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(()  => error.message || "Server Error")
  }
}
