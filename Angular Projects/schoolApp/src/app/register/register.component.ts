import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Regex } from '../utility/regex';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // consts
  isFormSubmitted = false;
  inSubmission = false;

  // FormGroups
  registrationForm!: FormGroup;

  constructor(private regex: Regex, private authService: AuthService) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  // prepare form
  initializeForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(this.regex.onlyDigit),
      ]),
      gender: new FormControl('', Validators.required),
      passwords: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
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

  // confirm password validation
  passwordShouldMatch() {
    const password = this._passwords?.get('password')?.value;
    const confirmPassValue = this._passwords?.get('confirmPassword')?.value;

    if (password !== confirmPassValue) {
      this._passwords
        ?.get('confirmPassword')
        ?.setValidators([Validators.required, Validators.pattern(password)]);
      this._passwords?.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  // new registration method
  async register() {
    this.isFormSubmitted = true;
    this.inSubmission = true;

    // if form valid
    if (this.registrationForm.valid) {
      try {
        await this.authService.createUser(this.registrationForm.value);
      } catch (e) {
        alert(e);
        this.inSubmission = false;
        return;
      }

      // if request successful
      alert('Success! Your account has been created.');
      this.resetRegisterForm();
    } else {
      // if form not valid
      alert('Form is not valid');
      this.inSubmission = false;
    }
  }

  // reset form
  resetRegisterForm() {
    this.registrationForm.reset();
    this.isFormSubmitted = false;
    this.inSubmission = false;
  }
}
