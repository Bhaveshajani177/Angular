import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditTeacherComponent } from './add-edit-teacher/add-edit-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';
import { TeacherMainComponent } from './teacher-main/teacher-main.component';



@NgModule({
  declarations: [
    AddEditTeacherComponent,
    ListTeacherComponent,
    TeacherMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
