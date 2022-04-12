import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted = false;
  registrationForm!: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

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

    if (this.registrationForm.valid) {
      try {
        this.authService
          .createNewUser(this.registrationForm.value)
          .then((res) => {
            this._snackBar.open('Registration completed successfully', 'ok', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
            });
            this.resetForm();
            this.navigate();
          })
          .catch((error: Error) => {
            this._snackBar.open(error.message, 'ok', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
            });
            return;
          });
      } catch (error: any) {
        this._snackBar.open(error, 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
        });
        return;
      }
    }
  }

  navigate() {
    this.router.navigate(['login'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  // reset form
  resetForm() {
    this.isFormSubmitted = false;
    this.registrationForm.reset();
  }
}
