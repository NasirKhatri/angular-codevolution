import { Component } from '@angular/core';
import { User } from '../services/user';
import { EnrollmentService } from '../services/enrollment/enrollment.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  public topics = ["Angular", "React", "Vue"];
  public topicHasError = true;
  public submitted = false;
  public errMsg = "";
  userModel = new User('Nasir', 'nasir@gmail.com', 1234567, 'default', 'morning', true);
  validateTopic(value: any) {
    value === "default" ? this.topicHasError = true : this.topicHasError = false;
  }

  constructor(private _enrollmentService: EnrollmentService) { }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe({
        next: (data => console.log(data)),
        error: (error => this.errMsg = error.statusText)
      }
      )
  }

}
