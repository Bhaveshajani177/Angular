import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from '../../../core/models/istudent';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],
})
export class StudentInfoComponent implements OnInit {
  @Input() studentList: IStudent[] = [];
  stidentInfo = {};
  studentDetails: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getStudentInfo(student: IStudent) {
    this.stidentInfo = student;
    this.studentDetails = true;
  }

  // delete student method
  deleteStudent(id: number) {
    this.studentList.splice(id, 1);
  }
}
