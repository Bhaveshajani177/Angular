import { Component, OnInit } from '@angular/core';
import { IStudent } from '../core/models/istudent';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css'],
})
export class StudentMainComponent implements OnInit {
  studentInfo!: IStudent;
  studentDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // get student details
  getStudentDetails(student: IStudent) {
    this.studentInfo = student;
    this.studentDetails = true;
  }
}
