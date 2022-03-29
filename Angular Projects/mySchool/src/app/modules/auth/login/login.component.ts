import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isFormSubmitted = false;
  loginForm!: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
    // this.router.navigate(['dashboard/student']);
  }

  navigate() {
    this.router.navigate(['register'], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
