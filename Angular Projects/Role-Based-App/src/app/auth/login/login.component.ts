import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isFormSubmitted = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize form
  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // getter | loginForm
  get _loginForm() {
    return this.loginForm.controls;
  }

  // login method
  login() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
    }
  }

  // reset form
  resetForm() {
    this.isFormSubmitted = false;
    this.loginForm.reset();
  }
}
