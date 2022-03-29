import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted = false;
  registrationForm!: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize form
  initializeForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  // getter | registrationForm
  get _registrationForm() {
    return this.registrationForm.controls;
  }

  // check confirm password method
  passwordShouldMatch() {
    const password = this.registrationForm.get('password')?.value;
    const confirmPassValue =
      this.registrationForm.get('confirmPassword')?.value;

    if (password !== confirmPassValue) {
      this.registrationForm
        ?.get('confirmPassword')
        ?.setValidators([Validators.required, Validators.pattern(password)]);
      this.registrationForm?.get('confirmPassword')?.updateValueAndValidity();
    }
  }

  // register method
  register() {
    this.isFormSubmitted = true;
  }

  navigate() {
    this.router.navigate(['login'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
