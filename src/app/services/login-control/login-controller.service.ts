import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginControllerService {
  private _loginState = false;

  login() {
    this._loginState = true;
  }

  logout() {
    this._loginState = false;
  }

  isAuthenticated() {
    return this._loginState;
  }

  constructor() { }
}
