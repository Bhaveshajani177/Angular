import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentMainComponent } from './student-main/student-main.component';



@NgModule({
  declarations: [
    AddEditStudentComponent,
    ListStudentComponent,
    StudentMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
