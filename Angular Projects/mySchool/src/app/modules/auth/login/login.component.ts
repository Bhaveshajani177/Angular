import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isFormSubmitted = false;
  loginForm!: FormGroup;

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
      try {
        this.authService
          .loginWithEmailAndPwd(
            this.loginForm.value.email,
            this.loginForm.value.password
          )
          .then(async (res) => {
            this._snackBar.open(
              'You successfully logged in to this website',
              'ok',
              {
                horizontalPosition: 'right',
                verticalPosition: 'top',
                duration: 3000,
              }
            );

            this.resetForm();

            // set token and role
            await localStorage.setItem('token', JSON.stringify(res.user?.uid));
            await localStorage.setItem('role', 'admin');

            this.router.navigate(['dashboard/admin']);
          })
          .catch((error: Error) => {
            this._snackBar.open(error.message, 'ok', {
              horizontalPosition: 'right',
              verticalPosition: 'top',
              duration: 3000,
            });
          });
      } catch (error: any) {
        this._snackBar.open(error, 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
        });
      }
    }
  }

  signInWithGoogle() {
    try {
      this.authService.loginWithGoogle().then(async (res) => {
        this._snackBar.open(
          'You successfully logged in to this website',
          'ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          }
        );

        // set token and role
        await localStorage.setItem('token', JSON.stringify(res.user?.uid));
        await localStorage.setItem('role', 'admin');

        this.router.navigate(['dashboard/admin']);
      });
    } catch (error: any) {
      this._snackBar.open(error, 'ok', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
  }

  navigate() {
    this.router.navigate(['register'], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  // reset form
  resetForm() {
    this.isFormSubmitted = false;
    this.loginForm.reset();
  }
}
