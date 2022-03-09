import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // registration form controls
  registrationForm!: FormGroup;
  isFormSubmitted = false;

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {}

  // prepare form
  initializeForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(13),
      ]),
      gender: new FormControl('', Validators.required),
    });
  }

  get _registrationForm() {
    return this.registrationForm.controls;
  }

  registre() {
    this.isFormSubmitted = true;
    // console.log(this.registrationForm.valid);
    // console.log(this.registrationForm.value);
    // this.registrationForm.reset();
  }
}
