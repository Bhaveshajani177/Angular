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
      passwords: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      }),
    });
  }

  // getters
  get _registrationForm() {
    return this.registrationForm.controls;
  }

  get _passwords() {
    return this.registrationForm.get('passwords');
  }

  passwordShouldMatch(event: any) {
    const password = this._passwords?.get('password')?.value;
    const confirmPassValue = event.target.value;
    this._passwords
      ?.get('confirmPassword')
      ?.setValidators([Validators.required, Validators.pattern(password)]);
  }

  registre() {
    this.isFormSubmitted = true;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // delete this.registrationForm.value.passwords.confirmPassword;
      this.registrationForm.reset();
      this.isFormSubmitted = false;
    }
  }
}
