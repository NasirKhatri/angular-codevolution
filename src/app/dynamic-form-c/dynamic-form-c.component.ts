import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-c',
  templateUrl: './dynamic-form-c.component.html',
  styleUrls: ['./dynamic-form-c.component.css']
})

export class DynamicFormCComponent implements OnInit{

  constructor(private http: HttpClient) {}
  public jsonFormData: any;

  ngOnInit() {
    this.http.get<any>('assets/dynamicForm.json').subscribe(res => this.jsonFormData = res);
  }

  
}
