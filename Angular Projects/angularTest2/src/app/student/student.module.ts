import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// components
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentInfoComponent } from './student-list/student-info/student-info.component';

// pipes
import { GenderTitlePipe } from '../core/pipes/gender-title.pipe';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentInfoComponent,
    GenderTitlePipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    StudentListComponent,
    StudentDetailsComponent,
    StudentInfoComponent,
  ],
})
export class StudentModule {}
