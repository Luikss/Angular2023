import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  submission = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submission.email = this.form.value.email;
    this.submission.subscription = this.form.value.subscription;
    this.submission.password = this.form.value.password;
    this.form.reset();
    this.form.form.patchValue({
      subscription: this.defaultSubscription
    });
    this.submitted = true;
  }
}
