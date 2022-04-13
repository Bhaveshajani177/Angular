import { Component, OnInit, ViewChild } from '@angular/core';
import { IPersonalDetails } from '../../../shared/models/ipersonal-details';
import { IEducationalDetails } from '../../../shared/models/ieducational-details';
import { MatStepper } from '@angular/material/stepper';
import { take } from 'rxjs';

@Component({
  selector: 'app-candidates-main',
  templateUrl: './candidates-main.component.html',
  styleUrls: ['./candidates-main.component.css'],
})
export class CandidatesMainComponent implements OnInit {
  @ViewChild('stepper', { static: false }) stepper!: MatStepper;

  _isCompleted = false;
  candidateFormData: any = [];

  personalDetails!: IPersonalDetails;
  educationalDetails!: IEducationalDetails;

  constructor() {}

  ngOnInit(): void {}

  savePersonalDetails(event: IPersonalDetails) {
    this._isCompleted = true;
    this.stepper.selectionChange.pipe(take(1)).subscribe((res) => {
      this.candidateFormData.push({ personalDetails: event });
    });
  }

  saveEducationalDetails(event: IEducationalDetails) {
    this.candidateFormData.push(event);
    this.educationalDetails = event;
    console.log(this.candidateFormData);
  }
}
