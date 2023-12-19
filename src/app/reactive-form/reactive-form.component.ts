import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenFormValidator } from '../shared/userName.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../services/registration/registration.service';
import { IDeactivateComponent } from '../services/routing-guard/routing-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit, IDeactivateComponent {
  registrationForm!: FormGroup;

  canExit() {
    if(!this.registrationForm.pristine) {
      return confirm('Are you sure you want to leave this page?')
    } else {
      return true;
    }
    
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
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
      alternateEmails: this.fb.array([]),
      subscribe: [false],
    }, {validator: PasswordValidator})

    this.registrationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue => {
        const email = this.registrationForm.get('email');
        if(checkedValue) {
          email?.setValidators(Validators.required);
        }
        else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity()
      }
    )
    console.log(this.registrationForm);
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
  // registrationForm = this.fb.group({
  //   //userName: ['Nasir', Validators.required], // if only one validation is required
  //   userName: ['Nasir', [Validators.required, Validators.minLength(3), forbiddenFormValidator(/admin/)]],
  //   password: [''],
  //   confirmPassword: [''],
  //   address: this.fb.group({
  //     city: [''],
  //     state: [''],
  //     postalCode: [''],
  //   }),
  //   email: [''],
  //   subscribe: [false],
  // }, {validator: PasswordValidator})
  
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
      alternateEmails: this.fb.array([]),
    })
  }

  onSubmit() {
    console.log('submit button is clicked');
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe({
      next: (response) => console.log('Success'),
      error: (error) => console.error('Error', error)
    })
  }
}
