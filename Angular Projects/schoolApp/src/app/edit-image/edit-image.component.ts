import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css'],
})
export class EditImageComponent implements OnInit {
  editImageForm!: FormGroup;
  isFormSubmitted = false;
  inSubmission = false;

  constructor() {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.editImageForm = new FormGroup({
      title: new FormControl(['', Validators.minLength(3)]),
    });
  }

  editImage() {
    this.isFormSubmitted = true;
    this.inSubmission = true;
  }
}
