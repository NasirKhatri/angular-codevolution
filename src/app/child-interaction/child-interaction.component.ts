import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-interaction',
  templateUrl: './child-interaction.component.html',
  styleUrls: ['./child-interaction.component.css']
})
export class ChildInteractionComponent implements OnChanges {
  @Input() login!: boolean;
  message: string = "";
  private _login!: boolean;
  // get login() {
  //   return this._login;
  // }

  // @Input()
  // set login(value) {
  //   this._login = value
  //   if(value === true) {
  //     this.message = "Welcome User"
  //   } else {
  //     this.message = "Please login"
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    const loginValue = changes['login'];
    if(loginValue.currentValue === true) {
      this.message = "Welcome User"
    } else {
      this.message = "Please login"
    }
  }

  greet() {
    alert("Parent called child method using template reference")
  }

  
}
