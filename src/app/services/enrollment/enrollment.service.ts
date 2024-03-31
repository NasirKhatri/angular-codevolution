import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = "http://localhost:3000/enroll";

  constructor(private _http: HttpClient) {}

  enroll(user: User) {
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  mergeMap(data: any) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(`Resolved ${data}`);
      }, 1000)
    })
  }

  switchMap(data: any) {
    console.log(data);
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        res("recieved request to search " + data)
      }, 1000);
    })
  }
}
