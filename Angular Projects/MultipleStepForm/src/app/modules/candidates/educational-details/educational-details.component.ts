import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEducationalDetails } from '../../../shared/models/ieducational-details';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css'],
})
export class EducationalDetailsComponent implements OnInit {
  @Output() _submitEducationalDetails: EventEmitter<IEducationalDetails> =
    new EventEmitter<IEducationalDetails>();

  educationalDetailsForm!: FormGroup;
  isFormSubmitted = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initialize form
  initializeForm() {
    this.educationalDetailsForm = new FormGroup({
      instituteName: new FormControl('', [Validators.required]),
      passingYear: new FormControl('', [Validators.required]),
    });
  }

  // getter | personal details form
  get _educationalDetailsForm() {
    return this.educationalDetailsForm.controls;
  }

  // login method
  submitEducationalDetailsForm() {
    this.isFormSubmitted = true;
    if (this.educationalDetailsForm.valid) {
      this._submitEducationalDetails.emit(this.educationalDetailsForm.value);
    }
  }
}
