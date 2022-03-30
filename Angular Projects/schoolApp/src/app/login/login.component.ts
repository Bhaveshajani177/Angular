import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RegisterValidators } from '../core/validators/register-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // consts
  isFormSubmitted = false;
  inSubmission = false;
  errorMsg: any;

  // FormGroups
  loginForm!: FormGroup;

  constructor(
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  // prepare form
  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]),
    });
  }

  // getters
  get _loginForm() {
    return this.loginForm.controls;
  }

  async login() {
    this.ngxService.start();
    this.isFormSubmitted = true;
    this.inSubmission = true;

    // if form valid
    if (this.loginForm.valid) {
      try {
        await this.auth.signInWithEmailAndPassword(
          this.loginForm.value.email,
          this.loginForm.value.password
        );
      } catch (e) {
        this.errorMsg = e;
        this.toastr.error(this.errorMsg, 'Failed!');
        this.inSubmission = false;
        this.ngxService.stop();
        return;
      }

      // if request successful
      this.toastr.success('You are now logged in', 'Success!');
      this.resetForm();
      this.ngxService.stop();
    } else {
      // if form not valid
      this.toastr.error('Form is not valid', 'Failed!');
      this.inSubmission = false;
      this.ngxService.stop();
    }
  }

  // reset form
  resetForm() {
    this.loginForm.reset();
    this.isFormSubmitted = false;
    this.inSubmission = false;
  }
}
