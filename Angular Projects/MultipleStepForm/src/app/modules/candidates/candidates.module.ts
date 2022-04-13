import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidatesRoutingModule } from './candidates-routing.module';

import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';
import { CandidatesMainComponent } from './candidates-main/candidates-main.component';

// material
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PersonalDetailsComponent,
    EducationalDetailsComponent,
    CandidatesMainComponent,
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class CandidatesModule {}
