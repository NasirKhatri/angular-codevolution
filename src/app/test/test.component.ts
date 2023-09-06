import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RecordsService } from "../records.service";
import { IEmployee } from '../employee';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  //styleUrls: ['./test.component.css']
  styles: [`
    .success {
      color: green;
    }
    .danger {
      color: red;
    }
    .special {
      font-style: italic;
    }
  `],
  //providers: [RecordsService] //If we provide service here, then this service will only be available in this component, hence we provide it in app module the root module
})
export class TestComponent implements OnInit {
  public name = "Nasir";
  public siteURL = window.location.href;
  public myID = "testID";
  public hasError = false;
  public isSpecial = true;
  public greet  = "";
  public display = false;
  public color = "red";
  public array = ["Nasir", "Shadab", "Danish", "Zeeshan"];
  public employees: IEmployee[] = [];
  public errMsg = "";

  //Fetching Data from Service Records
  infoRecieved1: string[] = [];
  infoRecieved2: string[] = [];
  infoRecieved3: string[] = [];

  getInfoFromServiceClass1() {
    this.infoRecieved1 = this.rservice.getInfo1();
  }

  getInfoFromServiceClass2() {
    this.infoRecieved2 = this.rservice.getInfo2();
  }

  getInfoFromServiceClass3() {
    this.infoRecieved3 = this.rservice.getInfo3();
  }

  public date = new Date();
  @Input() public language: any;
  // can also alias as @input("language") public langName; by doing so language have been aliased as langName
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Hey Parent, Greeting from Child");
  }

  public messageClasses = {
    "success": !this.hasError,
    "danger": this.hasError,
    "special": this.isSpecial
  }

  public titleStyle = {
    color: "blue",
    fontWeight: "bold"
  }

  onClick(event: MouseEvent) {
    console.log(event);
    this.greet = "Welcome to the world of Angular"
  }

  log(value: string) {
    console.log(value);
  }

  getRemarks() {
    return `${this.name} is learning angular `
  }

  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {
    this.rservice.getEmployees()
      //.subscribe(data => this.employees = data, error => this.errMsg = error);
      .subscribe({
        next: (data) => this.employees = data,
        error: (e) => this.errMsg = e,
        complete: () => null
      })
  }

}
