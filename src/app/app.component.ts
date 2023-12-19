import { Component } from '@angular/core';
import { LoginControllerService } from './services/login-control/login-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ls: LoginControllerService) {}
  title = 'angular-codevolution';
  public language = "English";
  public message = "";
  public isLogin: boolean = this.ls.isAuthenticated()

  login() {
    this.ls.login();
    this.isLogin = true;
  }

  logOut() {
    this.ls.logout();
    this.isLogin = false;
  }

}
