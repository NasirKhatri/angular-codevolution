import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  auth_token = 'fsdkfsadjklfasdflknasdfklsadfadfkjasdfkasdfkjl;asdf'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenIzedReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    })

    return next.handle(tokenIzedReq);
  }
}
