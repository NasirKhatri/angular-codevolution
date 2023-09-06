import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { forbiddenFormValidator } from '../shared/userName.validator';
import { PasswordValidator } from '../shared/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  //option 1
  //we are required to create form controls manually

  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     postalCode: new FormControl('')
  //   })
  // });


  //option 2
  //Form builder will generate form controls for us with lesser code
  //note form builder is a service, hence we are required to inject it
  registrationForm = this.fb.group({
    //userName: ['Nasir', Validators.required], // if only one validation is required
    userName: ['Nasir', [Validators.required, Validators.minLength(3), forbiddenFormValidator(/admin/)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
    email: [''],
    subscribe: [false],
  }, {validator: PasswordValidator})
  
  loadAPI() {
    this.registrationForm.setValue({ //when setting value using setValue we are required to pass complete structure,
      userName: "Nasir",             // if we want to set only few use "patchValue({})" instead 
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Karachi',
        state: 'Sindh',
        postalCode: '74200'
      },
      email: "",
      subscribe: false,
    })
  }
}
