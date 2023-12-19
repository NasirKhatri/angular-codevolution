import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDynamicForm, IFormControl, IValidator } from '../Interfaces/dynamicFormInterface';

@Component({
  selector: 'app-dynamic-form-template',
  templateUrl: './dynamic-form-template.component.html',
  styleUrls: ['./dynamic-form-template.component.css']
})
export class DynamicFormTemplateComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  @Input() form!: IDynamicForm;
  dynamicFormGroup: FormGroup = this.fb.group({}, {updateOn: 'submit'});

  ngOnInit(): void {
    if(this.form.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {
        let controlValidators: any = [];
        if(control.validators) {
          control.validators.forEach((validator: IValidator) => {
            if(validator.validatorName === "required") controlValidators.push(Validators.required);
            if(validator.validatorName === "email") controlValidators.push(Validators.email);
            if(validator.validatorName === "minlength") controlValidators.push(Validators.minLength(validator.minLength as number));
            if(validator.validatorName === "maxlength") controlValidators.push(Validators.maxLength(validator.maxLength as number));
            //if(validator.validatorName === "pattern") controlValidators.push(Validators.required);
          })
        }
        formGroup[control.name] = [control.value || "", controlValidators];
        //console.log(`Adding control: ${control.name}`);
        //this.dynamicFormGroup.addControl(control.name, this.fb.control(control.value || "", controlValidators));
      })
      this.dynamicFormGroup = this.fb.group(formGroup);
      console.log(this.dynamicFormGroup);
    }
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }

  onReset() {
    this.dynamicFormGroup.reset();
  }

  getValidationError(control: IFormControl): string {
    const myFormControl = this.dynamicFormGroup.get(control.name);
    let errorMessage = ''
    control.validators.forEach((val) => {
      if(myFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message;
      }
    })
    return errorMessage;
  }
}
