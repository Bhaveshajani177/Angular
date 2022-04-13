import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPersonalDetails } from '../../../shared/models/ipersonal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {
  @Output() _gotoNextStep: EventEmitter<IPersonalDetails> =
    new EventEmitter<IPersonalDetails>();

  personalDetailsForm!: FormGroup;
  isFormSubmitted = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize form
  initializeForm() {
    this.personalDetailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
  }

  // getter | personal details form
  get _personalDetailsForm() {
    return this.personalDetailsForm.controls;
  }

  // login method
  submitPersonalDetailsForm() {
    this.isFormSubmitted = true;
    if (this.personalDetailsForm.valid) {
      this._gotoNextStep.emit(this.personalDetailsForm.value);
    }
  }
}
