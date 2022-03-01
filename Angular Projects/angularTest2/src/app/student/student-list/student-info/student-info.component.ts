import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../../../core/models/istudent';

@Component({
  selector: 'tbody[app-student-info]',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],
})
export class StudentInfoComponent implements OnInit {
  // @Input() studentList: IStudent[] = [];
  @Input() studentList!: IStudent;
  @Input() studentId!: number;

  @Output() getStudentDetails: EventEmitter<IStudent> = new EventEmitter();
  @Output() getStudentId: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.studentList);
  }

  // get student details
  getStudentInfo(student: IStudent) {
    this.getStudentDetails.emit(student);
  }

  // delete student method
  deleteStudent(id: number) {
    // this.studentList.splice(id, 1);
    this.getStudentId.emit(id);
  }
}
