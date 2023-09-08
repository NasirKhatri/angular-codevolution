import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-interaction',
  templateUrl: './parent-interaction.component.html',
  styleUrls: ['./parent-interaction.component.css']
})
export class ParentInteractionComponent implements AfterViewInit {
  userName: string = "";
  private _customerName: string = "";
  @ViewChild('userNameRef') userNameElementRef!: ElementRef;
  login = true

  ngAfterViewInit(): void {
    this.userNameElementRef.nativeElement.focus();
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === 'Nasir') {
      alert(`Welcome Back ${this._customerName}`)
    }
  }

  greet(value: string) {
    if(value === 'Nasir') {
      this.userName = value;
      alert(`Welcome ${this.userName}`)
    }


  }
}
